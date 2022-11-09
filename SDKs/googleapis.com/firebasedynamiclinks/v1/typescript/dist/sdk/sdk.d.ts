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
    FirebasedynamiclinksGetLinkStats(req: operations.FirebasedynamiclinksGetLinkStatsRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedynamiclinksGetLinkStatsResponse>;
    FirebasedynamiclinksInstallAttribution(req: operations.FirebasedynamiclinksInstallAttributionRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedynamiclinksInstallAttributionResponse>;
    FirebasedynamiclinksManagedShortLinksCreate(req: operations.FirebasedynamiclinksManagedShortLinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedynamiclinksManagedShortLinksCreateResponse>;
    FirebasedynamiclinksReopenAttribution(req: operations.FirebasedynamiclinksReopenAttributionRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedynamiclinksReopenAttributionResponse>;
    FirebasedynamiclinksShortLinksCreate(req: operations.FirebasedynamiclinksShortLinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirebasedynamiclinksShortLinksCreateResponse>;
}
export {};
