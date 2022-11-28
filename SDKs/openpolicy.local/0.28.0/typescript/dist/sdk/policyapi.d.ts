import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PolicyApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePolicyModule - Delete a policy module
     *
     * This API endpoint removes an existing policy module from the server
    **/
    deletePolicyModule(req: operations.DeletePolicyModuleRequest, config?: AxiosRequestConfig): Promise<operations.DeletePolicyModuleResponse>;
    /**
     * getPolicies - List policies
     *
     * This API endpoint responds with a list of all policy modules on the server (result response)
    **/
    getPolicies(req: operations.GetPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetPoliciesResponse>;
    /**
     * getPolicyModule - Get a policy module
     *
     * This API endpoint returns the details of the specified policy module (`{id}`)
    **/
    getPolicyModule(req: operations.GetPolicyModuleRequest, config?: AxiosRequestConfig): Promise<operations.GetPolicyModuleResponse>;
    /**
     * putPolicyModule - Create or update a policy module
     *
     * - If the policy module does not exist, it is created.
     * - If the policy module already exists, it is replaced.
     *
     * If the policy module isn't correctly defined, a *bad request* (400) response is returned.
     *
     * ### Example policy module
     * ```yaml
     * package opa.examples
     *
     * import data.servers
     * import data.networks
     * import data.ports
     *
     * public_servers[server] {
     *   some k, m
     *   	server := servers[_]
     *   	server.ports[_] == ports[k].id
     *   	ports[k].networks[_] == networks[m].id
     *   	networks[m].public == true
     * }
     * ```
    **/
    putPolicyModule(req: operations.PutPolicyModuleRequest, config?: AxiosRequestConfig): Promise<operations.PutPolicyModuleResponse>;
}
