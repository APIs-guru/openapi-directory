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
    
req = operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest(
    security=operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ClouddeployProjectsLocationsDeliveryPipelinesCreatePathParams(
        parent="dolorum",
    ),
    query_params=operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams(
        dollar_xgafv="1",
        access_token="repellendus",
        alt="json",
        callback="commodi",
        delivery_pipeline_id="illo",
        fields="qui",
        key="vel",
        oauth_token="aliquam",
        pretty_print=True,
        quota_user="necessitatibus",
        request_id="omnis",
        upload_type="inventore",
        upload_protocol="nihil",
        validate_only=False,
    ),
    request=shared.DeliveryPipelineInput(
        annotations={
            "mollitia": "et",
            "impedit": "cupiditate",
            "ut": "earum",
        },
        condition=shared.PipelineCondition(
            pipeline_ready_condition=shared.PipelineReadyCondition(
                status=True,
                update_time="atque",
            ),
            targets_present_condition=shared.TargetsPresentCondition(
                missing_targets=[
                    "aut",
                    "itaque",
                    "praesentium",
                ],
                status=True,
                update_time="corrupti",
            ),
        ),
        description="pariatur",
        etag="ex",
        labels={
            "similique": "natus",
        },
        name="omnis",
        serial_pipeline=shared.SerialPipeline(
            stages=[
                shared.Stage(
                    profiles=[
                        "corrupti",
                    ],
                    strategy=shared.Strategy(
                        standard=shared.Standard(
                            verify=False,
                        ),
                    ),
                    target_id="aut",
                ),
                shared.Stage(
                    profiles=[
                        "et",
                        "eos",
                    ],
                    strategy=shared.Strategy(
                        standard=shared.Standard(
                            verify=False,
                        ),
                    ),
                    target_id="voluptatem",
                ),
                shared.Stage(
                    profiles=[
                        "deserunt",
                    ],
                    strategy=shared.Strategy(
                        standard=shared.Standard(
                            verify=False,
                        ),
                    ),
                    target_id="aspernatur",
                ),
            ],
        ),
        suspended=False,
    ),
)
    
res = s.projects.clouddeploy_projects_locations_delivery_pipelines_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `clouddeploy_projects_locations_delivery_pipelines_create` - Creates a new DeliveryPipeline in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_list` - Lists DeliveryPipelines in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_abandon` - Abandons a Release in the Delivery Pipeline.
* `clouddeploy_projects_locations_delivery_pipelines_releases_create` - Creates a new Release in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_list` - Lists Releases in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_rollouts_approve` - Approves a Rollout.
* `clouddeploy_projects_locations_delivery_pipelines_releases_rollouts_create` - Creates a new Rollout in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_rollouts_job_runs_list` - Lists JobRuns in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_rollouts_list` - Lists Rollouts in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_rollouts_retry_job` - Retries the specified Job in a Rollout.
* `clouddeploy_projects_locations_list` - Lists information about the supported locations for this service.
* `clouddeploy_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `clouddeploy_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `clouddeploy_projects_locations_targets_create` - Creates a new Target in a given project and location.
* `clouddeploy_projects_locations_targets_delete` - Deletes a single Target.
* `clouddeploy_projects_locations_targets_get` - Gets details of a single Target.
* `clouddeploy_projects_locations_targets_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `clouddeploy_projects_locations_targets_list` - Lists Targets in a given project and location.
* `clouddeploy_projects_locations_targets_patch` - Updates the parameters of a single Target.
* `clouddeploy_projects_locations_targets_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `clouddeploy_projects_locations_targets_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
