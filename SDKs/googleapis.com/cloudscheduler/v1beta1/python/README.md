# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudschedulerProjectsLocationsJobsCreateRequest(
    security=operations.CloudschedulerProjectsLocationsJobsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudschedulerProjectsLocationsJobsCreatePathParams(
        parent="culpa",
    ),
    query_params=operations.CloudschedulerProjectsLocationsJobsCreateQueryParams(
        dollar_xgafv="1",
        access_token="iste",
        alt="proto",
        callback="sint",
        fields="omnis",
        key="autem",
        oauth_token="velit",
        pretty_print=False,
        quota_user="omnis",
        upload_type="praesentium",
        upload_protocol="repudiandae",
    ),
    request=shared.Job(
        app_engine_http_target=shared.AppEngineHTTPTarget(
            app_engine_routing=shared.AppEngineRouting(
                host="et",
                instance="eos",
                service="minima",
                version="ea",
            ),
            body="qui",
            headers={
                "quod": "qui",
                "perferendis": "autem",
                "ab": "ab",
            },
            http_method="GET",
            relative_uri="omnis",
        ),
        attempt_deadline="at",
        description="facere",
        http_target=shared.HTTPTarget(
            body="non",
            headers={
                "voluptas": "fuga",
                "reiciendis": "corrupti",
            },
            http_method="POST",
            oauth_token=shared.OAuthToken(
                scope="atque",
                service_account_email="totam",
            ),
            oidc_token=shared.OidcToken(
                audience="animi",
                service_account_email="et",
            ),
            uri="adipisci",
        ),
        last_attempt_time="voluptatum",
        legacy_app_engine_cron=True,
        name="et",
        pubsub_target=shared.PubsubTarget(
            attributes={
                "iure": "ad",
                "tenetur": "optio",
                "recusandae": "cupiditate",
            },
            data="ab",
            topic_name="iste",
        ),
        retry_config=shared.RetryConfig(
            max_backoff_duration="occaecati",
            max_doublings=2459167653067799227,
            max_retry_duration="qui",
            min_backoff_duration="est",
            retry_count=2409425163344331246,
        ),
        schedule="alias",
        schedule_time="sed",
        state="DISABLED",
        status=shared.Status(
            code=7828107554680961836,
            details=[
                {
                    "omnis": "nemo",
                },
            ],
            message="illo",
        ),
        time_zone="est",
        user_update_time="ut",
    ),
)
    
res = s.projects.cloudscheduler_projects_locations_jobs_create(req)

if res.job is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `cloudscheduler_projects_locations_jobs_create` - Creates a job.
* `cloudscheduler_projects_locations_jobs_delete` - Deletes a job.
* `cloudscheduler_projects_locations_jobs_get` - Gets a job.
* `cloudscheduler_projects_locations_jobs_list` - Lists jobs.
* `cloudscheduler_projects_locations_jobs_patch` - Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
* `cloudscheduler_projects_locations_jobs_pause` - Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
* `cloudscheduler_projects_locations_jobs_resume` - Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
* `cloudscheduler_projects_locations_jobs_run` - Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
* `cloudscheduler_projects_locations_list` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
