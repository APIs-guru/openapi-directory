import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Bidders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * realtimebiddingBiddersBiddingFunctionsActivate - Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.
    **/
    realtimebiddingBiddersBiddingFunctionsActivate(req: operations.RealtimebiddingBiddersBiddingFunctionsActivateRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersBiddingFunctionsActivateResponse>;
    /**
     * realtimebiddingBiddersBiddingFunctionsArchive - Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.
    **/
    realtimebiddingBiddersBiddingFunctionsArchive(req: operations.RealtimebiddingBiddersBiddingFunctionsArchiveRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersBiddingFunctionsArchiveResponse>;
    /**
     * realtimebiddingBiddersBiddingFunctionsCreate - Creates a new bidding function.
    **/
    realtimebiddingBiddersBiddingFunctionsCreate(req: operations.RealtimebiddingBiddersBiddingFunctionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersBiddingFunctionsCreateResponse>;
    /**
     * realtimebiddingBiddersBiddingFunctionsList - Lists the bidding functions that a bidder currently has registered.
    **/
    realtimebiddingBiddersBiddingFunctionsList(req: operations.RealtimebiddingBiddersBiddingFunctionsListRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersBiddingFunctionsListResponse>;
}
