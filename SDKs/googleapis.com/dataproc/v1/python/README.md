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
    
req = operations.DataprocProjectsLocationsBatchesCreateRequest(
    security=operations.DataprocProjectsLocationsBatchesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DataprocProjectsLocationsBatchesCreatePathParams(
        parent="facilis",
    ),
    query_params=operations.DataprocProjectsLocationsBatchesCreateQueryParams(
        dollar_xgafv="1",
        access_token="nam",
        alt="proto",
        batch_id="aut",
        callback="enim",
        fields="iusto",
        key="cumque",
        oauth_token="doloribus",
        pretty_print=False,
        quota_user="excepturi",
        request_id="id",
        upload_type="quo",
        upload_protocol="quia",
    ),
    request=shared.BatchInput(
        environment_config=shared.EnvironmentConfig(
            execution_config=shared.ExecutionConfig(
                idle_ttl="quibusdam",
                kms_key="eum",
                network_tags=[
                    "itaque",
                ],
                network_uri="impedit",
                service_account="placeat",
                subnetwork_uri="esse",
            ),
            peripherals_config=shared.PeripheralsConfig(
                metastore_service="sunt",
                spark_history_server_config=shared.SparkHistoryServerConfig(
                    dataproc_cluster="sapiente",
                ),
            ),
        ),
        labels={
            "perspiciatis": "laboriosam",
            "fuga": "beatae",
            "itaque": "amet",
        },
        pyspark_batch=shared.PySparkBatch(
            archive_uris=[
                "nulla",
            ],
            args=[
                "dolores",
                "voluptatem",
                "deserunt",
            ],
            file_uris=[
                "voluptatem",
                "eum",
            ],
            jar_file_uris=[
                "qui",
                "harum",
                "autem",
            ],
            main_python_file_uri="unde",
            python_file_uris=[
                "quaerat",
            ],
        ),
        runtime_config=shared.RuntimeConfig(
            container_image="qui",
            properties={
                "et": "magni",
                "et": "et",
                "saepe": "ratione",
            },
            version="voluptas",
        ),
        runtime_info=shared.RuntimeInfoInput(
            approximate_usage=shared.UsageMetrics(
                milli_dcu_seconds="quaerat",
                shuffle_storage_gb_seconds="architecto",
            ),
        ),
        spark_batch=shared.SparkBatch(
            archive_uris=[
                "tempora",
                "officiis",
                "nulla",
            ],
            args=[
                "odit",
                "provident",
                "illum",
            ],
            file_uris=[
                "voluptate",
                "quo",
            ],
            jar_file_uris=[
                "et",
                "quibusdam",
                "odio",
            ],
            main_class="non",
            main_jar_file_uri="exercitationem",
        ),
        spark_r_batch=shared.SparkRBatch(
            archive_uris=[
                "est",
                "quo",
                "nobis",
            ],
            args=[
                "non",
                "commodi",
            ],
            file_uris=[
                "in",
            ],
            main_r_file_uri="eos",
        ),
        spark_sql_batch=shared.SparkSQLBatch(
            jar_file_uris=[
                "vel",
                "est",
            ],
            query_file_uri="id",
            query_variables={
                "et": "possimus",
                "vitae": "vel",
                "est": "minus",
            },
        ),
    ),
)
    
res = s.projects.dataproc_projects_locations_batches_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `dataproc_projects_locations_batches_create` - Creates a batch workload that executes asynchronously.
* `dataproc_projects_locations_batches_list` - Lists batch workloads.
* `dataproc_projects_regions_autoscaling_policies_create` - Creates new autoscaling policy.
* `dataproc_projects_regions_autoscaling_policies_list` - Lists autoscaling policies in the project.
* `dataproc_projects_regions_clusters_create` - Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* `dataproc_projects_regions_clusters_delete` - Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
* `dataproc_projects_regions_clusters_diagnose` - Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
* `dataproc_projects_regions_clusters_get` - Gets the resource representation for a cluster in a project.
* `dataproc_projects_regions_clusters_inject_credentials` - Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.
* `dataproc_projects_regions_clusters_list` - Lists all regions/{region}/clusters in a project alphabetically.
* `dataproc_projects_regions_clusters_patch` - Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.
* `dataproc_projects_regions_clusters_repair` - Repairs a cluster.
* `dataproc_projects_regions_clusters_start` - Starts a cluster in a project.
* `dataproc_projects_regions_clusters_stop` - Stops a cluster in a project.
* `dataproc_projects_regions_jobs_cancel` - Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
* `dataproc_projects_regions_jobs_delete` - Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
* `dataproc_projects_regions_jobs_get` - Gets the resource representation for a job in a project.
* `dataproc_projects_regions_jobs_list` - Lists regions/{region}/jobs in a project.
* `dataproc_projects_regions_jobs_patch` - Updates a job in a project.
* `dataproc_projects_regions_jobs_submit` - Submits a job to a cluster.
* `dataproc_projects_regions_jobs_submit_as_operation` - Submits job to a cluster.
* `dataproc_projects_regions_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `dataproc_projects_regions_workflow_templates_create` - Creates new workflow template.
* `dataproc_projects_regions_workflow_templates_delete` - Deletes a workflow template. It does not cancel in-progress workflows.
* `dataproc_projects_regions_workflow_templates_get` - Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
* `dataproc_projects_regions_workflow_templates_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `dataproc_projects_regions_workflow_templates_instantiate` - Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* `dataproc_projects_regions_workflow_templates_instantiate_inline` - Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
* `dataproc_projects_regions_workflow_templates_list` - Lists workflows that match the specified filter in the request.
* `dataproc_projects_regions_workflow_templates_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
* `dataproc_projects_regions_workflow_templates_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `dataproc_projects_regions_workflow_templates_update` - Updates (replaces) workflow template. The updated template must contain version that matches the current server version.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
