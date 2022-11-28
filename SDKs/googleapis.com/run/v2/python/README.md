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
    
req = operations.RunProjectsLocationsJobsCreateRequest(
    security=operations.RunProjectsLocationsJobsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RunProjectsLocationsJobsCreatePathParams(
        parent="nihil",
    ),
    query_params=operations.RunProjectsLocationsJobsCreateQueryParams(
        dollar_xgafv="2",
        access_token="recusandae",
        alt="proto",
        callback="illum",
        fields="non",
        job_id="aliquam",
        key="amet",
        oauth_token="repellat",
        pretty_print=False,
        quota_user="id",
        upload_type="saepe",
        upload_protocol="ducimus",
        validate_only=False,
    ),
    request=shared.GoogleCloudRunV2JobInput(
        annotations={
            "rerum": "et",
        },
        binary_authorization=shared.GoogleCloudRunV2BinaryAuthorization(
            breakglass_justification="fugit",
            use_default=False,
        ),
        client="non",
        client_version="voluptatem",
        labels={
            "recusandae": "nam",
            "et": "quas",
            "illo": "sequi",
        },
        latest_created_execution=shared.GoogleCloudRunV2ExecutionReference(
            completion_time="aliquid",
            create_time="quia",
            name="soluta",
        ),
        launch_stage="EARLY_ACCESS",
        name="non",
        template=shared.GoogleCloudRunV2ExecutionTemplate(
            annotations={
                "fugit": "unde",
                "rerum": "assumenda",
            },
            labels={
                "in": "asperiores",
            },
            parallelism=8133177959774302768,
            task_count=2088010228750697258,
            template=shared.GoogleCloudRunV2TaskTemplate(
                containers=[
                    shared.GoogleCloudRunV2Container(
                        args=[
                            "assumenda",
                            "iusto",
                            "ut",
                        ],
                        command=[
                            "cum",
                            "voluptatum",
                            "assumenda",
                        ],
                        env=[
                            shared.GoogleCloudRunV2EnvVar(
                                name="incidunt",
                                value="alias",
                                value_source=shared.GoogleCloudRunV2EnvVarSource(
                                    secret_key_ref=shared.GoogleCloudRunV2SecretKeySelector(
                                        secret="repellat",
                                        version="laudantium",
                                    ),
                                ),
                            ),
                        ],
                        image="error",
                        liveness_probe=shared.GoogleCloudRunV2Probe(
                            failure_threshold=2688713530206355012,
                            grpc=shared.GoogleCloudRunV2GrpcAction(
                                port=7797975416061594680,
                                service="quo",
                            ),
                            http_get=shared.GoogleCloudRunV2HTTPGetAction(
                                http_headers=[
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="atque",
                                        value="autem",
                                    ),
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="quia",
                                        value="repellendus",
                                    ),
                                ],
                                path="doloribus",
                            ),
                            initial_delay_seconds=4443577522108449003,
                            period_seconds=6012277344778440788,
                            tcp_socket=shared.GoogleCloudRunV2TCPSocketAction(
                                port=4340614223364639070,
                            ),
                            timeout_seconds=4866929186078153440,
                        ),
                        name="ratione",
                        ports=[
                            shared.GoogleCloudRunV2ContainerPort(
                                container_port=6419353881739319704,
                                name="officiis",
                            ),
                        ],
                        resources=shared.GoogleCloudRunV2ResourceRequirements(
                            cpu_idle=True,
                            limits={
                                "autem": "explicabo",
                                "sit": "exercitationem",
                            },
                        ),
                        startup_probe=shared.GoogleCloudRunV2Probe(
                            failure_threshold=7776858227574719823,
                            grpc=shared.GoogleCloudRunV2GrpcAction(
                                port=8461745410967704242,
                                service="expedita",
                            ),
                            http_get=shared.GoogleCloudRunV2HTTPGetAction(
                                http_headers=[
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="aut",
                                        value="consequatur",
                                    ),
                                    shared.GoogleCloudRunV2HTTPHeader(
                                        name="id",
                                        value="esse",
                                    ),
                                ],
                                path="ad",
                            ),
                            initial_delay_seconds=5318683032343837309,
                            period_seconds=7329191305231516644,
                            tcp_socket=shared.GoogleCloudRunV2TCPSocketAction(
                                port=8816393691003044773,
                            ),
                            timeout_seconds=4234836057574666443,
                        ),
                        volume_mounts=[
                            shared.GoogleCloudRunV2VolumeMount(
                                mount_path="nisi",
                                name="consequatur",
                            ),
                            shared.GoogleCloudRunV2VolumeMount(
                                mount_path="voluptas",
                                name="excepturi",
                            ),
                        ],
                        working_dir="laboriosam",
                    ),
                ],
                encryption_key="commodi",
                execution_environment="EXECUTION_ENVIRONMENT_GEN2",
                max_retries=2263638279881521272,
                service_account="ut",
                timeout="ad",
                volumes=[
                    shared.GoogleCloudRunV2Volume(
                        cloud_sql_instance=shared.GoogleCloudRunV2CloudSQLInstance(
                            instances=[
                                "quam",
                                "ut",
                                "ut",
                            ],
                        ),
                        name="maxime",
                        secret=shared.GoogleCloudRunV2SecretVolumeSource(
                            default_mode=2779996097369498188,
                            items=[
                                shared.GoogleCloudRunV2VersionToPath(
                                    mode=1296355341537513384,
                                    path="corrupti",
                                    version="odio",
                                ),
                                shared.GoogleCloudRunV2VersionToPath(
                                    mode=7715066473898005523,
                                    path="veritatis",
                                    version="dolores",
                                ),
                            ],
                            secret="omnis",
                        ),
                    ),
                    shared.GoogleCloudRunV2Volume(
                        cloud_sql_instance=shared.GoogleCloudRunV2CloudSQLInstance(
                            instances=[
                                "eum",
                            ],
                        ),
                        name="voluptatem",
                        secret=shared.GoogleCloudRunV2SecretVolumeSource(
                            default_mode=8608591140297173030,
                            items=[
                                shared.GoogleCloudRunV2VersionToPath(
                                    mode=4560515961557779437,
                                    path="voluptate",
                                    version="esse",
                                ),
                                shared.GoogleCloudRunV2VersionToPath(
                                    mode=5562338305340948272,
                                    path="velit",
                                    version="nihil",
                                ),
                            ],
                            secret="cum",
                        ),
                    ),
                    shared.GoogleCloudRunV2Volume(
                        cloud_sql_instance=shared.GoogleCloudRunV2CloudSQLInstance(
                            instances=[
                                "tempora",
                                "repellat",
                            ],
                        ),
                        name="corrupti",
                        secret=shared.GoogleCloudRunV2SecretVolumeSource(
                            default_mode=757858087760365431,
                            items=[
                                shared.GoogleCloudRunV2VersionToPath(
                                    mode=976024132249045875,
                                    path="ut",
                                    version="atque",
                                ),
                                shared.GoogleCloudRunV2VersionToPath(
                                    mode=589641567226220685,
                                    path="et",
                                    version="quia",
                                ),
                            ],
                            secret="laboriosam",
                        ),
                    ),
                ],
                vpc_access=shared.GoogleCloudRunV2VpcAccess(
                    connector="voluptatem",
                    egress="VPC_EGRESS_UNSPECIFIED",
                ),
            ),
        ),
        terminal_condition=shared.GoogleCloudRunV2Condition(
            execution_reason="NON_ZERO_EXIT_CODE",
            last_transition_time="quidem",
            message="sed",
            reason="CONTAINER_IMAGE_UNAUTHORIZED",
            revision_reason="MIN_INSTANCES_NOT_PROVISIONED",
            severity="WARNING",
            state="CONDITION_SUCCEEDED",
            type="debitis",
        ),
    ),
)
    
res = s.projects.run_projects_locations_jobs_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `run_projects_locations_jobs_create` - Creates a Job.
* `run_projects_locations_jobs_executions_list` - Lists Executions from a Job.
* `run_projects_locations_jobs_executions_tasks_list` - Lists Tasks from an Execution of a Job.
* `run_projects_locations_jobs_list` - Lists Jobs.
* `run_projects_locations_jobs_run` - Triggers creation of a new Execution of this Job.
* `run_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `run_projects_locations_services_create` - Creates a new Service in a given project and location.
* `run_projects_locations_services_get_iam_policy` - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
* `run_projects_locations_services_list` - Lists Services.
* `run_projects_locations_services_patch` - Updates a Service.
* `run_projects_locations_services_revisions_delete` - Deletes a Revision.
* `run_projects_locations_services_revisions_get` - Gets information about a Revision.
* `run_projects_locations_services_revisions_list` - Lists Revisions from a given Service, or from a given location.
* `run_projects_locations_services_set_iam_policy` - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* `run_projects_locations_services_test_iam_permissions` - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
