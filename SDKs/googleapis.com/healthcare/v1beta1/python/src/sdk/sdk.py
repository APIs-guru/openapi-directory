import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://healthcare.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def healthcare_projects_locations_datasets_annotation_stores_annotations_create(self, request: operations.HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsCreateRequest) -> operations.HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/annotations", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Annotation])
                res.annotation = out

        return res

    
    
    def healthcare_projects_locations_datasets_annotation_stores_annotations_list(self, request: operations.HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListRequest) -> operations.HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/annotations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsAnnotationStoresAnnotationsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAnnotationsResponse])
                res.list_annotations_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_annotation_stores_create(self, request: operations.HealthcareProjectsLocationsDatasetsAnnotationStoresCreateRequest) -> operations.HealthcareProjectsLocationsDatasetsAnnotationStoresCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/annotationStores", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsAnnotationStoresCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnnotationStore])
                res.annotation_store = out

        return res

    
    
    def healthcare_projects_locations_datasets_annotation_stores_evaluate(self, request: operations.HealthcareProjectsLocationsDatasetsAnnotationStoresEvaluateRequest) -> operations.HealthcareProjectsLocationsDatasetsAnnotationStoresEvaluateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}:evaluate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsAnnotationStoresEvaluateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def healthcare_projects_locations_datasets_annotation_stores_list(self, request: operations.HealthcareProjectsLocationsDatasetsAnnotationStoresListRequest) -> operations.HealthcareProjectsLocationsDatasetsAnnotationStoresListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/annotationStores", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsAnnotationStoresListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAnnotationStoresResponse])
                res.list_annotation_stores_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_attribute_definitions_create(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/attributeDefinitions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AttributeDefinition])
                res.attribute_definition = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_attribute_definitions_list(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsListRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/attributeDefinitions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListAttributeDefinitionsResponse])
                res.list_attribute_definitions_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_check_data_access(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresCheckDataAccessRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresCheckDataAccessResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{consentStore}:checkDataAccess", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresCheckDataAccessResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckDataAccessResponse])
                res.check_data_access_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_consent_artifacts_create(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/consentArtifacts", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsentArtifact])
                res.consent_artifact = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_consent_artifacts_list(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/consentArtifacts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentArtifactsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListConsentArtifactsResponse])
                res.list_consent_artifacts_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_consents_activate(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsActivateRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsActivateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}:activate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsActivateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Consent])
                res.consent = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_consents_create(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsCreateRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/consents", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Consent])
                res.consent = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_consents_delete_revision(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsDeleteRevisionRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsDeleteRevisionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}:deleteRevision", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsDeleteRevisionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_consents_list(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsListRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/consents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListConsentsResponse])
                res.list_consents_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_consents_list_revisions(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsListRevisionsRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsListRevisionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}:listRevisions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsListRevisionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListConsentRevisionsResponse])
                res.list_consent_revisions_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_consents_reject(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsRejectRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsRejectResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}:reject", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsRejectResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Consent])
                res.consent = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_consents_revoke(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}:revoke", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresConsentsRevokeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Consent])
                res.consent = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_create(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresCreateRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/consentStores", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConsentStore])
                res.consent_store = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_evaluate_user_consents(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresEvaluateUserConsentsRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresEvaluateUserConsentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{consentStore}:evaluateUserConsents", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresEvaluateUserConsentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EvaluateUserConsentsResponse])
                res.evaluate_user_consents_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_list(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresListRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/consentStores", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListConsentStoresResponse])
                res.list_consent_stores_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_query_accessible_data(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresQueryAccessibleDataRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresQueryAccessibleDataResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{consentStore}:queryAccessibleData", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresQueryAccessibleDataResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_user_data_mappings_archive(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}:archive", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsArchiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.archive_user_data_mapping_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_user_data_mappings_create(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userDataMappings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDataMapping])
                res.user_data_mapping = out

        return res

    
    
    def healthcare_projects_locations_datasets_consent_stores_user_data_mappings_list(self, request: operations.HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListRequest) -> operations.HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/userDataMappings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListUserDataMappingsResponse])
                res.list_user_data_mappings_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_create(self, request: operations.HealthcareProjectsLocationsDatasetsCreateRequest) -> operations.HealthcareProjectsLocationsDatasetsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/datasets", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def healthcare_projects_locations_datasets_deidentify(self, request: operations.HealthcareProjectsLocationsDatasetsDeidentifyRequest) -> operations.HealthcareProjectsLocationsDatasetsDeidentifyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{sourceDataset}:deidentify", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsDeidentifyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def healthcare_projects_locations_datasets_dicom_stores_create(self, request: operations.HealthcareProjectsLocationsDatasetsDicomStoresCreateRequest) -> operations.HealthcareProjectsLocationsDatasetsDicomStoresCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/dicomStores", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsDicomStoresCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DicomStore])
                res.dicom_store = out

        return res

    
    
    def healthcare_projects_locations_datasets_dicom_stores_list(self, request: operations.HealthcareProjectsLocationsDatasetsDicomStoresListRequest) -> operations.HealthcareProjectsLocationsDatasetsDicomStoresListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/dicomStores", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsDicomStoresListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDicomStoresResponse])
                res.list_dicom_stores_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_dicom_stores_studies_series_instances_delete(self, request: operations.HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesDeleteRequest) -> operations.HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/dicomWeb/{dicomWebPath}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def healthcare_projects_locations_datasets_dicom_stores_studies_series_instances_frames_retrieve_rendered(self, request: operations.HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedRequest) -> operations.HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/dicomWeb/{dicomWebPath}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsDicomStoresStudiesSeriesInstancesFramesRetrieveRenderedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_dicom_stores_studies_store_instances(self, request: operations.HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesRequest) -> operations.HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/dicomWeb/{dicomWebPath}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsDicomStoresStudiesStoreInstancesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_configure_search(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresConfigureSearchRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresConfigureSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}:configureSearch", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresConfigureSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_create(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresCreateRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fhirStores", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FhirStore])
                res.fhir_store = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_deidentify(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresDeidentifyRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresDeidentifyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{sourceStore}:deidentify", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresDeidentifyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_concept_map_search_translate(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fhir/ConceptMap/$translate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapSearchTranslateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_concept_map_translate(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapTranslateRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapTranslateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}/$translate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConceptMapTranslateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_observation_lastn(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirObservationLastnRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirObservationLastnResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fhir/Observation/$lastn", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirObservationLastnResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_patient_everything(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}/$everything", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirPatientEverythingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_resource_purge(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirResourcePurgeRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirResourcePurgeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}/$purge", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirResourcePurgeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_resource_validate(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fhir/{type}/$validate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirResourceValidateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_capabilities(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirCapabilitiesRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirCapabilitiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}/fhir/metadata", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirCapabilitiesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_conditional_delete(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fhir/{type}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_conditional_patch(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalPatchRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fhir/{type}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_conditional_update(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fhir/{type}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirConditionalUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_create(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirCreateRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fhir/{type}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_execute_bundle(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fhir", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirExecuteBundleResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_history(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}/_history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_search(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fhir/_search", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_search_type(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchTypeRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchTypeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fhir/{resourceType}/_search", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirSearchTypeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_fhir_update(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirUpdateRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresFhirUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPBody])
                res.http_body = out

        return res

    
    
    def healthcare_projects_locations_datasets_fhir_stores_list(self, request: operations.HealthcareProjectsLocationsDatasetsFhirStoresListRequest) -> operations.HealthcareProjectsLocationsDatasetsFhirStoresListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/fhirStores", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsFhirStoresListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFhirStoresResponse])
                res.list_fhir_stores_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_hl7_v2_stores_create(self, request: operations.HealthcareProjectsLocationsDatasetsHl7V2StoresCreateRequest) -> operations.HealthcareProjectsLocationsDatasetsHl7V2StoresCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/hl7V2Stores", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsHl7V2StoresCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Hl7V2Store])
                res.hl7_v2_store = out

        return res

    
    
    def healthcare_projects_locations_datasets_hl7_v2_stores_export(self, request: operations.HealthcareProjectsLocationsDatasetsHl7V2StoresExportRequest) -> operations.HealthcareProjectsLocationsDatasetsHl7V2StoresExportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}:export", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsHl7V2StoresExportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def healthcare_projects_locations_datasets_hl7_v2_stores_get_iam_policy(self, request: operations.HealthcareProjectsLocationsDatasetsHl7V2StoresGetIamPolicyRequest) -> operations.HealthcareProjectsLocationsDatasetsHl7V2StoresGetIamPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{resource}:getIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsHl7V2StoresGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    
    def healthcare_projects_locations_datasets_hl7_v2_stores_import(self, request: operations.HealthcareProjectsLocationsDatasetsHl7V2StoresImportRequest) -> operations.HealthcareProjectsLocationsDatasetsHl7V2StoresImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}:import", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsHl7V2StoresImportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def healthcare_projects_locations_datasets_hl7_v2_stores_list(self, request: operations.HealthcareProjectsLocationsDatasetsHl7V2StoresListRequest) -> operations.HealthcareProjectsLocationsDatasetsHl7V2StoresListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/hl7V2Stores", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsHl7V2StoresListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListHl7V2StoresResponse])
                res.list_hl7_v2_stores_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_hl7_v2_stores_messages_batch_get(self, request: operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetRequest) -> operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/messages:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchGetMessagesResponse])
                res.batch_get_messages_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_hl7_v2_stores_messages_create(self, request: operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesCreateRequest) -> operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/messages", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Message])
                res.message = out

        return res

    
    
    def healthcare_projects_locations_datasets_hl7_v2_stores_messages_delete(self, request: operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesDeleteRequest) -> operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def healthcare_projects_locations_datasets_hl7_v2_stores_messages_ingest(self, request: operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestRequest) -> operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/messages:ingest", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IngestMessageResponse])
                res.ingest_message_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_hl7_v2_stores_messages_list(self, request: operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListRequest) -> operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListMessagesResponse])
                res.list_messages_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_hl7_v2_stores_messages_patch(self, request: operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchRequest) -> operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Message])
                res.message = out

        return res

    
    
    def healthcare_projects_locations_datasets_hl7_v2_stores_set_iam_policy(self, request: operations.HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyRequest) -> operations.HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{resource}:setIamPolicy", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsHl7V2StoresSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    
    def healthcare_projects_locations_datasets_hl7_v2_stores_test_iam_permissions(self, request: operations.HealthcareProjectsLocationsDatasetsHl7V2StoresTestIamPermissionsRequest) -> operations.HealthcareProjectsLocationsDatasetsHl7V2StoresTestIamPermissionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{resource}:testIamPermissions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsHl7V2StoresTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_list(self, request: operations.HealthcareProjectsLocationsDatasetsListRequest) -> operations.HealthcareProjectsLocationsDatasetsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{parent}/datasets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDatasetsResponse])
                res.list_datasets_response = out

        return res

    
    
    def healthcare_projects_locations_datasets_operations_cancel(self, request: operations.HealthcareProjectsLocationsDatasetsOperationsCancelRequest) -> operations.HealthcareProjectsLocationsDatasetsOperationsCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}:cancel", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def healthcare_projects_locations_datasets_operations_get(self, request: operations.HealthcareProjectsLocationsDatasetsOperationsGetRequest) -> operations.HealthcareProjectsLocationsDatasetsOperationsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def healthcare_projects_locations_datasets_operations_list(self, request: operations.HealthcareProjectsLocationsDatasetsOperationsListRequest) -> operations.HealthcareProjectsLocationsDatasetsOperationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsDatasetsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOperationsResponse])
                res.list_operations_response = out

        return res

    
    
    def healthcare_projects_locations_list(self, request: operations.HealthcareProjectsLocationsListRequest) -> operations.HealthcareProjectsLocationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    
    def healthcare_projects_locations_services_nlp_analyze_entities(self, request: operations.HealthcareProjectsLocationsServicesNlpAnalyzeEntitiesRequest) -> operations.HealthcareProjectsLocationsServicesNlpAnalyzeEntitiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta1/{nlpService}:analyzeEntities", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.HealthcareProjectsLocationsServicesNlpAnalyzeEntitiesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnalyzeEntitiesResponse])
                res.analyze_entities_response = out

        return res

    