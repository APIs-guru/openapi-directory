import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Buckets:
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

    
    def storage_buckets_delete(self, request: operations.StorageBucketsDeleteRequest) -> operations.StorageBucketsDeleteResponse:
        r"""Permanently deletes an empty bucket.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageBucketsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def storage_buckets_get(self, request: operations.StorageBucketsGetRequest) -> operations.StorageBucketsGetResponse:
        r"""Returns metadata for the specified bucket.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageBucketsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bucket])
                res.bucket = out

        return res

    
    def storage_buckets_get_iam_policy(self, request: operations.StorageBucketsGetIamPolicyRequest) -> operations.StorageBucketsGetIamPolicyResponse:
        r"""Returns an IAM policy for the specified bucket.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/iam", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageBucketsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def storage_buckets_insert(self, request: operations.StorageBucketsInsertRequest) -> operations.StorageBucketsInsertResponse:
        r"""Creates a new bucket.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/b"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageBucketsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bucket])
                res.bucket = out

        return res

    
    def storage_buckets_list(self, request: operations.StorageBucketsListRequest) -> operations.StorageBucketsListResponse:
        r"""Retrieves a list of buckets for a given project.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/b"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageBucketsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Buckets])
                res.buckets = out

        return res

    
    def storage_buckets_lock_retention_policy(self, request: operations.StorageBucketsLockRetentionPolicyRequest) -> operations.StorageBucketsLockRetentionPolicyResponse:
        r"""Locks retention policy on a bucket.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/lockRetentionPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageBucketsLockRetentionPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bucket])
                res.bucket = out

        return res

    
    def storage_buckets_patch(self, request: operations.StorageBucketsPatchRequest) -> operations.StorageBucketsPatchResponse:
        r"""Patches a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageBucketsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bucket])
                res.bucket = out

        return res

    
    def storage_buckets_set_iam_policy(self, request: operations.StorageBucketsSetIamPolicyRequest) -> operations.StorageBucketsSetIamPolicyResponse:
        r"""Updates an IAM policy for the specified bucket.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/iam", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageBucketsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def storage_buckets_test_iam_permissions(self, request: operations.StorageBucketsTestIamPermissionsRequest) -> operations.StorageBucketsTestIamPermissionsResponse:
        r"""Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}/iam/testPermissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageBucketsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    
    def storage_buckets_update(self, request: operations.StorageBucketsUpdateRequest) -> operations.StorageBucketsUpdateResponse:
        r"""Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/b/{bucket}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StorageBucketsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bucket])
                res.bucket = out

        return res

    