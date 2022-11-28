import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GuaranteedOrders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * displayvideoGuaranteedOrdersCreate - Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
    **/
    displayvideoGuaranteedOrdersCreate(req: operations.DisplayvideoGuaranteedOrdersCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGuaranteedOrdersCreateResponse>;
    /**
     * displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors - Edits read advertisers of a guaranteed order.
    **/
    displayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessors(req: operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse>;
    /**
     * displayvideoGuaranteedOrdersGet - Gets a guaranteed order.
    **/
    displayvideoGuaranteedOrdersGet(req: operations.DisplayvideoGuaranteedOrdersGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGuaranteedOrdersGetResponse>;
    /**
     * displayvideoGuaranteedOrdersList - Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
    **/
    displayvideoGuaranteedOrdersList(req: operations.DisplayvideoGuaranteedOrdersListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGuaranteedOrdersListResponse>;
    /**
     * displayvideoGuaranteedOrdersPatch - Updates an existing guaranteed order. Returns the updated guaranteed order if successful.
    **/
    displayvideoGuaranteedOrdersPatch(req: operations.DisplayvideoGuaranteedOrdersPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGuaranteedOrdersPatchResponse>;
}
