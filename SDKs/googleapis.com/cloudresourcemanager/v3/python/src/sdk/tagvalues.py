import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class TagValues:
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

    
    def cloudresourcemanager_tag_values_create(self, request: operations.CloudresourcemanagerTagValuesCreateRequest) -> operations.CloudresourcemanagerTagValuesCreateResponse:
        r"""Creates a TagValue as a child of the specified TagKey. If a another request with the same parameters is sent while the original request is in process the second request will receive an error. A maximum of 1000 TagValues can exist under a TagKey at any given time.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/tagValues"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudresourcemanagerTagValuesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudresourcemanager_tag_values_get(self, request: operations.CloudresourcemanagerTagValuesGetRequest) -> operations.CloudresourcemanagerTagValuesGetResponse:
        r"""Retrieves a TagValue. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudresourcemanagerTagValuesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagValue])
                res.tag_value = out

        return res

    
    def cloudresourcemanager_tag_values_get_iam_policy(self, request: operations.CloudresourcemanagerTagValuesGetIamPolicyRequest) -> operations.CloudresourcemanagerTagValuesGetIamPolicyResponse:
        r"""Gets the access control policy for a TagValue. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have the `cloudresourcemanager.googleapis.com/tagValues.getIamPolicy` permission on the identified TagValue to get the access control policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{resource}:getIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudresourcemanagerTagValuesGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def cloudresourcemanager_tag_values_list(self, request: operations.CloudresourcemanagerTagValuesListRequest) -> operations.CloudresourcemanagerTagValuesListResponse:
        r"""Lists all TagValues for a specific TagKey.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/tagValues"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudresourcemanagerTagValuesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTagValuesResponse])
                res.list_tag_values_response = out

        return res

    
    def cloudresourcemanager_tag_values_patch(self, request: operations.CloudresourcemanagerTagValuesPatchRequest) -> operations.CloudresourcemanagerTagValuesPatchResponse:
        r"""Updates the attributes of the TagValue resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudresourcemanagerTagValuesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudresourcemanager_tag_values_set_iam_policy(self, request: operations.CloudresourcemanagerTagValuesSetIamPolicyRequest) -> operations.CloudresourcemanagerTagValuesSetIamPolicyResponse:
        r"""Sets the access control policy on a TagValue, replacing any existing policy. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have `resourcemanager.tagValues.setIamPolicy` permission on the identified tagValue.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudresourcemanagerTagValuesSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def cloudresourcemanager_tag_values_tag_holds_create(self, request: operations.CloudresourcemanagerTagValuesTagHoldsCreateRequest) -> operations.CloudresourcemanagerTagValuesTagHoldsCreateResponse:
        r"""Creates a TagHold. Returns ALREADY_EXISTS if a TagHold with the same resource and origin exists under the same TagValue.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/tagHolds", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudresourcemanagerTagValuesTagHoldsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudresourcemanager_tag_values_tag_holds_delete(self, request: operations.CloudresourcemanagerTagValuesTagHoldsDeleteRequest) -> operations.CloudresourcemanagerTagValuesTagHoldsDeleteResponse:
        r"""Deletes a TagHold.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudresourcemanagerTagValuesTagHoldsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudresourcemanager_tag_values_tag_holds_list(self, request: operations.CloudresourcemanagerTagValuesTagHoldsListRequest) -> operations.CloudresourcemanagerTagValuesTagHoldsListResponse:
        r"""Lists TagHolds under a TagValue.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/tagHolds", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudresourcemanagerTagValuesTagHoldsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTagHoldsResponse])
                res.list_tag_holds_response = out

        return res

    
    def cloudresourcemanager_tag_values_test_iam_permissions(self, request: operations.CloudresourcemanagerTagValuesTestIamPermissionsRequest) -> operations.CloudresourcemanagerTagValuesTestIamPermissionsResponse:
        r"""Returns permissions that a caller has on the specified TagValue. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. There are no permissions required for making this API call.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudresourcemanagerTagValuesTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    