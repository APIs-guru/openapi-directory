import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://dlp.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def dlp_info_types_list(self, request: operations.DlpInfoTypesListRequest) -> operations.DlpInfoTypesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v2/infoTypes"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpInfoTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ListInfoTypesResponse])
                res.google_privacy_dlp_v2_list_info_types_response = out

        return res

    
    def dlp_locations_info_types_list(self, request: operations.DlpLocationsInfoTypesListRequest) -> operations.DlpLocationsInfoTypesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/infoTypes", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpLocationsInfoTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ListInfoTypesResponse])
                res.google_privacy_dlp_v2_list_info_types_response = out

        return res

    
    def dlp_projects_locations_content_deidentify(self, request: operations.DlpProjectsLocationsContentDeidentifyRequest) -> operations.DlpProjectsLocationsContentDeidentifyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/content:deidentify", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsContentDeidentifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2DeidentifyContentResponse])
                res.google_privacy_dlp_v2_deidentify_content_response = out

        return res

    
    def dlp_projects_locations_content_inspect(self, request: operations.DlpProjectsLocationsContentInspectRequest) -> operations.DlpProjectsLocationsContentInspectResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/content:inspect", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsContentInspectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2InspectContentResponse])
                res.google_privacy_dlp_v2_inspect_content_response = out

        return res

    
    def dlp_projects_locations_content_reidentify(self, request: operations.DlpProjectsLocationsContentReidentifyRequest) -> operations.DlpProjectsLocationsContentReidentifyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/content:reidentify", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsContentReidentifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ReidentifyContentResponse])
                res.google_privacy_dlp_v2_reidentify_content_response = out

        return res

    
    def dlp_projects_locations_deidentify_templates_create(self, request: operations.DlpProjectsLocationsDeidentifyTemplatesCreateRequest) -> operations.DlpProjectsLocationsDeidentifyTemplatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/deidentifyTemplates", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsDeidentifyTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2DeidentifyTemplate])
                res.google_privacy_dlp_v2_deidentify_template = out

        return res

    
    def dlp_projects_locations_deidentify_templates_list(self, request: operations.DlpProjectsLocationsDeidentifyTemplatesListRequest) -> operations.DlpProjectsLocationsDeidentifyTemplatesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/deidentifyTemplates", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsDeidentifyTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ListDeidentifyTemplatesResponse])
                res.google_privacy_dlp_v2_list_deidentify_templates_response = out

        return res

    
    def dlp_projects_locations_dlp_jobs_cancel(self, request: operations.DlpProjectsLocationsDlpJobsCancelRequest) -> operations.DlpProjectsLocationsDlpJobsCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}:cancel", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsDlpJobsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dlp_projects_locations_dlp_jobs_create(self, request: operations.DlpProjectsLocationsDlpJobsCreateRequest) -> operations.DlpProjectsLocationsDlpJobsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/dlpJobs", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsDlpJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2DlpJob])
                res.google_privacy_dlp_v2_dlp_job = out

        return res

    
    def dlp_projects_locations_dlp_jobs_finish(self, request: operations.DlpProjectsLocationsDlpJobsFinishRequest) -> operations.DlpProjectsLocationsDlpJobsFinishResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}:finish", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsDlpJobsFinishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dlp_projects_locations_dlp_jobs_list(self, request: operations.DlpProjectsLocationsDlpJobsListRequest) -> operations.DlpProjectsLocationsDlpJobsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/dlpJobs", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsDlpJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ListDlpJobsResponse])
                res.google_privacy_dlp_v2_list_dlp_jobs_response = out

        return res

    
    def dlp_projects_locations_image_redact(self, request: operations.DlpProjectsLocationsImageRedactRequest) -> operations.DlpProjectsLocationsImageRedactResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/image:redact", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsImageRedactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2RedactImageResponse])
                res.google_privacy_dlp_v2_redact_image_response = out

        return res

    
    def dlp_projects_locations_inspect_templates_create(self, request: operations.DlpProjectsLocationsInspectTemplatesCreateRequest) -> operations.DlpProjectsLocationsInspectTemplatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/inspectTemplates", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsInspectTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2InspectTemplate])
                res.google_privacy_dlp_v2_inspect_template = out

        return res

    
    def dlp_projects_locations_inspect_templates_list(self, request: operations.DlpProjectsLocationsInspectTemplatesListRequest) -> operations.DlpProjectsLocationsInspectTemplatesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/inspectTemplates", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsInspectTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ListInspectTemplatesResponse])
                res.google_privacy_dlp_v2_list_inspect_templates_response = out

        return res

    
    def dlp_projects_locations_job_triggers_activate(self, request: operations.DlpProjectsLocationsJobTriggersActivateRequest) -> operations.DlpProjectsLocationsJobTriggersActivateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}:activate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsJobTriggersActivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2DlpJob])
                res.google_privacy_dlp_v2_dlp_job = out

        return res

    
    def dlp_projects_locations_job_triggers_create(self, request: operations.DlpProjectsLocationsJobTriggersCreateRequest) -> operations.DlpProjectsLocationsJobTriggersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/jobTriggers", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsJobTriggersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2JobTrigger])
                res.google_privacy_dlp_v2_job_trigger = out

        return res

    
    def dlp_projects_locations_job_triggers_hybrid_inspect(self, request: operations.DlpProjectsLocationsJobTriggersHybridInspectRequest) -> operations.DlpProjectsLocationsJobTriggersHybridInspectResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}:hybridInspect", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsJobTriggersHybridInspectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_privacy_dlp_v2_hybrid_inspect_response = out

        return res

    
    def dlp_projects_locations_job_triggers_list(self, request: operations.DlpProjectsLocationsJobTriggersListRequest) -> operations.DlpProjectsLocationsJobTriggersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/jobTriggers", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsJobTriggersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ListJobTriggersResponse])
                res.google_privacy_dlp_v2_list_job_triggers_response = out

        return res

    
    def dlp_projects_stored_info_types_create(self, request: operations.DlpProjectsStoredInfoTypesCreateRequest) -> operations.DlpProjectsStoredInfoTypesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/storedInfoTypes", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsStoredInfoTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2StoredInfoType])
                res.google_privacy_dlp_v2_stored_info_type = out

        return res

    
    def dlp_projects_stored_info_types_delete(self, request: operations.DlpProjectsStoredInfoTypesDeleteRequest) -> operations.DlpProjectsStoredInfoTypesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsStoredInfoTypesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dlp_projects_stored_info_types_get(self, request: operations.DlpProjectsStoredInfoTypesGetRequest) -> operations.DlpProjectsStoredInfoTypesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsStoredInfoTypesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2StoredInfoType])
                res.google_privacy_dlp_v2_stored_info_type = out

        return res

    
    def dlp_projects_stored_info_types_list(self, request: operations.DlpProjectsStoredInfoTypesListRequest) -> operations.DlpProjectsStoredInfoTypesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/storedInfoTypes", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsStoredInfoTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ListStoredInfoTypesResponse])
                res.google_privacy_dlp_v2_list_stored_info_types_response = out

        return res

    
    def dlp_projects_stored_info_types_patch(self, request: operations.DlpProjectsStoredInfoTypesPatchRequest) -> operations.DlpProjectsStoredInfoTypesPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsStoredInfoTypesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2StoredInfoType])
                res.google_privacy_dlp_v2_stored_info_type = out

        return res

    