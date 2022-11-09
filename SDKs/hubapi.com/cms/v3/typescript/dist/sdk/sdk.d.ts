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
     * Returns all existing domains that have been created. Results can be limited and filtered by creation or updated date.
    **/
    GetCmsV3DomainsGetPage(req: operations.GetCmsV3DomainsGetPageRequest, config?: AxiosRequestConfig): Promise<operations.GetCmsV3DomainsGetPageResponse>;
    /**
     * Returns a single domains with the id specified.
    **/
    GetCmsV3DomainsDomainIdGetById(req: operations.GetCmsV3DomainsDomainIdGetByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCmsV3DomainsDomainIdGetByIdResponse>;
}
export {};
