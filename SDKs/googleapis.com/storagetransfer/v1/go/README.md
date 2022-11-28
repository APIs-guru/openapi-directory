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
    
    req := operations.StoragetransferGoogleServiceAccountsGetRequest{
        Security: operations.StoragetransferGoogleServiceAccountsGetSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.StoragetransferGoogleServiceAccountsGetPathParams{
            ProjectID: "excepturi",
        },
        QueryParams: operations.StoragetransferGoogleServiceAccountsGetQueryParams{
            DollarXgafv: "2",
            AccessToken: "iusto",
            Alt: "json",
            Callback: "et",
            Fields: "necessitatibus",
            Key: "sit",
            OauthToken: "non",
            PrettyPrint: false,
            QuotaUser: "perferendis",
            UploadType: "occaecati",
            UploadProtocol: "dolorem",
        },
    }
    
    res, err := s.GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleServiceAccount != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### googleServiceAccounts

* `StoragetransferGoogleServiceAccountsGet` - Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Cloud project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.

### projects

* `StoragetransferProjectsAgentPoolsCreate` - Creates an agent pool resource.
* `StoragetransferProjectsAgentPoolsDelete` - Deletes an agent pool.
* `StoragetransferProjectsAgentPoolsList` - Lists agent pools.
* `StoragetransferProjectsAgentPoolsPatch` - Updates an existing agent pool resource.

### transferJobs

* `StoragetransferTransferJobsCreate` - Creates a transfer job that runs periodically.
* `StoragetransferTransferJobsDelete` - Deletes a transfer job. Deleting a transfer job sets its status to DELETED.
* `StoragetransferTransferJobsGet` - Gets a transfer job.
* `StoragetransferTransferJobsList` - Lists transfer jobs.
* `StoragetransferTransferJobsPatch` - Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).
* `StoragetransferTransferJobsRun` - Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.

### transferOperations

* `StoragetransferTransferOperationsCancel` - Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the `cancel` request. When you cancel an operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running operations. If an operation is not currently running, `cancel` does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you restore the state at both the destination and the source after the `cancel` request completes so that your data is in a consistent state. When you cancel a job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.
* `StoragetransferTransferOperationsList` - Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.
* `StoragetransferTransferOperationsPause` - Pauses a transfer operation.
* `StoragetransferTransferOperationsResume` - Resumes a transfer operation that is paused.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
