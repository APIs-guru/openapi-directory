import requests
from sdk.models import operations
from . import utils

class Create:
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

    
    def post_geomarks_copy(self, request: operations.PostGeomarksCopyRequest) -> operations.PostGeomarksCopyResponse:
        r"""Create a new geomark by copying the geometries from one or more existing geomarks from the current server.
        The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/geomarks/copy"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGeomarksCopyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_geomarks_new(self, request: operations.PostGeomarksNewRequest) -> operations.PostGeomarksNewResponse:
        r"""Create a new geomark
        Create a new geomark from the geometries read from the 'body' parameter or file.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/geomarks/new"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGeomarksNewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    