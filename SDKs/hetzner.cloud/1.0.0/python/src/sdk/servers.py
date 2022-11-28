import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Servers:
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

    
    def delete_servers_id_(self, request: operations.DeleteServersIDRequest) -> operations.DeleteServersIDResponse:
        r"""Delete a Server
        Deletes a Server. This immediately removes the Server from your account, and it is no longer accessible.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteServersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteServersID200ApplicationJSON])
                res.delete_servers_id_200_application_json_object = out

        return res

    
    def get_servers(self, request: operations.GetServersRequest) -> operations.GetServersResponse:
        r"""Get all Servers
        Returns all existing Server objects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/servers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
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
        r"""Get a Server
        Returns a specific Server object. The Server must exist inside the Project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServersID200ApplicationJSON])
                res.get_servers_id_200_application_json_object = out

        return res

    
    def get_servers_id_metrics(self, request: operations.GetServersIDMetricsRequest) -> operations.GetServersIDMetricsResponse:
        r"""Get Metrics for a Server
        Get Metrics for specified Server.
        
        You must specify the type of metric to get: cpu, disk or network. You can also specify more than one type by comma separation, e.g. cpu,disk.
        
        Depending on the type you will get different time series data
        
        | Type    | Timeseries              | Unit      | Description                                          |
        |---------|-------------------------|-----------|------------------------------------------------------|
        | cpu     | cpu                     | percent   | Percent CPU usage                                    |
        | disk    | disk.0.iops.read        | iop/s     | Number of read IO operations per second              |
        |         | disk.0.iops.write       | iop/s     | Number of write IO operations per second             |
        |         | disk.0.bandwidth.read   | bytes/s   | Bytes read per second                                |
        |         | disk.0.bandwidth.write  | bytes/s   | Bytes written per second                             |
        | network | network.0.pps.in        | packets/s | Public Network interface packets per second received |
        |         | network.0.pps.out       | packets/s | Public Network interface packets per second sent     |
        |         | network.0.bandwidth.in  | bytes/s   | Public Network interface bytes/s received            |
        |         | network.0.bandwidth.out | bytes/s   | Public Network interface bytes/s sent                |
        
        Metrics are available for the last 30 days only.
        
        If you do not provide the step argument we will automatically adjust it so that a maximum of 200 samples are returned.
        
        We limit the number of samples returned to a maximum of 500 and will adjust the step parameter accordingly.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}/metrics", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServersIDMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServersIDMetrics200ApplicationJSON])
                res.get_servers_id_metrics_200_application_json_object = out

        return res

    
    def post_servers(self, request: operations.PostServersRequest) -> operations.PostServersResponse:
        r"""Create a Server
        Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of creation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/servers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostServersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostServersCreateServerResponse])
                res.create_server_response = out

        return res

    
    def put_servers_id_(self, request: operations.PutServersIDRequest) -> operations.PutServersIDResponse:
        r"""Update a Server
        Updates a Server. You can update a Server’s name and a Server’s labels.
        Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).
        Also note that when updating labels, the Server’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/servers/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutServersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PutServersID200ApplicationJSON])
                res.put_servers_id_200_application_json_object = out

        return res

    