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
     * runtimeconfigProjectsConfigsCreate - Creates a new RuntimeConfig resource. The configuration name must be unique within project.
    **/
    runtimeconfigProjectsConfigsCreate(req: operations.RuntimeconfigProjectsConfigsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigProjectsConfigsCreateResponse>;
    /**
     * runtimeconfigProjectsConfigsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    runtimeconfigProjectsConfigsGetIamPolicy(req: operations.RuntimeconfigProjectsConfigsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigProjectsConfigsGetIamPolicyResponse>;
    /**
     * runtimeconfigProjectsConfigsList - Lists all the RuntimeConfig resources within project.
    **/
    runtimeconfigProjectsConfigsList(req: operations.RuntimeconfigProjectsConfigsListRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigProjectsConfigsListResponse>;
    /**
     * runtimeconfigProjectsConfigsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    runtimeconfigProjectsConfigsSetIamPolicy(req: operations.RuntimeconfigProjectsConfigsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigProjectsConfigsSetIamPolicyResponse>;
    /**
     * runtimeconfigProjectsConfigsVariablesCreate - Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix. To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.
    **/
    runtimeconfigProjectsConfigsVariablesCreate(req: operations.RuntimeconfigProjectsConfigsVariablesCreateRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigProjectsConfigsVariablesCreateResponse>;
    /**
     * runtimeconfigProjectsConfigsVariablesList - Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values, unless `return_values` is true, in which case only variables that user has IAM permission to GetVariable will be returned.
    **/
    runtimeconfigProjectsConfigsVariablesList(req: operations.RuntimeconfigProjectsConfigsVariablesListRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigProjectsConfigsVariablesListResponse>;
    /**
     * runtimeconfigProjectsConfigsVariablesUpdate - Updates an existing variable with a new value.
    **/
    runtimeconfigProjectsConfigsVariablesUpdate(req: operations.RuntimeconfigProjectsConfigsVariablesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigProjectsConfigsVariablesUpdateResponse>;
    /**
     * runtimeconfigProjectsConfigsVariablesWatch - Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out. If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`. If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`. To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.
    **/
    runtimeconfigProjectsConfigsVariablesWatch(req: operations.RuntimeconfigProjectsConfigsVariablesWatchRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigProjectsConfigsVariablesWatchResponse>;
    /**
     * runtimeconfigProjectsConfigsWaitersCreate - Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.
    **/
    runtimeconfigProjectsConfigsWaitersCreate(req: operations.RuntimeconfigProjectsConfigsWaitersCreateRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigProjectsConfigsWaitersCreateResponse>;
    /**
     * runtimeconfigProjectsConfigsWaitersDelete - Deletes the waiter with the specified name.
    **/
    runtimeconfigProjectsConfigsWaitersDelete(req: operations.RuntimeconfigProjectsConfigsWaitersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigProjectsConfigsWaitersDeleteResponse>;
    /**
     * runtimeconfigProjectsConfigsWaitersGet - Gets information about a single waiter.
    **/
    runtimeconfigProjectsConfigsWaitersGet(req: operations.RuntimeconfigProjectsConfigsWaitersGetRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigProjectsConfigsWaitersGetResponse>;
    /**
     * runtimeconfigProjectsConfigsWaitersList - List waiters within the given configuration.
    **/
    runtimeconfigProjectsConfigsWaitersList(req: operations.RuntimeconfigProjectsConfigsWaitersListRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigProjectsConfigsWaitersListResponse>;
    /**
     * runtimeconfigProjectsConfigsWaitersTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    runtimeconfigProjectsConfigsWaitersTestIamPermissions(req: operations.RuntimeconfigProjectsConfigsWaitersTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.RuntimeconfigProjectsConfigsWaitersTestIamPermissionsResponse>;
}
