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

    
    def dlp_projects_locations_content_deidentify(self, request: operations.DlpProjectsLocationsContentDeidentifyRequest) -> operations.DlpProjectsLocationsContentDeidentifyResponse:
        r"""De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/content:deidentify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsContentDeidentifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2DeidentifyContentResponse])
                res.google_privacy_dlp_v2_deidentify_content_response = out

        return res

    
    def dlp_projects_locations_content_inspect(self, request: operations.DlpProjectsLocationsContentInspectRequest) -> operations.DlpProjectsLocationsContentInspectResponse:
        r"""Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images and https://cloud.google.com/dlp/docs/inspecting-text,
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/content:inspect", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsContentInspectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2InspectContentResponse])
                res.google_privacy_dlp_v2_inspect_content_response = out

        return res

    
    def dlp_projects_locations_content_reidentify(self, request: operations.DlpProjectsLocationsContentReidentifyRequest) -> operations.DlpProjectsLocationsContentReidentifyResponse:
        r"""Re-identifies content that has been de-identified. See https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/content:reidentify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsContentReidentifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ReidentifyContentResponse])
                res.google_privacy_dlp_v2_reidentify_content_response = out

        return res

    
    def dlp_projects_locations_deidentify_templates_create(self, request: operations.DlpProjectsLocationsDeidentifyTemplatesCreateRequest) -> operations.DlpProjectsLocationsDeidentifyTemplatesCreateResponse:
        r"""Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/deidentifyTemplates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsDeidentifyTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2DeidentifyTemplate])
                res.google_privacy_dlp_v2_deidentify_template = out

        return res

    
    def dlp_projects_locations_deidentify_templates_list(self, request: operations.DlpProjectsLocationsDeidentifyTemplatesListRequest) -> operations.DlpProjectsLocationsDeidentifyTemplatesListResponse:
        r"""Lists DeidentifyTemplates. See https://cloud.google.com/dlp/docs/creating-templates-deid to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/deidentifyTemplates", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsDeidentifyTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ListDeidentifyTemplatesResponse])
                res.google_privacy_dlp_v2_list_deidentify_templates_response = out

        return res

    
    def dlp_projects_locations_dlp_jobs_cancel(self, request: operations.DlpProjectsLocationsDlpJobsCancelRequest) -> operations.DlpProjectsLocationsDlpJobsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsDlpJobsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dlp_projects_locations_dlp_jobs_create(self, request: operations.DlpProjectsLocationsDlpJobsCreateRequest) -> operations.DlpProjectsLocationsDlpJobsCreateResponse:
        r"""Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/dlpJobs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsDlpJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2DlpJob])
                res.google_privacy_dlp_v2_dlp_job = out

        return res

    
    def dlp_projects_locations_dlp_jobs_finish(self, request: operations.DlpProjectsLocationsDlpJobsFinishRequest) -> operations.DlpProjectsLocationsDlpJobsFinishResponse:
        r"""Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:finish", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsDlpJobsFinishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dlp_projects_locations_dlp_jobs_list(self, request: operations.DlpProjectsLocationsDlpJobsListRequest) -> operations.DlpProjectsLocationsDlpJobsListResponse:
        r"""Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/dlp/docs/inspecting-storage and https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/dlpJobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsDlpJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ListDlpJobsResponse])
                res.google_privacy_dlp_v2_list_dlp_jobs_response = out

        return res

    
    def dlp_projects_locations_image_redact(self, request: operations.DlpProjectsLocationsImageRedactRequest) -> operations.DlpProjectsLocationsImageRedactResponse:
        r"""Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/image:redact", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsImageRedactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2RedactImageResponse])
                res.google_privacy_dlp_v2_redact_image_response = out

        return res

    
    def dlp_projects_locations_inspect_templates_create(self, request: operations.DlpProjectsLocationsInspectTemplatesCreateRequest) -> operations.DlpProjectsLocationsInspectTemplatesCreateResponse:
        r"""Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/inspectTemplates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsInspectTemplatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2InspectTemplate])
                res.google_privacy_dlp_v2_inspect_template = out

        return res

    
    def dlp_projects_locations_inspect_templates_list(self, request: operations.DlpProjectsLocationsInspectTemplatesListRequest) -> operations.DlpProjectsLocationsInspectTemplatesListResponse:
        r"""Lists InspectTemplates. See https://cloud.google.com/dlp/docs/creating-templates to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/inspectTemplates", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsInspectTemplatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ListInspectTemplatesResponse])
                res.google_privacy_dlp_v2_list_inspect_templates_response = out

        return res

    
    def dlp_projects_locations_job_triggers_activate(self, request: operations.DlpProjectsLocationsJobTriggersActivateRequest) -> operations.DlpProjectsLocationsJobTriggersActivateResponse:
        r"""Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:activate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsJobTriggersActivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2DlpJob])
                res.google_privacy_dlp_v2_dlp_job = out

        return res

    
    def dlp_projects_locations_job_triggers_create(self, request: operations.DlpProjectsLocationsJobTriggersCreateRequest) -> operations.DlpProjectsLocationsJobTriggersCreateResponse:
        r"""Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/jobTriggers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsJobTriggersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2JobTrigger])
                res.google_privacy_dlp_v2_job_trigger = out

        return res

    
    def dlp_projects_locations_job_triggers_hybrid_inspect(self, request: operations.DlpProjectsLocationsJobTriggersHybridInspectRequest) -> operations.DlpProjectsLocationsJobTriggersHybridInspectResponse:
        r"""Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}:hybridInspect", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsJobTriggersHybridInspectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_privacy_dlp_v2_hybrid_inspect_response = out

        return res

    
    def dlp_projects_locations_job_triggers_list(self, request: operations.DlpProjectsLocationsJobTriggersListRequest) -> operations.DlpProjectsLocationsJobTriggersListResponse:
        r"""Lists job triggers. See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/jobTriggers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsLocationsJobTriggersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ListJobTriggersResponse])
                res.google_privacy_dlp_v2_list_job_triggers_response = out

        return res

    
    def dlp_projects_stored_info_types_create(self, request: operations.DlpProjectsStoredInfoTypesCreateRequest) -> operations.DlpProjectsStoredInfoTypesCreateResponse:
        r"""Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/storedInfoTypes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsStoredInfoTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2StoredInfoType])
                res.google_privacy_dlp_v2_stored_info_type = out

        return res

    
    def dlp_projects_stored_info_types_delete(self, request: operations.DlpProjectsStoredInfoTypesDeleteRequest) -> operations.DlpProjectsStoredInfoTypesDeleteResponse:
        r"""Deletes a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsStoredInfoTypesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dlp_projects_stored_info_types_get(self, request: operations.DlpProjectsStoredInfoTypesGetRequest) -> operations.DlpProjectsStoredInfoTypesGetResponse:
        r"""Gets a stored infoType. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsStoredInfoTypesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2StoredInfoType])
                res.google_privacy_dlp_v2_stored_info_type = out

        return res

    
    def dlp_projects_stored_info_types_list(self, request: operations.DlpProjectsStoredInfoTypesListRequest) -> operations.DlpProjectsStoredInfoTypesListResponse:
        r"""Lists stored infoTypes. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{parent}/storedInfoTypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsStoredInfoTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2ListStoredInfoTypesResponse])
                res.google_privacy_dlp_v2_list_stored_info_types_response = out

        return res

    
    def dlp_projects_stored_info_types_patch(self, request: operations.DlpProjectsStoredInfoTypesPatchRequest) -> operations.DlpProjectsStoredInfoTypesPatchResponse:
        r"""Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/dlp/docs/creating-stored-infotypes to learn more.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DlpProjectsStoredInfoTypesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePrivacyDlpV2StoredInfoType])
                res.google_privacy_dlp_v2_stored_info_type = out

        return res

    