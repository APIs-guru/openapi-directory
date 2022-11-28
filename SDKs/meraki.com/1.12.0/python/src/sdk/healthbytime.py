import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class HealthByTime:
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

    
    def get_network_insight_application_health_by_time(self, request: operations.GetNetworkInsightApplicationHealthByTimeRequest) -> operations.GetNetworkInsightApplicationHealthByTimeResponse:
        r"""Get application health by time
        Get application health by time
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/insight/applications/{applicationId}/healthByTime", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkInsightApplicationHealthByTimeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_insight_application_health_by_time_200_application_json_object = out

        return res

    