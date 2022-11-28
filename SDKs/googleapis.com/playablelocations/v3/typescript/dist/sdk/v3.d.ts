import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V3 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * playablelocationsLogImpressions - Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request succeeds, or no impressions are saved, and this request fails.
    **/
    playablelocationsLogImpressions(req: operations.PlayablelocationsLogImpressionsRequest, config?: AxiosRequestConfig): Promise<operations.PlayablelocationsLogImpressionsResponse>;
    /**
     * playablelocationsLogPlayerReports - Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this request fails.
    **/
    playablelocationsLogPlayerReports(req: operations.PlayablelocationsLogPlayerReportsRequest, config?: AxiosRequestConfig): Promise<operations.PlayablelocationsLogPlayerReportsResponse>;
    /**
     * playablelocationsSamplePlayableLocations - Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different results as the state of the world changes over time.
    **/
    playablelocationsSamplePlayableLocations(req: operations.PlayablelocationsSamplePlayableLocationsRequest, config?: AxiosRequestConfig): Promise<operations.PlayablelocationsSamplePlayableLocationsResponse>;
}
