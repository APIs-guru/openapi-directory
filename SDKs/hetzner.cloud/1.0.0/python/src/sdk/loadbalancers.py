import requests
from typing import Optional
from sdk.models import operations
from . import utils

class LoadBalancers:
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

    
    def delete_load_balancers_id_(self, request: operations.DeleteLoadBalancersIDRequest) -> operations.DeleteLoadBalancersIDResponse:
        r"""Delete a Load Balancer
        Deletes a Load Balancer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLoadBalancersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_load_balancers(self, request: operations.GetLoadBalancersRequest) -> operations.GetLoadBalancersResponse:
        r"""Get all Load Balancers
        Gets all existing Load Balancers that you have available.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/load_balancers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoadBalancersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLoadBalancers200ApplicationJSON])
                res.get_load_balancers_200_application_json_object = out

        return res

    
    def get_load_balancers_id_(self, request: operations.GetLoadBalancersIDRequest) -> operations.GetLoadBalancersIDResponse:
        r"""Get a Load Balancer
        Gets a specific Load Balancer object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoadBalancersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLoadBalancersID200ApplicationJSON])
                res.get_load_balancers_id_200_application_json_object = out

        return res

    
    def get_load_balancers_id_metrics(self, request: operations.GetLoadBalancersIDMetricsRequest) -> operations.GetLoadBalancersIDMetricsResponse:
        r"""Get Metrics for a LoadBalancer
        You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.
        
        Depending on the type you will get different time series data:
        
        |Type | Timeseries | Unit | Description |
        |---- |------------|------|-------------|
        | open_connections | open_connections | number | Open connections |
        | connections_per_second | connections_per_second | connections/s | Connections per second |
        | requests_per_second | requests_per_second | requests/s | Requests per second |
        | bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |
        || bandwidth.out | bytes/s | Egress bandwidth |
        
        Metrics are available for the last 30 days only.
        
        If you do not provide the step argument we will automatically adjust it so that 200 samples are returned.
        
        We limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}/metrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoadBalancersIDMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLoadBalancersIDMetrics200ApplicationJSON])
                res.get_load_balancers_id_metrics_200_application_json_object = out

        return res

    
    def post_load_balancers(self, request: operations.PostLoadBalancersRequest) -> operations.PostLoadBalancersResponse:
        r"""Create a Load Balancer
        Creates a Load Balancer.
        
        #### Call specific error codes
        
        | Code                                    | Description                                                                                           |
        |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
        | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
        | `ip_not_owned`                          | The IP is not owned by the owner of the project of the Load Balancer                                  |
        | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
        | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
        | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
        | `source_port_already_used`              | The source port you are trying to add is already in use                                               |
        | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/load_balancers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLoadBalancersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostLoadBalancers201ApplicationJSON])
                res.post_load_balancers_201_application_json_object = out

        return res

    
    def put_load_balancers_id_(self, request: operations.PutLoadBalancersIDRequest) -> operations.PutLoadBalancersIDResponse:
        r"""Update a Load Balancer
        Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.
        
        Note that when updating labels, the Load Balancer’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
        
        Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/load_balancers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutLoadBalancersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutLoadBalancersID200ApplicationJSON])
                res.put_load_balancers_id_200_application_json_object = out

        return res

    