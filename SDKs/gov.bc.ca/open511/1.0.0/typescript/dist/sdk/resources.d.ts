import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Resources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAreas - Lists the geographical areas (e.g. districts) that can be used to filter events.
    **/
    getAreas(req: operations.GetAreasRequest, config?: AxiosRequestConfig): Promise<operations.GetAreasResponse>;
    /**
     * getEvents - Lists road events
     *
     * The events resource provides information about road events (e.g. accidents, construction, special events). The response is a list of event elements matching the filtering parameters if any are provided.
    **/
    getEvents(req: operations.GetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsResponse>;
    /**
     * getJurisdiction - Lists the jurisdictions publishing data through this Open511 API implementation
    **/
    getJurisdiction(req: operations.GetJurisdictionRequest, config?: AxiosRequestConfig): Promise<operations.GetJurisdictionResponse>;
    /**
     * getJurisdictiongeography - Provides the geographical boundaries for all the jurisdictions.
    **/
    getJurisdictiongeography(req: operations.GetJurisdictiongeographyRequest, config?: AxiosRequestConfig): Promise<operations.GetJurisdictiongeographyResponse>;
}
