import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.hubapi.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def delete_webhooks_v3_app_id_settings_clear(self, request: operations.DeleteWebhooksV3AppIDSettingsClearRequest) -> operations.DeleteWebhooksV3AppIDSettingsClearResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhooks/v3/{appId}/settings", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhooksV3AppIDSettingsClearResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def delete_webhooks_v3_app_id_subscriptions_subscription_id_archive(self, request: operations.DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveRequest) -> operations.DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhooks/v3/{appId}/subscriptions/{subscriptionId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhooksV3AppIDSubscriptionsSubscriptionIDArchiveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def get_webhooks_v3_app_id_settings_get_all(self, request: operations.GetWebhooksV3AppIDSettingsGetAllRequest) -> operations.GetWebhooksV3AppIDSettingsGetAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhooks/v3/{appId}/settings", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksV3AppIDSettingsGetAllResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingsResponse])
                res.settings_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def get_webhooks_v3_app_id_subscriptions_subscription_id_get_by_id(self, request: operations.GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDRequest) -> operations.GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhooks/v3/{appId}/subscriptions/{subscriptionId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksV3AppIDSubscriptionsSubscriptionIDGetByIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionResponse])
                res.subscription_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def get_webhooks_v3_app_id_subscriptions_get_all(self, request: operations.GetWebhooksV3AppIDSubscriptionsGetAllRequest) -> operations.GetWebhooksV3AppIDSubscriptionsGetAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhooks/v3/{appId}/subscriptions", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhooksV3AppIDSubscriptionsGetAllResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionListResponse])
                res.subscription_list_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def patch_webhooks_v3_app_id_subscriptions_subscription_id_update(self, request: operations.PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateRequest) -> operations.PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhooks/v3/{appId}/subscriptions/{subscriptionId}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchWebhooksV3AppIDSubscriptionsSubscriptionIDUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionResponse])
                res.subscription_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def post_webhooks_v3_app_id_subscriptions_batch_update_update_batch(self, request: operations.PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchRequest) -> operations.PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhooks/v3/{appId}/subscriptions/batch/update", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhooksV3AppIDSubscriptionsBatchUpdateUpdateBatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchResponseSubscriptionResponse])
                res.batch_response_subscription_response = out
        elif r.status_code == 207:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchResponseSubscriptionResponseWithErrors])
                res.batch_response_subscription_response_with_errors = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def post_webhooks_v3_app_id_subscriptions_create(self, request: operations.PostWebhooksV3AppIDSubscriptionsCreateRequest) -> operations.PostWebhooksV3AppIDSubscriptionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhooks/v3/{appId}/subscriptions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWebhooksV3AppIDSubscriptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubscriptionResponse])
                res.subscription_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    
    def put_webhooks_v3_app_id_settings_configure(self, request: operations.PutWebhooksV3AppIDSettingsConfigureRequest) -> operations.PutWebhooksV3AppIDSettingsConfigureResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/webhooks/v3/{appId}/settings", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutWebhooksV3AppIDSettingsConfigureResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SettingsResponse])
                res.settings_response = out
        else:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    