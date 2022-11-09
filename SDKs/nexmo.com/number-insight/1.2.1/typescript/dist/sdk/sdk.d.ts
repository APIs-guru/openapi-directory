import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number synchronously, in the same way that the basic and standard endpoints do.
     *
     * Vonage recommends accessing the Advanced API **asynchronously** using the `/advanced/async` endpoint, to avoid timeouts.
     *
     * Note that this endpoint also supports `POST` requests.
     *
    **/
    GetNumberInsightAdvanced(req: operations.GetNumberInsightAdvancedRequest, config?: AxiosRequestConfig): Promise<operations.GetNumberInsightAdvancedResponse>;
    /**
     * Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) number information **asynchronously** using the URL specified in the `callback` parameter.  recommends asynchronous use of the Number Insight Advanced API, to avoid timeouts.
     *
     * Note that this endpoint also supports `POST` requests.
     *
    **/
    GetNumberInsightAsync(req: operations.GetNumberInsightAsyncRequest, config?: AxiosRequestConfig): Promise<operations.GetNumberInsightAsyncResponse>;
    /**
     * Provides [basic number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.
     *
     * Note that this endpoint also supports `POST` requests.
     *
    **/
    GetNumberInsightBasic(req: operations.GetNumberInsightBasicRequest, config?: AxiosRequestConfig): Promise<operations.GetNumberInsightBasicResponse>;
    /**
     * Provides [standard number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.
     *
     * Note that this endpoint also supports `POST` requests.
     *
    **/
    GetNumberInsightStandard(req: operations.GetNumberInsightStandardRequest, config?: AxiosRequestConfig): Promise<operations.GetNumberInsightStandardResponse>;
}
export {};
