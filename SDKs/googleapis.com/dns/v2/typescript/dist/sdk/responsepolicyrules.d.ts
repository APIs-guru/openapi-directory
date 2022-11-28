import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ResponsePolicyRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dnsResponsePolicyRulesCreate - Creates a new Response Policy Rule.
    **/
    dnsResponsePolicyRulesCreate(req: operations.DnsResponsePolicyRulesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DnsResponsePolicyRulesCreateResponse>;
    /**
     * dnsResponsePolicyRulesDelete - Deletes a previously created Response Policy Rule.
    **/
    dnsResponsePolicyRulesDelete(req: operations.DnsResponsePolicyRulesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DnsResponsePolicyRulesDeleteResponse>;
    /**
     * dnsResponsePolicyRulesGet - Fetches the representation of an existing Response Policy Rule.
    **/
    dnsResponsePolicyRulesGet(req: operations.DnsResponsePolicyRulesGetRequest, config?: AxiosRequestConfig): Promise<operations.DnsResponsePolicyRulesGetResponse>;
    /**
     * dnsResponsePolicyRulesList - Enumerates all Response Policy Rules associated with a project.
    **/
    dnsResponsePolicyRulesList(req: operations.DnsResponsePolicyRulesListRequest, config?: AxiosRequestConfig): Promise<operations.DnsResponsePolicyRulesListResponse>;
    /**
     * dnsResponsePolicyRulesPatch - Applies a partial update to an existing Response Policy Rule.
    **/
    dnsResponsePolicyRulesPatch(req: operations.DnsResponsePolicyRulesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DnsResponsePolicyRulesPatchResponse>;
    /**
     * dnsResponsePolicyRulesUpdate - Updates an existing Response Policy Rule.
    **/
    dnsResponsePolicyRulesUpdate(req: operations.DnsResponsePolicyRulesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DnsResponsePolicyRulesUpdateResponse>;
}
