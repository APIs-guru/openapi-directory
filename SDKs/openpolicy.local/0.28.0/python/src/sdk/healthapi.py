import requests
from sdk.models import operations
from . import utils

class HealthAPI:
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

    
    def get_health(self, request: operations.GetHealthRequest) -> operations.GetHealthResponse:
        r"""Health
        This API endpoint verifies that the server is operational.
        
        The response from the server is either 200 or 500:
        - **200** - OPA service is healthy. If `bundles` is true, then all configured bundles have been activated. If `plugins` is true, then all plugins are in an 'OK' state.
        - **500** - OPA service is *not* healthy. If `bundles` is true, at least one of configured bundles has not yet been activated. If `plugins` is true, at least one plugins is in a 'not OK' state.
        
        ---
        **Note**
        This check is only for initial bundle activation. Subsequent downloads will not affect the health check.
        
        Use the **status** endpoint (in the (management API)[management.html]) for more fine-grained bundle status monitoring.
        
        ---
        https://www.openpolicyagent.org/docs/latest/management/#bundles - Bundles
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 500:
            pass

        return res

    