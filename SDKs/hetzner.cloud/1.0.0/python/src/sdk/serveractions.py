import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ServerActions:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_servers_id_actions(self, request: operations.GetServersIDActionsRequest) -> operations.GetServersIDActionsResponse:
        r"""Get all Actions for a Server
        Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServersIDActionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServersIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    def get_servers_id_actions_action_id_(self, request: operations.GetServersIDActionsActionIDRequest) -> operations.GetServersIDActionsActionIDResponse:
        r"""Get an Action for a Server
        Returns a specific Action object for a Server.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/{action_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServersIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServersIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_add_to_placement_group(self, request: operations.PostServersIDActionsAddToPlacementGroupRequest) -> operations.PostServersIDActionsAddToPlacementGroupResponse:
        r"""Add a Server to a Placement Group
        Adds a Server to a Placement Group.
        
        Server must be powered off for this command to succeed.
        
        #### Call specific error codes
        
        | Code                          | Description                                                          |
        |-------------------------------|----------------------------------------------------------------------|
        | `server_not_stopped`          | The action requires a stopped server                                 |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/add_to_placement_group", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsAddToPlacementGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsAddToPlacementGroupActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_attach_iso(self, request: operations.PostServersIDActionsAttachIsoRequest) -> operations.PostServersIDActionsAttachIsoResponse:
        r"""Attach an ISO to a Server
        Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.
        
        Servers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/attach_iso", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsAttachIsoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsAttachIsoActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_attach_to_network(self, request: operations.PostServersIDActionsAttachToNetworkRequest) -> operations.PostServersIDActionsAttachToNetworkResponse:
        r"""Attach a Server to a Network
        Attaches a Server to a network. This will complement the fixed public Server interface by adding an additional ethernet interface to the Server which is connected to the specified network.
        
        The Server will get an IP auto assigned from a subnet of type `server` in the same `network_zone`.
        
        Using the `alias_ips` attribute you can also define one or more additional IPs to the Servers. Please note that you will have to configure these IPs by hand on your Server since only the primary IP will be given out by DHCP.
        
        **Call specific error codes**
        
        | Code                             | Description                                                           |
        |----------------------------------|-----------------------------------------------------------------------|
        | `server_already_attached`        | The server is already attached to the network                         |
        | `ip_not_available`               | The provided Network IP is not available                              |
        | `no_subnet_available`            | No Subnet or IP is available for the Server within the network        |
        | `networks_overlap`               | The network IP range overlaps with one of the server networks         |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/attach_to_network", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsAttachToNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsAttachToNetworkActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_change_alias_ips(self, request: operations.PostServersIDActionsChangeAliasIpsRequest) -> operations.PostServersIDActionsChangeAliasIpsResponse:
        r"""Change alias IPs of a Network
        Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be replaced with these provided in the request body. So if you want to add an alias IP, you have to provide the existing ones from the Network plus the new alias IP in the request body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/change_alias_ips", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsChangeAliasIpsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsChangeAliasIpsActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_change_dns_ptr(self, request: operations.PostServersIDActionsChangeDNSPtrRequest) -> operations.PostServersIDActionsChangeDNSPtrResponse:
        r"""Change reverse DNS entry for this Server
        Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Server.
        
        Floating IPs assigned to the Server are not affected by this.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/change_dns_ptr", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsChangeDNSPtrResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsChangeDNSPtrActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_change_protection(self, request: operations.PostServersIDActionsChangeProtectionRequest) -> operations.PostServersIDActionsChangeProtectionResponse:
        r"""Change Server Protection
        Changes the protection configuration of the Server.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/change_protection", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsChangeProtectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsChangeProtectionActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_change_type(self, request: operations.PostServersIDActionsChangeTypeRequest) -> operations.PostServersIDActionsChangeTypeResponse:
        r"""Change the Type of a Server
        Changes the type (Cores, RAM and disk sizes) of a Server.
        
        Server must be powered off for this command to succeed.
        
        This copies the content of its disk, and starts it again.
        
        You can only migrate to Server types with the same `storage_type` and equal or bigger disks. Shrinking disks is not possible as it might destroy data.
        
        If the disk gets upgraded, the Server type can not be downgraded any more. If you plan to downgrade the Server type, set `upgrade_disk` to `false`.
        
        #### Call specific error codes
        
        | Code                          | Description                                                          |
        |-------------------------------|----------------------------------------------------------------------|
        | `invalid_server_type`         | The server type does not fit for the given server or is deprecated   |
        | `server_not_stopped`          | The action requires a stopped server                                 |
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/change_type", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsChangeTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsChangeTypeActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_create_image(self, request: operations.PostServersIDActionsCreateImageRequest) -> operations.PostServersIDActionsCreateImageResponse:
        r"""Create Image from a Server
        Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.
        
        To make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.
        
        You can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create an `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/create_image", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsCreateImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsCreateImage201ApplicationJSON])
                res.post_servers_id_actions_create_image_201_application_json_object = out

        return res

    
    def post_servers_id_actions_detach_from_network(self, request: operations.PostServersIDActionsDetachFromNetworkRequest) -> operations.PostServersIDActionsDetachFromNetworkResponse:
        r"""Detach a Server from a Network
        Detaches a Server from a network. The interface for this network will vanish.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/detach_from_network", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsDetachFromNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsDetachFromNetworkActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_detach_iso(self, request: operations.PostServersIDActionsDetachIsoRequest) -> operations.PostServersIDActionsDetachIsoResponse:
        r"""Detach an ISO from a Server
        Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/detach_iso", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsDetachIsoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsDetachIsoActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_disable_backup(self, request: operations.PostServersIDActionsDisableBackupRequest) -> operations.PostServersIDActionsDisableBackupResponse:
        r"""Disable Backups for a Server
        Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backups will be made.
        
        Caution: This immediately removes all existing backups for the Server!
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/disable_backup", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsDisableBackupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsDisableBackupActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_disable_rescue(self, request: operations.PostServersIDActionsDisableRescueRequest) -> operations.PostServersIDActionsDisableRescueResponse:
        r"""Disable Rescue Mode for a Server
        Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.
        
        Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
        
        Disabling rescue mode will not reboot your Server — you will have to do this yourself.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/disable_rescue", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsDisableRescueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsDisableRescueActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_enable_backup(self, request: operations.PostServersIDActionsEnableBackupRequest) -> operations.PostServersIDActionsEnableBackupResponse:
        r"""Enable and Configure Backups for a Server
        Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.
        
        Backups are automatically created daily.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/enable_backup", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsEnableBackupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsEnableBackupActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_enable_rescue(self, request: operations.PostServersIDActionsEnableRescueRequest) -> operations.PostServersIDActionsEnableRescueResponse:
        r"""Enable Rescue Mode for a Server
        Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a special minimal Linux distribution designed for repair and reinstall.
        
        In case a Server cannot boot on its own you can use this to access a Server’s disks.
        
        Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
        
        Enabling rescue mode will not [reboot](https://docs.hetzner.cloud/#server-actions-soft-reboot-a-server) your Server — you will have to do this yourself.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/enable_rescue", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsEnableRescueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsEnableRescue201ApplicationJSON])
                res.post_servers_id_actions_enable_rescue_201_application_json_object = out

        return res

    
    def post_servers_id_actions_poweroff(self, request: operations.PostServersIDActionsPoweroffRequest) -> operations.PostServersIDActionsPoweroffResponse:
        r"""Power off a Server
        Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/poweroff", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsPoweroffResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsPoweroffActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_poweron(self, request: operations.PostServersIDActionsPoweronRequest) -> operations.PostServersIDActionsPoweronResponse:
        r"""Power on a Server
        Starts a Server by turning its power on.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/poweron", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsPoweronResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsPoweronActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_reboot(self, request: operations.PostServersIDActionsRebootRequest) -> operations.PostServersIDActionsRebootResponse:
        r"""Soft-reboot a Server
        Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/reboot", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsRebootResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsRebootActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_rebuild(self, request: operations.PostServersIDActionsRebuildRequest) -> operations.PostServersIDActionsRebuildResponse:
        r"""Rebuild a Server from an Image
        Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server
        
        The Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.
        
        Your Server will automatically be powered off before the rebuild command executes.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/rebuild", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsRebuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsRebuild201ApplicationJSON])
                res.post_servers_id_actions_rebuild_201_application_json_object = out

        return res

    
    def post_servers_id_actions_remove_from_placement_group(self, request: operations.PostServersIDActionsRemoveFromPlacementGroupRequest) -> operations.PostServersIDActionsRemoveFromPlacementGroupResponse:
        r"""Remove from Placement Group
        Removes a Server from a Placement Group.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/remove_from_placement_group", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsRemoveFromPlacementGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsRemoveFromPlacementGroupActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_request_console(self, request: operations.PostServersIDActionsRequestConsoleRequest) -> operations.PostServersIDActionsRequestConsoleResponse:
        r"""Request Console for a Server
        Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided URL is valid for 1 minute, after this period a new url needs to be created to connect to the Server. How long the connection is open after the initial connect is not subject to this timeout.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/request_console", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsRequestConsoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsRequestConsole201ApplicationJSON])
                res.post_servers_id_actions_request_console_201_application_json_object = out

        return res

    
    def post_servers_id_actions_reset(self, request: operations.PostServersIDActionsResetRequest) -> operations.PostServersIDActionsResetResponse:
        r"""Reset a Server
        Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/reset", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsResetActionResponse])
                res.action_response = out

        return res

    
    def post_servers_id_actions_reset_password(self, request: operations.PostServersIDActionsResetPasswordRequest) -> operations.PostServersIDActionsResetPasswordResponse:
        r"""Reset root Password of a Server
        Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (state `on`) in order for this operation to succeed.
        
        This will generate a new password for this Server and return it.
        
        If this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/reset_password", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsResetPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsResetPassword201ApplicationJSON])
                res.post_servers_id_actions_reset_password_201_application_json_object = out

        return res

    
    def post_servers_id_actions_shutdown(self, request: operations.PostServersIDActionsShutdownRequest) -> operations.PostServersIDActionsShutdownResponse:
        r"""Shutdown a Server
        Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI and react to the request, otherwise the Server will not shut down.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/actions/shutdown", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsShutdownResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsShutdownActionResponse])
                res.action_response = out

        return res

    