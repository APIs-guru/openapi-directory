import warnings
import requests
from typing import Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://api.hetzner.cloud/v1",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def delete_certificates_id_(self, request: operations.DeleteCertificatesIDRequest) -> operations.DeleteCertificatesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/certificates/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCertificatesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_firewalls_id_(self, request: operations.DeleteFirewallsIDRequest) -> operations.DeleteFirewallsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firewalls/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFirewallsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_floating_ips_id_(self, request: operations.DeleteFloatingIpsIDRequest) -> operations.DeleteFloatingIpsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/floating_ips/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFloatingIpsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_images_id_(self, request: operations.DeleteImagesIDRequest) -> operations.DeleteImagesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/images/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteImagesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_load_balancers_id_(self, request: operations.DeleteLoadBalancersIDRequest) -> operations.DeleteLoadBalancersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLoadBalancersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_networks_id_(self, request: operations.DeleteNetworksIDRequest) -> operations.DeleteNetworksIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteNetworksIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_placement_groups_id_(self, request: operations.DeletePlacementGroupsIDRequest) -> operations.DeletePlacementGroupsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/placement_groups/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePlacementGroupsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_servers_id_(self, request: operations.DeleteServersIDRequest) -> operations.DeleteServersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteServersID200ApplicationJSON])
                res.delete_servers_id_200_application_json_object = out

        return res

    
    
    def delete_ssh_keys_id_(self, request: operations.DeleteSSHKeysIDRequest) -> operations.DeleteSSHKeysIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ssh_keys/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSSHKeysIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def delete_volumes_id_(self, request: operations.DeleteVolumesIDRequest) -> operations.DeleteVolumesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{id}", request.path_params)
        
        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVolumesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass

        return res

    
    
    def get_actions(self, request: operations.GetActionsRequest) -> operations.GetActionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/actions"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetActionsActionsResponse])
                res.actions_response = out

        return res

    
    
    def get_actions_id_(self, request: operations.GetActionsIDRequest) -> operations.GetActionsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/actions/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetActionsIDActionResponse])
                res.action_response = out

        return res

    
    
    def get_certificates(self, request: operations.GetCertificatesRequest) -> operations.GetCertificatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/certificates"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCertificatesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCertificatesCertificatesResponse])
                res.certificates_response = out

        return res

    
    
    def get_certificates_id_(self, request: operations.GetCertificatesIDRequest) -> operations.GetCertificatesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/certificates/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCertificatesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCertificatesIDCertificateResponse])
                res.certificate_response = out

        return res

    
    
    def get_certificates_id_actions(self, request: operations.GetCertificatesIDActionsRequest) -> operations.GetCertificatesIDActionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/certificates/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCertificatesIDActionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCertificatesIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    
    def get_certificates_id_actions_action_id_(self, request: operations.GetCertificatesIDActionsActionIDRequest) -> operations.GetCertificatesIDActionsActionIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/certificates/{id}/actions/{action_id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCertificatesIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCertificatesIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    
    def get_datacenters(self, request: operations.GetDatacentersRequest) -> operations.GetDatacentersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/datacenters"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatacentersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatacenters200ApplicationJSON])
                res.get_datacenters_200_application_json_object = out

        return res

    
    
    def get_datacenters_id_(self, request: operations.GetDatacentersIDRequest) -> operations.GetDatacentersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/datacenters/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDatacentersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDatacentersID200ApplicationJSON])
                res.get_datacenters_id_200_application_json_object = out

        return res

    
    
    def get_firewalls(self, request: operations.GetFirewallsRequest) -> operations.GetFirewallsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/firewalls"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirewallsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallsFirewallsResponse])
                res.firewalls_response = out

        return res

    
    
    def get_firewalls_id_(self, request: operations.GetFirewallsIDRequest) -> operations.GetFirewallsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firewalls/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirewallsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallsIDFirewallResponse])
                res.firewall_response = out

        return res

    
    
    def get_firewalls_id_actions(self, request: operations.GetFirewallsIDActionsRequest) -> operations.GetFirewallsIDActionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firewalls/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirewallsIDActionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallsIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    
    def get_firewalls_id_actions_action_id_(self, request: operations.GetFirewallsIDActionsActionIDRequest) -> operations.GetFirewallsIDActionsActionIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firewalls/{id}/actions/{action_id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFirewallsIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFirewallsIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    
    def get_floating_ips(self, request: operations.GetFloatingIpsRequest) -> operations.GetFloatingIpsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/floating_ips"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFloatingIpsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFloatingIps200ApplicationJSON])
                res.get_floating_ips_200_application_json_object = out

        return res

    
    
    def get_floating_ips_id_(self, request: operations.GetFloatingIpsIDRequest) -> operations.GetFloatingIpsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/floating_ips/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFloatingIpsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFloatingIpsID200ApplicationJSON])
                res.get_floating_ips_id_200_application_json_object = out

        return res

    
    
    def get_floating_ips_id_actions(self, request: operations.GetFloatingIpsIDActionsRequest) -> operations.GetFloatingIpsIDActionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/floating_ips/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFloatingIpsIDActionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFloatingIpsIDActions200ApplicationJSON])
                res.get_floating_ips_id_actions_200_application_json_object = out

        return res

    
    
    def get_floating_ips_id_actions_action_id_(self, request: operations.GetFloatingIpsIDActionsActionIDRequest) -> operations.GetFloatingIpsIDActionsActionIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/floating_ips/{id}/actions/{action_id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFloatingIpsIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetFloatingIpsIDActionsActionIDActionResponse])
                res.action_response = out

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

        return res

    
    
    def get_images_id_(self, request: operations.GetImagesIDRequest) -> operations.GetImagesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/images/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImagesID200ApplicationJSON])
                res.get_images_id_200_application_json_object = out

        return res

    
    
    def get_images_id_actions(self, request: operations.GetImagesIDActionsRequest) -> operations.GetImagesIDActionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/images/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesIDActionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImagesIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    
    def get_images_id_actions_action_id_(self, request: operations.GetImagesIDActionsActionIDRequest) -> operations.GetImagesIDActionsActionIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/images/{id}/actions/{action_id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagesIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetImagesIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    
    def get_isos(self, request: operations.GetIsosRequest) -> operations.GetIsosResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/isos"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIsosResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIsos200ApplicationJSON])
                res.get_isos_200_application_json_object = out

        return res

    
    
    def get_isos_id_(self, request: operations.GetIsosIDRequest) -> operations.GetIsosIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/isos/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIsosIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIsosID200ApplicationJSON])
                res.get_isos_id_200_application_json_object = out

        return res

    
    
    def get_load_balancer_types(self, request: operations.GetLoadBalancerTypesRequest) -> operations.GetLoadBalancerTypesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/load_balancer_types"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoadBalancerTypesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLoadBalancerTypes200ApplicationJSON])
                res.get_load_balancer_types_200_application_json_object = out

        return res

    
    
    def get_load_balancer_types_id_(self, request: operations.GetLoadBalancerTypesIDRequest) -> operations.GetLoadBalancerTypesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancer_types/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoadBalancerTypesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLoadBalancerTypesID200ApplicationJSON])
                res.get_load_balancer_types_id_200_application_json_object = out

        return res

    
    
    def get_load_balancers(self, request: operations.GetLoadBalancersRequest) -> operations.GetLoadBalancersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/load_balancers"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoadBalancersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLoadBalancers200ApplicationJSON])
                res.get_load_balancers_200_application_json_object = out

        return res

    
    
    def get_load_balancers_id_(self, request: operations.GetLoadBalancersIDRequest) -> operations.GetLoadBalancersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoadBalancersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLoadBalancersID200ApplicationJSON])
                res.get_load_balancers_id_200_application_json_object = out

        return res

    
    
    def get_load_balancers_id_actions(self, request: operations.GetLoadBalancersIDActionsRequest) -> operations.GetLoadBalancersIDActionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoadBalancersIDActionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLoadBalancersIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    
    def get_load_balancers_id_actions_action_id_(self, request: operations.GetLoadBalancersIDActionsActionIDRequest) -> operations.GetLoadBalancersIDActionsActionIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/{action_id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoadBalancersIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLoadBalancersIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    
    def get_load_balancers_id_metrics(self, request: operations.GetLoadBalancersIDMetricsRequest) -> operations.GetLoadBalancersIDMetricsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/metrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoadBalancersIDMetricsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLoadBalancersIDMetrics200ApplicationJSON])
                res.get_load_balancers_id_metrics_200_application_json_object = out

        return res

    
    
    def get_locations(self, request: operations.GetLocationsRequest) -> operations.GetLocationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/locations"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLocations200ApplicationJSON])
                res.get_locations_200_application_json_object = out

        return res

    
    
    def get_locations_id_(self, request: operations.GetLocationsIDRequest) -> operations.GetLocationsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/locations/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLocationsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLocationsID200ApplicationJSON])
                res.get_locations_id_200_application_json_object = out

        return res

    
    
    def get_networks(self, request: operations.GetNetworksRequest) -> operations.GetNetworksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/networks"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworksResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNetworks200ApplicationJSON])
                res.get_networks_200_application_json_object = out

        return res

    
    
    def get_networks_id_(self, request: operations.GetNetworksIDRequest) -> operations.GetNetworksIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworksIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNetworksID200ApplicationJSON])
                res.get_networks_id_200_application_json_object = out

        return res

    
    
    def get_networks_id_actions(self, request: operations.GetNetworksIDActionsRequest) -> operations.GetNetworksIDActionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworksIDActionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNetworksIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    
    def get_networks_id_actions_action_id_(self, request: operations.GetNetworksIDActionsActionIDRequest) -> operations.GetNetworksIDActionsActionIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{id}/actions/{action_id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworksIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetNetworksIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    
    def get_placement_groups(self, request: operations.GetPlacementGroupsRequest) -> operations.GetPlacementGroupsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/placement_groups"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlacementGroupsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPlacementGroupsPlacementGroupsResponse])
                res.placement_groups_response = out

        return res

    
    
    def get_placement_groups_id_(self, request: operations.GetPlacementGroupsIDRequest) -> operations.GetPlacementGroupsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/placement_groups/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPlacementGroupsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPlacementGroupsIDPlacementGroupResponse])
                res.placement_group_response = out

        return res

    
    
    def get_pricing(self) -> operations.GetPricingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/pricing"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPricingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPricing200ApplicationJSON])
                res.get_pricing_200_application_json_object = out

        return res

    
    
    def get_server_types(self, request: operations.GetServerTypesRequest) -> operations.GetServerTypesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/server_types"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServerTypesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServerTypes200ApplicationJSON])
                res.get_server_types_200_application_json_object = out

        return res

    
    
    def get_server_types_id_(self, request: operations.GetServerTypesIDRequest) -> operations.GetServerTypesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/server_types/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServerTypesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServerTypesID200ApplicationJSON])
                res.get_server_types_id_200_application_json_object = out

        return res

    
    
    def get_servers(self, request: operations.GetServersRequest) -> operations.GetServersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/servers"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServers200ApplicationJSON])
                res.get_servers_200_application_json_object = out

        return res

    
    
    def get_servers_id_(self, request: operations.GetServersIDRequest) -> operations.GetServersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServersID200ApplicationJSON])
                res.get_servers_id_200_application_json_object = out

        return res

    
    
    def get_servers_id_actions(self, request: operations.GetServersIDActionsRequest) -> operations.GetServersIDActionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServersIDActionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServersIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    
    def get_servers_id_actions_action_id_(self, request: operations.GetServersIDActionsActionIDRequest) -> operations.GetServersIDActionsActionIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/{action_id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServersIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServersIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    
    def get_servers_id_metrics(self, request: operations.GetServersIDMetricsRequest) -> operations.GetServersIDMetricsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/metrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServersIDMetricsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServersIDMetrics200ApplicationJSON])
                res.get_servers_id_metrics_200_application_json_object = out

        return res

    
    
    def get_ssh_keys(self, request: operations.GetSSHKeysRequest) -> operations.GetSSHKeysResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ssh_keys"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSSHKeysResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSSHKeys200ApplicationJSON])
                res.get_ssh_keys_200_application_json_object = out

        return res

    
    
    def get_ssh_keys_id_(self, request: operations.GetSSHKeysIDRequest) -> operations.GetSSHKeysIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ssh_keys/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSSHKeysIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSSHKeysID200ApplicationJSON])
                res.get_ssh_keys_id_200_application_json_object = out

        return res

    
    
    def get_volumes(self, request: operations.GetVolumesRequest) -> operations.GetVolumesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/volumes"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolumes200ApplicationJSON])
                res.get_volumes_200_application_json_object = out

        return res

    
    
    def get_volumes_id_(self, request: operations.GetVolumesIDRequest) -> operations.GetVolumesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolumesID200ApplicationJSON])
                res.get_volumes_id_200_application_json_object = out

        return res

    
    
    def get_volumes_id_actions(self, request: operations.GetVolumesIDActionsRequest) -> operations.GetVolumesIDActionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{id}/actions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesIDActionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolumesIDActionsActionsResponse])
                res.actions_response = out

        return res

    
    
    def get_volumes_id_actions_action_id_(self, request: operations.GetVolumesIDActionsActionIDRequest) -> operations.GetVolumesIDActionsActionIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{id}/actions/{action_id}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVolumesIDActionsActionIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVolumesIDActionsActionIDActionResponse])
                res.action_response = out

        return res

    
    
    def post_certificates(self, request: operations.PostCertificatesRequest) -> operations.PostCertificatesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/certificates"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCertificatesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCertificatesCreateCertificateResponse])
                res.create_certificate_response = out

        return res

    
    
    def post_certificates_id_actions_retry(self, request: operations.PostCertificatesIDActionsRetryRequest) -> operations.PostCertificatesIDActionsRetryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/certificates/{id}/actions/retry", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCertificatesIDActionsRetryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCertificatesIDActionsRetryActionResponse])
                res.action_response = out

        return res

    
    
    def post_firewalls(self, request: operations.PostFirewallsRequest) -> operations.PostFirewallsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/firewalls"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFirewallsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFirewallsCreateFirewallResponse])
                res.create_firewall_response = out

        return res

    
    
    def post_firewalls_id_actions_apply_to_resources(self, request: operations.PostFirewallsIDActionsApplyToResourcesRequest) -> operations.PostFirewallsIDActionsApplyToResourcesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firewalls/{id}/actions/apply_to_resources", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFirewallsIDActionsApplyToResourcesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFirewallsIDActionsApplyToResourcesActionsResponse])
                res.actions_response = out

        return res

    
    
    def post_firewalls_id_actions_remove_from_resources(self, request: operations.PostFirewallsIDActionsRemoveFromResourcesRequest) -> operations.PostFirewallsIDActionsRemoveFromResourcesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firewalls/{id}/actions/remove_from_resources", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFirewallsIDActionsRemoveFromResourcesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFirewallsIDActionsRemoveFromResourcesActionsResponse])
                res.actions_response = out

        return res

    
    
    def post_firewalls_id_actions_set_rules(self, request: operations.PostFirewallsIDActionsSetRulesRequest) -> operations.PostFirewallsIDActionsSetRulesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firewalls/{id}/actions/set_rules", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFirewallsIDActionsSetRulesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFirewallsIDActionsSetRulesActionsResponse])
                res.actions_response = out

        return res

    
    
    def post_floating_ips(self, request: operations.PostFloatingIpsRequest) -> operations.PostFloatingIpsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/floating_ips"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFloatingIpsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFloatingIps201ApplicationJSON])
                res.post_floating_ips_201_application_json_object = out

        return res

    
    
    def post_floating_ips_id_actions_assign(self, request: operations.PostFloatingIpsIDActionsAssignRequest) -> operations.PostFloatingIpsIDActionsAssignResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/floating_ips/{id}/actions/assign", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFloatingIpsIDActionsAssignResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFloatingIpsIDActionsAssignActionResponse])
                res.action_response = out

        return res

    
    
    def post_floating_ips_id_actions_change_dns_ptr(self, request: operations.PostFloatingIpsIDActionsChangeDNSPtrRequest) -> operations.PostFloatingIpsIDActionsChangeDNSPtrResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/floating_ips/{id}/actions/change_dns_ptr", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFloatingIpsIDActionsChangeDNSPtrResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFloatingIpsIDActionsChangeDNSPtrActionResponse])
                res.action_response = out

        return res

    
    
    def post_floating_ips_id_actions_change_protection(self, request: operations.PostFloatingIpsIDActionsChangeProtectionRequest) -> operations.PostFloatingIpsIDActionsChangeProtectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/floating_ips/{id}/actions/change_protection", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFloatingIpsIDActionsChangeProtectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFloatingIpsIDActionsChangeProtectionActionResponse])
                res.action_response = out

        return res

    
    
    def post_floating_ips_id_actions_unassign(self, request: operations.PostFloatingIpsIDActionsUnassignRequest) -> operations.PostFloatingIpsIDActionsUnassignResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/floating_ips/{id}/actions/unassign", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostFloatingIpsIDActionsUnassignResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostFloatingIpsIDActionsUnassignActionResponse])
                res.action_response = out

        return res

    
    
    def post_images_id_actions_change_protection(self, request: operations.PostImagesIDActionsChangeProtectionRequest) -> operations.PostImagesIDActionsChangeProtectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/images/{id}/actions/change_protection", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostImagesIDActionsChangeProtectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostImagesIDActionsChangeProtectionActionResponse])
                res.action_response = out

        return res

    
    
    def post_load_balancers(self, request: operations.PostLoadBalancersRequest) -> operations.PostLoadBalancersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/load_balancers"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancers201ApplicationJSON])
                res.post_load_balancers_201_application_json_object = out

        return res

    
    
    def post_load_balancers_id_actions_add_service(self, request: operations.PostLoadBalancersIDActionsAddServiceRequest) -> operations.PostLoadBalancersIDActionsAddServiceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/add_service", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsAddServiceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsAddServiceActionResponse])
                res.action_response = out

        return res

    
    
    def post_load_balancers_id_actions_add_target(self, request: operations.PostLoadBalancersIDActionsAddTargetRequest) -> operations.PostLoadBalancersIDActionsAddTargetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/add_target", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsAddTargetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsAddTargetActionResponse])
                res.action_response = out

        return res

    
    
    def post_load_balancers_id_actions_attach_to_network(self, request: operations.PostLoadBalancersIDActionsAttachToNetworkRequest) -> operations.PostLoadBalancersIDActionsAttachToNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/attach_to_network", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsAttachToNetworkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsAttachToNetworkActionResponse])
                res.action_response = out

        return res

    
    
    def post_load_balancers_id_actions_change_algorithm(self, request: operations.PostLoadBalancersIDActionsChangeAlgorithmRequest) -> operations.PostLoadBalancersIDActionsChangeAlgorithmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/change_algorithm", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsChangeAlgorithmResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsChangeAlgorithmActionResponse])
                res.action_response = out

        return res

    
    
    def post_load_balancers_id_actions_change_dns_ptr(self, request: operations.PostLoadBalancersIDActionsChangeDNSPtrRequest) -> operations.PostLoadBalancersIDActionsChangeDNSPtrResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/change_dns_ptr", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsChangeDNSPtrResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsChangeDNSPtrActionResponse])
                res.action_response = out

        return res

    
    
    def post_load_balancers_id_actions_change_protection(self, request: operations.PostLoadBalancersIDActionsChangeProtectionRequest) -> operations.PostLoadBalancersIDActionsChangeProtectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/change_protection", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsChangeProtectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsChangeProtectionActionResponse])
                res.action_response = out

        return res

    
    
    def post_load_balancers_id_actions_change_type(self, request: operations.PostLoadBalancersIDActionsChangeTypeRequest) -> operations.PostLoadBalancersIDActionsChangeTypeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/change_type", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsChangeTypeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsChangeTypeActionResponse])
                res.action_response = out

        return res

    
    
    def post_load_balancers_id_actions_delete_service(self, request: operations.PostLoadBalancersIDActionsDeleteServiceRequest) -> operations.PostLoadBalancersIDActionsDeleteServiceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/delete_service", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsDeleteServiceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsDeleteServiceActionResponse])
                res.action_response = out

        return res

    
    
    def post_load_balancers_id_actions_detach_from_network(self, request: operations.PostLoadBalancersIDActionsDetachFromNetworkRequest) -> operations.PostLoadBalancersIDActionsDetachFromNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/detach_from_network", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsDetachFromNetworkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsDetachFromNetworkActionResponse])
                res.action_response = out

        return res

    
    
    def post_load_balancers_id_actions_disable_public_interface(self, request: operations.PostLoadBalancersIDActionsDisablePublicInterfaceRequest) -> operations.PostLoadBalancersIDActionsDisablePublicInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/disable_public_interface", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsDisablePublicInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsDisablePublicInterfaceActionResponse])
                res.action_response = out

        return res

    
    
    def post_load_balancers_id_actions_enable_public_interface(self, request: operations.PostLoadBalancersIDActionsEnablePublicInterfaceRequest) -> operations.PostLoadBalancersIDActionsEnablePublicInterfaceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/enable_public_interface", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsEnablePublicInterfaceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsEnablePublicInterfaceActionResponse])
                res.action_response = out

        return res

    
    
    def post_load_balancers_id_actions_remove_target(self, request: operations.PostLoadBalancersIDActionsRemoveTargetRequest) -> operations.PostLoadBalancersIDActionsRemoveTargetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/remove_target", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsRemoveTargetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsRemoveTargetActionResponse])
                res.action_response = out

        return res

    
    
    def post_load_balancers_id_actions_update_service(self, request: operations.PostLoadBalancersIDActionsUpdateServiceRequest) -> operations.PostLoadBalancersIDActionsUpdateServiceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}/actions/update_service", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersIDActionsUpdateServiceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancersIDActionsUpdateServiceActionResponse])
                res.action_response = out

        return res

    
    
    def post_networks(self, request: operations.PostNetworksRequest) -> operations.PostNetworksResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/networks"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworks201ApplicationJSON])
                res.post_networks_201_application_json_object = out

        return res

    
    
    def post_networks_id_actions_add_route(self, request: operations.PostNetworksIDActionsAddRouteRequest) -> operations.PostNetworksIDActionsAddRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{id}/actions/add_route", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksIDActionsAddRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworksIDActionsAddRouteActionResponse])
                res.action_response = out

        return res

    
    
    def post_networks_id_actions_add_subnet(self, request: operations.PostNetworksIDActionsAddSubnetRequest) -> operations.PostNetworksIDActionsAddSubnetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{id}/actions/add_subnet", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksIDActionsAddSubnetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworksIDActionsAddSubnetActionResponse])
                res.action_response = out

        return res

    
    
    def post_networks_id_actions_change_ip_range(self, request: operations.PostNetworksIDActionsChangeIPRangeRequest) -> operations.PostNetworksIDActionsChangeIPRangeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{id}/actions/change_ip_range", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksIDActionsChangeIPRangeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworksIDActionsChangeIPRangeActionResponse])
                res.action_response = out

        return res

    
    
    def post_networks_id_actions_change_protection(self, request: operations.PostNetworksIDActionsChangeProtectionRequest) -> operations.PostNetworksIDActionsChangeProtectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{id}/actions/change_protection", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksIDActionsChangeProtectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworksIDActionsChangeProtectionActionResponse])
                res.action_response = out

        return res

    
    
    def post_networks_id_actions_delete_route(self, request: operations.PostNetworksIDActionsDeleteRouteRequest) -> operations.PostNetworksIDActionsDeleteRouteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{id}/actions/delete_route", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksIDActionsDeleteRouteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworksIDActionsDeleteRouteActionResponse])
                res.action_response = out

        return res

    
    
    def post_networks_id_actions_delete_subnet(self, request: operations.PostNetworksIDActionsDeleteSubnetRequest) -> operations.PostNetworksIDActionsDeleteSubnetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{id}/actions/delete_subnet", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostNetworksIDActionsDeleteSubnetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostNetworksIDActionsDeleteSubnetActionResponse])
                res.action_response = out

        return res

    
    
    def post_placement_groups(self, request: operations.PostPlacementGroupsRequest) -> operations.PostPlacementGroupsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/placement_groups"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPlacementGroupsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPlacementGroupsCreatePlacementGroupResponse])
                res.create_placement_group_response = out

        return res

    
    
    def post_servers(self, request: operations.PostServersRequest) -> operations.PostServersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/servers"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersCreateServerResponse])
                res.create_server_response = out

        return res

    
    
    def post_servers_id_actions_add_to_placement_group(self, request: operations.PostServersIDActionsAddToPlacementGroupRequest) -> operations.PostServersIDActionsAddToPlacementGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/add_to_placement_group", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsAddToPlacementGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsAddToPlacementGroupActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_attach_iso(self, request: operations.PostServersIDActionsAttachIsoRequest) -> operations.PostServersIDActionsAttachIsoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/attach_iso", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsAttachIsoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsAttachIsoActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_attach_to_network(self, request: operations.PostServersIDActionsAttachToNetworkRequest) -> operations.PostServersIDActionsAttachToNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/attach_to_network", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsAttachToNetworkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsAttachToNetworkActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_change_alias_ips(self, request: operations.PostServersIDActionsChangeAliasIpsRequest) -> operations.PostServersIDActionsChangeAliasIpsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/change_alias_ips", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsChangeAliasIpsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsChangeAliasIpsActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_change_dns_ptr(self, request: operations.PostServersIDActionsChangeDNSPtrRequest) -> operations.PostServersIDActionsChangeDNSPtrResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/change_dns_ptr", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsChangeDNSPtrResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsChangeDNSPtrActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_change_protection(self, request: operations.PostServersIDActionsChangeProtectionRequest) -> operations.PostServersIDActionsChangeProtectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/change_protection", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsChangeProtectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsChangeProtectionActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_change_type(self, request: operations.PostServersIDActionsChangeTypeRequest) -> operations.PostServersIDActionsChangeTypeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/change_type", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsChangeTypeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsChangeTypeActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_create_image(self, request: operations.PostServersIDActionsCreateImageRequest) -> operations.PostServersIDActionsCreateImageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/create_image", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsCreateImageResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsCreateImage201ApplicationJSON])
                res.post_servers_id_actions_create_image_201_application_json_object = out

        return res

    
    
    def post_servers_id_actions_detach_from_network(self, request: operations.PostServersIDActionsDetachFromNetworkRequest) -> operations.PostServersIDActionsDetachFromNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/detach_from_network", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsDetachFromNetworkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsDetachFromNetworkActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_detach_iso(self, request: operations.PostServersIDActionsDetachIsoRequest) -> operations.PostServersIDActionsDetachIsoResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/detach_iso", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsDetachIsoResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsDetachIsoActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_disable_backup(self, request: operations.PostServersIDActionsDisableBackupRequest) -> operations.PostServersIDActionsDisableBackupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/disable_backup", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsDisableBackupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsDisableBackupActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_disable_rescue(self, request: operations.PostServersIDActionsDisableRescueRequest) -> operations.PostServersIDActionsDisableRescueResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/disable_rescue", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsDisableRescueResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsDisableRescueActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_enable_backup(self, request: operations.PostServersIDActionsEnableBackupRequest) -> operations.PostServersIDActionsEnableBackupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/enable_backup", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsEnableBackupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsEnableBackupActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_enable_rescue(self, request: operations.PostServersIDActionsEnableRescueRequest) -> operations.PostServersIDActionsEnableRescueResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/enable_rescue", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsEnableRescueResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsEnableRescue201ApplicationJSON])
                res.post_servers_id_actions_enable_rescue_201_application_json_object = out

        return res

    
    
    def post_servers_id_actions_poweroff(self, request: operations.PostServersIDActionsPoweroffRequest) -> operations.PostServersIDActionsPoweroffResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/poweroff", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsPoweroffResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsPoweroffActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_poweron(self, request: operations.PostServersIDActionsPoweronRequest) -> operations.PostServersIDActionsPoweronResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/poweron", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsPoweronResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsPoweronActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_reboot(self, request: operations.PostServersIDActionsRebootRequest) -> operations.PostServersIDActionsRebootResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/reboot", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsRebootResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsRebootActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_rebuild(self, request: operations.PostServersIDActionsRebuildRequest) -> operations.PostServersIDActionsRebuildResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/rebuild", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsRebuildResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsRebuild201ApplicationJSON])
                res.post_servers_id_actions_rebuild_201_application_json_object = out

        return res

    
    
    def post_servers_id_actions_remove_from_placement_group(self, request: operations.PostServersIDActionsRemoveFromPlacementGroupRequest) -> operations.PostServersIDActionsRemoveFromPlacementGroupResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/remove_from_placement_group", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsRemoveFromPlacementGroupResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsRemoveFromPlacementGroupActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_request_console(self, request: operations.PostServersIDActionsRequestConsoleRequest) -> operations.PostServersIDActionsRequestConsoleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/request_console", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsRequestConsoleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsRequestConsole201ApplicationJSON])
                res.post_servers_id_actions_request_console_201_application_json_object = out

        return res

    
    
    def post_servers_id_actions_reset(self, request: operations.PostServersIDActionsResetRequest) -> operations.PostServersIDActionsResetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/reset", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsResetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsResetActionResponse])
                res.action_response = out

        return res

    
    
    def post_servers_id_actions_reset_password(self, request: operations.PostServersIDActionsResetPasswordRequest) -> operations.PostServersIDActionsResetPasswordResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/reset_password", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsResetPasswordResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsResetPassword201ApplicationJSON])
                res.post_servers_id_actions_reset_password_201_application_json_object = out

        return res

    
    
    def post_servers_id_actions_shutdown(self, request: operations.PostServersIDActionsShutdownRequest) -> operations.PostServersIDActionsShutdownResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}/actions/shutdown", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersIDActionsShutdownResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersIDActionsShutdownActionResponse])
                res.action_response = out

        return res

    
    
    def post_ssh_keys(self, request: operations.PostSSHKeysRequest) -> operations.PostSSHKeysResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ssh_keys"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSSHKeysResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSSHKeys201ApplicationJSON])
                res.post_ssh_keys_201_application_json_object = out

        return res

    
    
    def post_volumes(self, request: operations.PostVolumesRequest) -> operations.PostVolumesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/volumes"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostVolumes201ApplicationJSON])
                res.post_volumes_201_application_json_object = out

        return res

    
    
    def post_volumes_id_actions_attach(self, request: operations.PostVolumesIDActionsAttachRequest) -> operations.PostVolumesIDActionsAttachResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{id}/actions/attach", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumesIDActionsAttachResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostVolumesIDActionsAttachActionResponse])
                res.action_response = out

        return res

    
    
    def post_volumes_id_actions_change_protection(self, request: operations.PostVolumesIDActionsChangeProtectionRequest) -> operations.PostVolumesIDActionsChangeProtectionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{id}/actions/change_protection", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumesIDActionsChangeProtectionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostVolumesIDActionsChangeProtectionActionResponse])
                res.action_response = out

        return res

    
    
    def post_volumes_id_actions_detach(self, request: operations.PostVolumesIDActionsDetachRequest) -> operations.PostVolumesIDActionsDetachResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{id}/actions/detach", request.path_params)
        
        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumesIDActionsDetachResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostVolumesIDActionsDetachActionResponse])
                res.action_response = out

        return res

    
    
    def post_volumes_id_actions_resize(self, request: operations.PostVolumesIDActionsResizeRequest) -> operations.PostVolumesIDActionsResizeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{id}/actions/resize", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVolumesIDActionsResizeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostVolumesIDActionsResizeActionResponse])
                res.action_response = out

        return res

    
    
    def put_certificates_id_(self, request: operations.PutCertificatesIDRequest) -> operations.PutCertificatesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/certificates/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCertificatesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutCertificatesIDCertificateResponse])
                res.certificate_response = out

        return res

    
    
    def put_firewalls_id_(self, request: operations.PutFirewallsIDRequest) -> operations.PutFirewallsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/firewalls/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutFirewallsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutFirewallsIDFirewallResponse])
                res.firewall_response = out

        return res

    
    
    def put_floating_ips_id_(self, request: operations.PutFloatingIpsIDRequest) -> operations.PutFloatingIpsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/floating_ips/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutFloatingIpsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutFloatingIpsID200ApplicationJSON])
                res.put_floating_ips_id_200_application_json_object = out

        return res

    
    
    def put_images_id_(self, request: operations.PutImagesIDRequest) -> operations.PutImagesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/images/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutImagesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutImagesID200ApplicationJSON])
                res.put_images_id_200_application_json_object = out

        return res

    
    
    def put_load_balancers_id_(self, request: operations.PutLoadBalancersIDRequest) -> operations.PutLoadBalancersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/load_balancers/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutLoadBalancersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutLoadBalancersID200ApplicationJSON])
                res.put_load_balancers_id_200_application_json_object = out

        return res

    
    
    def put_networks_id_(self, request: operations.PutNetworksIDRequest) -> operations.PutNetworksIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/networks/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutNetworksIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutNetworksID200ApplicationJSON])
                res.put_networks_id_200_application_json_object = out

        return res

    
    
    def put_placement_groups_id_(self, request: operations.PutPlacementGroupsIDRequest) -> operations.PutPlacementGroupsIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/placement_groups/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPlacementGroupsIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutPlacementGroupsIDPlacementGroupResponse])
                res.placement_group_response = out

        return res

    
    
    def put_servers_id_(self, request: operations.PutServersIDRequest) -> operations.PutServersIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/servers/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutServersIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutServersID200ApplicationJSON])
                res.put_servers_id_200_application_json_object = out

        return res

    
    
    def put_ssh_keys_id_(self, request: operations.PutSSHKeysIDRequest) -> operations.PutSSHKeysIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/ssh_keys/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSSHKeysIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutSSHKeysID200ApplicationJSON])
                res.put_ssh_keys_id_200_application_json_object = out

        return res

    
    
    def put_volumes_id_(self, request: operations.PutVolumesIDRequest) -> operations.PutVolumesIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/volumes/{id}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutVolumesIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutVolumesID200ApplicationJSON])
                res.put_volumes_id_200_application_json_object = out

        return res

    