# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CloudbillingBillingAccountsCreateRequest{
        Security: operations.CloudbillingBillingAccountsCreateSecurity{
            Option1: &operations.CloudbillingBillingAccountsCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        QueryParams: operations.CloudbillingBillingAccountsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "dolore",
            Alt: "media",
            Callback: "debitis",
            Fields: "laudantium",
            Key: "eaque",
            OauthToken: "molestiae",
            PrettyPrint: true,
            QuotaUser: "in",
            UploadType: "ab",
            UploadProtocol: "eum",
        },
        Request: &shared.BillingAccountInput{
            DisplayName: "magnam",
            MasterBillingAccount: "est",
        },
    }
    
    res, err := s.BillingAccounts.CloudbillingBillingAccountsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingAccount != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### billingAccounts

* `CloudbillingBillingAccountsCreate` - This method creates [billing subaccounts](https://cloud.google.com/billing/docs/concepts#subaccounts). Google Cloud resellers should use the Channel Services APIs, [accounts.customers.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers/create) and [accounts.customers.entitlements.create](https://cloud.google.com/channel/docs/reference/rest/v1/accounts.customers.entitlements/create). When creating a subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the parent account, which is typically given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the parent account has not been provisioned as a reseller account.
* `CloudbillingBillingAccountsGet` - Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access).
* `CloudbillingBillingAccountsGetIamPolicy` - Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
* `CloudbillingBillingAccountsList` - Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access).
* `CloudbillingBillingAccountsPatch` - Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission, which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.
* `CloudbillingBillingAccountsProjectsList` - Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
* `CloudbillingBillingAccountsSetIamPolicy` - Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).
* `CloudbillingBillingAccountsTestIamPermissions` - Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller is allowed for that resource.

### projects

* `CloudbillingProjectsGetBillingInfo` - Gets the billing information for a project. The current authenticated user must have the `resourcemanager.projects.get` permission for the project, which can be granted by assigning the [Project Viewer](https://cloud.google.com/iam/docs/understanding-roles#predefined_roles) role.
* `CloudbillingProjectsUpdateBillingInfo` - Sets or updates the billing account associated with a project. You specify the new billing account by setting the `billing_account_name` in the `ProjectBillingInfo` resource to the resource name of a billing account. Associating a project with an open billing account enables billing on the project and allows charges for resource usage. If the project already had a billing account, this method changes the billing account used for resource usage charges. *Note:* Incurred charges that have not yet been reported in the transaction history of the Google Cloud Console might be billed to the new billing account, even if the charge occurred before the new billing account was assigned to the project. The current authenticated user must have ownership privileges for both the [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo ) and the [billing account](https://cloud.google.com/billing/docs/how-to/billing-access). You can disable billing on the project by setting the `billing_account_name` field to empty. This action disassociates the current billing account from the project. Any billable activity of your in-use services will stop, and your application could stop functioning as expected. Any unbilled charges to date will be billed to the previously associated account. The current authenticated user must be either an owner of the project or an owner of the billing account for the project. Note that associating a project with a *closed* billing account will have much the same effect as disabling billing on the project: any paid resources used by the project will be shut down. Thus, unless you wish to disable billing, you should always call this method with the name of an *open* billing account.

### services

* `CloudbillingServicesList` - Lists all public cloud services.
* `CloudbillingServicesSkusList` - Lists all publicly available SKUs for a given cloud service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
