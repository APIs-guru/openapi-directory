import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Onboarding {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * booksOnboardingListCategories - List categories for onboarding experience.
    **/
    booksOnboardingListCategories(req: operations.BooksOnboardingListCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.BooksOnboardingListCategoriesResponse>;
    /**
     * booksOnboardingListCategoryVolumes - List available volumes under categories for onboarding experience.
    **/
    booksOnboardingListCategoryVolumes(req: operations.BooksOnboardingListCategoryVolumesRequest, config?: AxiosRequestConfig): Promise<operations.BooksOnboardingListCategoryVolumesResponse>;
}
