import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://recaptchaenterprise.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def recaptchaenterprise_projects_assessments_annotate(self, request: operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest) -> operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:annotate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_recaptchaenterprise_v1_annotate_assessment_response = out

        return res

    
    def recaptchaenterprise_projects_assessments_create(self, request: operations.RecaptchaenterpriseProjectsAssessmentsCreateRequest) -> operations.RecaptchaenterpriseProjectsAssessmentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/assessments", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsAssessmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1Assessment])
                res.google_cloud_recaptchaenterprise_v1_assessment = out

        return res

    
    def recaptchaenterprise_projects_keys_create(self, request: operations.RecaptchaenterpriseProjectsKeysCreateRequest) -> operations.RecaptchaenterpriseProjectsKeysCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/keys", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1Key])
                res.google_cloud_recaptchaenterprise_v1_key = out

        return res

    
    def recaptchaenterprise_projects_keys_delete(self, request: operations.RecaptchaenterpriseProjectsKeysDeleteRequest) -> operations.RecaptchaenterpriseProjectsKeysDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def recaptchaenterprise_projects_keys_get_metrics(self, request: operations.RecaptchaenterpriseProjectsKeysGetMetricsRequest) -> operations.RecaptchaenterpriseProjectsKeysGetMetricsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysGetMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1Metrics])
                res.google_cloud_recaptchaenterprise_v1_metrics = out

        return res

    
    def recaptchaenterprise_projects_keys_list(self, request: operations.RecaptchaenterpriseProjectsKeysListRequest) -> operations.RecaptchaenterpriseProjectsKeysListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/keys", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1ListKeysResponse])
                res.google_cloud_recaptchaenterprise_v1_list_keys_response = out

        return res

    
    def recaptchaenterprise_projects_keys_migrate(self, request: operations.RecaptchaenterpriseProjectsKeysMigrateRequest) -> operations.RecaptchaenterpriseProjectsKeysMigrateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:migrate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysMigrateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1Key])
                res.google_cloud_recaptchaenterprise_v1_key = out

        return res

    
    def recaptchaenterprise_projects_keys_patch(self, request: operations.RecaptchaenterpriseProjectsKeysPatchRequest) -> operations.RecaptchaenterpriseProjectsKeysPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1Key])
                res.google_cloud_recaptchaenterprise_v1_key = out

        return res

    
    def recaptchaenterprise_projects_keys_retrieve_legacy_secret_key(self, request: operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest) -> operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{key}:retrieveLegacySecretKey", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse])
                res.google_cloud_recaptchaenterprise_v1_retrieve_legacy_secret_key_response = out

        return res

    
    def recaptchaenterprise_projects_relatedaccountgroupmemberships_search(self, request: operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest) -> operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{project}/relatedaccountgroupmemberships:search", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse])
                res.google_cloud_recaptchaenterprise_v1_search_related_account_group_memberships_response = out

        return res

    
    def recaptchaenterprise_projects_relatedaccountgroups_list(self, request: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest) -> operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/relatedaccountgroups", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse])
                res.google_cloud_recaptchaenterprise_v1_list_related_account_groups_response = out

        return res

    
    def recaptchaenterprise_projects_relatedaccountgroups_memberships_list(self, request: operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest) -> operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/memberships", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse])
                res.google_cloud_recaptchaenterprise_v1_list_related_account_group_memberships_response = out

        return res

    