import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ThreatLists:
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

    
    def webrisk_threat_lists_compute_diff(self, request: operations.WebriskThreatListsComputeDiffRequest) -> operations.WebriskThreatListsComputeDiffResponse:
        r"""Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/threatLists:computeDiff"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebriskThreatListsComputeDiffResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudWebriskV1ComputeThreatListDiffResponse])
                res.google_cloud_webrisk_v1_compute_threat_list_diff_response = out

        return res

    