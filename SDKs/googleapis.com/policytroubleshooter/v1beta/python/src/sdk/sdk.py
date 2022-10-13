import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://policytroubleshooter.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def policytroubleshooter_iam_troubleshoot(self, request: operations.PolicytroubleshooterIamTroubleshootRequest) -> operations.PolicytroubleshooterIamTroubleshootResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1beta/iam:troubleshoot"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PolicytroubleshooterIamTroubleshootResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse])
                res.google_cloud_policytroubleshooter_v1beta_troubleshoot_iam_policy_response = out

        return res

    