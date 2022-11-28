import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Limits:
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

    
    def drivelabels_limits_get_label(self, request: operations.DrivelabelsLimitsGetLabelRequest) -> operations.DrivelabelsLimitsGetLabelResponse:
        r"""Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2beta/limits/label"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DrivelabelsLimitsGetLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleAppsDriveLabelsV2betaLabelLimits])
                res.google_apps_drive_labels_v2beta_label_limits = out

        return res

    