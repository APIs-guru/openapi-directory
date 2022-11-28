import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UserProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingUserProfilesGet - Gets one user profile by ID.
    **/
    dfareportingUserProfilesGet(req: operations.DfareportingUserProfilesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingUserProfilesGetResponse>;
    /**
     * dfareportingUserProfilesList - Retrieves list of user profiles for a user.
    **/
    dfareportingUserProfilesList(req: operations.DfareportingUserProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingUserProfilesListResponse>;
}
