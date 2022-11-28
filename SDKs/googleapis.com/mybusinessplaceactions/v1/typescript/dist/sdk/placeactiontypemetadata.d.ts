import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PlaceActionTypeMetadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mybusinessplaceactionsPlaceActionTypeMetadataList - Returns the list of available place action types for a location or country.
    **/
    mybusinessplaceactionsPlaceActionTypeMetadataList(req: operations.MybusinessplaceactionsPlaceActionTypeMetadataListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessplaceactionsPlaceActionTypeMetadataListResponse>;
}
