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
    MybusinessplaceactionsLocationsPlaceActionLinksCreate(req: operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse>;
    MybusinessplaceactionsLocationsPlaceActionLinksDelete(req: operations.MybusinessplaceactionsLocationsPlaceActionLinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessplaceactionsLocationsPlaceActionLinksDeleteResponse>;
    MybusinessplaceactionsLocationsPlaceActionLinksGet(req: operations.MybusinessplaceactionsLocationsPlaceActionLinksGetRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessplaceactionsLocationsPlaceActionLinksGetResponse>;
    MybusinessplaceactionsLocationsPlaceActionLinksList(req: operations.MybusinessplaceactionsLocationsPlaceActionLinksListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessplaceactionsLocationsPlaceActionLinksListResponse>;
    MybusinessplaceactionsLocationsPlaceActionLinksPatch(req: operations.MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse>;
    MybusinessplaceactionsPlaceActionTypeMetadataList(req: operations.MybusinessplaceactionsPlaceActionTypeMetadataListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessplaceactionsPlaceActionTypeMetadataListResponse>;
}
export {};
