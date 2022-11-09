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
    GetAreas(req: operations.GetAreasRequest, config?: AxiosRequestConfig): Promise<operations.GetAreasResponse>;
    /**
     * The events resource provides information about road events (e.g. accidents, construction, special events). The response is a list of event elements matching the filtering parameters if any are provided.
    **/
    GetEvents(req: operations.GetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
    GetJurisdiction(req: operations.GetJurisdictionRequest, config?: AxiosRequestConfig): Promise<operations.GetJurisdictionResponse>;
    GetJurisdictiongeography(req: operations.GetJurisdictiongeographyRequest, config?: AxiosRequestConfig): Promise<operations.GetJurisdictiongeographyResponse>;
}
export {};
