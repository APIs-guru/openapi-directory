import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Partners {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * paymentsresellersubscriptionPartnersProductsList - To retrieve the products that can be resold by the partner. It should be autenticated with a service account.
    **/
    paymentsresellersubscriptionPartnersProductsList(req: operations.PaymentsresellersubscriptionPartnersProductsListRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersProductsListResponse>;
    /**
     * paymentsresellersubscriptionPartnersPromotionsFindEligible - To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.
    **/
    paymentsresellersubscriptionPartnersPromotionsFindEligible(req: operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse>;
    /**
     * paymentsresellersubscriptionPartnersPromotionsList - To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.
    **/
    paymentsresellersubscriptionPartnersPromotionsList(req: operations.PaymentsresellersubscriptionPartnersPromotionsListRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersPromotionsListResponse>;
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsCancel - Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.
    **/
    paymentsresellersubscriptionPartnersSubscriptionsCancel(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse>;
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsCreate - Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.
    **/
    paymentsresellersubscriptionPartnersSubscriptionsCreate(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse>;
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsEntitle - Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.
    **/
    paymentsresellersubscriptionPartnersSubscriptionsEntitle(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse>;
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsExtend - Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.
    **/
    paymentsresellersubscriptionPartnersSubscriptionsExtend(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse>;
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsGet - Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.
    **/
    paymentsresellersubscriptionPartnersSubscriptionsGet(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsGetRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse>;
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsProvision - Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.
    **/
    paymentsresellersubscriptionPartnersSubscriptionsProvision(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse>;
    /**
     * paymentsresellersubscriptionPartnersSubscriptionsUndoCancel - Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.
    **/
    paymentsresellersubscriptionPartnersSubscriptionsUndoCancel(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse>;
}
