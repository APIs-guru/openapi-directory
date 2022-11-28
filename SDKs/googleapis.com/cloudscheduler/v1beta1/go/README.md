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
            Parent: "culpa",
        },
        QueryParams: operations.CloudschedulerProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "iste",
            Alt: "proto",
            Callback: "sint",
            Fields: "omnis",
            Key: "autem",
            OauthToken: "velit",
            PrettyPrint: false,
            QuotaUser: "omnis",
            UploadType: "praesentium",
            UploadProtocol: "repudiandae",
        },
        Request: &shared.Job{
            AppEngineHTTPTarget: &shared.AppEngineHTTPTarget{
                AppEngineRouting: &shared.AppEngineRouting{
                    Host: "et",
                    Instance: "eos",
                    Service: "minima",
                    Version: "ea",
                },
                Body: "qui",
                Headers: map[string]string{
                    "quod": "qui",
                    "perferendis": "autem",
                    "ab": "ab",
                },
                HTTPMethod: "GET",
                RelativeURI: "omnis",
            },
            AttemptDeadline: "at",
            Description: "facere",
            HTTPTarget: &shared.HTTPTarget{
                Body: "non",
                Headers: map[string]string{
                    "voluptas": "fuga",
                    "reiciendis": "corrupti",
                },
                HTTPMethod: "POST",
                OauthToken: &shared.OAuthToken{
                    Scope: "atque",
                    ServiceAccountEmail: "totam",
                },
                OidcToken: &shared.OidcToken{
                    Audience: "animi",
                    ServiceAccountEmail: "et",
                },
                URI: "adipisci",
            },
            LastAttemptTime: "voluptatum",
            LegacyAppEngineCron: true,
            Name: "et",
            PubsubTarget: &shared.PubsubTarget{
                Attributes: map[string]string{
                    "iure": "ad",
                    "tenetur": "optio",
                    "recusandae": "cupiditate",
                },
                Data: "ab",
                TopicName: "iste",
            },
            RetryConfig: &shared.RetryConfig{
                MaxBackoffDuration: "occaecati",
                MaxDoublings: 2459167653067799227,
                MaxRetryDuration: "qui",
                MinBackoffDuration: "est",
                RetryCount: 2409425163344331246,
            },
            Schedule: "alias",
            ScheduleTime: "sed",
            State: "DISABLED",
            Status: &shared.Status{
                Code: 7828107554680961836,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "omnis": "nemo",
                    },
                },
                Message: "illo",
            },
            TimeZone: "est",
            UserUpdateTime: "ut",
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
