import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://paymentsresellersubscription.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def paymentsresellersubscription_partners_products_list(self, request: operations.PaymentsresellersubscriptionPartnersProductsListRequest) -> operations.PaymentsresellersubscriptionPartnersProductsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/products", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersProductsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse])
                res.google_cloud_payments_reseller_subscription_v1_list_products_response = out

        return res

    
    def paymentsresellersubscription_partners_promotions_find_eligible(self, request: operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest) -> operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/promotions:findEligible", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse])
                res.google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_response = out

        return res

    
    def paymentsresellersubscription_partners_promotions_list(self, request: operations.PaymentsresellersubscriptionPartnersPromotionsListRequest) -> operations.PaymentsresellersubscriptionPartnersPromotionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/promotions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersPromotionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse])
                res.google_cloud_payments_reseller_subscription_v1_list_promotions_response = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_cancel(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:cancel", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse])
                res.google_cloud_payments_reseller_subscription_v1_cancel_subscription_response = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_create(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/subscriptions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription])
                res.google_cloud_payments_reseller_subscription_v1_subscription = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_entitle(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:entitle", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse])
                res.google_cloud_payments_reseller_subscription_v1_entitle_subscription_response = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_extend(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:extend", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse])
                res.google_cloud_payments_reseller_subscription_v1_extend_subscription_response = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_get(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsGetRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription])
                res.google_cloud_payments_reseller_subscription_v1_subscription = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_provision(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/subscriptions:provision", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription])
                res.google_cloud_payments_reseller_subscription_v1_subscription = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_undo_cancel(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:undoCancel", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse])
                res.google_cloud_payments_reseller_subscription_v1_undo_cancel_subscription_response = out

        return res

    