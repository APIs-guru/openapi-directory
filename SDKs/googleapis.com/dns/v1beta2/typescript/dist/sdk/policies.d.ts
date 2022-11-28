import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Policies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dnsPoliciesCreate - Creates a new Policy.
    **/
    dnsPoliciesCreate(req: operations.DnsPoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DnsPoliciesCreateResponse>;
    /**
     * dnsPoliciesDelete - Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
    **/
    dnsPoliciesDelete(req: operations.DnsPoliciesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DnsPoliciesDeleteResponse>;
    /**
     * dnsPoliciesGet - Fetches the representation of an existing Policy.
    **/
    dnsPoliciesGet(req: operations.DnsPoliciesGetRequest, config?: AxiosRequestConfig): Promise<operations.DnsPoliciesGetResponse>;
    /**
     * dnsPoliciesList - Enumerates all Policies associated with a project.
    **/
    dnsPoliciesList(req: operations.DnsPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.DnsPoliciesListResponse>;
    /**
     * dnsPoliciesPatch - Applies a partial update to an existing Policy.
    **/
    dnsPoliciesPatch(req: operations.DnsPoliciesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DnsPoliciesPatchResponse>;
    /**
     * dnsPoliciesUpdate - Updates an existing Policy.
    **/
    dnsPoliciesUpdate(req: operations.DnsPoliciesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DnsPoliciesUpdateResponse>;
}
