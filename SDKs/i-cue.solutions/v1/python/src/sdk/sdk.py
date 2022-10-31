import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://i-cue.solutions",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def delete_administration_entity_id_(self, request: operations.DeleteAdministrationEntityIDRequest) -> operations.DeleteAdministrationEntityIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/administration/entity/{id}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAdministrationEntityIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_administration_planning_level(self, request: operations.DeleteAdministrationPlanningLevelRequest) -> operations.DeleteAdministrationPlanningLevelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/administration/planning-level"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAdministrationPlanningLevelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_administration_user_entity_id_id_(self, request: operations.DeleteAdministrationUserEntityIDIDRequest) -> operations.DeleteAdministrationUserEntityIDIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/administration/user/{entityId}/{id}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAdministrationUserEntityIDIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_administration_entity(self, request: operations.GetAdministrationEntityRequest) -> operations.GetAdministrationEntityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/administration/entity"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdministrationEntityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Entity]])
                res.entities = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Entity]])
                res.entities = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_administration_planning_levels(self, request: operations.GetAdministrationPlanningLevelsRequest) -> operations.GetAdministrationPlanningLevelsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/administration/planning-levels"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdministrationPlanningLevelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlanningLevelInfoResponse]])
                res.planning_level_info_responses = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PlanningLevelInfoResponse]])
                res.planning_level_info_responses = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_administration_user_entity_id_(self, request: operations.GetAdministrationUserEntityIDRequest) -> operations.GetAdministrationUserEntityIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/administration/user/{entityId}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAdministrationUserEntityIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_forecast_result_job_id_(self, request: operations.GetForecastResultJobIDRequest) -> operations.GetForecastResultJobIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/forecast/result/{jobId}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetForecastResultJobIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_forecast_status_job_id_(self, request: operations.GetForecastStatusJobIDRequest) -> operations.GetForecastStatusJobIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/forecast/status/{jobId}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetForecastStatusJobIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_hyperparameter(self, request: operations.GetHyperparameterRequest) -> operations.GetHyperparameterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/hyperparameter"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHyperparameterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HyperparameterModel])
                res.hyperparameter_model = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HyperparameterModel])
                res.hyperparameter_model = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_report_performance_planning_level_id_(self, request: operations.GetReportPerformancePlanningLevelIDRequest) -> operations.GetReportPerformancePlanningLevelIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/report/performance/{planningLevelId}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportPerformancePlanningLevelIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_report_performance_sku_rationalization_planning_level_id_(self, request: operations.GetReportPerformanceSkuRationalizationPlanningLevelIDRequest) -> operations.GetReportPerformanceSkuRationalizationPlanningLevelIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/report/performance/sku-rationalization/{planningLevelId}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportPerformanceSkuRationalizationPlanningLevelIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PortfolioModel]])
                res.portfolio_models = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PortfolioModel]])
                res.portfolio_models = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def get_report_planning_level_organization(self, request: operations.GetReportPlanningLevelOrganizationRequest) -> operations.GetReportPlanningLevelOrganizationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/report/planning-level/organization"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportPlanningLevelOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_report_planning_level_user(self, request: operations.GetReportPlanningLevelUserRequest) -> operations.GetReportPlanningLevelUserResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/report/planning-level/user"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportPlanningLevelUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_report_user(self, request: operations.GetReportUserRequest) -> operations.GetReportUserResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/report/user"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_administration_entity(self, request: operations.PostAdministrationEntityRequest) -> operations.PostAdministrationEntityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/administration/entity"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdministrationEntityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.post_administration_entity_200_application_json_uuid_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.post_administration_entity_200_text_json_uuid_string = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.post_administration_entity_200_text_plain_uuid_string = r.content

        return res

    
    def post_administration_planning_level_lock(self, request: operations.PostAdministrationPlanningLevelLockRequest) -> operations.PostAdministrationPlanningLevelLockResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/administration/planning-level/lock"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdministrationPlanningLevelLockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_administration_token(self, request: operations.PostAdministrationTokenRequest) -> operations.PostAdministrationTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/administration/token"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdministrationTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.post_administration_token_200_application_json_uuid_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.post_administration_token_200_text_json_uuid_string = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.post_administration_token_200_text_plain_uuid_string = r.content

        return res

    
    def post_administration_user(self, request: operations.PostAdministrationUserRequest) -> operations.PostAdministrationUserResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/administration/user"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAdministrationUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.post_administration_user_200_application_json_uuid_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.post_administration_user_200_text_json_uuid_string = r.content
            if utils.match_content_type(content_type, "text/plain"):
                res.post_administration_user_200_text_plain_uuid_string = r.content

        return res

    
    def post_forecast(self, request: operations.PostForecastRequest) -> operations.PostForecastResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/forecast"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostForecastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ForecastResponse])
                res.forecast_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ForecastResponse])
                res.forecast_response = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_forecast_ai(self, request: operations.PostForecastAiRequest) -> operations.PostForecastAiResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/forecast/AI"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostForecastAiResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ForecastResponse])
                res.forecast_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ForecastResponse])
                res.forecast_response = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_forecast_ai_history_and_forecast(self, request: operations.PostForecastAiHistoryAndForecastRequest) -> operations.PostForecastAiHistoryAndForecastResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/forecast/AI/history-and-forecast"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostForecastAiHistoryAndForecastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HistoryAndForecastResponse])
                res.history_and_forecast_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HistoryAndForecastResponse])
                res.history_and_forecast_response = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_forecast_forecast_bottom_up(self, request: operations.PostForecastForecastBottomUpRequest) -> operations.PostForecastForecastBottomUpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/forecast/forecast-bottom-up"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostForecastForecastBottomUpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ForecastBottomUpResponse])
                res.forecast_bottom_up_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ForecastBottomUpResponse])
                res.forecast_bottom_up_response = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_forecast_forecast_top_down(self, request: operations.PostForecastForecastTopDownRequest) -> operations.PostForecastForecastTopDownResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/forecast/forecast-top-down"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostForecastForecastTopDownResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_forecast_full_detail(self, request: operations.PostForecastFullDetailRequest) -> operations.PostForecastFullDetailResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/forecast/full-detail"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostForecastFullDetailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FullDetailsForecastResponse])
                res.full_details_forecast_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FullDetailsForecastResponse])
                res.full_details_forecast_response = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_forecast_history_and_forecast(self, request: operations.PostForecastHistoryAndForecastRequest) -> operations.PostForecastHistoryAndForecastResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/forecast/history-and-forecast"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostForecastHistoryAndForecastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HistoryAndForecastResponse])
                res.history_and_forecast_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HistoryAndForecastResponse])
                res.history_and_forecast_response = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_forecast_optimal_parameter(self, request: operations.PostForecastOptimalParameterRequest) -> operations.PostForecastOptimalParameterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/forecast/optimal-parameter"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostForecastOptimalParameterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OptimalParameterResponse])
                res.optimal_parameter_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OptimalParameterResponse])
                res.optimal_parameter_response = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_forecast_rerun(self, request: operations.PostForecastRerunRequest) -> operations.PostForecastRerunResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/forecast/rerun"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostForecastRerunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ForecastResponse])
                res.forecast_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ForecastResponse])
                res.forecast_response = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_hyperparameter(self, request: operations.PostHyperparameterRequest) -> operations.PostHyperparameterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/hyperparameter"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostHyperparameterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_inventory_amazon_ipi(self, request: operations.PostInventoryAmazonIpiRequest) -> operations.PostInventoryAmazonIpiResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/inventory/amazon-ipi"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInventoryAmazonIpiResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_inventory_caryying_cost(self, request: operations.PostInventoryCaryyingCostRequest) -> operations.PostInventoryCaryyingCostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/inventory/caryying-cost"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInventoryCaryyingCostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_inventory_eoq(self, request: operations.PostInventoryEoqRequest) -> operations.PostInventoryEoqResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/inventory/eoq"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInventoryEoqResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_inventory_fill_rate(self, request: operations.PostInventoryFillRateRequest) -> operations.PostInventoryFillRateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/inventory/fill-rate"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInventoryFillRateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_inventory_financial_imapct_forecast_accuracy(self, request: operations.PostInventoryFinancialImapctForecastAccuracyRequest) -> operations.PostInventoryFinancialImapctForecastAccuracyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/inventory/financial-imapct-forecast-accuracy"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInventoryFinancialImapctForecastAccuracyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_inventory_inventory_turnover(self, request: operations.PostInventoryInventoryTurnoverRequest) -> operations.PostInventoryInventoryTurnoverResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/inventory/inventory-turnover"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInventoryInventoryTurnoverResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_inventory_ltd(self, request: operations.PostInventoryLtdRequest) -> operations.PostInventoryLtdResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/inventory/ltd"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInventoryLtdResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_inventory_moq(self, request: operations.PostInventoryMoqRequest) -> operations.PostInventoryMoqResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/inventory/moq"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInventoryMoqResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_inventory_optimal_service_level(self, request: operations.PostInventoryOptimalServiceLevelRequest) -> operations.PostInventoryOptimalServiceLevelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/inventory/optimal-service-level"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInventoryOptimalServiceLevelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_inventory_reorder_point(self, request: operations.PostInventoryReorderPointRequest) -> operations.PostInventoryReorderPointResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/inventory/reorder-point"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInventoryReorderPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_inventory_safety_stock(self, request: operations.PostInventorySafetyStockRequest) -> operations.PostInventorySafetyStockResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/inventory/safety-stock"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInventorySafetyStockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_inventory_service_level(self, request: operations.PostInventoryServiceLevelRequest) -> operations.PostInventoryServiceLevelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/inventory/service-level"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInventoryServiceLevelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_inventory_turns(self, request: operations.PostInventoryTurnsRequest) -> operations.PostInventoryTurnsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/inventory/turns"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostInventoryTurnsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_lifecycle_many_to_one(self, request: operations.PostLifecycleManyToOneRequest) -> operations.PostLifecycleManyToOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/lifecycle/many-to-one"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLifecycleManyToOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlanningLevelDataDto])
                res.planning_level_data_dto = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlanningLevelDataDto])
                res.planning_level_data_dto = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_lifecycle_one_to_one(self, request: operations.PostLifecycleOneToOneRequest) -> operations.PostLifecycleOneToOneResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/lifecycle/one-to-one"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLifecycleOneToOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlanningLevelDataDto])
                res.planning_level_data_dto = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlanningLevelDataDto])
                res.planning_level_data_dto = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_outlier(self, request: operations.PostOutlierRequest) -> operations.PostOutlierResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/outlier"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOutlierResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TimeSeriesOutliersResponse]])
                res.time_series_outliers_responses = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.TimeSeriesOutliersResponse]])
                res.time_series_outliers_responses = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_portfolio(self, request: operations.PostPortfolioRequest) -> operations.PostPortfolioResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PortfolioModel]])
                res.portfolio_models = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PortfolioModel]])
                res.portfolio_models = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_portfolio_abc(self, request: operations.PostPortfolioAbcRequest) -> operations.PostPortfolioAbcResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/abc"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioAbcResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PortfolioAbcModel]])
                res.portfolio_abc_models = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PortfolioAbcModel]])
                res.portfolio_abc_models = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_portfolio_forecast_performance_rewind(self, request: operations.PostPortfolioForecastPerformanceRewindRequest) -> operations.PostPortfolioForecastPerformanceRewindResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/forecast-performance-rewind"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioForecastPerformanceRewindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RewindResponse])
                res.rewind_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RewindResponse])
                res.rewind_response = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_portfolio_xyz(self, request: operations.PostPortfolioXyzRequest) -> operations.PostPortfolioXyzResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/portfolio/xyz"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPortfolioXyzResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PortfolioXyzModel]])
                res.portfolio_xyz_models = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PortfolioXyzModel]])
                res.portfolio_xyz_models = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    def post_pricing_bundle_pricing(self, request: operations.PostPricingBundlePricingRequest) -> operations.PostPricingBundlePricingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/pricing/bundle-pricing"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPricingBundlePricingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_pricing_competitive_pricing(self, request: operations.PostPricingCompetitivePricingRequest) -> operations.PostPricingCompetitivePricingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/pricing/competitive-pricing"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPricingCompetitivePricingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_pricing_cost_plus_pricing(self, request: operations.PostPricingCostPlusPricingRequest) -> operations.PostPricingCostPlusPricingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/pricing/cost-plus-pricing"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPricingCostPlusPricingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_pricing_decoy_pricing(self, request: operations.PostPricingDecoyPricingRequest) -> operations.PostPricingDecoyPricingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/pricing/decoy-pricing"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPricingDecoyPricingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_pricing_odd_pricing(self, request: operations.PostPricingOddPricingRequest) -> operations.PostPricingOddPricingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/pricing/odd-pricing"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPricingOddPricingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_pricing_penetration_pricing(self, request: operations.PostPricingPenetrationPricingRequest) -> operations.PostPricingPenetrationPricingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/pricing/penetration-pricing"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPricingPenetrationPricingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_pricing_price_elasticity_of_demand(self, request: operations.PostPricingPriceElasticityOfDemandRequest) -> operations.PostPricingPriceElasticityOfDemandResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/pricing/price-elasticity-of-demand"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPricingPriceElasticityOfDemandResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_administration_entity(self, request: operations.PutAdministrationEntityRequest) -> operations.PutAdministrationEntityResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/administration/entity"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAdministrationEntityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_administration_user(self, request: operations.PutAdministrationUserRequest) -> operations.PutAdministrationUserResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/administration/user"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAdministrationUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_administration_user_lock(self, request: operations.PutAdministrationUserLockRequest) -> operations.PutAdministrationUserLockResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/administration/user/lock"

        headers = utils.get_headers(request.headers)

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAdministrationUserLockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    