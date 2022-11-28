import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * orgpolicyProjectsConstraintsList - Lists `Constraints` that could be applied on the specified resource.
    **/
    orgpolicyProjectsConstraintsList(req: operations.OrgpolicyProjectsConstraintsListRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsConstraintsListResponse>;
    /**
     * orgpolicyProjectsPoliciesCreate - Creates a Policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint does not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ALREADY_EXISTS` if the policy already exists on the given Cloud resource.
    **/
    orgpolicyProjectsPoliciesCreate(req: operations.OrgpolicyProjectsPoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesCreateResponse>;
    /**
     * orgpolicyProjectsPoliciesDelete - Deletes a Policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or Org Policy does not exist.
    **/
    orgpolicyProjectsPoliciesDelete(req: operations.OrgpolicyProjectsPoliciesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesDeleteResponse>;
    /**
     * orgpolicyProjectsPoliciesGet - Gets a `Policy` on a resource. If no `Policy` is set on the resource, NOT_FOUND is returned. The `etag` value can be used with `UpdatePolicy()` to update a `Policy` during read-modify-write.
    **/
    orgpolicyProjectsPoliciesGet(req: operations.OrgpolicyProjectsPoliciesGetRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesGetResponse>;
    /**
     * orgpolicyProjectsPoliciesGetEffectivePolicy - Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy and evaluating conditions. The returned `Policy` will not have an `etag` or `condition` set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded.
    **/
    orgpolicyProjectsPoliciesGetEffectivePolicy(req: operations.OrgpolicyProjectsPoliciesGetEffectivePolicyRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesGetEffectivePolicyResponse>;
    /**
     * orgpolicyProjectsPoliciesList - Retrieves all of the `Policies` that exist on a particular resource.
    **/
    orgpolicyProjectsPoliciesList(req: operations.OrgpolicyProjectsPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesListResponse>;
    /**
     * orgpolicyProjectsPoliciesPatch - Updates a Policy. Returns a `google.rpc.Status` with `google.rpc.Code.NOT_FOUND` if the constraint or the policy do not exist. Returns a `google.rpc.Status` with `google.rpc.Code.ABORTED` if the etag supplied in the request does not match the persisted etag of the policy Note: the supplied policy will perform a full overwrite of all fields.
    **/
    orgpolicyProjectsPoliciesPatch(req: operations.OrgpolicyProjectsPoliciesPatchRequest, config?: AxiosRequestConfig): Promise<operations.OrgpolicyProjectsPoliciesPatchResponse>;
}
