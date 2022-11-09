import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    PaymentsresellersubscriptionPartnersProductsList(req: operations.PaymentsresellersubscriptionPartnersProductsListRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersProductsListResponse>;
    PaymentsresellersubscriptionPartnersPromotionsFindEligible(req: operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersPromotionsFindEligibleResponse>;
    PaymentsresellersubscriptionPartnersPromotionsList(req: operations.PaymentsresellersubscriptionPartnersPromotionsListRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersPromotionsListResponse>;
    PaymentsresellersubscriptionPartnersSubscriptionsCancel(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsCancelResponse>;
    PaymentsresellersubscriptionPartnersSubscriptionsCreate(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsCreateResponse>;
    PaymentsresellersubscriptionPartnersSubscriptionsEntitle(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsEntitleResponse>;
    PaymentsresellersubscriptionPartnersSubscriptionsExtend(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsExtendResponse>;
    PaymentsresellersubscriptionPartnersSubscriptionsGet(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsGetRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsGetResponse>;
    PaymentsresellersubscriptionPartnersSubscriptionsProvision(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsProvisionResponse>;
    PaymentsresellersubscriptionPartnersSubscriptionsUndoCancel(req: operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsresellersubscriptionPartnersSubscriptionsUndoCancelResponse>;
}
export {};
