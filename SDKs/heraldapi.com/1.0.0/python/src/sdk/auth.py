import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Auth:
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

    
    def post_auth_token(self, request: operations.PostAuthTokenRequest) -> operations.PostAuthTokenResponse:
        r"""/auth/token
        Generate Herald API access tokens. These tokens expire after 24 hours and can be used to access any auth-protected Herald API endpoint. To use these tokens in future requests, include them as a bearer token in the \"Authorization\" header. Below is an example flow:
        
        First, use your API key to get an access token:
        ``` http
        POST /auth/token
        
        {
          \"api_key\": \"06Go1GZaEb3VlMf2pUA7PzWrBokCybFmgqR075kIBdM=\"
        }
        ```
        
        The response will look like this:
        ``` json
        {
          \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybUlkIjoiZm9vYmFyIiwiaWF0IjoxNjQ2NTkzNzUwLCJleHAiOjE2NDY2ODAxNTB9.UEe8fXdaiS4rynpeVlISm6wWglQitbZfW5_YXs-SEbg\",
          \"expires_at\": 1646680150
        }
        ```
        
        Then use that token in future requests, like so:
        ``` http
        GET /producers
        Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybUlkIjoiZm9vYmFyIiwiaWF0IjoxNjQ2NTkzNzUwLCJleHAiOjE2NDY2ODAxNTB9.UEe8fXdaiS4rynpeVlISm6wWglQitbZfW5_YXs-SEbg
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/auth/token"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAuthTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAuthToken200ApplicationJSON])
                res.post_auth_token_200_application_json_object = out

        return res

    