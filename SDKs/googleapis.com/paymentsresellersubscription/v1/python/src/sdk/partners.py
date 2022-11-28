import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Partners:
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

    
    def paymentsresellersubscription_partners_products_list(self, request: operations.PaymentsresellersubscriptionPartnersProductsListRequest) -> operations.PaymentsresellersubscriptionPartnersProductsListResponse:
        r"""To retrieve the products that can be resold by the partner. It should be autenticated with a service account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/products", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersProductsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse])
                res.google_cloud_payments_reseller_subscription_v1_list_products_response = out

        return res

    
    def paymentsresellersubscription_partners_promotions_find_eligible(self, request: operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest) -> operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse:
        r"""To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/promotions:findEligible", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse])
                res.google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_response = out

        return res

    
    def paymentsresellersubscription_partners_promotions_list(self, request: operations.PaymentsresellersubscriptionPartnersPromotionsListRequest) -> operations.PaymentsresellersubscriptionPartnersPromotionsListResponse:
        r"""To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/promotions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersPromotionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse])
                res.google_cloud_payments_reseller_subscription_v1_list_promotions_response = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_cancel(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse:
        r"""Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse])
                res.google_cloud_payments_reseller_subscription_v1_cancel_subscription_response = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_create(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse:
        r"""Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/subscriptions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription])
                res.google_cloud_payments_reseller_subscription_v1_subscription = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_entitle(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse:
        r"""Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:entitle", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse])
                res.google_cloud_payments_reseller_subscription_v1_entitle_subscription_response = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_extend(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse:
        r"""Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:extend", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse])
                res.google_cloud_payments_reseller_subscription_v1_extend_subscription_response = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_get(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsGetRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse:
        r"""Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription])
                res.google_cloud_payments_reseller_subscription_v1_subscription = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_provision(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse:
        r"""Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/subscriptions:provision", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1Subscription])
                res.google_cloud_payments_reseller_subscription_v1_subscription = out

        return res

    
    def paymentsresellersubscription_partners_subscriptions_undo_cancel(self, request: operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest) -> operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse:
        r"""Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:undoCancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse])
                res.google_cloud_payments_reseller_subscription_v1_undo_cancel_subscription_response = out

        return res

    