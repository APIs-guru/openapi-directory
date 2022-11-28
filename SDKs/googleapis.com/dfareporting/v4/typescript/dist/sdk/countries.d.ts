import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Countries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingCountriesGet - Gets one country by ID.
    **/
    dfareportingCountriesGet(req: operations.DfareportingCountriesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCountriesGetResponse>;
    /**
     * dfareportingCountriesList - Retrieves a list of countries.
    **/
    dfareportingCountriesList(req: operations.DfareportingCountriesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingCountriesListResponse>;
}
