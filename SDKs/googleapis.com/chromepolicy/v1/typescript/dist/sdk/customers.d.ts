import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * chromepolicyCustomersPoliciesGroupsBatchDelete - Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
    **/
    chromepolicyCustomersPoliciesGroupsBatchDelete(req: operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse>;
    /**
     * chromepolicyCustomersPoliciesGroupsBatchModify - Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
    **/
    chromepolicyCustomersPoliciesGroupsBatchModify(req: operations.ChromepolicyCustomersPoliciesGroupsBatchModifyRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesGroupsBatchModifyResponse>;
    /**
     * chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering - Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
    **/
    chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering(req: operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingResponse>;
    /**
     * chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering - Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
    **/
    chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering(req: operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingResponse>;
    /**
     * chromepolicyCustomersPoliciesNetworksDefineCertificate - Creates a certificate at a specified OU for a customer.
    **/
    chromepolicyCustomersPoliciesNetworksDefineCertificate(req: operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateResponse>;
    /**
     * chromepolicyCustomersPoliciesNetworksDefineNetwork - Define a new network.
    **/
    chromepolicyCustomersPoliciesNetworksDefineNetwork(req: operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkResponse>;
    /**
     * chromepolicyCustomersPoliciesNetworksRemoveCertificate - Remove an existing certificate by guid.
    **/
    chromepolicyCustomersPoliciesNetworksRemoveCertificate(req: operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateResponse>;
    /**
     * chromepolicyCustomersPoliciesNetworksRemoveNetwork - Remove an existing network by guid.
    **/
    chromepolicyCustomersPoliciesNetworksRemoveNetwork(req: operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse>;
    /**
     * chromepolicyCustomersPoliciesOrgunitsBatchInherit - Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
    **/
    chromepolicyCustomersPoliciesOrgunitsBatchInherit(req: operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse>;
    /**
     * chromepolicyCustomersPoliciesOrgunitsBatchModify - Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
    **/
    chromepolicyCustomersPoliciesOrgunitsBatchModify(req: operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse>;
    /**
     * chromepolicyCustomersPoliciesResolve - Gets the resolved policy values for a list of policies that match a search query.
    **/
    chromepolicyCustomersPoliciesResolve(req: operations.ChromepolicyCustomersPoliciesResolveRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesResolveResponse>;
    /**
     * chromepolicyCustomersPolicySchemasGet - Get a specific policy schema for a customer by its resource name.
    **/
    chromepolicyCustomersPolicySchemasGet(req: operations.ChromepolicyCustomersPolicySchemasGetRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPolicySchemasGetResponse>;
    /**
     * chromepolicyCustomersPolicySchemasList - Gets a list of policy schemas that match a specified filter value for a given customer.
    **/
    chromepolicyCustomersPolicySchemasList(req: operations.ChromepolicyCustomersPolicySchemasListRequest, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPolicySchemasListResponse>;
}
