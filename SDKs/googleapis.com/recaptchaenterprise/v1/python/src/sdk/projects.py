import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def recaptchaenterprise_projects_assessments_annotate(self, request: operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest) -> operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse:
        r"""Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:annotate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_recaptchaenterprise_v1_annotate_assessment_response = out

        return res

    
    def recaptchaenterprise_projects_assessments_create(self, request: operations.RecaptchaenterpriseProjectsAssessmentsCreateRequest) -> operations.RecaptchaenterpriseProjectsAssessmentsCreateResponse:
        r"""Creates an Assessment of the likelihood an event is legitimate.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/assessments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsAssessmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1Assessment])
                res.google_cloud_recaptchaenterprise_v1_assessment = out

        return res

    
    def recaptchaenterprise_projects_keys_create(self, request: operations.RecaptchaenterpriseProjectsKeysCreateRequest) -> operations.RecaptchaenterpriseProjectsKeysCreateResponse:
        r"""Creates a new reCAPTCHA Enterprise key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/keys", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1Key])
                res.google_cloud_recaptchaenterprise_v1_key = out

        return res

    
    def recaptchaenterprise_projects_keys_delete(self, request: operations.RecaptchaenterpriseProjectsKeysDeleteRequest) -> operations.RecaptchaenterpriseProjectsKeysDeleteResponse:
        r"""Deletes the specified key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def recaptchaenterprise_projects_keys_get_metrics(self, request: operations.RecaptchaenterpriseProjectsKeysGetMetricsRequest) -> operations.RecaptchaenterpriseProjectsKeysGetMetricsResponse:
        r"""Get some aggregated metrics for a Key. This data can be used to build dashboards.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysGetMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1Metrics])
                res.google_cloud_recaptchaenterprise_v1_metrics = out

        return res

    
    def recaptchaenterprise_projects_keys_list(self, request: operations.RecaptchaenterpriseProjectsKeysListRequest) -> operations.RecaptchaenterpriseProjectsKeysListResponse:
        r"""Returns the list of all keys that belong to a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/keys", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1ListKeysResponse])
                res.google_cloud_recaptchaenterprise_v1_list_keys_response = out

        return res

    
    def recaptchaenterprise_projects_keys_migrate(self, request: operations.RecaptchaenterpriseProjectsKeysMigrateRequest) -> operations.RecaptchaenterpriseProjectsKeysMigrateResponse:
        r"""Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:migrate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysMigrateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1Key])
                res.google_cloud_recaptchaenterprise_v1_key = out

        return res

    
    def recaptchaenterprise_projects_keys_patch(self, request: operations.RecaptchaenterpriseProjectsKeysPatchRequest) -> operations.RecaptchaenterpriseProjectsKeysPatchResponse:
        r"""Updates the specified key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1Key])
                res.google_cloud_recaptchaenterprise_v1_key = out

        return res

    
    def recaptchaenterprise_projects_keys_retrieve_legacy_secret_key(self, request: operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest) -> operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse:
        r"""Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{key}:retrieveLegacySecretKey", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse])
                res.google_cloud_recaptchaenterprise_v1_retrieve_legacy_secret_key_response = out

        return res

    
    def recaptchaenterprise_projects_relatedaccountgroupmemberships_search(self, request: operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest) -> operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse:
        r"""Search group memberships related to a given account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{project}/relatedaccountgroupmemberships:search", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse])
                res.google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_response = out

        return res

    
    def recaptchaenterprise_projects_relatedaccountgroups_list(self, request: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest) -> operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse:
        r"""List groups of related accounts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/relatedaccountgroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse])
                res.google_cloud_recaptchaenterprise_v1_list_related_account_groups_response = out

        return res

    
    def recaptchaenterprise_projects_relatedaccountgroups_memberships_list(self, request: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest) -> operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse:
        r"""Get memberships in a group of related accounts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/memberships", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse])
                res.google_cloud_recaptchaenterprise_v1_list_related_account_group_memberships_response = out

        return res

    