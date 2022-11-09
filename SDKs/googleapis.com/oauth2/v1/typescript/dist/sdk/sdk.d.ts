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
    Oauth2Tokeninfo(req: operations.Oauth2TokeninfoRequest, config?: AxiosRequestConfig): Promise<operations.Oauth2TokeninfoResponse>;
    Oauth2UserinfoGet(req: operations.Oauth2UserinfoGetRequest, config?: AxiosRequestConfig): Promise<operations.Oauth2UserinfoGetResponse>;
    Oauth2UserinfoV2MeGet(req: operations.Oauth2UserinfoV2MeGetRequest, config?: AxiosRequestConfig): Promise<operations.Oauth2UserinfoV2MeGetResponse>;
}
export {};
