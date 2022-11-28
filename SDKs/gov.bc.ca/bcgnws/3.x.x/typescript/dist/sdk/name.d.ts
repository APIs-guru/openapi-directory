import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Name {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNamesChanges - Search for names with metadata changes in a given period
     *
     * Search for information about geographical names which have changed most recently within a specified time window.  Changes may include status cupdates and metadata corrections.
    **/
    getNamesChanges(req: operations.GetNamesChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesChangesResponse>;
    /**
     * getNamesDecisionsRecent - Search for names affected by recent naming decision
     *
     * Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) within the last X days.
    **/
    getNamesDecisionsRecent(req: operations.GetNamesDecisionsRecentRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesDecisionsRecentResponse>;
    /**
     * getNamesDecisionsYear - Search for names affected by naming decisions in a given year
     *
     * Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) in a given year.
    **/
    getNamesDecisionsYear(req: operations.GetNamesDecisionsYearRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesDecisionsYearResponse>;
    /**
     * getNamesInside - Search in a geographic area
     *
     * Search for information about geographical names that correspond to features within a geographic bounding box.  Various options and filter parameters are available to refine the search.
    **/
    getNamesInside(req: operations.GetNamesInsideRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesInsideResponse>;
    /**
     * getNamesNameIdOutputFormat - Get a name by its nameId
     *
     * Get information about the geographical name with the specified nameId.
    **/
    getNamesNameIdOutputFormat(req: operations.GetNamesNameIdOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesNameIdOutputFormatResponse>;
    /**
     * getNamesNear - Search near to a geographic point
     *
     * Search for information about geographical names that correspond to features within a geographic area defined by a centre point and a radius.  Various options and filter parameters are available to refine the search.
    **/
    getNamesNear(req: operations.GetNamesNearRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesNearResponse>;
    /**
     * getNamesNotOfficialSearch - Search by name, limit to unofficial names only
     *
     * Search for information about unofficial geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.
    **/
    getNamesNotOfficialSearch(req: operations.GetNamesNotOfficialSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesNotOfficialSearchResponse>;
    /**
     * getNamesOfficialSearch - Search by name, limit to official names only
     *
     * Search for information about official geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.
    **/
    getNamesOfficialSearch(req: operations.GetNamesOfficialSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesOfficialSearchResponse>;
    /**
     * getNamesSearch - Search by name
     *
     * Search for information about geographical names by the text of the name itself.  The response will include both official and unofficial names.  Various options and filter parameters are available to refine the search.
    **/
    getNamesSearch(req: operations.GetNamesSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesSearchResponse>;
}
