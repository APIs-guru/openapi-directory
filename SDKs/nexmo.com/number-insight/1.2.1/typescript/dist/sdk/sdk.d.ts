import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.nexmo.com/ni"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getNumberInsightAdvanced - Advanced Number Insight (sync)
     *
     * Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number synchronously, in the same way that the basic and standard endpoints do.
     *
     * Vonage recommends accessing the Advanced API **asynchronously** using the `/advanced/async` endpoint, to avoid timeouts.
     *
     * Note that this endpoint also supports `POST` requests.
     *
    **/
    getNumberInsightAdvanced(req: operations.GetNumberInsightAdvancedRequest, config?: AxiosRequestConfig): Promise<operations.GetNumberInsightAdvancedResponse>;
    /**
     * getNumberInsightAsync - Advanced Number Insight (async)
     *
     * Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) number information **asynchronously** using the URL specified in the `callback` parameter.  recommends asynchronous use of the Number Insight Advanced API, to avoid timeouts.
     *
     * Note that this endpoint also supports `POST` requests.
     *
    **/
    getNumberInsightAsync(req: operations.GetNumberInsightAsyncRequest, config?: AxiosRequestConfig): Promise<operations.GetNumberInsightAsyncResponse>;
    /**
     * getNumberInsightBasic - Basic Number Insight
     *
     * Provides [basic number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.
     *
     * Note that this endpoint also supports `POST` requests.
     *
    **/
    getNumberInsightBasic(req: operations.GetNumberInsightBasicRequest, config?: AxiosRequestConfig): Promise<operations.GetNumberInsightBasicResponse>;
    /**
     * getNumberInsightStandard - Standard Number Insight
     *
     * Provides [standard number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.
     *
     * Note that this endpoint also supports `POST` requests.
     *
    **/
    getNumberInsightStandard(req: operations.GetNumberInsightStandardRequest, config?: AxiosRequestConfig): Promise<operations.GetNumberInsightStandardResponse>;
}
export {};
