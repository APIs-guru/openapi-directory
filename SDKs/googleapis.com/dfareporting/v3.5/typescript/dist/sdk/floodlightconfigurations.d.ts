import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FloodlightConfigurations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingFloodlightConfigurationsGet - Gets one floodlight configuration by ID.
    **/
    dfareportingFloodlightConfigurationsGet(req: operations.DfareportingFloodlightConfigurationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightConfigurationsGetResponse>;
    /**
     * dfareportingFloodlightConfigurationsList - Retrieves a list of floodlight configurations, possibly filtered.
    **/
    dfareportingFloodlightConfigurationsList(req: operations.DfareportingFloodlightConfigurationsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightConfigurationsListResponse>;
    /**
     * dfareportingFloodlightConfigurationsPatch - Updates an existing floodlight configuration. This method supports patch semantics.
    **/
    dfareportingFloodlightConfigurationsPatch(req: operations.DfareportingFloodlightConfigurationsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightConfigurationsPatchResponse>;
    /**
     * dfareportingFloodlightConfigurationsUpdate - Updates an existing floodlight configuration.
    **/
    dfareportingFloodlightConfigurationsUpdate(req: operations.DfareportingFloodlightConfigurationsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingFloodlightConfigurationsUpdateResponse>;
}
