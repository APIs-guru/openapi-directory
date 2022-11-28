import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudresourcemanagerOrganizationsGet - Fetches an Organization resource identified by the specified resource name.
    **/
    cloudresourcemanagerOrganizationsGet(req: operations.CloudresourcemanagerOrganizationsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsGetResponse>;
    /**
     * cloudresourcemanagerOrganizationsGetIamPolicy - Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.getIamPolicy` on the specified organization
    **/
    cloudresourcemanagerOrganizationsGetIamPolicy(req: operations.CloudresourcemanagerOrganizationsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsGetIamPolicyResponse>;
    /**
     * cloudresourcemanagerOrganizationsSearch - Searches Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the results. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`
    **/
    cloudresourcemanagerOrganizationsSearch(req: operations.CloudresourcemanagerOrganizationsSearchRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsSearchResponse>;
    /**
     * cloudresourcemanagerOrganizationsSetIamPolicy - Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123". Authorization requires the Google IAM permission `resourcemanager.organizations.setIamPolicy` on the specified organization
    **/
    cloudresourcemanagerOrganizationsSetIamPolicy(req: operations.CloudresourcemanagerOrganizationsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsSetIamPolicyResponse>;
    /**
     * cloudresourcemanagerOrganizationsTestIamPermissions - Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123". There are no permissions required for making this API call.
    **/
    cloudresourcemanagerOrganizationsTestIamPermissions(req: operations.CloudresourcemanagerOrganizationsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerOrganizationsTestIamPermissionsResponse>;
}
