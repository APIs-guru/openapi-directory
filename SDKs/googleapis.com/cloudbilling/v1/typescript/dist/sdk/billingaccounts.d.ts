import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BillingAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudbillingBillingAccountsCreate - This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned as a reseller account.
    **/
    cloudbillingBillingAccountsCreate(req: operations.CloudbillingBillingAccountsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsCreateResponse>;
    /**
     * cloudbillingBillingAccountsGet - Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access).
    **/
    cloudbillingBillingAccountsGet(req: operations.CloudbillingBillingAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsGetResponse>;
    /**
     * cloudbillingBillingAccountsGetIamPolicy - Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
    **/
    cloudbillingBillingAccountsGetIamPolicy(req: operations.CloudbillingBillingAccountsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsGetIamPolicyResponse>;
    /**
     * cloudbillingBillingAccountsList - Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).
    **/
    cloudbillingBillingAccountsList(req: operations.CloudbillingBillingAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsListResponse>;
    /**
     * cloudbillingBillingAccountsPatch - Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission, which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.
    **/
    cloudbillingBillingAccountsPatch(req: operations.CloudbillingBillingAccountsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsPatchResponse>;
    /**
     * cloudbillingBillingAccountsProjectsList - Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
    **/
    cloudbillingBillingAccountsProjectsList(req: operations.CloudbillingBillingAccountsProjectsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsProjectsListResponse>;
    /**
     * cloudbillingBillingAccountsSetIamPolicy - Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).
    **/
    cloudbillingBillingAccountsSetIamPolicy(req: operations.CloudbillingBillingAccountsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsSetIamPolicyResponse>;
    /**
     * cloudbillingBillingAccountsTestIamPermissions - Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller is allowed for that resource.
    **/
    cloudbillingBillingAccountsTestIamPermissions(req: operations.CloudbillingBillingAccountsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsTestIamPermissionsResponse>;
}
