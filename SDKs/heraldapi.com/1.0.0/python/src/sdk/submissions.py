import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Submissions:
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

    
    def get_submissions_submission_id(self, request: operations.GetSubmissionsSubmissionIDRequest) -> operations.GetSubmissionsSubmissionIDResponse:
        r"""/submissions/{submission_id}
        ### Get a submission
        
        Get the latest details for a specific [submission](https://www.heraldapi.com/docs/submission).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/submissions/{submission_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubmissionsSubmissionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetSubmissionsSubmissionID200ApplicationJSON])
                res.get_submissions_submission_id_200_application_json_object = out

        return res

    
    def post_submissions(self, request: operations.PostSubmissionsRequest) -> operations.PostSubmissionsResponse:
        r"""/submissions
        ### Create a submission
        
        A [submission](https://www.heraldapi.com/docs/submission) creates quotes by sending an application to the institutions associated with a list of desired products. A submission can be for a single product or multiple products.
        
        > The `application` object of the request can either be a full application (with all `risk_values` and `coverage_values`), or the `id` of a completed application created via [`/applications`](../reference/HeraldAPI.v1.yaml/paths/~1applications/post). See the 'examples' dropdown to the right for example requests and responses.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/submissions"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSubmissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSubmissions200ApplicationJSON])
                res.post_submissions_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostSubmissions400ApplicationJSON])
                res.post_submissions_400_application_json_object = out

        return res

    