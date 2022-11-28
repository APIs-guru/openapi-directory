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
    
req = operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest(
    security=operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudfunctionsProjectsLocationsFunctionsCreatePathParams(
        parent="illo",
    ),
    query_params=operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams(
        dollar_xgafv="2",
        access_token="atque",
        alt="json",
        callback="incidunt",
        fields="at",
        function_id="dolor",
        key="totam",
        oauth_token="qui",
        pretty_print=True,
        quota_user="saepe",
        upload_type="qui",
        upload_protocol="vel",
    ),
    request=shared.FunctionInput(
        build_config=shared.BuildConfigInput(
            buildpack_stack="accusamus",
            docker_registry="CONTAINER_REGISTRY",
            docker_repository="architecto",
            entry_point="harum",
            environment_variables={
                "omnis": "aspernatur",
            },
            runtime="eum",
            source=shared.Source(
                repo_source=shared.RepoSource(
                    branch_name="id",
                    commit_sha="quo",
                    dir="unde",
                    invert_regex=True,
                    project_id="itaque",
                    repo_name="ut",
                    tag_name="voluptatibus",
                ),
                storage_source=shared.StorageSource(
                    bucket="laborum",
                    generation="unde",
                    object="aliquam",
                ),
            ),
            source_provenance=shared.SourceProvenance(
                resolved_repo_source=shared.RepoSource(
                    branch_name="omnis",
                    commit_sha="in",
                    dir="iusto",
                    invert_regex=True,
                    project_id="incidunt",
                    repo_name="et",
                    tag_name="et",
                ),
                resolved_storage_source=shared.StorageSource(
                    bucket="nisi",
                    generation="laboriosam",
                    object="repellat",
                ),
            ),
            worker_pool="molestias",
        ),
        description="velit",
        environment="ENVIRONMENT_UNSPECIFIED",
        event_trigger=shared.EventTriggerInput(
            channel="sed",
            event_filters=[
                shared.EventFilter(
                    attribute="deleniti",
                    operator="in",
                    value="reiciendis",
                ),
                shared.EventFilter(
                    attribute="et",
                    operator="blanditiis",
                    value="nemo",
                ),
            ],
            event_type="officiis",
            pubsub_topic="sed",
            retry_policy="RETRY_POLICY_RETRY",
            service_account_email="est",
            trigger_region="quo",
        ),
        labels={
            "nam": "exercitationem",
        },
        name="iusto",
        service_config=shared.ServiceConfigInput(
            all_traffic_on_latest_revision=True,
            available_memory="incidunt",
            environment_variables={
                "molestiae": "assumenda",
                "quae": "quia",
                "et": "architecto",
            },
            ingress_settings="ALLOW_INTERNAL_AND_GCLB",
            max_instance_count=1249372551754401195,
            min_instance_count=2612374165539454459,
            secret_environment_variables=[
                shared.SecretEnvVar(
                    key="quo",
                    project_id="consequuntur",
                    secret="quia",
                    version="et",
                ),
                shared.SecretEnvVar(
                    key="sequi",
                    project_id="aut",
                    secret="quibusdam",
                    version="ipsum",
                ),
                shared.SecretEnvVar(
                    key="assumenda",
                    project_id="laborum",
                    secret="quidem",
                    version="aliquam",
                ),
            ],
            secret_volumes=[
                shared.SecretVolume(
                    mount_path="omnis",
                    project_id="sint",
                    secret="qui",
                    versions=[
                        shared.SecretVersion(
                            path="perspiciatis",
                            version="excepturi",
                        ),
                        shared.SecretVersion(
                            path="quis",
                            version="illo",
                        ),
                        shared.SecretVersion(
                            path="magnam",
                            version="perspiciatis",
                        ),
                    ],
                ),
                shared.SecretVolume(
                    mount_path="deserunt",
                    project_id="ratione",
                    secret="est",
                    versions=[
                        shared.SecretVersion(
                            path="sit",
                            version="voluptas",
                        ),
                        shared.SecretVersion(
                            path="est",
                            version="labore",
                        ),
                        shared.SecretVersion(
                            path="dolorum",
                            version="exercitationem",
                        ),
                    ],
                ),
                shared.SecretVolume(
                    mount_path="illum",
                    project_id="tempora",
                    secret="animi",
                    versions=[
                        shared.SecretVersion(
                            path="voluptatibus",
                            version="sed",
                        ),
                    ],
                ),
            ],
            security_level="SECURITY_LEVEL_UNSPECIFIED",
            service_account_email="enim",
            timeout_seconds=9009814317629227096,
            vpc_connector="et",
            vpc_connector_egress_settings="ALL_TRAFFIC",
        ),
    ),
)
    
res = s.projects.cloudfunctions_projects_locations_functions_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `cloudfunctions_projects_locations_functions_create` - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
* `cloudfunctions_projects_locations_functions_delete` - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
* `cloudfunctions_projects_locations_functions_generate_download_url` - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
* `cloudfunctions_projects_locations_functions_generate_upload_url` - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* `cloudfunctions_projects_locations_functions_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `cloudfunctions_projects_locations_functions_list` - Returns a list of functions that belong to the requested project.
* `cloudfunctions_projects_locations_functions_patch` - Updates existing function.
* `cloudfunctions_projects_locations_functions_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `cloudfunctions_projects_locations_functions_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `cloudfunctions_projects_locations_list` - Lists information about the supported locations for this service.
* `cloudfunctions_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `cloudfunctions_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `cloudfunctions_projects_locations_runtimes_list` - Returns a list of runtimes that are supported for the requested project.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
