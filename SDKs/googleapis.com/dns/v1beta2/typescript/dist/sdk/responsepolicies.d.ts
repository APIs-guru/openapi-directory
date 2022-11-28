import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ResponsePolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dnsResponsePoliciesCreate - Creates a new Response Policy
    **/
    dnsResponsePoliciesCreate(req: operations.DnsResponsePoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DnsResponsePoliciesCreateResponse>;
    /**
     * dnsResponsePoliciesDelete - Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
    **/
    dnsResponsePoliciesDelete(req: operations.DnsResponsePoliciesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DnsResponsePoliciesDeleteResponse>;
    /**
     * dnsResponsePoliciesGet - Fetches the representation of an existing Response Policy.
    **/
    dnsResponsePoliciesGet(req: operations.DnsResponsePoliciesGetRequest, config?: AxiosRequestConfig): Promise<operations.DnsResponsePoliciesGetResponse>;
    /**
     * dnsResponsePoliciesList - Enumerates all Response Policies associated with a project.
    **/
    dnsResponsePoliciesList(req: operations.DnsResponsePoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.DnsResponsePoliciesListResponse>;
    /**
     * dnsResponsePoliciesPatch - Applies a partial update to an existing Response Policy.
    **/
    dnsResponsePoliciesPatch(req: operations.DnsResponsePoliciesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DnsResponsePoliciesPatchResponse>;
    /**
     * dnsResponsePoliciesUpdate - Updates an existing Response Policy.
    **/
    dnsResponsePoliciesUpdate(req: operations.DnsResponsePoliciesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DnsResponsePoliciesUpdateResponse>;
}
