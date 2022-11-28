import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AccountUserProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingAccountUserProfilesGet - Gets one account user profile by ID.
    **/
    dfareportingAccountUserProfilesGet(req: operations.DfareportingAccountUserProfilesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountUserProfilesGetResponse>;
    /**
     * dfareportingAccountUserProfilesInsert - Inserts a new account user profile.
    **/
    dfareportingAccountUserProfilesInsert(req: operations.DfareportingAccountUserProfilesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountUserProfilesInsertResponse>;
    /**
     * dfareportingAccountUserProfilesList - Retrieves a list of account user profiles, possibly filtered. This method supports paging.
    **/
    dfareportingAccountUserProfilesList(req: operations.DfareportingAccountUserProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountUserProfilesListResponse>;
    /**
     * dfareportingAccountUserProfilesPatch - Updates an existing account user profile. This method supports patch semantics.
    **/
    dfareportingAccountUserProfilesPatch(req: operations.DfareportingAccountUserProfilesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountUserProfilesPatchResponse>;
    /**
     * dfareportingAccountUserProfilesUpdate - Updates an existing account user profile.
    **/
    dfareportingAccountUserProfilesUpdate(req: operations.DfareportingAccountUserProfilesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountUserProfilesUpdateResponse>;
}
