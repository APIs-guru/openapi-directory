

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def get_nodebalancers_node_balancer_id_stats(self, request: operations.GetNodebalancersNodeBalancerIDStatsRequest) -> operations.GetNodebalancersNodeBalancerIDStatsResponse:
        r"""NodeBalancer Statistics View
        Returns detailed statistics about the requested NodeBalancer.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/stats", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodebalancersNodeBalancerIDStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NodeBalancerStats])
                res.node_balancer_stats = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNodebalancersNodeBalancerIDStatsDefaultApplicationJSON])
                res.get_nodebalancers_node_balancer_id_stats_default_application_json_object = out

        return res

    
    def post_images_upload(self, request: operations.PostImagesUploadRequest) -> operations.PostImagesUploadResponse:
        r"""Image Upload
        Initiates an Image upload.
        
        This endpoint creates a new private Image object and returns it along
        with the URL to which image data can be uploaded.
        
        - Image data must be uploaded within 24 hours of creation or the
        upload will be cancelled and the image deleted.
        
        - Image uploads should be made as an HTTP PUT request to the URL returned in the `upload_to`
        response parameter, with a `Content-type: application/octet-stream` header included in the
        request. For example:
        
              curl -v \
                -H \"Content-Type: application/octet-stream\" \
                --upload-file example.img.gz \
                $UPLOAD_URL \
                --progress-bar \
                --output /dev/null
        
        - Uploaded image data should be compressed in gzip (`.gz`) format. The uncompressed disk should be in raw
        disk image (`.img`) format. A maximum compressed file size of 5GB is supported for upload at this time.
        
        """
        
        base_url = operations.POST_IMAGES_UPLOAD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/images/upload"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostImagesUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostImagesUpload200ApplicationJSON])
                res.post_images_upload_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostImagesUploadDefaultApplicationJSON])
                res.post_images_upload_default_application_json_object = out

        return res

    
    def accept_entity_transfer(self, request: operations.AcceptEntityTransferRequest) -> operations.AcceptEntityTransferResponse:
        r"""Entity Transfer Accept
        **DEPRECATED**. Please use [Service Transfer Accept](/docs/api/account/#service-transfer-accept).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/entity-transfers/{token}/accept", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AcceptEntityTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.accept_entity_transfer_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AcceptEntityTransferDefaultApplicationJSON])
                res.accept_entity_transfer_default_application_json_object = out

        return res

    
    def accept_service_transfer(self, request: operations.AcceptServiceTransferRequest) -> operations.AcceptServiceTransferResponse:
        r"""Service Transfer Accept
        Accept a Service Transfer for the provided token to receive the services included in the transfer to your
        account. At this time, only Linodes can be transferred.
        
        When accepted, email confirmations are sent to the accounts that created and accepted the transfer. A transfer
        can take up to three hours to complete once accepted. Once a transfer is completed, billing for transferred
        services ends for the sending account and begins for the receiving account.
        
        This command can only be accessed by the unrestricted users of the account that receives the transfer. Users
        of the same account that created a transfer cannot accept the transfer.
        
        There are several conditions that must be met in order to accept a transfer request:
        
        1. Only transfers with a `pending` status can be accepted.
        
        1. The account accepting the transfer must have a registered payment method and must not have a past due
          balance or other account limitations for the services to be transferred.
        
        1. Both the account that created the transfer and the account that is accepting the transfer must not have any
        active Terms of Service violations.
        
        1. The service must still be owned by the account that created the transfer.
        
        1. Linodes must not:
        
            * be assigned to a NodeBalancer, Firewall, VLAN, or Managed Service.
        
            * have any attached Block Storage Volumes.
        
            * have any shared IP addresses.
        
            * have any assigned /56, /64, or /116 IPv6 ranges.
        
        Any and all of the above conditions must be cured and maintained by the relevant account prior to the
        transfer's expiration to allow the transfer to be accepted by the receiving account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/service-transfers/{token}/accept", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AcceptServiceTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.accept_service_transfer_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AcceptServiceTransferDefaultApplicationJSON])
                res.accept_service_transfer_default_application_json_object = out

        return res

    
    def add_linode_config(self, request: operations.AddLinodeConfigRequest) -> operations.AddLinodeConfigResponse:
        r"""Configuration Profile Create
        Adds a new Configuration profile to a Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/configs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddLinodeConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinodeConfig])
                res.linode_config = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddLinodeConfigDefaultApplicationJSON])
                res.add_linode_config_default_application_json_object = out

        return res

    
    def add_linode_disk(self, request: operations.AddLinodeDiskRequest) -> operations.AddLinodeDiskResponse:
        r"""Disk Create
        Adds a new Disk to a Linode. You can optionally create a Disk
        from an Image (see [/images](/docs/api/images/#images-list) for a list of available public images,
        or use one of your own), and optionally provide a StackScript to deploy
        with this Disk.
        
        The default filesystem for new Disks is `ext4`. If creating a Disk from an Image, the filesystem
        of the Image is used unless otherwise specified.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddLinodeDiskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Disk])
                res.disk = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddLinodeDiskDefaultApplicationJSON])
                res.add_linode_disk_default_application_json_object = out

        return res

    
    def add_linode_ip(self, request: operations.AddLinodeIPRequest) -> operations.AddLinodeIPResponse:
        r"""IPv4 Address Allocate
        Allocates a public or private IPv4 address to a Linode. Public IP Addresses, after the one included with each Linode, incur an additional monthly charge. If you need an additional public IP Address you must request one - please [open a support ticket](/docs/api/support/#support-ticket-open). You may not add more than one private IPv4 address to a single Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/ips", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddLinodeIPResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddLinodeIPDefaultApplicationJSON])
                res.add_linode_ip_default_application_json_object = out

        return res

    
    def add_ssh_key(self, request: operations.AddSSHKeyRequest) -> operations.AddSSHKeyResponse:
        r"""SSH Key Add
        Adds an SSH Key to your Account profile.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile/sshkeys"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SSHKey])
                res.ssh_key = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddSSHKeyDefaultApplicationJSON])
                res.add_ssh_key_default_application_json_object = out

        return res

    
    def add_stack_script(self, request: operations.AddStackScriptRequest) -> operations.AddStackScriptResponse:
        r"""StackScript Create
        Creates a StackScript in your Account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/linode/stackscripts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddStackScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StackScript])
                res.stack_script = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddStackScriptDefaultApplicationJSON])
                res.add_stack_script_default_application_json_object = out

        return res

    
    def allocate_ip(self, request: operations.AllocateIPRequest) -> operations.AllocateIPResponse:
        r"""IP Address Allocate
        Allocates a new IPv4 Address on your Account. The Linode must be configured to support additional addresses - please [open a support ticket](/docs/api/support/#support-ticket-open) requesting additional addresses before attempting allocation.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/networking/ips"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AllocateIPResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AllocateIPDefaultApplicationJSON])
                res.allocate_ip_default_application_json_object = out

        return res

    
    def assign_i_ps(self, request: operations.AssignIPsRequest) -> operations.AssignIPsResponse:
        r"""Linodes Assign IPs
        Assign multiple IPs to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPv4 Addresses to your Linodes.  When the assignment is finished, all Linodes must end up with at least one public IPv4 and no more than one private IPv4.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/networking/ipv4/assign"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AssignIPsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.assign_i_ps_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AssignIPsDefaultApplicationJSON])
                res.assign_i_ps_default_application_json_object = out

        return res

    
    def attach_volume(self, request: operations.AttachVolumeRequest) -> operations.AttachVolumeResponse:
        r"""Volume Attach
        Attaches a Volume on your Account to an existing Linode on your Account. In order for this request to complete successfully, your User must have `read_only` or `read_write` permission to the Volume and `read_write` permission to the Linode. Additionally, the Volume and Linode must be located in the same Region.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{volumeId}/attach", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AttachVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volume])
                res.volume = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AttachVolumeDefaultApplicationJSON])
                res.attach_volume_default_application_json_object = out

        return res

    
    def boot_linode_instance(self, request: operations.BootLinodeInstanceRequest) -> operations.BootLinodeInstanceResponse:
        r"""Linode Boot
        Boots a Linode you have permission to modify. If no parameters are given, a Config profile
        will be chosen for this boot based on the following criteria:
        
        * If there is only one Config profile for this Linode, it will be used.
        * If there is more than one Config profile, the last booted config will be used.
        * If there is more than one Config profile and none were the last to be booted (because the
          Linode was never booted or the last booted config was deleted) an error will be returned.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/boot", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BootLinodeInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.boot_linode_instance_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.BootLinodeInstanceDefaultApplicationJSON])
                res.boot_linode_instance_default_application_json_object = out

        return res

    
    def cancel_account(self, request: operations.CancelAccountRequest) -> operations.CancelAccountResponse:
        r"""Account Cancel
        Cancels an active Linode account. This action will cause Linode to attempt to charge the credit card on file for the remaining balance. An error will occur if Linode fails to charge the credit card on file. Restricted users will not be able to cancel an account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/cancel"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CancelAccount200ApplicationJSON])
                res.cancel_account_200_application_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CancelAccount409ApplicationJSON])
                res.cancel_account_409_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CancelAccountDefaultApplicationJSON])
                res.cancel_account_default_application_json_object = out

        return res

    
    def cancel_backups(self, request: operations.CancelBackupsRequest) -> operations.CancelBackupsResponse:
        r"""Backups Cancel
        Cancels the Backup service on the given Linode. Deletes all of this Linode's existing backups forever.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/backups/cancel", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelBackupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cancel_backups_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CancelBackupsDefaultApplicationJSON])
                res.cancel_backups_default_application_json_object = out

        return res

    
    def cancel_object_storage(self, request: operations.CancelObjectStorageRequest) -> operations.CancelObjectStorageResponse:
        r"""Object Storage Cancel
        Cancel Object Storage on an Account. All buckets on the Account must be empty
        before Object Storage can be cancelled:
        
        - To delete a smaller number of objects, review the instructions in our
        [How to Use Object Storage](/docs/platform/object-storage/how-to-use-object-storage/)
        guide.
        - To delete large amounts of objects, consult our guide on
        [Lifecycle Policies](/docs/platform/object-storage/lifecycle-policies/).
        
        """
        
        base_url = operations.CANCEL_OBJECT_STORAGE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/object-storage/cancel"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelObjectStorageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.cancel_object_storage_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CancelObjectStorageDefaultApplicationJSON])
                res.cancel_object_storage_default_application_json_object = out

        return res

    
    def clone_domain(self, request: operations.CloneDomainRequest) -> operations.CloneDomainResponse:
        r"""Domain Clone
        Clones a Domain and all associated DNS records from a Domain that is registered in Linode's DNS manager.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainId}/clone", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloneDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Domain])
                res.domain = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CloneDomainDefaultApplicationJSON])
                res.clone_domain_default_application_json_object = out

        return res

    
    def clone_linode_disk(self, request: operations.CloneLinodeDiskRequest) -> operations.CloneLinodeDiskResponse:
        r"""Disk Clone
        Copies a disk, byte-for-byte, into a new Disk belonging to the same Linode. The Linode must have enough storage space available to accept a new Disk of the same size as this one or this operation will fail.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks/{diskId}/clone", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CloneLinodeDiskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Disk])
                res.disk = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CloneLinodeDiskDefaultApplicationJSON])
                res.clone_linode_disk_default_application_json_object = out

        return res

    
    def clone_linode_instance(self, request: operations.CloneLinodeInstanceRequest) -> operations.CloneLinodeInstanceResponse:
        r"""Linode Clone
        You can clone your Linode's existing Disks or Configuration profiles to
        another Linode on your Account. In order for this request to complete
        successfully, your User must have the `add_linodes` grant. Cloning to a
        new Linode will incur a charge on your Account.
        
        If cloning to an existing Linode, any actions currently running or
        queued must be completed first before you can clone to it.
        
        Up to five clone operations from any given source Linode can be run concurrently.
        If more concurrent clones are attempted, an HTTP 400 error will be
        returned by this endpoint.
        
        Any [tags](/docs/api/tags/#tags-list) existing on the source Linode will be cloned to the target Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/clone", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloneLinodeInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Linode])
                res.linode = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CloneLinodeInstanceDefaultApplicationJSON])
                res.clone_linode_instance_default_application_json_object = out

        return res

    
    def clone_volume(self, request: operations.CloneVolumeRequest) -> operations.CloneVolumeResponse:
        r"""Volume Clone
        Creates a Volume on your Account. In order for this request to complete successfully, your User must have the `add_volumes` grant. The new Volume will have the same size and data as the source Volume. Creating a new Volume will incur a charge on your Account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{volumeId}/clone", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloneVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volume])
                res.volume = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CloneVolumeDefaultApplicationJSON])
                res.clone_volume_default_application_json_object = out

        return res

    
    def close_ticket(self, request: operations.CloseTicketRequest) -> operations.CloseTicketResponse:
        r"""Support Ticket Close
        Closes a Support Ticket you have access to modify.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/support/tickets/{ticketId}/close", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CloseTicketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.close_ticket_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CloseTicketDefaultApplicationJSON])
                res.close_ticket_default_application_json_object = out

        return res

    
    def create_client(self, request: operations.CreateClientRequest) -> operations.CreateClientResponse:
        r"""OAuth Client Create
        Creates an OAuth Client, which can be used to allow users (using their Linode account) to log in to your own application, and optionally grant your application some amount of access to their Linodes or other entities.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/oauth-clients"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OAuthClient])
                res.o_auth_client = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateClientDefaultApplicationJSON])
                res.create_client_default_application_json_object = out

        return res

    
    def create_credit_card(self, request: operations.CreateCreditCardRequest) -> operations.CreateCreditCardResponse:
        r"""Credit Card Add/Edit
        **DEPRECATED**. Please use Payment Method Add ([POST /account/payment-methods](/docs/api/account/#payment-method-add)).
        
        Adds a credit card Payment Method to your account and sets it as the default method.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/credit-card"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCreditCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_credit_card_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateCreditCardDefaultApplicationJSON])
                res.create_credit_card_default_application_json_object = out

        return res

    
    def create_domain(self, request: operations.CreateDomainRequest) -> operations.CreateDomainResponse:
        r"""Domain Create
        Adds a new Domain to Linode's DNS Manager. Linode is not a registrar, and you must own the domain before adding it here. Be sure to point your registrar to Linode's nameservers so that the records hosted here are used.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Domain])
                res.domain = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDomainDefaultApplicationJSON])
                res.create_domain_default_application_json_object = out

        return res

    
    def create_domain_record(self, request: operations.CreateDomainRecordRequest) -> operations.CreateDomainRecordResponse:
        r"""Domain Record Create
        Adds a new Domain Record to the zonefile this Domain represents.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainId}/records", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDomainRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DomainRecord])
                res.domain_record = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateDomainRecordDefaultApplicationJSON])
                res.create_domain_record_default_application_json_object = out

        return res

    
    def create_entity_transfer(self, request: operations.CreateEntityTransferRequest) -> operations.CreateEntityTransferResponse:
        r"""Entity Transfer Create
        **DEPRECATED**. Please use [Service Transfer Create](/docs/api/account/#service-transfer-create).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/entity-transfers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEntityTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityTransfer])
                res.entity_transfer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateEntityTransferDefaultApplicationJSON])
                res.create_entity_transfer_default_application_json_object = out

        return res

    
    def create_firewall_device(self, request: operations.CreateFirewallDeviceRequest) -> operations.CreateFirewallDeviceResponse:
        r"""Firewall Device Create
        Creates a Firewall Device, which assigns a Firewall to a Linode service (referred to
        as the Device's `entity`). Currently, only Devices with an entity of type `linode` are accepted.
        A Firewall can be assigned a single Linode service at a time. Additional disabled Firewalls can be
        assigned to a service, but they cannot be enabled if another active Firewall
        is already assigned to the same service.
        
        Creating a Firewall Device will apply the Rules from a Firewall to a Linode service.
        A `firewall_device_add` Event is generated when the Firewall Device is added successfully.
        
        **Note:** When a Firewall is assigned to a Linode and you attempt
        to [migrate the Linode to a data center](/docs/api/linode-instances/#dc-migrationpending-host-migration-initiate) that does not support Cloud Firewalls, the migration will fail.
        Use the [List Regions](/docs/api/regions/#regions-list) endpoint to view a list of a data center's capabilities.
        
        Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
        
        """
        
        base_url = operations.CREATE_FIREWALL_DEVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}/devices", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFirewallDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirewallDevices])
                res.firewall_devices = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateFirewallDeviceDefaultApplicationJSON])
                res.create_firewall_device_default_application_json_object = out

        return res

    
    def create_firewalls(self, request: operations.CreateFirewallsRequest) -> operations.CreateFirewallsResponse:
        r"""Firewall Create
        Creates a Firewall to filter network traffic. Use the `rules` property to
        create inbound and outbound access rules. Use the `devices` property to assign the
        Firewall to a service. Currently, Firewalls can only be assigned to Linode
        instances.
        
        A Firewall can be assigned to multiple Linode instances at a time.
        
        A Linode instance can have one active, assigned Firewall at a time.
        Additional disabled Firewalls can still be added to a Linode instance.
        
        A `firewall_create` Event is generated when this endpoint returns successfully.
        
        Cloud Firewall is not fully available in every data center region. For the current list
        of locations with full availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list))
        endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
        Certain Regions have partial Firewall availability
        
        """
        
        base_url = operations.CREATE_FIREWALLS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/networking/firewalls"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFirewallsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Firewall])
                res.firewall = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateFirewallsDefaultApplicationJSON])
                res.create_firewalls_default_application_json_object = out

        return res

    
    def create_image(self, request: operations.CreateImageRequest) -> operations.CreateImageResponse:
        r"""Image Create
        Captures a private gold-master Image from a Linode Disk.
        
        **Pricing change:** Images will transition to a paid service with a
        cost of $0.10/GB per month for each manual Custom Image stored on an
        account. This change will be communicated to customers in advance.
        Recovery Images, which are generated automatically after a Linode is
        deleted and available for a finite period of time, are provided at no
        cost.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/images"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagePrivate])
                res.image_private = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateImageDefaultApplicationJSON])
                res.create_image_default_application_json_object = out

        return res

    
    def create_lke_cluster(self, request: operations.CreateLkeClusterRequest) -> operations.CreateLkeClusterResponse:
        r"""Kubernetes Cluster Create
        Creates a Kubernetes cluster. The Kubernetes cluster will be created
        asynchronously. You can use the events system to determine when the
        Kubernetes cluster is ready to use. Please note that it often takes 2-5 minutes before the
        [Kubernetes API server endpoint](/docs/api/linode-kubernetes-engine-lke/#kubernetes-api-endpoints-list) and
        the [Kubeconfig file](/docs/api/linode-kubernetes-engine-lke/#kubeconfig-view) for the new cluster
        are ready.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lke/clusters"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateLkeClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LkeCluster])
                res.lke_cluster = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateLkeClusterDefaultApplicationJSON])
                res.create_lke_cluster_default_application_json_object = out

        return res

    
    def create_linode_instance(self, request: operations.CreateLinodeInstanceRequest) -> operations.CreateLinodeInstanceResponse:
        r"""Linode Create
        Creates a Linode Instance on your Account. In order for this
        request to complete successfully, your User must have the `add_linodes` grant. Creating a
        new Linode will incur a charge on your Account.
        
        Linodes can be created using one of the available Types. See
        [GET /linode/types](/docs/api/linode-types/#types-list) to get more
        information about each Type's specs and cost.
        
        Linodes can be created in any one of our available
        [Regions](/docs/api/regions/#regions-list) for a list
        of available Regions you can deploy your Linode in.
        
        In an effort to fight spam, Linode restricts outbound connections on ports 25, 465, and 587
        on all Linodes for new accounts created after November 5th, 2019. For more information,
        see [Sending Email on Linode](/docs/email/running-a-mail-server/#sending-email-on-linode).
        
        Linodes can be created in a number of ways:
        
        * Using a Linode Linux Distribution image or an Image you created based on another Linode.
          * The Linode will be `running` after it completes `provisioning`.
          * A default config with two Disks, one being a 512 swap disk, is created.
            * `swap_size` can be used to customize the swap disk size.
          * Requires a `root_pass` be supplied to use for the root User's Account.
          * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
          * You may also supply a list of usernames via the `authorized_users` field.
            * These users must have an SSH Key associated with your Profile first. See [/profile/sshkeys](/docs/api/profile/#ssh-key-add) for more information.
        
        * Using a StackScript.
          * See [/linode/stackscripts](/docs/api/stackscripts/#stackscripts-list) for
            a list of available StackScripts.
          * The Linode will be `running` after it completes `provisioning`.
          * Requires a compatible Image to be supplied.
            * See [/linode/stackscript/{stackscriptId}](/docs/api/stackscripts/#stackscript-view) for compatible Images.
          * Requires a `root_pass` be supplied to use for the root User's Account.
          * It is recommended to supply SSH keys for the root User using the `authorized_keys` field.
          * You may also supply a list of usernames via the `authorized_users` field.
            * These users must have an SSH Key associated with your Profile first. See [/profile/sshkeys](/docs/api/profile/#ssh-key-add) for more information.
        
        * Using one of your other Linode's backups.
          * You must create a Linode large enough to accommodate the Backup's size.
          * The Disks and Config will match that of the Linode that was backed up.
          * The `root_pass` will match that of the Linode that was backed up.
        
        * Create an empty Linode.
          * The Linode will remain `offline` and must be manually started.
            * See [POST /linode/instances/{linodeId}/boot](/docs/api/linode-instances/#linode-boot).
          * Disks and Configs must be created manually.
          * This is only recommended for advanced use cases.
        
        
        **Important**: You must be an unrestricted User in order to add or modify
        tags on Linodes.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/linode/instances"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateLinodeInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Linode])
                res.linode = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateLinodeInstanceDefaultApplicationJSON])
                res.create_linode_instance_default_application_json_object = out

        return res

    
    def create_longview_client(self, request: operations.CreateLongviewClientRequest) -> operations.CreateLongviewClientResponse:
        r"""Longview Client Create
        Creates a Longview Client.  This Client will not begin monitoring the status of your server until you configure the Longview Client application on your Linode using the returning `install_code` and `api_key`.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/longview/clients"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateLongviewClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LongviewClient])
                res.longview_client = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateLongviewClientDefaultApplicationJSON])
                res.create_longview_client_default_application_json_object = out

        return res

    
    def create_managed_contact(self, request: operations.CreateManagedContactRequest) -> operations.CreateManagedContactResponse:
        r"""Managed Contact Create
        Creates a Managed Contact.  A Managed Contact is someone Linode special forces can contact in the course of attempting to resolve an issue with a Managed Service.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/managed/contacts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateManagedContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedContact])
                res.managed_contact = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateManagedContactDefaultApplicationJSON])
                res.create_managed_contact_default_application_json_object = out

        return res

    
    def create_managed_credential(self, request: operations.CreateManagedCredentialRequest) -> operations.CreateManagedCredentialResponse:
        r"""Managed Credential Create
        Creates a Managed Credential. A Managed Credential is stored securely to allow Linode special forces to access your Managed Services and resolve issues.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/managed/credentials"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateManagedCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedCredential])
                res.managed_credential = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateManagedCredentialDefaultApplicationJSON])
                res.create_managed_credential_default_application_json_object = out

        return res

    
    def create_managed_service(self, request: operations.CreateManagedServiceRequest) -> operations.CreateManagedServiceResponse:
        r"""Managed Service Create
        Creates a Managed Service. Linode Managed will begin monitoring this service and reporting and attempting to resolve any Issues.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/managed/services"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateManagedServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedService])
                res.managed_service = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateManagedServiceDefaultApplicationJSON])
                res.create_managed_service_default_application_json_object = out

        return res

    
    def create_node_balancer(self, request: operations.CreateNodeBalancerRequest) -> operations.CreateNodeBalancerResponse:
        r"""NodeBalancer Create
        Creates a NodeBalancer in the requested Region. This NodeBalancer will not start serving requests until it is configured.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/nodebalancers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNodeBalancerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NodeBalancer])
                res.node_balancer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateNodeBalancerDefaultApplicationJSON])
                res.create_node_balancer_default_application_json_object = out

        return res

    
    def create_node_balancer_config(self, request: operations.CreateNodeBalancerConfigRequest) -> operations.CreateNodeBalancerConfigResponse:
        r"""Config Create
        Creates a NodeBalancer Config, which allows the NodeBalancer to accept traffic on a new port. You will need to add NodeBalancer Nodes to the new Config before it can actually serve requests.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNodeBalancerConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NodeBalancerConfig])
                res.node_balancer_config = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateNodeBalancerConfigDefaultApplicationJSON])
                res.create_node_balancer_config_default_application_json_object = out

        return res

    
    def create_node_balancer_node(self, request: operations.CreateNodeBalancerNodeRequest) -> operations.CreateNodeBalancerNodeResponse:
        r"""Node Create
        Creates a NodeBalancer Node, a backend that can accept traffic for this NodeBalancer Config. Nodes are routed requests on the configured port based on their status.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNodeBalancerNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NodeBalancerNode])
                res.node_balancer_node = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateNodeBalancerNodeDefaultApplicationJSON])
                res.create_node_balancer_node_default_application_json_object = out

        return res

    
    def create_object_storage_bucket(self, request: operations.CreateObjectStorageBucketRequest) -> operations.CreateObjectStorageBucketResponse:
        r"""Object Storage Bucket Create
        Creates an Object Storage Bucket in the cluster specified. If the
        bucket already exists and is owned by you, this endpoint will return a
        `200` response with that bucket as if it had just been created.
        
        
        This endpoint is available for convenience. It is recommended that instead you
        use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket) directly.
        
        """
        
        base_url = operations.CREATE_OBJECT_STORAGE_BUCKET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/object-storage/buckets"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateObjectStorageBucketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectStorageBucket])
                res.object_storage_bucket = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateObjectStorageBucketDefaultApplicationJSON])
                res.create_object_storage_bucket_default_application_json_object = out

        return res

    
    def create_object_storage_keys(self, request: operations.CreateObjectStorageKeysRequest) -> operations.CreateObjectStorageKeysResponse:
        r"""Object Storage Key Create
        Provisions a new Object Storage Key on your account.
        
        * To create a Limited Access Key with specific permissions, send a `bucket_access`
        array.
        
        * To create a Limited Access Key without access to any buckets, send an empty
        `bucket_access` array.
        
        * To create an Access Key with unlimited access to all clusters and all buckets,
        omit the `bucket_access` array.
        
        """
        
        base_url = operations.CREATE_OBJECT_STORAGE_KEYS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/object-storage/keys"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateObjectStorageKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectStorageKey])
                res.object_storage_key = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateObjectStorageKeysDefaultApplicationJSON])
                res.create_object_storage_keys_default_application_json_object = out

        return res

    
    def create_object_storage_object_url(self, request: operations.CreateObjectStorageObjectURLRequest) -> operations.CreateObjectStorageObjectURLResponse:
        r"""Object Storage Object URL Create
        Creates a pre-signed URL to access a single Object in a bucket. This
        can be used to share objects, and also to create/delete objects by using
        the appropriate HTTP method in your request body's `method` parameter.
        
        
        This endpoint is available for convenience. It is recommended that instead you
        use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/)
        directly.
        
        """
        
        base_url = operations.CREATE_OBJECT_STORAGE_OBJECT_URL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/object-url", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateObjectStorageObjectURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.create_object_storage_object_url_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateObjectStorageObjectURLDefaultApplicationJSON])
                res.create_object_storage_object_url_default_application_json_object = out

        return res

    
    def create_object_storage_ssl(self, request: operations.CreateObjectStorageSslRequest) -> operations.CreateObjectStorageSslResponse:
        r"""Object Storage TLS/SSL Cert Upload
        Upload a TLS/SSL certificate and private key to be served when you visit your Object Storage bucket via HTTPS.
        Your TLS/SSL certificate and private key are stored encrypted at rest.
        
        
        To replace an expired certificate, [delete your current certificate](/docs/api/object-storage/#object-storage-tlsssl-cert-delete)
        and upload a new one.
        
        """
        
        base_url = operations.CREATE_OBJECT_STORAGE_SSL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/ssl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateObjectStorageSslResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectStorageSslResponse])
                res.object_storage_ssl_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateObjectStorageSslDefaultApplicationJSON])
                res.create_object_storage_ssl_default_application_json_object = out

        return res

    
    def create_pay_pal_payment(self, request: operations.CreatePayPalPaymentRequest) -> operations.CreatePayPalPaymentResponse:
        r"""PayPal Payment Stage
        This begins the process of submitting a Payment via PayPal. After calling this endpoint, you must take the resulting `payment_id` along with the `payer_id` from your PayPal account and [POST /account/payments/paypal-execute](/docs/api/account/#stagedapproved-paypal-payment-execute) to complete the Payment.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/payments/paypal"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePayPalPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePayPalPayment200ApplicationJSON])
                res.create_pay_pal_payment_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePayPalPaymentDefaultApplicationJSON])
                res.create_pay_pal_payment_default_application_json_object = out

        return res

    
    def create_payment(self, request: operations.CreatePaymentRequest) -> operations.CreatePaymentResponse:
        r"""Payment Make
        Makes a Payment to your Account via credit card. This will charge your credit card the requested amount.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/payments"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Payment])
                res.payment = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePaymentDefaultApplicationJSON])
                res.create_payment_default_application_json_object = out

        return res

    
    def create_payment_method(self, request: operations.CreatePaymentMethodRequest) -> operations.CreatePaymentMethodResponse:
        r"""Payment Method Add
        Adds a Payment Method to your Account with the option to set it as the default method.
        
        Prior to adding a Payment Method, ensure that your billing address information is up-to-date
        with a valid `zip` by using the Account Update ([PUT /account](/docs/api/account/#account-update)) endpoint.
        
        """
        
        base_url = operations.CREATE_PAYMENT_METHOD_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/account/payment-methods"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePaymentMethodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_payment_method_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePaymentMethodDefaultApplicationJSON])
                res.create_payment_method_default_application_json_object = out

        return res

    
    def create_personal_access_token(self, request: operations.CreatePersonalAccessTokenRequest) -> operations.CreatePersonalAccessTokenResponse:
        r"""Personal Access Token Create
        Creates a Personal Access Token for your User. The raw token will be returned in the response, but will never be returned again afterward so be sure to take note of it. You may create a token with _at most_ the scopes of your current token. The created token will be able to access your Account until the given expiry, or until it is revoked.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile/tokens"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePersonalAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalAccessToken])
                res.personal_access_token = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePersonalAccessTokenDefaultApplicationJSON])
                res.create_personal_access_token_default_application_json_object = out

        return res

    
    def create_promo_credit(self, request: operations.CreatePromoCreditRequest) -> operations.CreatePromoCreditResponse:
        r"""Promo Credit Add
        Adds an expiring Promo Credit to your account.
        
        The following restrictions apply:
        
        * Your account must be less than 90 days old.
        * There must not be an existing Promo Credit already on your account.
        * The requesting User must be unrestricted. Use the User Update
          ([PUT /account/users/{username}](/docs/api/account/#user-update)) to change a User's restricted status.
        * The `promo_code` must be valid and unexpired.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/promo-codes"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePromoCreditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Promotion])
                res.promotion = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreatePromoCreditDefaultApplicationJSON])
                res.create_promo_credit_default_application_json_object = out

        return res

    
    def create_service_transfer(self, request: operations.CreateServiceTransferRequest) -> operations.CreateServiceTransferResponse:
        r"""Service Transfer Create
        Creates a transfer request for the specified services. A request can contain any of the specified service types
        and any number of each service type. At this time, only Linodes can be transferred.
        
        When created successfully, a confirmation email is sent to the account that created this transfer containing a
        transfer token and instructions on completing the transfer.
        
        When a transfer is [accepted](/docs/api/account/#service-transfer-accept), the requested services are moved to
        the receiving account. Linode services will not experience interruptions due to the transfer process. Backups
        for Linodes are transferred as well.
        
        DNS records that are associated with requested services will not be transferred or updated. Please ensure that
        associated DNS records have been updated or communicated to the recipient prior to the transfer.
        
        A transfer can take up to three hours to complete once accepted. When a transfer is
        completed, billing for transferred services ends for the sending account and begins for the receiving account.
        
        This command can only be accessed by the unrestricted users of an account.
        
        There are several conditions that must be met in order to successfully create a transfer request:
        
        1. The account creating the transfer must not have a past due balance or active Terms of Service violation.
        
        1. The service must be owned by the account that is creating the transfer.
        
        1. The service must not be assigned to another Service Transfer that is pending or that has been accepted and is
        incomplete.
        
        1. Linodes must not:
        
            * be assigned to a NodeBalancer, Firewall, VLAN, or Managed Service.
        
            * have any attached Block Storage Volumes.
        
            * have any shared IP addresses.
        
            * have any assigned /56, /64, or /116 IPv6 ranges.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/service-transfers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateServiceTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceTransfer])
                res.service_transfer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateServiceTransferDefaultApplicationJSON])
                res.create_service_transfer_default_application_json_object = out

        return res

    
    def create_snapshot(self, request: operations.CreateSnapshotRequest) -> operations.CreateSnapshotResponse:
        r"""Snapshot Create
        Creates a snapshot Backup of a Linode.
        ** If you already have a snapshot of this Linode, this is a destructive action. The previous snapshot will be deleted.**
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/backups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Backup])
                res.backup = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateSnapshotDefaultApplicationJSON])
                res.create_snapshot_default_application_json_object = out

        return res

    
    def create_tag(self, request: operations.CreateTagRequest) -> operations.CreateTagResponse:
        r"""New Tag Create
        Creates a new Tag and optionally tags requested objects with it immediately.
        
        **Important**: You must be an unrestricted User in order to add or modify Tags.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tags"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateTagDefaultApplicationJSON])
                res.create_tag_default_application_json_object = out

        return res

    
    def create_ticket(self, request: operations.CreateTicketRequest) -> operations.CreateTicketResponse:
        r"""Support Ticket Open
        Open a Support Ticket.
        Only one of the ID attributes (`linode_id`, `domain_id`, etc.) can be set on a single Support Ticket.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/support/tickets"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTicketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupportTicket])
                res.support_ticket = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateTicketDefaultApplicationJSON])
                res.create_ticket_default_application_json_object = out

        return res

    
    def create_ticket_attachment(self, request: operations.CreateTicketAttachmentRequest) -> operations.CreateTicketAttachmentResponse:
        r"""Ticket Attachment Create
        Adds a file attachment to an existing Support Ticket on your Account. File attachments are used to assist our Support team in resolving your Ticket. Examples of attachments are screen shots and text files that provide additional information.
        Note: Accepted file extensions include: .gif, .jpg, .jpeg, .pjpg, .pjpeg, .tif, .tiff, .png, .pdf, or .txt.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/support/tickets/{ticketId}/attachments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTicketAttachmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_ticket_attachment_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateTicketAttachmentDefaultApplicationJSON])
                res.create_ticket_attachment_default_application_json_object = out

        return res

    
    def create_ticket_reply(self, request: operations.CreateTicketReplyRequest) -> operations.CreateTicketReplyResponse:
        r"""Reply Create
        Adds a reply to an existing Support Ticket.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/support/tickets/{ticketId}/replies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTicketReplyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupportTicketReply])
                res.support_ticket_reply = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateTicketReplyDefaultApplicationJSON])
                res.create_ticket_reply_default_application_json_object = out

        return res

    
    def create_user(self, request: operations.CreateUserRequest) -> operations.CreateUserResponse:
        r"""User Create
        Creates a User on your Account. Once created, a confirmation message containing password creation and login instructions is sent to the User's email address.
        
        The User's account access is determined by whether or not they are restricted, and what grants they have been given.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/users"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateUserDefaultApplicationJSON])
                res.create_user_default_application_json_object = out

        return res

    
    def create_volume(self, request: operations.CreateVolumeRequest) -> operations.CreateVolumeResponse:
        r"""Volume Create
        Creates a Volume on your Account. In order for this to complete successfully, your User must have the `add_volumes` grant. Creating a new Volume will start accruing additional charges on your account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/volumes"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volume])
                res.volume = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateVolumeDefaultApplicationJSON])
                res.create_volume_default_application_json_object = out

        return res

    
    def delete_client(self, request: operations.DeleteClientRequest) -> operations.DeleteClientResponse:
        r"""OAuth Client Delete
        Deletes an OAuth Client registered with Linode. The Client ID and Client secret will no longer be accepted by <a target=\"_top\" href=\"https://login.linode.com\">https://login.linode.com</a>, and all tokens issued to this client will be invalidated (meaning that if your application was using a token, it will no longer work).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/oauth-clients/{clientId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_client_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteClientDefaultApplicationJSON])
                res.delete_client_default_application_json_object = out

        return res

    
    def delete_disk(self, request: operations.DeleteDiskRequest) -> operations.DeleteDiskResponse:
        r"""Disk Delete
        Deletes a Disk you have permission to `read_write`.
        
        **Deleting a Disk is a destructive action and cannot be undone.**
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks/{diskId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDiskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_disk_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDiskDefaultApplicationJSON])
                res.delete_disk_default_application_json_object = out

        return res

    
    def delete_domain(self, request: operations.DeleteDomainRequest) -> operations.DeleteDomainResponse:
        r"""Domain Delete
        Deletes a Domain from Linode's DNS Manager. The Domain will be removed from Linode's nameservers shortly after this operation completes. This also deletes all associated Domain Records.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_domain_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDomainDefaultApplicationJSON])
                res.delete_domain_default_application_json_object = out

        return res

    
    def delete_domain_record(self, request: operations.DeleteDomainRecordRequest) -> operations.DeleteDomainRecordResponse:
        r"""Domain Record Delete
        Deletes a Record on this Domain.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainId}/records/{recordId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDomainRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_domain_record_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteDomainRecordDefaultApplicationJSON])
                res.delete_domain_record_default_application_json_object = out

        return res

    
    def delete_entity_transfer(self, request: operations.DeleteEntityTransferRequest) -> operations.DeleteEntityTransferResponse:
        r"""Entity Transfer Cancel
        **DEPRECATED**. Please use [Service Transfer Cancel](/docs/api/account/#service-transfer-cancel).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/entity-transfers/{token}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEntityTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_entity_transfer_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteEntityTransferDefaultApplicationJSON])
                res.delete_entity_transfer_default_application_json_object = out

        return res

    
    def delete_firewall(self, request: operations.DeleteFirewallRequest) -> operations.DeleteFirewallResponse:
        r"""Firewall Delete
        Delete a Firewall resource by its ID. This will remove all of the Firewall's Rules
        from any Linode services that the Firewall was assigned to.
        
        A `firewall_delete` Event is generated when this endpoint returns successfully.
        
        Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
        
        """
        
        base_url = operations.DELETE_FIREWALL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_firewall_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteFirewallDefaultApplicationJSON])
                res.delete_firewall_default_application_json_object = out

        return res

    
    def delete_firewall_device(self, request: operations.DeleteFirewallDeviceRequest) -> operations.DeleteFirewallDeviceResponse:
        r"""Firewall Device Delete
        Removes a Firewall Device, which removes a Firewall from the Linode service it was
        assigned to by the Device. This will remove all of the Firewall's Rules from the Linode
        service. If any other Firewalls have been assigned to the Linode service, then those Rules
        will remain in effect.
        
        A `firewall_device_remove` Event is generated when the Firewall Device is removed successfully.
        
        Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
        
        """
        
        base_url = operations.DELETE_FIREWALL_DEVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}/devices/{deviceId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFirewallDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_firewall_device_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteFirewallDeviceDefaultApplicationJSON])
                res.delete_firewall_device_default_application_json_object = out

        return res

    
    def delete_image(self, request: operations.DeleteImageRequest) -> operations.DeleteImageResponse:
        r"""Image Delete
        Deletes a private Image you have permission to `read_write`.
        
        
        **Deleting an Image is a destructive action and cannot be undone.**
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/images/{imageId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_image_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteImageDefaultApplicationJSON])
                res.delete_image_default_application_json_object = out

        return res

    
    def delete_lke_cluster(self, request: operations.DeleteLkeClusterRequest) -> operations.DeleteLkeClusterResponse:
        r"""Kubernetes Cluster Delete
        Deletes a Cluster you have permission to `read_write`.
        
        **Deleting a Cluster is a destructive action and cannot be undone.**
        
        Deleting a Cluster:
          - Deletes all Linodes in all pools within this Kubernetes cluster
          - Deletes all supporting Kubernetes services for this Kubernetes
            cluster (API server, etcd, etc)
          - Deletes all NodeBalancers created by this Kubernetes cluster
          - Does not delete any of the volumes created by this Kubernetes
            cluster
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLkeClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_lke_cluster_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteLkeClusterDefaultApplicationJSON])
                res.delete_lke_cluster_default_application_json_object = out

        return res

    
    def delete_lke_cluster_node(self, request: operations.DeleteLkeClusterNodeRequest) -> operations.DeleteLkeClusterNodeResponse:
        r"""Node Delete
        Deletes a specific Node from a Node Pool.
        
        **Deleting a Node is a destructive action and cannot be undone.**
        
        Deleting a Node will reduce the size of the Node Pool it belongs to.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/nodes/{nodeId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLkeClusterNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_lke_cluster_node_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteLkeClusterNodeDefaultApplicationJSON])
                res.delete_lke_cluster_node_default_application_json_object = out

        return res

    
    def delete_lke_node_pool(self, request: operations.DeleteLkeNodePoolRequest) -> operations.DeleteLkeNodePoolResponse:
        r"""Node Pool Delete
        Delete a specific Node Pool from a Kubernetes cluster.
        
        **Deleting a Node Pool is a destructive action and cannot be undone.**
        
        Deleting a Node Pool will delete all Linodes within that Pool.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/pools/{poolId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLkeNodePoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_lke_node_pool_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteLkeNodePoolDefaultApplicationJSON])
                res.delete_lke_node_pool_default_application_json_object = out

        return res

    
    def delete_linode_config(self, request: operations.DeleteLinodeConfigRequest) -> operations.DeleteLinodeConfigResponse:
        r"""Configuration Profile Delete
        Deletes the specified Configuration profile from the specified Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/configs/{configId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLinodeConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_linode_config_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteLinodeConfigDefaultApplicationJSON])
                res.delete_linode_config_default_application_json_object = out

        return res

    
    def delete_linode_instance(self, request: operations.DeleteLinodeInstanceRequest) -> operations.DeleteLinodeInstanceResponse:
        r"""Linode Delete
        Deletes a Linode you have permission to `read_write`.
        
        **Deleting a Linode is a destructive action and cannot be undone.**
        
        Additionally, deleting a Linode:
        
          * Gives up any IP addresses the Linode was assigned.
          * Deletes all Disks, Backups, Configs, etc.
          * Stops billing for the Linode and its associated services. You will be billed for time used
            within the billing period the Linode was active.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLinodeInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_linode_instance_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteLinodeInstanceDefaultApplicationJSON])
                res.delete_linode_instance_default_application_json_object = out

        return res

    
    def delete_longview_client(self, request: operations.DeleteLongviewClientRequest) -> operations.DeleteLongviewClientResponse:
        r"""Longview Client Delete
        Deletes a Longview Client from your Account.
        
        **All information stored for this client will be lost.**
        
        This _does not_ uninstall the Longview Client application for your Linode - you must do that manually.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/longview/clients/{clientId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLongviewClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_longview_client_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteLongviewClientDefaultApplicationJSON])
                res.delete_longview_client_default_application_json_object = out

        return res

    
    def delete_managed_contact(self, request: operations.DeleteManagedContactRequest) -> operations.DeleteManagedContactResponse:
        r"""Managed Contact Delete
        Deletes a Managed Contact.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/contacts/{contactId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteManagedContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_managed_contact_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteManagedContactDefaultApplicationJSON])
                res.delete_managed_contact_default_application_json_object = out

        return res

    
    def delete_managed_credential(self, request: operations.DeleteManagedCredentialRequest) -> operations.DeleteManagedCredentialResponse:
        r"""Managed Credential Delete
        Deletes a Managed Credential.  Linode special forces will no longer have access to this Credential when attempting to resolve issues.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/credentials/{credentialId}/revoke", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteManagedCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_managed_credential_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteManagedCredentialDefaultApplicationJSON])
                res.delete_managed_credential_default_application_json_object = out

        return res

    
    def delete_managed_service(self, request: operations.DeleteManagedServiceRequest) -> operations.DeleteManagedServiceResponse:
        r"""Managed Service Delete
        Deletes a Managed Service.  This service will no longer be monitored by Linode Managed.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/services/{serviceId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteManagedServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_managed_service_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteManagedServiceDefaultApplicationJSON])
                res.delete_managed_service_default_application_json_object = out

        return res

    
    def delete_node_balancer(self, request: operations.DeleteNodeBalancerRequest) -> operations.DeleteNodeBalancerResponse:
        r"""NodeBalancer Delete
        Deletes a NodeBalancer.
        
        **This is a destructive action and cannot be undone.**
        
        Deleting a NodeBalancer will also delete all associated Configs and Nodes, although the backend servers represented by the Nodes will not be changed or removed. Deleting a NodeBalancer will cause you to lose access to the IP Addresses assigned to this NodeBalancer.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNodeBalancerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_node_balancer_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNodeBalancerDefaultApplicationJSON])
                res.delete_node_balancer_default_application_json_object = out

        return res

    
    def delete_node_balancer_config(self, request: operations.DeleteNodeBalancerConfigRequest) -> operations.DeleteNodeBalancerConfigResponse:
        r"""Config Delete
        Deletes the Config for a port of this NodeBalancer.
        
        **This cannot be undone.**
        
        Once completed, this NodeBalancer will no longer respond to requests on the given port. This also deletes all associated NodeBalancerNodes, but the Linodes they were routing traffic to will be unchanged and will not be removed.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNodeBalancerConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_node_balancer_config_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNodeBalancerConfigDefaultApplicationJSON])
                res.delete_node_balancer_config_default_application_json_object = out

        return res

    
    def delete_node_balancer_config_node(self, request: operations.DeleteNodeBalancerConfigNodeRequest) -> operations.DeleteNodeBalancerConfigNodeResponse:
        r"""Node Delete
        Deletes a Node from this Config. This backend will no longer receive traffic for the configured port of this NodeBalancer.
        
        This does not change or remove the Linode whose address was used in the creation of this Node.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNodeBalancerConfigNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_node_balancer_config_node_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteNodeBalancerConfigNodeDefaultApplicationJSON])
                res.delete_node_balancer_config_node_default_application_json_object = out

        return res

    
    def delete_object_storage_bucket(self, request: operations.DeleteObjectStorageBucketRequest) -> operations.DeleteObjectStorageBucketResponse:
        r"""Object Storage Bucket Remove
        Removes a single bucket. While buckets containing objects _may_ be deleted by including the `force` option in the request, such operations will fail if the bucket contains too many objects. The recommended way to empty large buckets is to use the [S3 API to configure lifecycle policies](https://docs.ceph.com/en/latest/radosgw/bucketpolicy/#) that remove all objects, then delete the bucket.
        
        This endpoint is available for convenience. It is recommended that instead you use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#delete-bucket) directly.
        
        """
        
        base_url = operations.DELETE_OBJECT_STORAGE_BUCKET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteObjectStorageBucketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_object_storage_bucket_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteObjectStorageBucketDefaultApplicationJSON])
                res.delete_object_storage_bucket_default_application_json_object = out

        return res

    
    def delete_object_storage_key(self, request: operations.DeleteObjectStorageKeyRequest) -> operations.DeleteObjectStorageKeyResponse:
        r"""Object Storage Key Revoke
        Revokes an Object Storage Key.  This keypair will no longer be usable by third-party clients.
        
        """
        
        base_url = operations.DELETE_OBJECT_STORAGE_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/keys/{keyId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteObjectStorageKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_object_storage_key_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteObjectStorageKeyDefaultApplicationJSON])
                res.delete_object_storage_key_default_application_json_object = out

        return res

    
    def delete_object_storage_ssl(self, request: operations.DeleteObjectStorageSslRequest) -> operations.DeleteObjectStorageSslResponse:
        r"""Object Storage TLS/SSL Cert Delete
        Deletes this Object Storage bucket's user uploaded TLS/SSL certificate and private key.
        
        """
        
        base_url = operations.DELETE_OBJECT_STORAGE_SSL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/ssl", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteObjectStorageSslResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_object_storage_ssl_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteObjectStorageSslDefaultApplicationJSON])
                res.delete_object_storage_ssl_default_application_json_object = out

        return res

    
    def delete_personal_access_token(self, request: operations.DeletePersonalAccessTokenRequest) -> operations.DeletePersonalAccessTokenResponse:
        r"""Personal Access Token Revoke
        Revokes a Personal Access Token. The token will be invalidated immediately, and requests using that token will fail with a 401. It is possible to revoke access to the token making the request to revoke a token, but keep in mind that doing so could lose you access to the api and require you to create a new token through some other means.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profile/tokens/{tokenId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePersonalAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_personal_access_token_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeletePersonalAccessTokenDefaultApplicationJSON])
                res.delete_personal_access_token_default_application_json_object = out

        return res

    
    def delete_profile_app(self, request: operations.DeleteProfileAppRequest) -> operations.DeleteProfileAppResponse:
        r"""App Access Revoke
        Expires this app token. This token may no longer be used to access your Account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profile/apps/{appId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProfileAppResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_profile_app_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteProfileAppDefaultApplicationJSON])
                res.delete_profile_app_default_application_json_object = out

        return res

    
    def delete_ssh_key(self, request: operations.DeleteSSHKeyRequest) -> operations.DeleteSSHKeyResponse:
        r"""SSH Key Delete
        Deletes an SSH Key you have access to.
        
        **Note:** deleting an SSH Key will *not* remove it from any Linode or Disk that was deployed with `authorized_keys`. In those cases, the keys must be manually deleted on the Linode or Disk. This endpoint will only delete the key's association from your Profile.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profile/sshkeys/{sshKeyId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_ssh_key_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteSSHKeyDefaultApplicationJSON])
                res.delete_ssh_key_default_application_json_object = out

        return res

    
    def delete_service_transfer(self, request: operations.DeleteServiceTransferRequest) -> operations.DeleteServiceTransferResponse:
        r"""Service Transfer Cancel
        Cancels the Service Transfer for the provided token. Once cancelled, a transfer cannot be accepted or otherwise
        acted on in any way. If cancelled in error, the transfer must be
        [created](/docs/api/account/#service-transfer-create) again.
        
        When cancelled, an email notification for the cancellation is sent to the account that created
        this transfer. Transfers can not be cancelled if they are expired or have been accepted.
        
        This command can only be accessed by the unrestricted users of the account that created this transfer.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/service-transfers/{token}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServiceTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_service_transfer_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteServiceTransferDefaultApplicationJSON])
                res.delete_service_transfer_default_application_json_object = out

        return res

    
    def delete_stack_script(self, request: operations.DeleteStackScriptRequest) -> operations.DeleteStackScriptResponse:
        r"""StackScript Delete
        Deletes a private StackScript you have permission to `read_write`. You cannot delete a public StackScript.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/stackscripts/{stackscriptId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStackScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_stack_script_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteStackScriptDefaultApplicationJSON])
                res.delete_stack_script_default_application_json_object = out

        return res

    
    def delete_tag(self, request: operations.DeleteTagRequest) -> operations.DeleteTagResponse:
        r"""Tag Delete
        Remove a Tag from all objects and delete it.
        
        **Important**: You must be an unrestricted User in order to add or modify Tags.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{label}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_tag_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteTagDefaultApplicationJSON])
                res.delete_tag_default_application_json_object = out

        return res

    
    def delete_user(self, request: operations.DeleteUserRequest) -> operations.DeleteUserResponse:
        r"""User Delete
        Deletes a User. The deleted User will be immediately logged out and may no longer log in or perform any actions. All of the User's Grants will be removed.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{username}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_user_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteUserDefaultApplicationJSON])
                res.delete_user_default_application_json_object = out

        return res

    
    def delete_volume(self, request: operations.DeleteVolumeRequest) -> operations.DeleteVolumeResponse:
        r"""Volume Delete
        Deletes a Volume you have permission to `read_write`.
        
        **Deleting a Volume is a destructive action and cannot be undone.**
        
        Deleting stops billing for the Volume. You will be billed for time used within
        the billing period the Volume was active.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{volumeId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_volume_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteVolumeDefaultApplicationJSON])
                res.delete_volume_default_application_json_object = out

        return res

    
    def detach_volume(self, request: operations.DetachVolumeRequest) -> operations.DetachVolumeResponse:
        r"""Volume Detach
        Detaches a Volume on your Account from a Linode on your Account. In order for this request to complete successfully, your User must have `read_write` access to the Volume and `read_write` access to the Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{volumeId}/detach", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DetachVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.detach_volume_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DetachVolumeDefaultApplicationJSON])
                res.detach_volume_default_application_json_object = out

        return res

    
    def disable_managed_service(self, request: operations.DisableManagedServiceRequest) -> operations.DisableManagedServiceResponse:
        r"""Managed Service Disable
        Temporarily disables monitoring of a Managed Service.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/services/{serviceId}/disable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DisableManagedServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedService])
                res.managed_service = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DisableManagedServiceDefaultApplicationJSON])
                res.disable_managed_service_default_application_json_object = out

        return res

    
    def enable_account_manged(self, request: operations.EnableAccountMangedRequest) -> operations.EnableAccountMangedResponse:
        r"""Linode Managed Enable
        Enables Linode Managed for the entire account and sends a welcome email to the account's associated email address. Linode Managed can monitor any service or software stack reachable over TCP or HTTP. See our [Linode Managed guide](/docs/platform/linode-managed/) to learn more.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/settings/managed-enable"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableAccountMangedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.enable_account_manged_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnableAccountMangedDefaultApplicationJSON])
                res.enable_account_manged_default_application_json_object = out

        return res

    
    def enable_backups(self, request: operations.EnableBackupsRequest) -> operations.EnableBackupsResponse:
        r"""Backups Enable
        Enables backups for the specified Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/backups/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableBackupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.enable_backups_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnableBackupsDefaultApplicationJSON])
                res.enable_backups_default_application_json_object = out

        return res

    
    def enable_managed_service(self, request: operations.EnableManagedServiceRequest) -> operations.EnableManagedServiceResponse:
        r"""Managed Service Enable
        Enables monitoring of a Managed Service.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/services/{serviceId}/enable", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnableManagedServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedService])
                res.managed_service = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnableManagedServiceDefaultApplicationJSON])
                res.enable_managed_service_default_application_json_object = out

        return res

    
    def event_read(self, request: operations.EventReadRequest) -> operations.EventReadResponse:
        r"""Event Mark as Read
        Marks a single Event as read.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/events/{eventId}/read", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EventReadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.event_read_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EventReadDefaultApplicationJSON])
                res.event_read_default_application_json_object = out

        return res

    
    def event_seen(self, request: operations.EventSeenRequest) -> operations.EventSeenResponse:
        r"""Event Mark as Seen
        Marks all Events up to and including this Event by ID as seen.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/events/{eventId}/seen", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EventSeenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.event_seen_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EventSeenDefaultApplicationJSON])
                res.event_seen_default_application_json_object = out

        return res

    
    def execute_pay_pal_payment(self, request: operations.ExecutePayPalPaymentRequest) -> operations.ExecutePayPalPaymentResponse:
        r"""Staged/Approved PayPal Payment Execute
        Given a PaymentID and PayerID - as generated by PayPal during the transaction authorization process - this endpoint executes the Payment to capture the funds and credit your Linode Account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/payments/paypal/execute"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExecutePayPalPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.execute_pay_pal_payment_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ExecutePayPalPaymentDefaultApplicationJSON])
                res.execute_pay_pal_payment_default_application_json_object = out

        return res

    
    def get_account(self, request: operations.GetAccountRequest) -> operations.GetAccountResponse:
        r"""Account View
        Returns the contact and billing information related to your Account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAccountDefaultApplicationJSON])
                res.get_account_default_application_json_object = out

        return res

    
    def get_account_login(self, request: operations.GetAccountLoginRequest) -> operations.GetAccountLoginResponse:
        r"""Login View
        Returns a Login object that displays information about a successful login. The logins that can be viewed can be for any user on the account, and are not limited to only the logins of the user that is accessing this API endpoint. This command can only be accessed by the unrestricted users of the account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/logins/{loginId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Login])
                res.login = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAccountLoginDefaultApplicationJSON])
                res.get_account_login_default_application_json_object = out

        return res

    
    def get_account_logins(self, request: operations.GetAccountLoginsRequest) -> operations.GetAccountLoginsResponse:
        r"""User Logins List All
        Returns a collection of successful logins for all users on the account during the last 90 days. This command can only be accessed by the unrestricted users of an account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/logins"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountLoginsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAccountLogins200ApplicationJSON])
                res.get_account_logins_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAccountLoginsDefaultApplicationJSON])
                res.get_account_logins_default_application_json_object = out

        return res

    
    def get_account_settings(self, request: operations.GetAccountSettingsRequest) -> operations.GetAccountSettingsResponse:
        r"""Account Settings View
        Returns information related to your Account settings: Managed service subscription, Longview subscription, and network helper.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/settings"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountSettings])
                res.account_settings = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAccountSettingsDefaultApplicationJSON])
                res.get_account_settings_default_application_json_object = out

        return res

    
    def get_backup(self, request: operations.GetBackupRequest) -> operations.GetBackupResponse:
        r"""Backup View
        Returns information about a Backup.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/backups/{backupId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBackupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Backup])
                res.backup = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBackupDefaultApplicationJSON])
                res.get_backup_default_application_json_object = out

        return res

    
    def get_backups(self, request: operations.GetBackupsRequest) -> operations.GetBackupsResponse:
        r"""Backups List
        Returns information about this Linode's available backups.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/backups", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBackupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBackups200ApplicationJSON])
                res.get_backups_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetBackupsDefaultApplicationJSON])
                res.get_backups_default_application_json_object = out

        return res

    
    def get_client(self, request: operations.GetClientRequest) -> operations.GetClientResponse:
        r"""OAuth Client View
        Returns information about a single OAuth client.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/oauth-clients/{clientId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OAuthClient])
                res.o_auth_client = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetClientDefaultApplicationJSON])
                res.get_client_default_application_json_object = out

        return res

    
    def get_client_thumbnail(self, request: operations.GetClientThumbnailRequest) -> operations.GetClientThumbnailResponse:
        r"""OAuth Client Thumbnail View
        Returns the thumbnail for this OAuth Client.  This is a publicly-viewable endpoint, and can be accessed without authentication.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/oauth-clients/{clientId}/thumbnail", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClientThumbnailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "image/png"):
                res.get_client_thumbnail_200_image_png_binary_string = r.content
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetClientThumbnailDefaultApplicationJSON])
                res.get_client_thumbnail_default_application_json_object = out

        return res

    
    def get_clients(self, request: operations.GetClientsRequest) -> operations.GetClientsResponse:
        r"""OAuth Clients List
        Returns a paginated list of OAuth Clients registered to your Account.  OAuth Clients allow users to log into applications you write or host using their Linode Account, and may allow them to grant some level of access to their Linodes or other entities to your application.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/oauth-clients"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetClients200ApplicationJSON])
                res.get_clients_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetClientsDefaultApplicationJSON])
                res.get_clients_default_application_json_object = out

        return res

    
    def get_devices(self, request: operations.GetDevicesRequest) -> operations.GetDevicesResponse:
        r"""Trusted Devices List
        Returns a paginated list of active TrustedDevices for your User. Browsers with an active Remember Me Session are logged into your account until the session expires or is revoked.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile/devices"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDevices200ApplicationJSON])
                res.get_devices_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDevicesDefaultApplicationJSON])
                res.get_devices_default_application_json_object = out

        return res

    
    def get_domain(self, request: operations.GetDomainRequest) -> operations.GetDomainResponse:
        r"""Domain View
        This is a single Domain that you have registered in Linode's DNS Manager. Linode is not a registrar, and in order for this Domain record to work you must own the domain and point your registrar at Linode's nameservers.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Domain])
                res.domain = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDomainDefaultApplicationJSON])
                res.get_domain_default_application_json_object = out

        return res

    
    def get_domain_record(self, request: operations.GetDomainRecordRequest) -> operations.GetDomainRecordResponse:
        r"""Domain Record View
        View a single Record on this Domain.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainId}/records/{recordId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DomainRecord])
                res.domain_record = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDomainRecordDefaultApplicationJSON])
                res.get_domain_record_default_application_json_object = out

        return res

    
    def get_domain_records(self, request: operations.GetDomainRecordsRequest) -> operations.GetDomainRecordsResponse:
        r"""Domain Records List
        Returns a paginated list of Records configured on a Domain in Linode's
        DNS Manager.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainId}/records", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainRecordsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDomainRecords200ApplicationJSON])
                res.get_domain_records_200_application_json_object = out

        return res

    
    def get_domain_zone(self, request: operations.GetDomainZoneRequest) -> operations.GetDomainZoneResponse:
        r"""Domain Zone File View
        Returns the zone file for the last rendered zone for the specified domain.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainId}/zone-file", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainZoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_domain_zone_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDomainZoneDefaultApplicationJSON])
                res.get_domain_zone_default_application_json_object = out

        return res

    
    def get_domains(self, request: operations.GetDomainsRequest) -> operations.GetDomainsResponse:
        r"""Domains List
        This is a collection of Domains that you have registered in Linode's DNS Manager.  Linode is not a registrar, and in order for these to work you must own the domains and point your registrar at Linode's nameservers.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDomains200ApplicationJSON])
                res.get_domains_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDomainsDefaultApplicationJSON])
                res.get_domains_default_application_json_object = out

        return res

    
    def get_entity_transfer(self, request: operations.GetEntityTransferRequest) -> operations.GetEntityTransferResponse:
        r"""Entity Transfer View
        **DEPRECATED**. Please use [Service Transfer View](/docs/api/account/#service-transfer-view).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/entity-transfers/{token}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEntityTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EntityTransfer])
                res.entity_transfer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEntityTransferDefaultApplicationJSON])
                res.get_entity_transfer_default_application_json_object = out

        return res

    
    def get_entity_transfers(self, request: operations.GetEntityTransfersRequest) -> operations.GetEntityTransfersResponse:
        r"""Entity Transfers List
        **DEPRECATED**. Please use [Service Transfers List](/docs/api/account/#service-transfers-list).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/entity-transfers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEntityTransfersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEntityTransfers200ApplicationJSON])
                res.get_entity_transfers_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEntityTransfersDefaultApplicationJSON])
                res.get_entity_transfers_default_application_json_object = out

        return res

    
    def get_event(self, request: operations.GetEventRequest) -> operations.GetEventResponse:
        r"""Event View
        Returns a single Event object.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/events/{eventId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEventDefaultApplicationJSON])
                res.get_event_default_application_json_object = out

        return res

    
    def get_events(self, request: operations.GetEventsRequest) -> operations.GetEventsResponse:
        r"""Events List
        Returns a collection of Event objects representing actions taken on your Account from the last 90 days. The Events returned depend on your grants.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/events"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEvents200ApplicationJSON])
                res.get_events_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetEventsDefaultApplicationJSON])
                res.get_events_default_application_json_object = out

        return res

    
    def get_firewall(self, request: operations.GetFirewallRequest) -> operations.GetFirewallResponse:
        r"""Firewall View
        Get a specific Firewall resource by its ID. The Firewall's Devices will not be
        returned in the response. Instead, use the
        [List Firewall Devices](/docs/api/networking/#firewall-devices-list)
        endpoint to review them.
        
        Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
        
        """
        
        base_url = operations.GET_FIREWALL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Firewall])
                res.firewall = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallDefaultApplicationJSON])
                res.get_firewall_default_application_json_object = out

        return res

    
    def get_firewall_device(self, request: operations.GetFirewallDeviceRequest) -> operations.GetFirewallDeviceResponse:
        r"""Firewall Device View
        Returns information for a Firewall Device, which assigns a Firewall
        to a Linode service (referred to as the Device's `entity`). Currently,
        only Devices with an entity of type `linode` are accepted.
        
        Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
        
        """
        
        base_url = operations.GET_FIREWALL_DEVICE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}/devices/{deviceId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirewallDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FirewallDevices])
                res.firewall_devices = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallDeviceDefaultApplicationJSON])
                res.get_firewall_device_default_application_json_object = out

        return res

    
    def get_firewall_devices(self, request: operations.GetFirewallDevicesRequest) -> operations.GetFirewallDevicesResponse:
        r"""Firewall Devices List
        Returns a paginated list of a Firewall's Devices. A Firewall Device assigns a
        Firewall to a Linode service (referred to as the Device's `entity`). Currently,
        only Devices with an entity of type `linode` are accepted.
        
        Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
        
        """
        
        base_url = operations.GET_FIREWALL_DEVICES_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirewallDevicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallDevices200ApplicationJSON])
                res.get_firewall_devices_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallDevicesDefaultApplicationJSON])
                res.get_firewall_devices_default_application_json_object = out

        return res

    
    def get_firewall_rules(self, request: operations.GetFirewallRulesRequest) -> operations.GetFirewallRulesResponse:
        r"""Firewall Rules List
        Returns the inbound and outbound Rules for a Firewall.
        
        This endpoint is in **beta**.
        
        
        * Gain access to [Linode Cloud Firewall](https://www.linode.com/products/firewall/) by signing up for our [Greenlight Beta program](https://www.linode.com/green-light/#sign-up-form).
        * During the beta, Cloud Firewall is not available in every [data center region](/docs/api/regions). For the current list of availability, see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
        * Please make sure to prepend all requests with
        `/v4beta` instead of `/v4`, and be aware that this endpoint may receive breaking
        updates in the future.  This notice will be removed when this endpoint is out of
        beta.
        
        """
        
        base_url = operations.GET_FIREWALL_RULES_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}/rules", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rules])
                res.rules = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallRulesDefaultApplicationJSON])
                res.get_firewall_rules_default_application_json_object = out

        return res

    
    def get_firewalls(self, request: operations.GetFirewallsRequest) -> operations.GetFirewallsResponse:
        r"""Firewalls List
        Returns a paginated list of your Firewalls.
        
        Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
        
        """
        
        base_url = operations.GET_FIREWALLS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/networking/firewalls"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirewallsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewalls200ApplicationJSON])
                res.get_firewalls_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallsDefaultApplicationJSON])
                res.get_firewalls_default_application_json_object = out

        return res

    
    def get_ip(self, request: operations.GetIPRequest) -> operations.GetIPResponse:
        r"""IP Address View
        Returns information about a single IP Address on your Account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networking/ips/{address}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIPResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIPDefaultApplicationJSON])
                res.get_ip_default_application_json_object = out

        return res

    
    def get_i_ps(self, request: operations.GetIPsRequest) -> operations.GetIPsResponse:
        r"""IP Addresses List
        Returns a paginated list of IP Addresses on your Account, excluding private addresses.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/networking/ips"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIPsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIPs200ApplicationJSON])
                res.get_i_ps_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIPsDefaultApplicationJSON])
                res.get_i_ps_default_application_json_object = out

        return res

    
    def get_i_pv6_pools(self, request: operations.GetIPv6PoolsRequest) -> operations.GetIPv6PoolsResponse:
        r"""IPv6 Pools List
        Displays the IPv6 pools on your Account. A pool of IPv6 addresses are routed to all of your Linodes in a single [Region](/docs/api/regions/#regions-list). Any Linode on your Account may bring up any address in this pool at any time, with no external configuration required.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/networking/ipv6/pools"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIPv6PoolsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIPv6Pools200ApplicationJSON])
                res.get_i_pv6_pools_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIPv6PoolsDefaultApplicationJSON])
                res.get_i_pv6_pools_default_application_json_object = out

        return res

    
    def get_i_pv6_ranges(self, request: operations.GetIPv6RangesRequest) -> operations.GetIPv6RangesResponse:
        r"""IPv6 Ranges List
        Displays the IPv6 ranges on your Account.
        
        
          * An IPv6 range is a `/64` block of IPv6 addresses routed to a single Linode in a given [Region](/docs/api/regions/#regions-list).
        
          * Your Linode is responsible for routing individual addresses in the range, or handling traffic for all the addresses in the range.
        
          * You must [open a support ticket](/docs/api/support/#support-ticket-open) to request a `/64` block of IPv6 addresses to be added to your account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/networking/ipv6/ranges"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIPv6RangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIPv6Ranges200ApplicationJSON])
                res.get_i_pv6_ranges_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIPv6RangesDefaultApplicationJSON])
                res.get_i_pv6_ranges_default_application_json_object = out

        return res

    
    def get_image(self, request: operations.GetImageRequest) -> operations.GetImageResponse:
        r"""Image View
        Get information about a single Image.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/images/{imageId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagePrivate])
                res.image_private = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImageDefaultApplicationJSON])
                res.get_image_default_application_json_object = out

        return res

    
    def get_images(self, request: operations.GetImagesRequest) -> operations.GetImagesResponse:
        r"""Images List
        Returns a paginated list of Images.
        
        * **Public** Images have IDs that begin with \"linode/\". These distribution images are generally available to
        all users. To view only public Images, call this endpoint without authentication.
        
        * **Private** Images have IDs that begin with \"private/\". These images are account-specific and only
        accessible to users with `images:read_only` authorization. To view private Images you have access to in
        addition to public images, call this endpoint with authentication.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/images"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImages200ApplicationJSON])
                res.get_images_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImagesDefaultApplicationJSON])
                res.get_images_default_application_json_object = out

        return res

    
    def get_invoice(self, request: operations.GetInvoiceRequest) -> operations.GetInvoiceResponse:
        r"""Invoice View
        Returns a single Invoice object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/invoices/{invoiceId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvoiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Invoice])
                res.invoice = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetInvoiceDefaultApplicationJSON])
                res.get_invoice_default_application_json_object = out

        return res

    
    def get_invoice_items(self, request: operations.GetInvoiceItemsRequest) -> operations.GetInvoiceItemsResponse:
        r"""Invoice Items List
        Returns a paginated list of Invoice items.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/invoices/{invoiceId}/items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvoiceItemsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetInvoiceItems200ApplicationJSON])
                res.get_invoice_items_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetInvoiceItemsDefaultApplicationJSON])
                res.get_invoice_items_default_application_json_object = out

        return res

    
    def get_invoices(self, request: operations.GetInvoicesRequest) -> operations.GetInvoicesResponse:
        r"""Invoices List
        Returns a paginated list of Invoices against your Account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/invoices"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInvoicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetInvoices200ApplicationJSON])
                res.get_invoices_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetInvoicesDefaultApplicationJSON])
                res.get_invoices_default_application_json_object = out

        return res

    
    def get_kernel(self, request: operations.GetKernelRequest) -> operations.GetKernelResponse:
        r"""Kernel View
        Returns information about a single Kernel.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/kernels/{kernelId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKernelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Kernel])
                res.kernel = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetKernelDefaultApplicationJSON])
                res.get_kernel_default_application_json_object = out

        return res

    
    def get_kernels(self, request: operations.GetKernelsRequest) -> operations.GetKernelsResponse:
        r"""Kernels List
        Lists available Kernels.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/linode/kernels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKernelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetKernels200ApplicationJSON])
                res.get_kernels_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetKernelsDefaultApplicationJSON])
                res.get_kernels_default_application_json_object = out

        return res

    
    def get_lke_cluster(self, request: operations.GetLkeClusterRequest) -> operations.GetLkeClusterResponse:
        r"""Kubernetes Cluster View
        Get a specific Cluster by ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLkeClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LkeCluster])
                res.lke_cluster = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeClusterDefaultApplicationJSON])
                res.get_lke_cluster_default_application_json_object = out

        return res

    
    def get_lke_cluster_api_endpoints(self, request: operations.GetLkeClusterAPIEndpointsRequest) -> operations.GetLkeClusterAPIEndpointsResponse:
        r"""Kubernetes API Endpoints List
        List the Kubernetes API server endpoints for this cluster. Please note that it often takes 2-5 minutes before the endpoint is ready after first [creating a new cluster](/docs/api/linode-kubernetes-engine-lke/#kubernetes-cluster-create).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/api-endpoints", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLkeClusterAPIEndpointsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeClusterAPIEndpoints200ApplicationJSON])
                res.get_lke_cluster_api_endpoints_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeClusterAPIEndpointsDefaultApplicationJSON])
                res.get_lke_cluster_api_endpoints_default_application_json_object = out

        return res

    
    def get_lke_cluster_kubeconfig(self, request: operations.GetLkeClusterKubeconfigRequest) -> operations.GetLkeClusterKubeconfigResponse:
        r"""Kubeconfig View
        Get the Kubeconfig file for a Cluster. Please note that it often takes 2-5 minutes before
        the Kubeconfig file is ready after first [creating a new cluster](/docs/api/linode-kubernetes-engine-lke/#kubernetes-cluster-create).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/kubeconfig", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLkeClusterKubeconfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeClusterKubeconfig200ApplicationJSON])
                res.get_lke_cluster_kubeconfig_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeClusterKubeconfigDefaultApplicationJSON])
                res.get_lke_cluster_kubeconfig_default_application_json_object = out

        return res

    
    def get_lke_cluster_node(self, request: operations.GetLkeClusterNodeRequest) -> operations.GetLkeClusterNodeResponse:
        r"""Node View
        Returns the values for a specified node object.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/nodes/{nodeId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLkeClusterNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeClusterNode200ApplicationJSON])
                res.get_lke_cluster_node_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeClusterNodeDefaultApplicationJSON])
                res.get_lke_cluster_node_default_application_json_object = out

        return res

    
    def get_lke_cluster_pools(self, request: operations.GetLkeClusterPoolsRequest) -> operations.GetLkeClusterPoolsResponse:
        r"""Node Pools List
        Returns all active Node Pools on a Kubernetes cluster.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/pools", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLkeClusterPoolsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeClusterPools200ApplicationJSON])
                res.get_lke_cluster_pools_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeClusterPoolsDefaultApplicationJSON])
                res.get_lke_cluster_pools_default_application_json_object = out

        return res

    
    def get_lke_clusters(self, request: operations.GetLkeClustersRequest) -> operations.GetLkeClustersResponse:
        r"""Kubernetes Clusters List
        Lists current Kubernetes clusters available on your account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lke/clusters"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLkeClustersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeClusters200ApplicationJSON])
                res.get_lke_clusters_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeClustersDefaultApplicationJSON])
                res.get_lke_clusters_default_application_json_object = out

        return res

    
    def get_lke_node_pool(self, request: operations.GetLkeNodePoolRequest) -> operations.GetLkeNodePoolResponse:
        r"""Node Pool View
        Get a specific Node Pool by ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/pools/{poolId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLkeNodePoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LkeNodePool])
                res.lke_node_pool = out

        return res

    
    def get_lke_version(self, request: operations.GetLkeVersionRequest) -> operations.GetLkeVersionResponse:
        r"""Kubernetes Version View
        View a Kubernetes version available for deployment to a Kubernetes cluster.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/versions/{version}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLkeVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LkeVersion])
                res.lke_version = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeVersionDefaultApplicationJSON])
                res.get_lke_version_default_application_json_object = out

        return res

    
    def get_lke_versions(self, request: operations.GetLkeVersionsRequest) -> operations.GetLkeVersionsResponse:
        r"""Kubernetes Versions List
        List the Kubernetes versions available for deployment to a Kubernetes cluster.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lke/versions"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLkeVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeVersions200ApplicationJSON])
                res.get_lke_versions_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLkeVersionsDefaultApplicationJSON])
                res.get_lke_versions_default_application_json_object = out

        return res

    
    def get_linode_config(self, request: operations.GetLinodeConfigRequest) -> operations.GetLinodeConfigResponse:
        r"""Configuration Profile View
        Returns information about a specific Configuration profile.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/configs/{configId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinodeConfig])
                res.linode_config = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeConfigDefaultApplicationJSON])
                res.get_linode_config_default_application_json_object = out

        return res

    
    def get_linode_configs(self, request: operations.GetLinodeConfigsRequest) -> operations.GetLinodeConfigsResponse:
        r"""Configuration Profiles List
        Lists Configuration profiles associated with a Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/configs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeConfigsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeConfigs200ApplicationJSON])
                res.get_linode_configs_200_application_json_object = out

        return res

    
    def get_linode_disk(self, request: operations.GetLinodeDiskRequest) -> operations.GetLinodeDiskResponse:
        r"""Disk View
        View Disk information for a Disk associated with this Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks/{diskId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeDiskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Disk])
                res.disk = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeDiskDefaultApplicationJSON])
                res.get_linode_disk_default_application_json_object = out

        return res

    
    def get_linode_disks(self, request: operations.GetLinodeDisksRequest) -> operations.GetLinodeDisksResponse:
        r"""Disks List
        View Disk information for Disks associated with this Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeDisksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeDisks200ApplicationJSON])
                res.get_linode_disks_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeDisksDefaultApplicationJSON])
                res.get_linode_disks_default_application_json_object = out

        return res

    
    def get_linode_firewalls(self, request: operations.GetLinodeFirewallsRequest) -> operations.GetLinodeFirewallsResponse:
        r"""Firewalls List
        View Firewall information for Firewalls associated with this Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/firewalls", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeFirewallsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeFirewalls200ApplicationJSON])
                res.get_linode_firewalls_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeFirewallsDefaultApplicationJSON])
                res.get_linode_firewalls_default_application_json_object = out

        return res

    
    def get_linode_ip(self, request: operations.GetLinodeIPRequest) -> operations.GetLinodeIPResponse:
        r"""IP Address View
        View information about the specified IP address associated with the specified Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/ips/{address}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeIPResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeIPDefaultApplicationJSON])
                res.get_linode_ip_default_application_json_object = out

        return res

    
    def get_linode_i_ps(self, request: operations.GetLinodeIPsRequest) -> operations.GetLinodeIPsResponse:
        r"""Networking Information List
        Returns networking information for a single Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/ips", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeIPsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_linode_i_ps_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeIPsDefaultApplicationJSON])
                res.get_linode_i_ps_default_application_json_object = out

        return res

    
    def get_linode_instance(self, request: operations.GetLinodeInstanceRequest) -> operations.GetLinodeInstanceResponse:
        r"""Linode View
        Get a specific Linode by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Linode])
                res.linode = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeInstanceDefaultApplicationJSON])
                res.get_linode_instance_default_application_json_object = out

        return res

    
    def get_linode_instances(self, request: operations.GetLinodeInstancesRequest) -> operations.GetLinodeInstancesResponse:
        r"""Linodes List
        Returns a paginated list of Linodes you have permission to view.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/linode/instances"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeInstances200ApplicationJSON])
                res.get_linode_instances_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeInstancesDefaultApplicationJSON])
                res.get_linode_instances_default_application_json_object = out

        return res

    
    def get_linode_stats(self, request: operations.GetLinodeStatsRequest) -> operations.GetLinodeStatsResponse:
        r"""Linode Statistics View
        Returns CPU, IO, IPv4, and IPv6 statistics for your Linode for the past 24 hours.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/stats", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinodeStats])
                res.linode_stats = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeStatsDefaultApplicationJSON])
                res.get_linode_stats_default_application_json_object = out

        return res

    
    def get_linode_stats_by_year_month(self, request: operations.GetLinodeStatsByYearMonthRequest) -> operations.GetLinodeStatsByYearMonthResponse:
        r"""Statistics View (year/month)
        Returns statistics for a specific month. The year/month values must be either a date in the past, or the current month. If the current month, statistics will be retrieved for the past 30 days.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/stats/{year}/{month}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeStatsByYearMonthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinodeStats])
                res.linode_stats = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeStatsByYearMonthDefaultApplicationJSON])
                res.get_linode_stats_by_year_month_default_application_json_object = out

        return res

    
    def get_linode_transfer(self, request: operations.GetLinodeTransferRequest) -> operations.GetLinodeTransferResponse:
        r"""Network Transfer View
        Returns a Linode's network transfer pool statistics for the current month.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/transfer", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_linode_transfer_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeTransferDefaultApplicationJSON])
                res.get_linode_transfer_default_application_json_object = out

        return res

    
    def get_linode_transfer_by_year_month(self, request: operations.GetLinodeTransferByYearMonthRequest) -> operations.GetLinodeTransferByYearMonthResponse:
        r"""Network Transfer View (year/month)
        Returns a Linode's network transfer statistics for a specific month. The year/month values must be either a date in the past, or the current month.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/transfer/{year}/{month}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeTransferByYearMonthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_linode_transfer_by_year_month_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeTransferByYearMonthDefaultApplicationJSON])
                res.get_linode_transfer_by_year_month_default_application_json_object = out

        return res

    
    def get_linode_type(self, request: operations.GetLinodeTypeRequest) -> operations.GetLinodeTypeResponse:
        r"""Type View
        Returns information about a specific Linode Type, including pricing and specifications. This is used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/types/{typeId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinodeType])
                res.linode_type = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeTypeDefaultApplicationJSON])
                res.get_linode_type_default_application_json_object = out

        return res

    
    def get_linode_types(self) -> operations.GetLinodeTypesResponse:
        r"""Types List
        Returns collection of Linode Types, including pricing and specifications for each Type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/linode/types"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeTypes200ApplicationJSON])
                res.get_linode_types_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeTypesDefaultApplicationJSON])
                res.get_linode_types_default_application_json_object = out

        return res

    
    def get_linode_volumes(self, request: operations.GetLinodeVolumesRequest) -> operations.GetLinodeVolumesResponse:
        r"""Linode's Volumes List
        View Block Storage Volumes attached to this Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/volumes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeVolumesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeVolumes200ApplicationJSON])
                res.get_linode_volumes_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeVolumesDefaultApplicationJSON])
                res.get_linode_volumes_default_application_json_object = out

        return res

    
    def get_longview_client(self, request: operations.GetLongviewClientRequest) -> operations.GetLongviewClientResponse:
        r"""Longview Client View
        Returns a single Longview Client you can access.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/longview/clients/{clientId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLongviewClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LongviewClient])
                res.longview_client = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLongviewClientDefaultApplicationJSON])
                res.get_longview_client_default_application_json_object = out

        return res

    
    def get_longview_clients(self, request: operations.GetLongviewClientsRequest) -> operations.GetLongviewClientsResponse:
        r"""Longview Clients List
        Returns a paginated list of Longview Clients you have access to. Longview Client is used to monitor stats on your Linode with the help of the Longview Client application.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/longview/clients"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLongviewClientsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLongviewClients200ApplicationJSON])
                res.get_longview_clients_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLongviewClientsDefaultApplicationJSON])
                res.get_longview_clients_default_application_json_object = out

        return res

    
    def get_longview_plan(self, request: operations.GetLongviewPlanRequest) -> operations.GetLongviewPlanResponse:
        r"""Longview Plan View
        Get the details of your current Longview plan. This returns a `LongviewSubscription` object for your current Longview Pro plan, or an empty set `{}` if your current plan is Longview Free.
        
        You must have at least one of the following `global` [User Grants](/docs/api/account/#users-grants-view) in order to access this endpoint:
        
          - `\"account_access\": read_write`
          - `\"account_access\": read_only`
          - `\"longview_subscription\": true`
          - `\"add_longview\": true`
        
        
        To update your subscription plan, send a request to [Update Longview Plan](/docs/api/longview/#longview-plan-update).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/longview/plan"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLongviewPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LongviewSubscription])
                res.longview_subscription = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLongviewPlanDefaultApplicationJSON])
                res.get_longview_plan_default_application_json_object = out

        return res

    
    def get_longview_subscription(self, request: operations.GetLongviewSubscriptionRequest) -> operations.GetLongviewSubscriptionResponse:
        r"""Longview Subscription View
        Get the Longview plan details as a single `LongviewSubscription` object for the provided subscription ID. This is a public endpoint and requires no authentication.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/longview/subscriptions/{subscriptionId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLongviewSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LongviewSubscription])
                res.longview_subscription = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLongviewSubscriptionDefaultApplicationJSON])
                res.get_longview_subscription_default_application_json_object = out

        return res

    
    def get_longview_subscriptions(self, request: operations.GetLongviewSubscriptionsRequest) -> operations.GetLongviewSubscriptionsResponse:
        r"""Longview Subscriptions List
        Returns a paginated list of available Longview Subscriptions. This is a public endpoint and requires no authentication.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/longview/subscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLongviewSubscriptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLongviewSubscriptions200ApplicationJSON])
                res.get_longview_subscriptions_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLongviewSubscriptionsDefaultApplicationJSON])
                res.get_longview_subscriptions_default_application_json_object = out

        return res

    
    def get_maintenance(self, request: operations.GetMaintenanceRequest) -> operations.GetMaintenanceResponse:
        r"""Maintenance List
        Returns a collection of Maintenance objects for any entity a user has permissions to view.
        
        Currently, Linodes are the only entities available for viewing.
        
        **Beta**: This endpoint is in beta. Please make sure to prepend all requests with `/v4beta` instead of `/v4`, and be aware that this endpoint may receive breaking updates in the future. This notice will be removed when this endpoint is out of beta.
        
        """
        
        base_url = operations.GET_MAINTENANCE_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/account/maintenance"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMaintenanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMaintenance200ApplicationJSON])
                res.get_maintenance_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMaintenanceDefaultApplicationJSON])
                res.get_maintenance_default_application_json_object = out

        return res

    
    def get_managed_contact(self, request: operations.GetManagedContactRequest) -> operations.GetManagedContactResponse:
        r"""Managed Contact View
        Returns a single Managed Contact.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/contacts/{contactId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetManagedContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedContact])
                res.managed_contact = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedContactDefaultApplicationJSON])
                res.get_managed_contact_default_application_json_object = out

        return res

    
    def get_managed_contacts(self, request: operations.GetManagedContactsRequest) -> operations.GetManagedContactsResponse:
        r"""Managed Contacts List
        Returns a paginated list of Managed Contacts on your Account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/managed/contacts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetManagedContactsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedContacts200ApplicationJSON])
                res.get_managed_contacts_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedContactsDefaultApplicationJSON])
                res.get_managed_contacts_default_application_json_object = out

        return res

    
    def get_managed_credential(self, request: operations.GetManagedCredentialRequest) -> operations.GetManagedCredentialResponse:
        r"""Managed Credential View
        Returns a single Managed Credential.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/credentials/{credentialId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetManagedCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedCredential])
                res.managed_credential = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedCredentialDefaultApplicationJSON])
                res.get_managed_credential_default_application_json_object = out

        return res

    
    def get_managed_credentials(self, request: operations.GetManagedCredentialsRequest) -> operations.GetManagedCredentialsResponse:
        r"""Managed Credentials List
        Returns a paginated list of Managed Credentials on your Account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/managed/credentials"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetManagedCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedCredentials200ApplicationJSON])
                res.get_managed_credentials_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedCredentialsDefaultApplicationJSON])
                res.get_managed_credentials_default_application_json_object = out

        return res

    
    def get_managed_issue(self, request: operations.GetManagedIssueRequest) -> operations.GetManagedIssueResponse:
        r"""Managed Issue View
        Returns a single Issue that is impacting or did impact one of your Managed Services.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/issues/{issueId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetManagedIssueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedIssue])
                res.managed_issue = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedIssueDefaultApplicationJSON])
                res.get_managed_issue_default_application_json_object = out

        return res

    
    def get_managed_issues(self, request: operations.GetManagedIssuesRequest) -> operations.GetManagedIssuesResponse:
        r"""Managed Issues List
        Returns a paginated list of recent and ongoing issues detected on your Managed Services.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/managed/issues"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetManagedIssuesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedIssues200ApplicationJSON])
                res.get_managed_issues_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedIssuesDefaultApplicationJSON])
                res.get_managed_issues_default_application_json_object = out

        return res

    
    def get_managed_linode_setting(self, request: operations.GetManagedLinodeSettingRequest) -> operations.GetManagedLinodeSettingResponse:
        r"""Linode's Managed Settings View
        Returns a single Linode's Managed settings.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/linode-settings/{linodeId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetManagedLinodeSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedLinodeSettings])
                res.managed_linode_settings = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedLinodeSettingDefaultApplicationJSON])
                res.get_managed_linode_setting_default_application_json_object = out

        return res

    
    def get_managed_linode_settings(self, request: operations.GetManagedLinodeSettingsRequest) -> operations.GetManagedLinodeSettingsResponse:
        r"""Managed Linode Settings List
        Returns a paginated list of Managed Settings for your Linodes. There will be one entry per Linode on your Account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/managed/linode-settings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetManagedLinodeSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedLinodeSettings200ApplicationJSON])
                res.get_managed_linode_settings_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedLinodeSettingsDefaultApplicationJSON])
                res.get_managed_linode_settings_default_application_json_object = out

        return res

    
    def get_managed_service(self, request: operations.GetManagedServiceRequest) -> operations.GetManagedServiceResponse:
        r"""Managed Service View
        Returns information about a single Managed Service on your Account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/services/{serviceId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetManagedServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedService])
                res.managed_service = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedServiceDefaultApplicationJSON])
                res.get_managed_service_default_application_json_object = out

        return res

    
    def get_managed_services(self, request: operations.GetManagedServicesRequest) -> operations.GetManagedServicesResponse:
        r"""Managed Services List
        Returns a paginated list of Managed Services on your Account. These are the services Linode Managed is monitoring and will report and attempt to resolve issues with.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/managed/services"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetManagedServicesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedServices200ApplicationJSON])
                res.get_managed_services_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedServicesDefaultApplicationJSON])
                res.get_managed_services_default_application_json_object = out

        return res

    
    def get_managed_stats(self, request: operations.GetManagedStatsRequest) -> operations.GetManagedStatsResponse:
        r"""Managed Stats List
        Returns a list of Managed Stats on your Account in the form of x and y data points.
        You can use these data points to plot your own graph visualizations. These stats
        reflect the last 24 hours of combined usage across all managed Linodes on your account
        giving you a high-level snapshot of data for the following:
        
        
        * cpu
        * disk
        * swap
        * network in
        * network out
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/managed/stats"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetManagedStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedStats200ApplicationJSON])
                res.get_managed_stats_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetManagedStatsDefaultApplicationJSON])
                res.get_managed_stats_default_application_json_object = out

        return res

    
    def get_node_balancer(self, request: operations.GetNodeBalancerRequest) -> operations.GetNodeBalancerResponse:
        r"""NodeBalancer View
        Returns a single NodeBalancer you can access.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodeBalancerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NodeBalancer])
                res.node_balancer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNodeBalancerDefaultApplicationJSON])
                res.get_node_balancer_default_application_json_object = out

        return res

    
    def get_node_balancer_config(self, request: operations.GetNodeBalancerConfigRequest) -> operations.GetNodeBalancerConfigResponse:
        r"""Config View
        Returns configuration information for a single port of this NodeBalancer.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodeBalancerConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NodeBalancerConfig])
                res.node_balancer_config = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNodeBalancerConfigDefaultApplicationJSON])
                res.get_node_balancer_config_default_application_json_object = out

        return res

    
    def get_node_balancer_config_nodes(self, request: operations.GetNodeBalancerConfigNodesRequest) -> operations.GetNodeBalancerConfigNodesResponse:
        r"""Nodes List
        Returns a paginated list of NodeBalancer nodes associated with this Config. These are the backends that will be sent traffic for this port.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodeBalancerConfigNodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNodeBalancerConfigNodes200ApplicationJSON])
                res.get_node_balancer_config_nodes_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNodeBalancerConfigNodesDefaultApplicationJSON])
                res.get_node_balancer_config_nodes_default_application_json_object = out

        return res

    
    def get_node_balancer_configs(self, request: operations.GetNodeBalancerConfigsRequest) -> operations.GetNodeBalancerConfigsResponse:
        r"""Configs List
        Returns a paginated list of NodeBalancer Configs associated with this NodeBalancer. NodeBalancer Configs represent individual ports that this NodeBalancer will accept traffic on, one Config per port.
        
        For example, if you wanted to accept standard HTTP traffic, you would need a Config listening on port 80.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodeBalancerConfigsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNodeBalancerConfigs200ApplicationJSON])
                res.get_node_balancer_configs_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNodeBalancerConfigsDefaultApplicationJSON])
                res.get_node_balancer_configs_default_application_json_object = out

        return res

    
    def get_node_balancer_node(self, request: operations.GetNodeBalancerNodeRequest) -> operations.GetNodeBalancerNodeResponse:
        r"""Node View
        Returns information about a single Node, a backend for this NodeBalancer's configured port.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodeBalancerNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NodeBalancerNode])
                res.node_balancer_node = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNodeBalancerNodeDefaultApplicationJSON])
                res.get_node_balancer_node_default_application_json_object = out

        return res

    
    def get_node_balancers(self, request: operations.GetNodeBalancersRequest) -> operations.GetNodeBalancersResponse:
        r"""NodeBalancers List
        Returns a paginated list of NodeBalancers you have access to.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/nodebalancers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNodeBalancersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNodeBalancers200ApplicationJSON])
                res.get_node_balancers_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNodeBalancersDefaultApplicationJSON])
                res.get_node_balancers_default_application_json_object = out

        return res

    
    def get_notifications(self, request: operations.GetNotificationsRequest) -> operations.GetNotificationsResponse:
        r"""Notifications List
        Returns a collection of Notification objects representing important, often time-sensitive items related to your Account.
        You cannot interact directly with Notifications, and a Notification will disappear when the circumstances causing it have been resolved. For example, if you have an important Ticket open, you must respond to the Ticket to dismiss the Notification.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/notifications"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNotificationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotifications200ApplicationJSON])
                res.get_notifications_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNotificationsDefaultApplicationJSON])
                res.get_notifications_default_application_json_object = out

        return res

    
    def get_object_storage_bucket(self, request: operations.GetObjectStorageBucketRequest) -> operations.GetObjectStorageBucketResponse:
        r"""Object Storage Bucket View
        Returns a single Object Storage Bucket.
        
        
        This endpoint is available for convenience. It is recommended that instead you
        use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) directly.
        
        """
        
        base_url = operations.GET_OBJECT_STORAGE_BUCKET_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStorageBucketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectStorageBucket])
                res.object_storage_bucket = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageBucketDefaultApplicationJSON])
                res.get_object_storage_bucket_default_application_json_object = out

        return res

    
    def get_object_storage_bucket_content(self, request: operations.GetObjectStorageBucketContentRequest) -> operations.GetObjectStorageBucketContentResponse:
        r"""Object Storage Bucket Contents List
        Returns the contents of a bucket. The contents are paginated using a `marker`,
        which is the name of the last object on the previous page.  Objects may
        be filtered by `prefix` and `delimiter` as well; see Query Parameters for more
        information.
        
        
        This endpoint is available for convenience. It is recommended that instead you
        use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object) directly.
        
        """
        
        base_url = operations.GET_OBJECT_STORAGE_BUCKET_CONTENT_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/object-list", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStorageBucketContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_object_storage_bucket_content_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageBucketContentDefaultApplicationJSON])
                res.get_object_storage_bucket_content_default_application_json_object = out

        return res

    
    def get_object_storage_bucketin_cluster(self, request: operations.GetObjectStorageBucketinClusterRequest) -> operations.GetObjectStorageBucketinClusterResponse:
        r"""Object Storage Buckets in Cluster List
        Returns a list of Buckets in this cluster belonging to this Account.
        
        
        This endpoint is available for convenience. It is recommended that instead you
        use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#get-bucket) directly.
        
        """
        
        base_url = operations.GET_OBJECT_STORAGE_BUCKETIN_CLUSTER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStorageBucketinClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageBucketinCluster200ApplicationJSON])
                res.get_object_storage_bucketin_cluster_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageBucketinClusterDefaultApplicationJSON])
                res.get_object_storage_bucketin_cluster_default_application_json_object = out

        return res

    
    def get_object_storage_buckets(self, request: operations.GetObjectStorageBucketsRequest) -> operations.GetObjectStorageBucketsResponse:
        r"""Object Storage Buckets List
        Returns a paginated list of all Object Storage Buckets that you own.
        
        
        This endpoint is available for convenience. It is recommended that instead you
        use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/serviceops/#list-buckets) directly.
        
        """
        
        base_url = operations.GET_OBJECT_STORAGE_BUCKETS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/object-storage/buckets"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStorageBucketsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageBuckets200ApplicationJSON])
                res.get_object_storage_buckets_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageBucketsDefaultApplicationJSON])
                res.get_object_storage_buckets_default_application_json_object = out

        return res

    
    def get_object_storage_cluster(self, request: operations.GetObjectStorageClusterRequest) -> operations.GetObjectStorageClusterResponse:
        r"""Cluster View
        Returns a single Object Storage Cluster.
        
        """
        
        base_url = operations.GET_OBJECT_STORAGE_CLUSTER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/clusters/{clusterId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStorageClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectStorageCluster])
                res.object_storage_cluster = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageClusterDefaultApplicationJSON])
                res.get_object_storage_cluster_default_application_json_object = out

        return res

    
    def get_object_storage_clusters(self, request: operations.GetObjectStorageClustersRequest) -> operations.GetObjectStorageClustersResponse:
        r"""Clusters List
        Returns a paginated list of Object Storage Clusters that are available for
        use.  Users can connect to the clusters with third party clients to create buckets
        and upload objects.
        
        """
        
        base_url = operations.GET_OBJECT_STORAGE_CLUSTERS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/object-storage/clusters"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStorageClustersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageClusters200ApplicationJSON])
                res.get_object_storage_clusters_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageClustersDefaultApplicationJSON])
                res.get_object_storage_clusters_default_application_json_object = out

        return res

    
    def get_object_storage_key(self, request: operations.GetObjectStorageKeyRequest) -> operations.GetObjectStorageKeyResponse:
        r"""Object Storage Key View
        Returns a single Object Storage Key provisioned for your account.
        
        """
        
        base_url = operations.GET_OBJECT_STORAGE_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/keys/{keyId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStorageKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectStorageKey])
                res.object_storage_key = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageKeyDefaultApplicationJSON])
                res.get_object_storage_key_default_application_json_object = out

        return res

    
    def get_object_storage_keys(self, request: operations.GetObjectStorageKeysRequest) -> operations.GetObjectStorageKeysResponse:
        r"""Object Storage Keys List
        Returns a paginated list of Object Storage Keys for authenticating to
        the Object Storage S3 API.
        
        """
        
        base_url = operations.GET_OBJECT_STORAGE_KEYS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/object-storage/keys"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStorageKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageKeys200ApplicationJSON])
                res.get_object_storage_keys_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageKeysDefaultApplicationJSON])
                res.get_object_storage_keys_default_application_json_object = out

        return res

    
    def get_object_storage_ssl(self, request: operations.GetObjectStorageSslRequest) -> operations.GetObjectStorageSslResponse:
        r"""Object Storage TLS/SSL Cert View
        Returns a boolean value indicating if this bucket has a corresponding TLS/SSL certificate that was
        uploaded by an Account user.
        
        """
        
        base_url = operations.GET_OBJECT_STORAGE_SSL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/ssl", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStorageSslResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectStorageSslResponse])
                res.object_storage_ssl_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageSslDefaultApplicationJSON])
                res.get_object_storage_ssl_default_application_json_object = out

        return res

    
    def get_object_storage_transfer(self, request: operations.GetObjectStorageTransferRequest) -> operations.GetObjectStorageTransferResponse:
        r"""Object Storage Transfer View
        The amount of outbound data transfer used by your account's Object Storage buckets.
        Object Storage adds 1 terabyte of outbound data transfer to your data transfer pool.
        See the [Object Storage Pricing and Limitations](/docs/guides/pricing-and-limitations/)
        guide for details on Object Storage transfer quotas.
        
        """
        
        base_url = operations.GET_OBJECT_STORAGE_TRANSFER_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/object-storage/transfer"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStorageTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_object_storage_transfer_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetObjectStorageTransferDefaultApplicationJSON])
                res.get_object_storage_transfer_default_application_json_object = out

        return res

    
    def get_payment(self, request: operations.GetPaymentRequest) -> operations.GetPaymentResponse:
        r"""Payment View
        Returns information about a specific Payment.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/payments/{paymentId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Payment])
                res.payment = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPaymentDefaultApplicationJSON])
                res.get_payment_default_application_json_object = out

        return res

    
    def get_payment_methods(self, request: operations.GetPaymentMethodsRequest) -> operations.GetPaymentMethodsResponse:
        r"""Payment Methods List
        Returns a paginated list of Payment Methods for this Account.
        
        """
        
        base_url = operations.GET_PAYMENT_METHODS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/account/payment-methods"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentMethodsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPaymentMethods200ApplicationJSON])
                res.get_payment_methods_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPaymentMethodsDefaultApplicationJSON])
                res.get_payment_methods_default_application_json_object = out

        return res

    
    def get_payments(self, request: operations.GetPaymentsRequest) -> operations.GetPaymentsResponse:
        r"""Payments List
        Returns a paginated list of Payments made on this Account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/payments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPayments200ApplicationJSON])
                res.get_payments_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPaymentsDefaultApplicationJSON])
                res.get_payments_default_application_json_object = out

        return res

    
    def get_personal_access_token(self, request: operations.GetPersonalAccessTokenRequest) -> operations.GetPersonalAccessTokenResponse:
        r"""Personal Access Token View
        Returns a single Personal Access Token.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profile/tokens/{tokenId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPersonalAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalAccessToken])
                res.personal_access_token = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalAccessTokenDefaultApplicationJSON])
                res.get_personal_access_token_default_application_json_object = out

        return res

    
    def get_personal_access_tokens(self, request: operations.GetPersonalAccessTokensRequest) -> operations.GetPersonalAccessTokensResponse:
        r"""Personal Access Tokens List
        Returns a paginated list of Personal Access Tokens currently active for your User.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile/tokens"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPersonalAccessTokensResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalAccessTokens200ApplicationJSON])
                res.get_personal_access_tokens_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPersonalAccessTokensDefaultApplicationJSON])
                res.get_personal_access_tokens_default_application_json_object = out

        return res

    
    def get_profile(self, request: operations.GetProfileRequest) -> operations.GetProfileResponse:
        r"""Profile View
        Returns information about the current User. This can be used to see who is acting in applications where more than one token is managed. For example, in third-party OAuth applications.
        
        This endpoint is always accessible, no matter what OAuth scopes the acting token has.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Profile])
                res.profile = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetProfileDefaultApplicationJSON])
                res.get_profile_default_application_json_object = out

        return res

    
    def get_profile_app(self, request: operations.GetProfileAppRequest) -> operations.GetProfileAppResponse:
        r"""Authorized App View
        Returns information about a single app you've authorized to access your Account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profile/apps/{appId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProfileAppResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthorizedApp])
                res.authorized_app = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetProfileAppDefaultApplicationJSON])
                res.get_profile_app_default_application_json_object = out

        return res

    
    def get_profile_apps(self, request: operations.GetProfileAppsRequest) -> operations.GetProfileAppsResponse:
        r"""Authorized Apps List
        This is a collection of OAuth apps that you've given access to your Account, and includes the level of access granted.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile/apps"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProfileAppsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetProfileApps200ApplicationJSON])
                res.get_profile_apps_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetProfileAppsDefaultApplicationJSON])
                res.get_profile_apps_default_application_json_object = out

        return res

    
    def get_profile_grants(self, request: operations.GetProfileGrantsRequest) -> operations.GetProfileGrantsResponse:
        r"""Grants List
        This returns a GrantsResponse describing what the acting User has been granted access to.  For unrestricted users, this will return a  204 and no body because unrestricted users have access to everything without grants.  This will not return information about entities you do not have access to.  This endpoint is useful when writing third-party OAuth applications to see what options you should present to the acting User.
        
        For example, if they do not have `global.add_linodes`, you might not display a button to deploy a new Linode.
        
        Any client may access this endpoint; no OAuth scopes are required.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile/grants"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProfileGrantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GrantsResponse])
                res.grants_response = out
        elif r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetProfileGrantsDefaultApplicationJSON])
                res.get_profile_grants_default_application_json_object = out

        return res

    
    def get_profile_login(self, request: operations.GetProfileLoginRequest) -> operations.GetProfileLoginResponse:
        r"""Login View
        Returns a login object displaying information about a successful account login from this user.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profile/logins/{loginId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProfileLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Login])
                res.login = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetProfileLoginDefaultApplicationJSON])
                res.get_profile_login_default_application_json_object = out

        return res

    
    def get_profile_logins(self, request: operations.GetProfileLoginsRequest) -> operations.GetProfileLoginsResponse:
        r"""Logins List
        Returns a collection of successful account logins from this user during the last 90 days.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile/logins"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProfileLoginsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetProfileLogins200ApplicationJSON])
                res.get_profile_logins_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetProfileLoginsDefaultApplicationJSON])
                res.get_profile_logins_default_application_json_object = out

        return res

    
    def get_region(self, request: operations.GetRegionRequest) -> operations.GetRegionResponse:
        r"""Region View
        Returns a single Region.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/regions/{regionId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Region])
                res.region = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegionDefaultApplicationJSON])
                res.get_region_default_application_json_object = out

        return res

    
    def get_regions(self) -> operations.GetRegionsResponse:
        r"""Regions List
        Lists the Regions available for Linode services. Not all services are guaranteed to be
        available in all Regions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/regions"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegions200ApplicationJSON])
                res.get_regions_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRegionsDefaultApplicationJSON])
                res.get_regions_default_application_json_object = out

        return res

    
    def get_ssh_key(self, request: operations.GetSSHKeyRequest) -> operations.GetSSHKeyResponse:
        r"""SSH Key View
        Returns a single SSH Key object identified by `id` that you have access to view.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profile/sshkeys/{sshKeyId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SSHKey])
                res.ssh_key = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSSHKeyDefaultApplicationJSON])
                res.get_ssh_key_default_application_json_object = out

        return res

    
    def get_ssh_keys(self, request: operations.GetSSHKeysRequest) -> operations.GetSSHKeysResponse:
        r"""SSH Keys List
        Returns a collection of SSH Keys you've added to your Profile.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile/sshkeys"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSSHKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSSHKeys200ApplicationJSON])
                res.get_ssh_keys_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSSHKeysDefaultApplicationJSON])
                res.get_ssh_keys_default_application_json_object = out

        return res

    
    def get_service_transfer(self, request: operations.GetServiceTransferRequest) -> operations.GetServiceTransferResponse:
        r"""Service Transfer View
        Returns the details of the Service Transfer for the provided token.
        
        While a transfer is pending, any unrestricted user *of any account* can access this command. After a
        transfer has been accepted, it can only be viewed by unrestricted users of the accounts that created and
        accepted the transfer. If cancelled or expired, only unrestricted users of the account that created the
        transfer can view it.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/service-transfers/{token}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServiceTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceTransfer])
                res.service_transfer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServiceTransferDefaultApplicationJSON])
                res.get_service_transfer_default_application_json_object = out

        return res

    
    def get_service_transfers(self, request: operations.GetServiceTransfersRequest) -> operations.GetServiceTransfersResponse:
        r"""Service Transfers List
        Returns a collection of all created and accepted Service Transfers for this account, regardless of the user that created or accepted the transfer.
        
        This command can only be accessed by the unrestricted users of an account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/service-transfers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServiceTransfersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServiceTransfers200ApplicationJSON])
                res.get_service_transfers_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServiceTransfersDefaultApplicationJSON])
                res.get_service_transfers_default_application_json_object = out

        return res

    
    def get_stack_script(self, request: operations.GetStackScriptRequest) -> operations.GetStackScriptResponse:
        r"""StackScript View
        Returns all of the information about a specified StackScript, including the contents of the script.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/stackscripts/{stackscriptId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStackScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StackScript])
                res.stack_script = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStackScriptDefaultApplicationJSON])
                res.get_stack_script_default_application_json_object = out

        return res

    
    def get_stack_scripts(self, request: operations.GetStackScriptsRequest) -> operations.GetStackScriptsResponse:
        r"""StackScripts List
        If the request is not authenticated, only public StackScripts are returned.
        
        For more information on StackScripts, please read our [StackScripts guides](/docs/platform/stackscripts/).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/linode/stackscripts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStackScriptsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStackScripts200ApplicationJSON])
                res.get_stack_scripts_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetStackScriptsDefaultApplicationJSON])
                res.get_stack_scripts_default_application_json_object = out

        return res

    
    def get_tagged_objects(self, request: operations.GetTaggedObjectsRequest) -> operations.GetTaggedObjectsResponse:
        r"""Tagged Objects List
        Returns a paginated list of all objects you've tagged with the requested Tag. This is a mixed collection of all object types.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tags/{label}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaggedObjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_tagged_objects_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTaggedObjectsDefaultApplicationJSON])
                res.get_tagged_objects_default_application_json_object = out

        return res

    
    def get_tags(self, request: operations.GetTagsRequest) -> operations.GetTagsResponse:
        r"""Tags List
        Tags are User-defined labels attached to objects in your Account, such as Linodes. They are used for specifying and grouping attributes of objects that are relevant to the User.
        
        This endpoint returns a paginated list of Tags on your account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTags200ApplicationJSON])
                res.get_tags_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTagsDefaultApplicationJSON])
                res.get_tags_default_application_json_object = out

        return res

    
    def get_ticket(self, request: operations.GetTicketRequest) -> operations.GetTicketResponse:
        r"""Support Ticket View
        Returns a Support Ticket under your Account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/support/tickets/{ticketId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTicketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SupportTicket])
                res.support_ticket = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTicketDefaultApplicationJSON])
                res.get_ticket_default_application_json_object = out

        return res

    
    def get_ticket_replies(self, request: operations.GetTicketRepliesRequest) -> operations.GetTicketRepliesResponse:
        r"""Replies List
        Returns a collection of replies to a Support Ticket on your Account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/support/tickets/{ticketId}/replies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTicketRepliesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTicketReplies200ApplicationJSON])
                res.get_ticket_replies_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTicketRepliesDefaultApplicationJSON])
                res.get_ticket_replies_default_application_json_object = out

        return res

    
    def get_tickets(self, request: operations.GetTicketsRequest) -> operations.GetTicketsResponse:
        r"""Support Tickets List
        Returns a collection of Support Tickets on your Account. Support Tickets can be both tickets you open with Linode for support, as well as tickets generated by Linode regarding your Account.
        This collection includes all Support Tickets generated on your Account, with open tickets returned first.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/support/tickets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTicketsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTickets200ApplicationJSON])
                res.get_tickets_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTicketsDefaultApplicationJSON])
                res.get_tickets_default_application_json_object = out

        return res

    
    def get_transfer(self, request: operations.GetTransferRequest) -> operations.GetTransferResponse:
        r"""Network Utilization View
        Returns a Transfer object showing your network utilization, in GB, for the current month.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/transfer"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransferResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Transfer])
                res.transfer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTransferDefaultApplicationJSON])
                res.get_transfer_default_application_json_object = out

        return res

    
    def get_trusted_device(self, request: operations.GetTrustedDeviceRequest) -> operations.GetTrustedDeviceResponse:
        r"""Trusted Device View
        Returns a single active TrustedDevice for your User.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profile/devices/{deviceId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrustedDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TrustedDevice])
                res.trusted_device = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTrustedDeviceDefaultApplicationJSON])
                res.get_trusted_device_default_application_json_object = out

        return res

    
    def get_user(self, request: operations.GetUserRequest) -> operations.GetUserResponse:
        r"""User View
        Returns information about a single User on your Account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{username}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserDefaultApplicationJSON])
                res.get_user_default_application_json_object = out

        return res

    
    def get_user_grants(self, request: operations.GetUserGrantsRequest) -> operations.GetUserGrantsResponse:
        r"""User's Grants View
        Returns the full grants structure for the specified account User (other than the account owner, see below for details). This includes all entities on the Account alongside the level of access this User has to each of them.
        
        The current authenticated User, including the account owner, may view their own grants at the [/profile/grants](/docs/api/profile/#grants-list) endpoint, but will not see entities that they do not have access to.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{username}/grants", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserGrantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GrantsResponse])
                res.grants_response = out
        elif r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserGrantsDefaultApplicationJSON])
                res.get_user_grants_default_application_json_object = out

        return res

    
    def get_user_preferences(self, request: operations.GetUserPreferencesRequest) -> operations.GetUserPreferencesResponse:
        r"""User Preferences View
        View a list of user preferences tied to the OAuth client that generated
        the token making the request. The user preferences endpoints allow
        consumers of the API to store arbitrary JSON data, such as a user's font
        size preference or preferred display name. User preferences are available
        for each OAuth client registered to your account, and as such an account can
        have multiple user preferences.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile/preferences"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserPreferencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_user_preferences_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserPreferencesDefaultApplicationJSON])
                res.get_user_preferences_default_application_json_object = out

        return res

    
    def get_users(self, request: operations.GetUsersRequest) -> operations.GetUsersResponse:
        r"""Users List
        Returns a paginated list of Users on your Account. Users may access all or part of your Account based on their restricted status and grants.  An unrestricted User may access everything on the account, whereas restricted User may only access entities or perform actions they've been given specific grants to.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUsers200ApplicationJSON])
                res.get_users_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUsersDefaultApplicationJSON])
                res.get_users_default_application_json_object = out

        return res

    
    def get_vla_ns(self, request: operations.GetVlaNsRequest) -> operations.GetVlaNsResponse:
        r"""VLANs List
        Returns a list of all Virtual Local Area Networks (VLANs) on your Account. VLANs provide
        a mechanism for secure communication between two or more Linodes that are assigned to the
        same VLAN and are both within the same Layer 2 broadcast domain.
        
        VLANs are created and attached to Linodes by using the `interfaces` property for the following endpoints:
        
        - Linode Create ([POST /linode/instances](/docs/api/linode-instances/#linode-create))
        - Configuration Profile Create ([POST /linode/instances/{linodeId}/configs](/docs/api/linode-instances/#configuration-profile-create))
        - Configuration Profile Update ([PUT /linode/instances/{linodeId}/configs/{configId}](/docs/api/linode-instances/#configuration-profile-update))
        
        There are several ways to detach a VLAN from a Linode:
        
        - [Update](/docs/api/linode-instances/#configuration-profile-update) the active Configuration Profile to remove the VLAN interface, then [reboot](/docs/api/linode-instances/#linode-reboot) the Linode.
        - [Create](/docs/api/linode-instances/#configuration-profile-create) a new Configuration Profile without the VLAN interface, then [reboot](/docs/apilinode-instances/#linode-reboot) the Linode into the new Configuration Profile.
        - [Delete](/docs/api/linode-instances/#linode-delete) the Linode.
        
        **VLANs cannot be manually renamed.** If a VLAN's label must be changed, create a new VLAN and attach all required Linodes to it.
        
        **VLANs cannot be manually deleted.** There is no need to manually delete a VLAN. If a VLAN is no longer needed, detach it from all Linodes. A VLANs that are not attached to any Linodes are automatically deleted within a short timeframe.
        
        **Note:** Only Next Generation Network (NGN) data centers support VLANs. Use the Regions ([/regions](/docs/api/regions/)) endpoint to view the capabilities of data center regions.
        If a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center,
        the migration or cloning will not initiate. If a Linode cannot be migrated because of an incompatibility,
        you will be prompted to select a different data center or contact support.
        
        """
        
        base_url = operations.GET_VLA_NS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/networking/vlans"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVlaNsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVlaNs200ApplicationJSON])
                res.get_vla_ns_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVlaNsDefaultApplicationJSON])
                res.get_vla_ns_default_application_json_object = out

        return res

    
    def get_volume(self, request: operations.GetVolumeRequest) -> operations.GetVolumeResponse:
        r"""Volume View
        Get information about a single Volume.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{volumeId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volume])
                res.volume = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolumeDefaultApplicationJSON])
                res.get_volume_default_application_json_object = out

        return res

    
    def get_volumes(self, request: operations.GetVolumesRequest) -> operations.GetVolumesResponse:
        r"""Volumes List
        Returns a paginated list of Volumes you have permission to view.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/volumes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolumes200ApplicationJSON])
                res.get_volumes_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolumesDefaultApplicationJSON])
                res.get_volumes_default_application_json_object = out

        return res

    
    def import_domain(self, request: operations.ImportDomainRequest) -> operations.ImportDomainResponse:
        r"""Domain Import
        Imports a domain zone from a remote nameserver.
        Your nameserver must allow zone transfers (AXFR) from the following IPs:
        
          - 96.126.114.97
          - 96.126.114.98
          - 2600:3c00::5e
          - 2600:3c00::5f
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains/import"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImportDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Domain])
                res.domain = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImportDomainDefaultApplicationJSON])
                res.import_domain_default_application_json_object = out

        return res

    
    def migrate_linode_instance(self, request: operations.MigrateLinodeInstanceRequest) -> operations.MigrateLinodeInstanceResponse:
        r"""DC Migration/Pending Host Migration Initiate
        Initiate a pending host migration that has been scheduled by Linode or initiate a cross data center (DC) migration.  A list of pending migrations, if any, can be accessed from [GET /account/notifications](/docs/api/account/#notifications-list). When the migration begins, your Linode will be shutdown if not already off. If the migration initiated the shutdown, it will reboot the Linode when completed.
        
        To initiate a cross DC migration, you must pass a `region` parameter to the request body specifying the target data center region. You can view a list of all available regions and their feature capabilities from [GET /regions](/docs/api/regions/#regions-list). If your Linode has a DC migration already queued or you have initiated a previously scheduled migration, you will not be able to initiate a DC migration until it has completed.
        
        **Note:** Next Generation Network (NGN) data centers do not support IPv6 `/116` pools or IP Failover. If you have these features enabled on your Linode and attempt to migrate to an NGN data center, the migration will not initiate. If a Linode cannot be migrated because of an incompatibility, you will be prompted to select a different data center or contact support.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/migrate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrateLinodeInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.migrate_linode_instance_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MigrateLinodeInstanceDefaultApplicationJSON])
                res.migrate_linode_instance_default_application_json_object = out

        return res

    
    def modify_object_storage_bucket_access(self, request: operations.ModifyObjectStorageBucketAccessRequest) -> operations.ModifyObjectStorageBucketAccessResponse:
        r"""Object Storage Bucket Access Modify
        Allows changing basic Cross-origin Resource Sharing (CORS) and Access Control Level (ACL) settings.
        Only allows enabling/disabling CORS for all origins, and/or setting canned ACLs.
        
        
        For more fine-grained control of both systems, please use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket-acl) directly.
        
        """
        
        base_url = operations.MODIFY_OBJECT_STORAGE_BUCKET_ACCESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/access", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ModifyObjectStorageBucketAccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.modify_object_storage_bucket_access_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ModifyObjectStorageBucketAccessDefaultApplicationJSON])
                res.modify_object_storage_bucket_access_default_application_json_object = out

        return res

    
    def mutate_linode_instance(self, request: operations.MutateLinodeInstanceRequest) -> operations.MutateLinodeInstanceResponse:
        r"""Linode Upgrade
        Linodes created with now-deprecated Types are entitled to a free upgrade to the next generation. A mutating Linode will be allocated any new resources the upgraded Type provides, and will be subsequently restarted if it was currently running.
        If any actions are currently running or queued, those actions must be completed first before you can initiate a mutate.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/mutate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MutateLinodeInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.mutate_linode_instance_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MutateLinodeInstanceDefaultApplicationJSON])
                res.mutate_linode_instance_default_application_json_object = out

        return res

    
    def post_lke_cluster_node_recycle(self, request: operations.PostLkeClusterNodeRecycleRequest) -> operations.PostLkeClusterNodeRecycleResponse:
        r"""Node Recycle
        Recycles an individual Node in the designated Kubernetes Cluster. The Node will be deleted
        and replaced with a new Linode, which may take a few minutes. Replacement Nodes are
        installed with the latest available patch for the Cluster's Kubernetes Version.
        
        **Any local storage on deleted Linodes (such as \"hostPath\" and \"emptyDir\" volumes, or \"local\" PersistentVolumes) will be erased.**
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/nodes/{nodeId}/recycle", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLkeClusterNodeRecycleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.post_lke_cluster_node_recycle_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLkeClusterNodeRecycleDefaultApplicationJSON])
                res.post_lke_cluster_node_recycle_default_application_json_object = out

        return res

    
    def post_lke_cluster_pool_recycle(self, request: operations.PostLkeClusterPoolRecycleRequest) -> operations.PostLkeClusterPoolRecycleResponse:
        r"""Node Pool Recycle
        Recycles a Node Pool for the designated Kubernetes Cluster. All Linodes within the Node Pool will be deleted
        and replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are
        installed with the latest available patch for the Cluster's Kubernetes Version.
        
        **Any local storage on deleted Linodes (such as \"hostPath\" and \"emptyDir\" volumes, or \"local\" PersistentVolumes) will be erased.**
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/pools/{poolId}/recycle", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLkeClusterPoolRecycleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.post_lke_cluster_pool_recycle_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLkeClusterPoolRecycleDefaultApplicationJSON])
                res.post_lke_cluster_pool_recycle_default_application_json_object = out

        return res

    
    def post_lke_cluster_pools(self, request: operations.PostLkeClusterPoolsRequest) -> operations.PostLkeClusterPoolsResponse:
        r"""Node Pool Create
        Creates a new Node Pool for the designated Kubernetes cluster.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/pools", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLkeClusterPoolsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LkeNodePool])
                res.lke_node_pool = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLkeClusterPoolsDefaultApplicationJSON])
                res.post_lke_cluster_pools_default_application_json_object = out

        return res

    
    def post_lke_cluster_recycle(self, request: operations.PostLkeClusterRecycleRequest) -> operations.PostLkeClusterRecycleResponse:
        r"""Cluster Nodes Recycle
        Recycles all nodes in all pools of a designated Kubernetes Cluster. All Linodes within the Cluster will be deleted
        and replaced with new Linodes on a rolling basis, which may take several minutes. Replacement Nodes are
        installed with the latest available [patch version](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/release/versioning.md#kubernetes-release-versioning) for the Cluster's current Kubernetes minor release.
        
        **Any local storage on deleted Linodes (such as \"hostPath\" and \"emptyDir\" volumes, or \"local\" PersistentVolumes) will be erased.**
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/recycle", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLkeClusterRecycleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.post_lke_cluster_recycle_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLkeClusterRecycleDefaultApplicationJSON])
                res.post_lke_cluster_recycle_default_application_json_object = out

        return res

    
    def put_lke_cluster(self, request: operations.PutLkeClusterRequest) -> operations.PutLkeClusterResponse:
        r"""Kubernetes Cluster Update
        Updates a Kubernetes cluster.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutLkeClusterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_lke_cluster_200_application_json_any = out

        return res

    
    def put_lke_node_pool(self, request: operations.PutLkeNodePoolRequest) -> operations.PutLkeNodePoolResponse:
        r"""Node Pool Update
        Updates a Node Pool's count.
        
        Linodes will be created or deleted to match changes to the Node Pool's count.
        
        **Any local storage on deleted Linodes (such as \"hostPath\" and \"emptyDir\" volumes, or \"local\" PersistentVolumes) will be erased.**
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/pools/{poolId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutLkeNodePoolResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LkeNodePool])
                res.lke_node_pool = out

        return res

    
    def reboot_linode_instance(self, request: operations.RebootLinodeInstanceRequest) -> operations.RebootLinodeInstanceResponse:
        r"""Linode Reboot
        Reboots a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a reboot.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/reboot", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RebootLinodeInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.reboot_linode_instance_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RebootLinodeInstanceDefaultApplicationJSON])
                res.reboot_linode_instance_default_application_json_object = out

        return res

    
    def rebuild_linode_instance(self, request: operations.RebuildLinodeInstanceRequest) -> operations.RebuildLinodeInstanceResponse:
        r"""Linode Rebuild
        Rebuilds a Linode you have the `read_write` permission to modify.
        A rebuild will first shut down the Linode, delete all disks and configs on the Linode, and then deploy a new `image` to the Linode with the given attributes. Additionally:
        
          * Requires an `image` be supplied.
          * Requires a `root_pass` be supplied to use for the root User's Account.
          * It is recommended to supply SSH keys for the root User using the
            `authorized_keys` field.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/rebuild", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RebuildLinodeInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Linode])
                res.linode = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RebuildLinodeInstanceDefaultApplicationJSON])
                res.rebuild_linode_instance_default_application_json_object = out

        return res

    
    def rebuild_node_balancer_config(self, request: operations.RebuildNodeBalancerConfigRequest) -> operations.RebuildNodeBalancerConfigResponse:
        r"""Config Rebuild
        Rebuilds a NodeBalancer Config and its Nodes that you have permission to modify.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}/rebuild", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RebuildNodeBalancerConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NodeBalancer])
                res.node_balancer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RebuildNodeBalancerConfigDefaultApplicationJSON])
                res.rebuild_node_balancer_config_default_application_json_object = out

        return res

    
    def remove_linode_ip(self, request: operations.RemoveLinodeIPRequest) -> operations.RemoveLinodeIPResponse:
        r"""IPv4 Address Delete
        Deletes a public IPv4 address associated with this Linode. This will fail if it is the Linode's last remaining public IPv4 address. Private IPv4 addresses cannot be removed via this endpoint.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/ips/{address}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveLinodeIPResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.remove_linode_ip_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RemoveLinodeIPDefaultApplicationJSON])
                res.remove_linode_ip_default_application_json_object = out

        return res

    
    def rescue_linode_instance(self, request: operations.RescueLinodeInstanceRequest) -> operations.RescueLinodeInstanceResponse:
        r"""Linode Boot into Rescue Mode
        Rescue Mode is a safe environment for performing many system recovery and disk management tasks. Rescue Mode is based on the Finnix recovery distribution, a self-contained and bootable Linux distribution. You can also use Rescue Mode for tasks other than disaster recovery, such as formatting disks to use different filesystems, copying data between disks, and downloading files from a disk via SSH and SFTP.
        * Note that \"sdh\" is reserved and unavailable during rescue.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/rescue", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RescueLinodeInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.rescue_linode_instance_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RescueLinodeInstanceDefaultApplicationJSON])
                res.rescue_linode_instance_default_application_json_object = out

        return res

    
    def reset_client_secret(self, request: operations.ResetClientSecretRequest) -> operations.ResetClientSecretResponse:
        r"""OAuth Client Secret Reset
        Resets the OAuth Client secret for a client you own, and returns the OAuth Client with the plaintext secret. This secret is not supposed to be publicly known or disclosed anywhere. This can be used to generate a new secret in case the one you have has been leaked, or to get a new secret if you lost the original. The old secret is expired immediately, and logins to your client with the old secret will fail.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/oauth-clients/{clientId}/reset-secret", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetClientSecretResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OAuthClient])
                res.o_auth_client = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ResetClientSecretDefaultApplicationJSON])
                res.reset_client_secret_default_application_json_object = out

        return res

    
    def reset_disk_password(self, request: operations.ResetDiskPasswordRequest) -> operations.ResetDiskPasswordResponse:
        r"""Disk Root Password Reset
        Resets the password of a Disk you have permission to `read_write`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks/{diskId}/password", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetDiskPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.reset_disk_password_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ResetDiskPasswordDefaultApplicationJSON])
                res.reset_disk_password_default_application_json_object = out

        return res

    
    def reset_linode_password(self, request: operations.ResetLinodePasswordRequest) -> operations.ResetLinodePasswordResponse:
        r"""Linode Root Password Reset
        Resets the root password for this Linode.
        * Your Linode must be [shut down](/docs/api/linode-instances/#linode-shut-down) for a password reset to complete.
        * If your Linode has more than one disk (not counting its swap disk), use the [Reset Disk Root Password](/docs/api/linode-instances/#disk-root-password-reset) endpoint to update a specific disk's root password.
        * A `password_reset` event is generated when a root password reset is successful.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/password", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResetLinodePasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.reset_linode_password_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ResetLinodePasswordDefaultApplicationJSON])
                res.reset_linode_password_default_application_json_object = out

        return res

    
    def resize_disk(self, request: operations.ResizeDiskRequest) -> operations.ResizeDiskResponse:
        r"""Disk Resize
        Resizes a Disk you have permission to `read_write`.
        
        The Disk must not be in use. If the Disk is in use, the request will
        succeed but the resize will ultimately fail. For a request to succeed,
        the Linode must be shut down prior to resizing the Disk, or the Disk
        must not be assigned to the Linode's active Configuration Profile.
        
        If you are resizing the Disk to a smaller size, it cannot be made smaller
        than what is required by the total size of the files current on the Disk.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks/{diskId}/resize", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResizeDiskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resize_disk_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ResizeDiskDefaultApplicationJSON])
                res.resize_disk_default_application_json_object = out

        return res

    
    def resize_linode_instance(self, request: operations.ResizeLinodeInstanceRequest) -> operations.ResizeLinodeInstanceResponse:
        r"""Linode Resize
        Resizes a Linode you have the `read_write` permission to a different Type. If any actions are currently running or queued, those actions must be completed first before you can initiate a resize. Additionally, the following criteria must be met in order to resize a Linode:
        
          * The Linode must not have a pending migration.
          * Your Account cannot have an outstanding balance.
          * The Linode must not have more disk allocation than the new Type allows.
            * In that situation, you must first delete or resize the disk to be smaller.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/resize", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResizeLinodeInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resize_linode_instance_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ResizeLinodeInstanceDefaultApplicationJSON])
                res.resize_linode_instance_default_application_json_object = out

        return res

    
    def resize_volume(self, request: operations.ResizeVolumeRequest) -> operations.ResizeVolumeResponse:
        r"""Volume Resize
        Resize an existing Volume on your Account. In order for this request to complete successfully, your User must have the `read_write` permissions to the Volume.
        * Volumes can only be resized up.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{volumeId}/resize", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResizeVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.resize_volume_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ResizeVolumeDefaultApplicationJSON])
                res.resize_volume_default_application_json_object = out

        return res

    
    def restore_backup(self, request: operations.RestoreBackupRequest) -> operations.RestoreBackupResponse:
        r"""Backup Restore
        Restores a Linode's Backup to the specified Linode.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/backups/{backupId}/restore", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RestoreBackupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.restore_backup_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RestoreBackupDefaultApplicationJSON])
                res.restore_backup_default_application_json_object = out

        return res

    
    def revoke_trusted_device(self, request: operations.RevokeTrustedDeviceRequest) -> operations.RevokeTrustedDeviceResponse:
        r"""Trusted Device Revoke
        Revoke an active TrustedDevice for your User.  Once a TrustedDevice is revoked, this device will have to log in again before accessing your Linode account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profile/devices/{deviceId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RevokeTrustedDeviceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.revoke_trusted_device_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RevokeTrustedDeviceDefaultApplicationJSON])
                res.revoke_trusted_device_default_application_json_object = out

        return res

    
    def set_client_thumbnail(self, request: operations.SetClientThumbnailRequest) -> operations.SetClientThumbnailResponse:
        r"""OAuth Client Thumbnail Update
        Upload a thumbnail for a client you own.  You must upload an image file that will be returned when the thumbnail is retrieved.  This image will be publicly-viewable.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/oauth-clients/{clientId}/thumbnail", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetClientThumbnailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.set_client_thumbnail_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SetClientThumbnailDefaultApplicationJSON])
                res.set_client_thumbnail_default_application_json_object = out

        return res

    
    def share_i_ps(self, request: operations.ShareIPsRequest) -> operations.ShareIPsResponse:
        r"""IP Sharing Configure
        Configure shared IPs.  A shared IP may be brought up on a Linode other than the one it lists in its response.  This can be used to allow one Linode to begin serving requests should another become unresponsive.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/networking/ipv4/share"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ShareIPsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.share_i_ps_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ShareIPsDefaultApplicationJSON])
                res.share_i_ps_default_application_json_object = out

        return res

    
    def shutdown_linode_instance(self, request: operations.ShutdownLinodeInstanceRequest) -> operations.ShutdownLinodeInstanceResponse:
        r"""Linode Shut Down
        Shuts down a Linode you have permission to modify. If any actions are currently running or queued, those actions must be completed first before you can initiate a shutdown.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/shutdown", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ShutdownLinodeInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.shutdown_linode_instance_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ShutdownLinodeInstanceDefaultApplicationJSON])
                res.shutdown_linode_instance_default_application_json_object = out

        return res

    
    def tfa_confirm(self, request: operations.TfaConfirmRequest) -> operations.TfaConfirmResponse:
        r"""Two Factor Authentication Confirm/Enable
        Confirms that you can successfully generate Two Factor codes and enables TFA on your Account. Once this is complete, login attempts from untrusted computers will be required to provide a Two Factor code before they are successful.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile/tfa-enable-confirm"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TfaConfirmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tfa_confirm_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TfaConfirmDefaultApplicationJSON])
                res.tfa_confirm_default_application_json_object = out

        return res

    
    def tfa_disable(self, request: operations.TfaDisableRequest) -> operations.TfaDisableResponse:
        r"""Two Factor Authentication Disable
        Disables Two Factor Authentication for your User. Once successful, login attempts from untrusted computers will only require a password before being successful. This is less secure, and is discouraged.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile/tfa-disable"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TfaDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.tfa_disable_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TfaDisableDefaultApplicationJSON])
                res.tfa_disable_default_application_json_object = out

        return res

    
    def tfa_enable(self, request: operations.TfaEnableRequest) -> operations.TfaEnableResponse:
        r"""Two Factor Secret Create
        Generates a Two Factor secret for your User. TFA will not be enabled until you have successfully confirmed the code you were given with [tfa-enable-confirm](/docs/api/profile/#two-factor-secret-create) (see below). Once enabled, logins from untrusted computers will be required to provide a TFA code before they are successful.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile/tfa-enable"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TfaEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.tfa_enable_200_application_json_any = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TfaEnableDefaultApplicationJSON])
                res.tfa_enable_default_application_json_object = out

        return res

    
    def update_account(self, request: operations.UpdateAccountRequest) -> operations.UpdateAccountResponse:
        r"""Account Update
        Updates contact and billing information related to your Account.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateAccountDefaultApplicationJSON])
                res.update_account_default_application_json_object = out

        return res

    
    def update_account_settings(self, request: operations.UpdateAccountSettingsRequest) -> operations.UpdateAccountSettingsResponse:
        r"""Account Settings Update
        Updates your Account settings.
        
        To update your Longview subscription plan, send a request to [Update Longview Plan](/docs/api/longview/#longview-plan-update).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/settings"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAccountSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountSettings])
                res.account_settings = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateAccountSettingsDefaultApplicationJSON])
                res.update_account_settings_default_application_json_object = out

        return res

    
    def update_client(self, request: operations.UpdateClientRequest) -> operations.UpdateClientResponse:
        r"""OAuth Client Update
        Update information about an OAuth Client on your Account. This can be especially useful to update the `redirect_uri` of your client in the event that the callback url changed in your application.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/oauth-clients/{clientId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OAuthClient])
                res.o_auth_client = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateClientDefaultApplicationJSON])
                res.update_client_default_application_json_object = out

        return res

    
    def update_disk(self, request: operations.UpdateDiskRequest) -> operations.UpdateDiskResponse:
        r"""Disk Update
        Updates a Disk that you have permission to `read_write`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks/{diskId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDiskResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Disk])
                res.disk = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateDiskDefaultApplicationJSON])
                res.update_disk_default_application_json_object = out

        return res

    
    def update_domain(self, request: operations.UpdateDomainRequest) -> operations.UpdateDomainResponse:
        r"""Domain Update
        Update information about a Domain in Linode's DNS Manager.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Domain])
                res.domain = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateDomainDefaultApplicationJSON])
                res.update_domain_default_application_json_object = out

        return res

    
    def update_domain_record(self, request: operations.UpdateDomainRecordRequest) -> operations.UpdateDomainRecordResponse:
        r"""Domain Record Update
        Updates a single Record on this Domain.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainId}/records/{recordId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDomainRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DomainRecord])
                res.domain_record = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateDomainRecordDefaultApplicationJSON])
                res.update_domain_record_default_application_json_object = out

        return res

    
    def update_firewall(self, request: operations.UpdateFirewallRequest) -> operations.UpdateFirewallResponse:
        r"""Firewall Update
        Updates information for a Firewall. Some parts of a Firewall's configuration cannot
        be manipulated by this endpoint:
        
        - A Firewall's Devices cannot be set with this endpoint. Instead, use the
        [Create Firewall Device](/docs/api/networking/#firewall-device-create)
        and [Delete Firewall Device](/docs/api/networking/#firewall-device-delete)
        endpoints to assign and remove this Firewall from Linode services.
        
        - A Firewall's Rules cannot be changed with this endpoint. Instead, use the
        [Update Firewall Rules](/docs/api/networking/#firewall-rules-update)
        endpoint to update your Rules.
        
        - A Firewall's status can be set to `enabled` or `disabled` by this endpoint, but it cannot be
        set to `deleted`. Instead, use the
        [Delete Firewall](/docs/api/networking/#firewall-delete)
        endpoint to delete a Firewall.
        
        If a Firewall's status is changed with this endpoint, a corresponding `firewall_enable` or
        `firewall_disable` Event will be generated.
        
        Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
        
        """
        
        base_url = operations.UPDATE_FIREWALL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFirewallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Firewall])
                res.firewall = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateFirewallDefaultApplicationJSON])
                res.update_firewall_default_application_json_object = out

        return res

    
    def update_firewall_rules(self, request: operations.UpdateFirewallRulesRequest) -> operations.UpdateFirewallRulesResponse:
        r"""Firewall Rules Update
        Updates the inbound and outbound Rules for a Firewall. Using this endpoint will
        replace all of a Firewall's ruleset with the Rules specified in your request.
        
        Cloud Firewall is not available in every data center region. For the current list of availability, access the Regions List ([GET /regions](/docs/api/regions/#regions-list)) endpoint or see the [Cloud Firewall Product Documentation](https://www.linode.com/docs/products/networking/cloud-firewall/).
        
        """
        
        base_url = operations.UPDATE_FIREWALL_RULES_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}/rules", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFirewallRulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Rules])
                res.rules = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateFirewallRulesDefaultApplicationJSON])
                res.update_firewall_rules_default_application_json_object = out

        return res

    
    def update_ip(self, request: operations.UpdateIPRequest) -> operations.UpdateIPResponse:
        r"""IP Address RDNS Update
        Sets RDNS on an IP Address. Forward DNS must already be set up for reverse DNS to be applied. If you set the RDNS to `null` for public IPv4 addresses, it will be reset to the default _members.linode.com_ RDNS value.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networking/ips/{address}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateIPResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateIPDefaultApplicationJSON])
                res.update_ip_default_application_json_object = out

        return res

    
    def update_image(self, request: operations.UpdateImageRequest) -> operations.UpdateImageResponse:
        r"""Image Update
        Updates a private Image that you have permission to `read_write`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/images/{imageId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagePrivate])
                res.image_private = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateImageDefaultApplicationJSON])
                res.update_image_default_application_json_object = out

        return res

    
    def update_linode_config(self, request: operations.UpdateLinodeConfigRequest) -> operations.UpdateLinodeConfigResponse:
        r"""Configuration Profile Update
        Updates a Configuration profile.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/configs/{configId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateLinodeConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LinodeConfig])
                res.linode_config = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateLinodeConfigDefaultApplicationJSON])
                res.update_linode_config_default_application_json_object = out

        return res

    
    def update_linode_ip(self, request: operations.UpdateLinodeIPRequest) -> operations.UpdateLinodeIPResponse:
        r"""IP Address Update
        Updates a particular IP Address associated with this Linode. Only allows setting/resetting reverse DNS.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/ips/{address}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateLinodeIPResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IPAddress])
                res.ip_address = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateLinodeIPDefaultApplicationJSON])
                res.update_linode_ip_default_application_json_object = out

        return res

    
    def update_linode_instance(self, request: operations.UpdateLinodeInstanceRequest) -> operations.UpdateLinodeInstanceResponse:
        r"""Linode Update
        Updates a Linode that you have permission to `read_write`.
        
        **Important**: You must be an unrestricted User in order to add or modify tags on Linodes.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateLinodeInstanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Linode])
                res.linode = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateLinodeInstanceDefaultApplicationJSON])
                res.update_linode_instance_default_application_json_object = out

        return res

    
    def update_longview_client(self, request: operations.UpdateLongviewClientRequest) -> operations.UpdateLongviewClientResponse:
        r"""Longview Client Update
        Updates a Longview Client.  This cannot update how it monitors your server; use the Longview Client application on your Linode for monitoring configuration.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/longview/clients/{clientId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateLongviewClientResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LongviewClient])
                res.longview_client = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateLongviewClientDefaultApplicationJSON])
                res.update_longview_client_default_application_json_object = out

        return res

    
    def update_longview_plan(self, request: operations.UpdateLongviewPlanRequest) -> operations.UpdateLongviewPlanResponse:
        r"""Longview Plan Update
        Update your Longview plan to that of the given subcription ID. This returns a `LongviewSubscription` object for the updated Longview Pro plan, or an empty set `{}` if the updated plan is Longview Free.
        
        You must have `\"longview_subscription\": true` configured as a `global` [User Grant](/docs/api/account/#users-grants-view) in order to access this endpoint.
        
        You can send a request to the [List Longview Subscriptions](/docs/api/longview/#longview-subscriptions-list) endpoint to receive the details, including `id`'s, of each plan.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/longview/plan"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateLongviewPlanResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LongviewSubscription])
                res.longview_subscription = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateLongviewPlanDefaultApplicationJSON])
                res.update_longview_plan_default_application_json_object = out

        return res

    
    def update_managed_contact(self, request: operations.UpdateManagedContactRequest) -> operations.UpdateManagedContactResponse:
        r"""Managed Contact Update
        Updates information about a Managed Contact.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/contacts/{contactId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateManagedContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedContact])
                res.managed_contact = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateManagedContactDefaultApplicationJSON])
                res.update_managed_contact_default_application_json_object = out

        return res

    
    def update_managed_credential(self, request: operations.UpdateManagedCredentialRequest) -> operations.UpdateManagedCredentialResponse:
        r"""Managed Credential Update
        Updates the label of a Managed Credential. This endpoint does not update the username and password for a Managed Credential. To do this, use the Update Managed Credential Username and Password ([POST /managed/credentials/{credentialId}/update](https://developers.linode.com/api/docs/v4#operation/updateManagedCredentialUsernamePassword)) endpoint instead.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/credentials/{credentialId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateManagedCredentialResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedCredential])
                res.managed_credential = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateManagedCredentialDefaultApplicationJSON])
                res.update_managed_credential_default_application_json_object = out

        return res

    
    def update_managed_credential_username_password(self, request: operations.UpdateManagedCredentialUsernamePasswordRequest) -> operations.UpdateManagedCredentialUsernamePasswordResponse:
        r"""Managed Credential Username and Password Update
        Updates the username and password for a Managed Credential.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/credentials/{credentialId}/update", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateManagedCredentialUsernamePasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_managed_credential_username_password_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateManagedCredentialUsernamePasswordDefaultApplicationJSON])
                res.update_managed_credential_username_password_default_application_json_object = out

        return res

    
    def update_managed_linode_setting(self, request: operations.UpdateManagedLinodeSettingRequest) -> operations.UpdateManagedLinodeSettingResponse:
        r"""Linode's Managed Settings Update
        Updates a single Linode's Managed settings.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/linode-settings/{linodeId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateManagedLinodeSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedLinodeSettings])
                res.managed_linode_settings = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateManagedLinodeSettingDefaultApplicationJSON])
                res.update_managed_linode_setting_default_application_json_object = out

        return res

    
    def update_managed_service(self, request: operations.UpdateManagedServiceRequest) -> operations.UpdateManagedServiceResponse:
        r"""Managed Service Update
        Updates information about a Managed Service.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/managed/services/{serviceId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateManagedServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ManagedService])
                res.managed_service = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateManagedServiceDefaultApplicationJSON])
                res.update_managed_service_default_application_json_object = out

        return res

    
    def update_node_balancer(self, request: operations.UpdateNodeBalancerRequest) -> operations.UpdateNodeBalancerResponse:
        r"""NodeBalancer Update
        Updates information about a NodeBalancer you can access.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNodeBalancerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NodeBalancer])
                res.node_balancer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateNodeBalancerDefaultApplicationJSON])
                res.update_node_balancer_default_application_json_object = out

        return res

    
    def update_node_balancer_config(self, request: operations.UpdateNodeBalancerConfigRequest) -> operations.UpdateNodeBalancerConfigResponse:
        r"""Config Update
        Updates the configuration for a single port on a NodeBalancer.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNodeBalancerConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NodeBalancerConfig])
                res.node_balancer_config = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateNodeBalancerConfigDefaultApplicationJSON])
                res.update_node_balancer_config_default_application_json_object = out

        return res

    
    def update_node_balancer_node(self, request: operations.UpdateNodeBalancerNodeRequest) -> operations.UpdateNodeBalancerNodeResponse:
        r"""Node Update
        Updates information about a Node, a backend for this NodeBalancer's configured port.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNodeBalancerNodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NodeBalancerNode])
                res.node_balancer_node = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateNodeBalancerNodeDefaultApplicationJSON])
                res.update_node_balancer_node_default_application_json_object = out

        return res

    
    def update_object_storage_bucket_acl(self, request: operations.UpdateObjectStorageBucketACLRequest) -> operations.UpdateObjectStorageBucketACLResponse:
        r"""Object Storage Object ACL Config Update
        Update an Object's configured Access Control List (ACL) in this Object Storage bucket.
        ACLs define who can access your buckets and objects and specify the level of access
        granted to those users.
        
        
        This endpoint is available for convenience. It is recommended that instead you
        use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#set-object-acl) directly.
        
        """
        
        base_url = operations.UPDATE_OBJECT_STORAGE_BUCKET_ACL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/object-acl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateObjectStorageBucketACLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateObjectStorageBucketACL200ApplicationJSON])
                res.update_object_storage_bucket_acl_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateObjectStorageBucketACLDefaultApplicationJSON])
                res.update_object_storage_bucket_acl_default_application_json_object = out

        return res

    
    def update_object_storage_bucket_access(self, request: operations.UpdateObjectStorageBucketAccessRequest) -> operations.UpdateObjectStorageBucketAccessResponse:
        r"""Object Storage Bucket Access Update
        Allows changing basic Cross-origin Resource Sharing (CORS) and Access Control Level (ACL) settings.
        Only allows enabling/disabling CORS for all origins, and/or setting canned ACLs.
        
        
        For more fine-grained control of both systems, please use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/bucketops/#put-bucket-acl) directly.
        
        """
        
        base_url = operations.UPDATE_OBJECT_STORAGE_BUCKET_ACCESS_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/access", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateObjectStorageBucketAccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_object_storage_bucket_access_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateObjectStorageBucketAccessDefaultApplicationJSON])
                res.update_object_storage_bucket_access_default_application_json_object = out

        return res

    
    def update_object_storage_key(self, request: operations.UpdateObjectStorageKeyRequest) -> operations.UpdateObjectStorageKeyResponse:
        r"""Object Storage Key Update
        Updates an Object Storage Key on your account.
        
        """
        
        base_url = operations.UPDATE_OBJECT_STORAGE_KEY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/keys/{keyId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateObjectStorageKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObjectStorageKey])
                res.object_storage_key = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateObjectStorageKeyDefaultApplicationJSON])
                res.update_object_storage_key_default_application_json_object = out

        return res

    
    def update_personal_access_token(self, request: operations.UpdatePersonalAccessTokenRequest) -> operations.UpdatePersonalAccessTokenResponse:
        r"""Personal Access Token Update
        Updates a Personal Access Token.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profile/tokens/{tokenId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePersonalAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonalAccessToken])
                res.personal_access_token = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdatePersonalAccessTokenDefaultApplicationJSON])
                res.update_personal_access_token_default_application_json_object = out

        return res

    
    def update_profile(self, request: operations.UpdateProfileRequest) -> operations.UpdateProfileResponse:
        r"""Profile Update
        Update information in your Profile.  This endpoint requires the \"account:read_write\" OAuth Scope.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Profile])
                res.profile = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateProfileDefaultApplicationJSON])
                res.update_profile_default_application_json_object = out

        return res

    
    def update_ssh_key(self, request: operations.UpdateSSHKeyRequest) -> operations.UpdateSSHKeyResponse:
        r"""SSH Key Update
        Updates an SSH Key that you have permission to `read_write`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/profile/sshkeys/{sshKeyId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SSHKey])
                res.ssh_key = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateSSHKeyDefaultApplicationJSON])
                res.update_ssh_key_default_application_json_object = out

        return res

    
    def update_stack_script(self, request: operations.UpdateStackScriptRequest) -> operations.UpdateStackScriptResponse:
        r"""StackScript Update
        Updates a StackScript.
        
        **Once a StackScript is made public, it cannot be made private.**
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/linode/stackscripts/{stackscriptId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateStackScriptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StackScript])
                res.stack_script = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateStackScriptDefaultApplicationJSON])
                res.update_stack_script_default_application_json_object = out

        return res

    
    def update_user(self, request: operations.UpdateUserRequest) -> operations.UpdateUserResponse:
        r"""User Update
        Update information about a User on your Account. This can be used to change the restricted status of a User. When making a User restricted, no grants will be configured by default and you must then set up grants in order for the User to access anything on the Account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{username}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateUserDefaultApplicationJSON])
                res.update_user_default_application_json_object = out

        return res

    
    def update_user_grants(self, request: operations.UpdateUserGrantsRequest) -> operations.UpdateUserGrantsResponse:
        r"""User's Grants Update
        Update the grants a User has. This can be used to give a User access to new entities or actions, or take access away.  You do not need to include the grant for every entity on the Account in this request; any that are not included will remain unchanged.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/users/{username}/grants", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserGrantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GrantsResponse])
                res.grants_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateUserGrantsDefaultApplicationJSON])
                res.update_user_grants_default_application_json_object = out

        return res

    
    def update_user_preferences(self, request: operations.UpdateUserPreferencesRequest) -> operations.UpdateUserPreferencesResponse:
        r"""User Preferences Update
        Updates a user's preferences. These preferences are tied to the OAuth client that generated the token making the request. The user preferences endpoints allow consumers of the API to store arbitrary JSON data, such as a user's font size preference or preferred display name. An account may have multiple preferences. Preferences, and the pertaining request body, may contain any arbitrary JSON data that the user would like to store.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/profile/preferences"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserPreferencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_user_preferences_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateUserPreferencesDefaultApplicationJSON])
                res.update_user_preferences_default_application_json_object = out

        return res

    
    def update_volume(self, request: operations.UpdateVolumeRequest) -> operations.UpdateVolumeResponse:
        r"""Volume Update
        Updates a Volume that you have permission to `read_write`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/volumes/{volumeId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volume])
                res.volume = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateVolumeDefaultApplicationJSON])
                res.update_volume_default_application_json_object = out

        return res

    
    def view_managed_ssh_key(self, request: operations.ViewManagedSSHKeyRequest) -> operations.ViewManagedSSHKeyResponse:
        r"""Managed SSH Key View
        Returns the unique SSH public key assigned to your Linode account's Managed service. If you [add this public key](/docs/platform/linode-managed/#adding-the-public-key) to a Linode on your account, Linode special forces will be able to log in to the Linode with this key when attempting to resolve issues.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/managed/credentials/sshkey"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ViewManagedSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ViewManagedSSHKey200ApplicationJSON])
                res.view_managed_ssh_key_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ViewManagedSSHKeyDefaultApplicationJSON])
                res.view_managed_ssh_key_default_application_json_object = out

        return res

    
    def view_object_storage_bucket_acl(self, request: operations.ViewObjectStorageBucketACLRequest) -> operations.ViewObjectStorageBucketACLResponse:
        r"""Object Storage Object ACL Config View
        View an Object’s configured Access Control List (ACL) in this Object Storage bucket.
        ACLs define who can access your buckets and objects and specify the level of access
        granted to those users.
        
        
        This endpoint is available for convenience. It is recommended that instead you
        use the more [fully-featured S3 API](https://docs.ceph.com/en/latest/radosgw/s3/objectops/#get-object-acl) directly.
        
        """
        
        base_url = operations.VIEW_OBJECT_STORAGE_BUCKET_ACL_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/object-acl", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ViewObjectStorageBucketACLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ViewObjectStorageBucketACL200ApplicationJSON])
                res.view_object_storage_bucket_acl_200_application_json_object = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ViewObjectStorageBucketACLDefaultApplicationJSON])
                res.view_object_storage_bucket_acl_default_application_json_object = out

        return res

    