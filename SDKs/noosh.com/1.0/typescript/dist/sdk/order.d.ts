import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Order {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBuyOrder - Get a specific buy order
     *
     * Get a specific buy order
    **/
    getBuyOrder(req: operations.GetBuyOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetBuyOrderResponse>;
    /**
     * getBuyOrderList - List the buy orders
     *
     * List the buy orders
    **/
    getBuyOrderList(req: operations.GetBuyOrderListRequest, config?: AxiosRequestConfig): Promise<operations.GetBuyOrderListResponse>;
    /**
     * getBuyOrderListOfWorkgroup - List the buy orders of workgroup
     *
     * List the buy orders of workgroup
    **/
    getBuyOrderListOfWorkgroup(req: operations.GetBuyOrderListOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetBuyOrderListOfWorkgroupResponse>;
    /**
     * getBuyOrderOfWorkgroup - Get a specific buy order of workgroup
     *
     * Get a specific buy order of workgroup
    **/
    getBuyOrderOfWorkgroup(req: operations.GetBuyOrderOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetBuyOrderOfWorkgroupResponse>;
    /**
     * getOrder - Get a specific buy/sell order
     *
     * Get a specific buy/sell order
    **/
    getOrder(req: operations.GetOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderResponse>;
    /**
     * getSellOrder - Get a specific sell order
     *
     * Get a specific sell order
    **/
    getSellOrder(req: operations.GetSellOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetSellOrderResponse>;
    /**
     * getSellOrderList - List the sell orders
     *
     * List the sell orders
    **/
    getSellOrderList(req: operations.GetSellOrderListRequest, config?: AxiosRequestConfig): Promise<operations.GetSellOrderListResponse>;
    /**
     * getSellOrderListOfWorkgroup - List the sell orders of workgrop
     *
     * List the sell orders of workgrop
    **/
    getSellOrderListOfWorkgroup(req: operations.GetSellOrderListOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetSellOrderListOfWorkgroupResponse>;
    /**
     * getSellOrderOfWorkgroup - Get a specific sell order
     *
     * Get a specific sell order
    **/
    getSellOrderOfWorkgroup(req: operations.GetSellOrderOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetSellOrderOfWorkgroupResponse>;
    /**
     * postBuyOrder - Create a quick buy order
     *
     * Create a quick buy order
    **/
    postBuyOrder(req: operations.PostBuyOrderRequest, config?: AxiosRequestConfig): Promise<operations.PostBuyOrderResponse>;
    /**
     * putBuyOrder - Update a specific buy order
     *
     * Update a specific buy order
    **/
    putBuyOrder(req: operations.PutBuyOrderRequest, config?: AxiosRequestConfig): Promise<operations.PutBuyOrderResponse>;
    /**
     * putSellOrder - Update / Accept or Reject a specific sell order
     *
     * Update / Accept or Reject a specific sell order
    **/
    putSellOrder(req: operations.PutSellOrderRequest, config?: AxiosRequestConfig): Promise<operations.PutSellOrderResponse>;
}
