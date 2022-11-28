import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FeatureTaxonomy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFeatureCategories - Get all feature categories
     *
     * Gets a list of all feature categories used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.
    **/
    getFeatureCategories(req: operations.GetFeatureCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetFeatureCategoriesResponse>;
    /**
     * getFeatureClasses - Get all feature classes
     *
     * Gets a list of all feature classes used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.
    **/
    getFeatureClasses(req: operations.GetFeatureClassesRequest, config?: AxiosRequestConfig): Promise<operations.GetFeatureClassesResponse>;
    /**
     * getFeatureTypes - Get all feature types
     *
     * Gets a list of all feature types used by the BC Geographical Names Information System (BCGNIS).  Note: there are three levels of classification in the BCGNIS feature taxonomy: classes, categories and types.  A type is a subset of a category, and a category is a subset of a class.
    **/
    getFeatureTypes(req: operations.GetFeatureTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetFeatureTypesResponse>;
}
