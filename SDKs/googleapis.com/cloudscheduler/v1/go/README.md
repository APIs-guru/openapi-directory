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
    
    req := operations.CloudschedulerProjectsLocationsJobsCreateRequest{
        Security: operations.CloudschedulerProjectsLocationsJobsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudschedulerProjectsLocationsJobsCreatePathParams{
            Parent: "totam",
        },
        QueryParams: operations.CloudschedulerProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "harum",
            Alt: "media",
            Callback: "et",
            Fields: "esse",
            Key: "eos",
            OauthToken: "laborum",
            PrettyPrint: true,
            QuotaUser: "consequuntur",
            UploadType: "autem",
            UploadProtocol: "laudantium",
        },
        Request: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "asperiores",
                    Instance: "eos",
                    Service: "ullam",
                    Version: "esse",
                },
                Body: "culpa",
                Headers: map[string]string{
                    "quod": "illum",
                    "consequuntur": "tempore",
                },
                HTTPMethod: "DELETE",
                RelativeURI: "tempora",
            },
            AttemptDeadline: "vitae",
            Description: "animi",
            HTTPTarget: &shared.HTTPTarget{
                Body: "aut",
                Headers: map[string]string{
                    "rem": "ut",
                    "amet": "qui",
                },
                HTTPMethod: "GET",
                OauthToken: &shared.OAuthToken{
                    Scope: "sapiente",
                    ServiceAccountEmail: "hic",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "voluptas",
                    ServiceAccountEmail: "minima",
                },
                URI: "officia",
            },
            LastAttemptTime: "in",
            Name: "sequi",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "ipsa": "iste",
                },
                Data: "omnis",
                TopicName: "debitis",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "itaque",
                MaxDoublings: 115168905495215181,
                MaxRetryDuration: "molestiae",
                MinBackoffDuration: "architecto",
                RetryCount: 6902781708756402763,
            },
            Schedule: "ea",
            ScheduleTime: "sit",
            State: "UPDATE_FAILED",
            Status: &shared.Status{
                Code: 2626272047583457803,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "at": "et",
                    },
                },
                Message: "id",
            },
            TimeZone: "veniam",
            UserUpdateTime: "velit",
        },
    }
    
    res, err := s.Projects.CloudschedulerProjectsLocationsJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `CloudschedulerProjectsLocationsJobsCreate` - Creates a job.
* `CloudschedulerProjectsLocationsJobsDelete` - Deletes a job.
* `CloudschedulerProjectsLocationsJobsGet` - Gets a job.
* `CloudschedulerProjectsLocationsJobsList` - Lists jobs.
* `CloudschedulerProjectsLocationsJobsPatch` - Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
* `CloudschedulerProjectsLocationsJobsPause` - Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
* `CloudschedulerProjectsLocationsJobsResume` - Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
* `CloudschedulerProjectsLocationsJobsRun` - Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
* `CloudschedulerProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
