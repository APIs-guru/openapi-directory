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
    FactchecktoolsClaimsSearch(req: operations.FactchecktoolsClaimsSearchRequest, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsClaimsSearchResponse>;
    FactchecktoolsPagesCreate(req: operations.FactchecktoolsPagesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesCreateResponse>;
    FactchecktoolsPagesDelete(req: operations.FactchecktoolsPagesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesDeleteResponse>;
    FactchecktoolsPagesGet(req: operations.FactchecktoolsPagesGetRequest, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesGetResponse>;
    FactchecktoolsPagesList(req: operations.FactchecktoolsPagesListRequest, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesListResponse>;
    FactchecktoolsPagesUpdate(req: operations.FactchecktoolsPagesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.FactchecktoolsPagesUpdateResponse>;
}
export {};
