import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Activities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * plusActivitiesGet - Shut down. See https://developers.google.com/+/api-shutdown for more details.
    **/
    plusActivitiesGet(req: operations.PlusActivitiesGetRequest, config?: AxiosRequestConfig): Promise<operations.PlusActivitiesGetResponse>;
    /**
     * plusActivitiesList - Shut down. See https://developers.google.com/+/api-shutdown for more details.
    **/
    plusActivitiesList(req: operations.PlusActivitiesListRequest, config?: AxiosRequestConfig): Promise<operations.PlusActivitiesListResponse>;
    /**
     * plusActivitiesSearch - Shut down. See https://developers.google.com/+/api-shutdown for more details.
    **/
    plusActivitiesSearch(req: operations.PlusActivitiesSearchRequest, config?: AxiosRequestConfig): Promise<operations.PlusActivitiesSearchResponse>;
}
