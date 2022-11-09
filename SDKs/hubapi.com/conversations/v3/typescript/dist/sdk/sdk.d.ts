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
    /**
     * Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours
    **/
    PostVisitorIdentificationV3TokensCreateGenerateToken(req: operations.PostVisitorIdentificationV3TokensCreateGenerateTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostVisitorIdentificationV3TokensCreateGenerateTokenResponse>;
}
export {};
