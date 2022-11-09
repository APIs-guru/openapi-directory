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
     * Gets a list of all feature categories used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.
    **/
    GetFeatureCategories(req: operations.GetFeatureCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetFeatureCategoriesResponse>;
    /**
     * Gets a list of all feature classes used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.
    **/
    GetFeatureClasses(req: operations.GetFeatureClassesRequest, config?: AxiosRequestConfig): Promise<operations.GetFeatureClassesResponse>;
    /**
     * Gets a list of all feature types used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.
    **/
    GetFeatureTypes(req: operations.GetFeatureTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetFeatureTypesResponse>;
    /**
     * Get information about the geographical feature with the specified featureId.
    **/
    GetFeaturesFeatureId(req: operations.GetFeaturesFeatureIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFeaturesFeatureIdResponse>;
    /**
     * Gets a list of all name authorities responsible for naming decisions of the geographical names in the BC Geographical Names Information System (BCGNIS)
    **/
    GetNameAuthorities(req: operations.GetNameAuthoritiesRequest, config?: AxiosRequestConfig): Promise<operations.GetNameAuthoritiesResponse>;
    /**
     * Search for information about geographical names which have changed most recently within a specified time window.  Changes may include status cupdates and metadata corrections.
    **/
    GetNamesChanges(req: operations.GetNamesChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesChangesResponse>;
    /**
     * Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) within the last X days.
    **/
    GetNamesDecisionsRecent(req: operations.GetNamesDecisionsRecentRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesDecisionsRecentResponse>;
    /**
     * Search for information about geographical names affected by naming 'decisions' made by the BC Geographical Names Office (naming authority) in a given year.
    **/
    GetNamesDecisionsYear(req: operations.GetNamesDecisionsYearRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesDecisionsYearResponse>;
    /**
     * Search for information about geographical names that correspond to features within a geographic bounding box.  Various options and filter parameters are available to refine the search.
    **/
    GetNamesInside(req: operations.GetNamesInsideRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesInsideResponse>;
    /**
     * Get information about the geographical name with the specified nameId.
    **/
    GetNamesNameIdOutputFormat(req: operations.GetNamesNameIdOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesNameIdOutputFormatResponse>;
    /**
     * Search for information about geographical names that correspond to features within a geographic area defined by a centre point and a radius.  Various options and filter parameters are available to refine the search.
    **/
    GetNamesNear(req: operations.GetNamesNearRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesNearResponse>;
    /**
     * Search for information about unofficial geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.
    **/
    GetNamesNotOfficialSearch(req: operations.GetNamesNotOfficialSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesNotOfficialSearchResponse>;
    /**
     * Search for information about official geographical names by the text of the name itself.  Various options and filter parameters are available to refine the search.
    **/
    GetNamesOfficialSearch(req: operations.GetNamesOfficialSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesOfficialSearchResponse>;
    /**
     * Search for information about geographical names by the text of the name itself.  The response will include both official and unofficial names.  Various options and filter parameters are available to refine the search.
    **/
    GetNamesSearch(req: operations.GetNamesSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesSearchResponse>;
}
export {};
