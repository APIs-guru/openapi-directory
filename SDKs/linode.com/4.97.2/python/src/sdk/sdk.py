import warnings
import requests
from typing import Any,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def get_nodebalancers_node_balancer_id_stats(self, request: operations.GetNodebalancersNodeBalancerIDStatsRequest) -> operations.GetNodebalancersNodeBalancerIDStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/stats", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.POST_IMAGES_UPLOAD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/images/upload"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/entity-transfers/{token}/accept", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/service-transfers/{token}/accept", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/configs", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/ips", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile/sshkeys"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/linode/stackscripts"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/networking/ips"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/networking/ipv4/assign"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{volumeId}/attach", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/boot", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/cancel"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/backups/cancel", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.CANCEL_OBJECT_STORAGE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/object-storage/cancel"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/domains/{domainId}/clone", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks/{diskId}/clone", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/clone", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{volumeId}/clone", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/support/tickets/{ticketId}/close", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/oauth-clients"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/credit-card"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/domains"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/domains/{domainId}/records", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/entity-transfers"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_FIREWALL_DEVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}/devices", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_FIREWALLS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/networking/firewalls"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/images"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/lke/clusters"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/linode/instances"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/longview/clients"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/managed/contacts"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/managed/credentials"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/managed/services"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/nodebalancers"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_OBJECT_STORAGE_BUCKET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/object-storage/buckets"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_OBJECT_STORAGE_KEYS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/object-storage/keys"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_OBJECT_STORAGE_OBJECT_URL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/object-url", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_OBJECT_STORAGE_SSL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/ssl", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/payments/paypal"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/payments"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.CREATE_PAYMENT_METHOD_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/account/payment-methods"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile/tokens"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/promo-codes"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/service-transfers"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/backups", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tags"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/support/tickets"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/support/tickets/{ticketId}/attachments", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/support/tickets/{ticketId}/replies", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/users"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/volumes"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/oauth-clients/{clientId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks/{diskId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/domains/{domainId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/domains/{domainId}/records/{recordId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/entity-transfers/{token}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_FIREWALL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_FIREWALL_DEVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}/devices/{deviceId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/images/{imageId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/nodes/{nodeId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/pools/{poolId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/configs/{configId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/longview/clients/{clientId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/contacts/{contactId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/credentials/{credentialId}/revoke", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/services/{serviceId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_OBJECT_STORAGE_BUCKET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_OBJECT_STORAGE_KEY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/keys/{keyId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.DELETE_OBJECT_STORAGE_SSL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/ssl", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/profile/tokens/{tokenId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/profile/apps/{appId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/profile/sshkeys/{sshKeyId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/service-transfers/{token}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/stackscripts/{stackscriptId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tags/{label}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/users/{username}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{volumeId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{volumeId}/detach", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/services/{serviceId}/disable", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/settings/managed-enable"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/backups/enable", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/services/{serviceId}/enable", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/events/{eventId}/read", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/events/{eventId}/seen", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/payments/paypal/execute"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/logins/{loginId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/logins"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/settings"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/backups/{backupId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/backups", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/oauth-clients/{clientId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/oauth-clients/{clientId}/thumbnail", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/oauth-clients"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile/devices"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/domains/{domainId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/domains/{domainId}/records/{recordId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/domains/{domainId}/records", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainRecordsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDomainRecords200ApplicationJSON])
                res.get_domain_records_200_application_json_object = out

        return res

    
    
    def get_domain_zone(self, request: operations.GetDomainZoneRequest) -> operations.GetDomainZoneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/domains/{domainId}/zone-file", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/domains"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/entity-transfers/{token}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/entity-transfers"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/events/{eventId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/events"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_FIREWALL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_FIREWALL_DEVICE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}/devices/{deviceId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_FIREWALL_DEVICES_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}/devices", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_FIREWALL_RULES_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}/rules", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_FIREWALLS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/networking/firewalls"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networking/ips/{address}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/networking/ips"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/networking/ipv6/pools"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/networking/ipv6/ranges"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/images/{imageId}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/images"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/invoices/{invoiceId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/invoices/{invoiceId}/items", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/invoices"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/kernels/{kernelId}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/linode/kernels"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/api-endpoints", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/kubeconfig", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/nodes/{nodeId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/pools", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/lke/clusters"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/pools/{poolId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLkeNodePoolResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LkeNodePool])
                res.lke_node_pool = out

        return res

    
    
    def get_lke_version(self, request: operations.GetLkeVersionRequest) -> operations.GetLkeVersionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/versions/{version}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/lke/versions"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/configs/{configId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/configs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinodeConfigsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLinodeConfigs200ApplicationJSON])
                res.get_linode_configs_200_application_json_object = out

        return res

    
    
    def get_linode_disk(self, request: operations.GetLinodeDiskRequest) -> operations.GetLinodeDiskResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks/{diskId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/firewalls", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/ips/{address}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/ips", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/linode/instances"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/stats", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/stats/{year}/{month}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/transfer", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/transfer/{year}/{month}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/types/{typeId}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/linode/types"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/volumes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/longview/clients/{clientId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/longview/clients"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/longview/plan"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/longview/subscriptions/{subscriptionId}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/longview/subscriptions"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_MAINTENANCE_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/account/maintenance"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/contacts/{contactId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/managed/contacts"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/credentials/{credentialId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/managed/credentials"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/issues/{issueId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/managed/issues"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/linode-settings/{linodeId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/managed/linode-settings"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/services/{serviceId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/managed/services"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/managed/stats"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/nodebalancers"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/notifications"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_OBJECT_STORAGE_BUCKET_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_OBJECT_STORAGE_BUCKET_CONTENT_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/object-list", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_OBJECT_STORAGE_BUCKETIN_CLUSTER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_OBJECT_STORAGE_BUCKETS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/object-storage/buckets"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_OBJECT_STORAGE_CLUSTER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/clusters/{clusterId}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_OBJECT_STORAGE_CLUSTERS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/object-storage/clusters"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_OBJECT_STORAGE_KEY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/keys/{keyId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_OBJECT_STORAGE_KEYS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/object-storage/keys"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_OBJECT_STORAGE_SSL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/ssl", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_OBJECT_STORAGE_TRANSFER_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/object-storage/transfer"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/payments/{paymentId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_PAYMENT_METHODS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/account/payment-methods"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/payments"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/profile/tokens/{tokenId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile/tokens"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/profile/apps/{appId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile/apps"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile/grants"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/profile/logins/{loginId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile/logins"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/regions/{regionId}", request.path_params)
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/regions"
        
        client = self.client

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/profile/sshkeys/{sshKeyId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile/sshkeys"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/service-transfers/{token}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/service-transfers"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/stackscripts/{stackscriptId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/linode/stackscripts"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/tags/{label}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/tags"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/support/tickets/{ticketId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/support/tickets/{ticketId}/replies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/support/tickets"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/transfer"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/profile/devices/{deviceId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/users/{username}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/users/{username}/grants", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile/preferences"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/users"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.GET_VLA_NS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = base_url.removesuffix("/") + "/networking/vlans"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{volumeId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/volumes"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/domains/import"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/migrate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.MODIFY_OBJECT_STORAGE_BUCKET_ACCESS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/access", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/mutate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/nodes/{nodeId}/recycle", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/pools/{poolId}/recycle", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/pools", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/recycle", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutLkeClusterResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.put_lke_cluster_200_application_json_any = out

        return res

    
    
    def put_lke_node_pool(self, request: operations.PutLkeNodePoolRequest) -> operations.PutLkeNodePoolResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/lke/clusters/{clusterId}/pools/{poolId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutLkeNodePoolResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LkeNodePool])
                res.lke_node_pool = out

        return res

    
    
    def reboot_linode_instance(self, request: operations.RebootLinodeInstanceRequest) -> operations.RebootLinodeInstanceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/reboot", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/rebuild", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}/rebuild", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/ips/{address}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/rescue", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/oauth-clients/{clientId}/reset-secret", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks/{diskId}/password", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/password", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks/{diskId}/resize", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/resize", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{volumeId}/resize", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/backups/{backupId}/restore", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/profile/devices/{deviceId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/oauth-clients/{clientId}/thumbnail", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/networking/ipv4/share"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/shutdown", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile/tfa-enable-confirm"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile/tfa-disable"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile/tfa-enable"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/account/settings"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/oauth-clients/{clientId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/disks/{diskId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/domains/{domainId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/domains/{domainId}/records/{recordId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_FIREWALL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_FIREWALL_RULES_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/networking/firewalls/{firewallId}/rules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networking/ips/{address}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/images/{imageId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/configs/{configId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}/ips/{address}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/instances/{linodeId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/longview/clients/{clientId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/longview/plan"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/contacts/{contactId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/credentials/{credentialId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/credentials/{credentialId}/update", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/linode-settings/{linodeId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/managed/services/{serviceId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/nodebalancers/{nodeBalancerId}/configs/{configId}/nodes/{nodeId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_OBJECT_STORAGE_BUCKET_ACL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/object-acl", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_OBJECT_STORAGE_BUCKET_ACCESS_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/access", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.UPDATE_OBJECT_STORAGE_KEY_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/keys/{keyId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/profile/tokens/{tokenId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/profile/sshkeys/{sshKeyId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/linode/stackscripts/{stackscriptId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/users/{username}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/account/users/{username}/grants", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/profile/preferences"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{volumeId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/managed/credentials/sshkey"
        
        client = utils.configure_security_client(request.security)
        

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
        warnings.simplefilter("ignore")

        base_url = operations.VIEW_OBJECT_STORAGE_BUCKET_ACL_SERVERS[0]
        if not request.server_url is None:
            base_url = request.server_url
        url = utils.generate_url(base_url, "/object-storage/buckets/{clusterId}/{bucket}/object-acl", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

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

    