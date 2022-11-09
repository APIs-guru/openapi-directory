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
    RealtimebiddingBiddersBiddingFunctionsActivate(req: operations.RealtimebiddingBiddersBiddingFunctionsActivateRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersBiddingFunctionsActivateResponse>;
    RealtimebiddingBiddersBiddingFunctionsArchive(req: operations.RealtimebiddingBiddersBiddingFunctionsArchiveRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersBiddingFunctionsArchiveResponse>;
    RealtimebiddingBiddersBiddingFunctionsCreate(req: operations.RealtimebiddingBiddersBiddingFunctionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersBiddingFunctionsCreateResponse>;
    RealtimebiddingBiddersBiddingFunctionsList(req: operations.RealtimebiddingBiddersBiddingFunctionsListRequest, config?: AxiosRequestConfig): Promise<operations.RealtimebiddingBiddersBiddingFunctionsListResponse>;
}
export {};
