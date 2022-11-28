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
    
req = operations.GenomicsPipelinesRunRequest(
    security=operations.GenomicsPipelinesRunSecurity(
        option1=operations.GenomicsPipelinesRunSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    query_params=operations.GenomicsPipelinesRunQueryParams(
        dollar_xgafv="2",
        access_token="soluta",
        alt="json",
        callback="sit",
        fields="omnis",
        key="facilis",
        oauth_token="distinctio",
        pretty_print=False,
        quota_user="architecto",
        upload_type="et",
        upload_protocol="assumenda",
    ),
    request=shared.RunPipelineRequest(
        labels={
            "odio": "doloribus",
        },
        pipeline=shared.Pipeline(
            actions=[
                shared.Action(
                    commands=[
                        "ut",
                        "hic",
                    ],
                    credentials=shared.Secret(
                        cipher_text="aspernatur",
                        key_name="natus",
                    ),
                    encrypted_environment=shared.Secret(
                        cipher_text="nostrum",
                        key_name="nisi",
                    ),
                    entrypoint="molestiae",
                    environment={
                        "et": "cumque",
                    },
                    flags=[
                        "BLOCK_EXTERNAL_NETWORK",
                    ],
                    image_uri="ut",
                    labels={
                        "ut": "voluptatum",
                        "ipsum": "quae",
                    },
                    mounts=[
                        shared.Mount(
                            disk="quia",
                            path="non",
                            read_only=True,
                        ),
                        shared.Mount(
                            disk="repellendus",
                            path="nemo",
                            read_only=False,
                        ),
                    ],
                    name="qui",
                    pid_namespace="dicta",
                    port_mappings={
                        "est": 2896824219235230529,
                    },
                    timeout="eveniet",
                ),
            ],
            encrypted_environment=shared.Secret(
                cipher_text="et",
                key_name="nostrum",
            ),
            environment={
                "non": "dolorem",
                "laboriosam": "ea",
                "omnis": "sunt",
            },
            resources=shared.Resources(
                project_id="et",
                regions=[
                    "et",
                ],
                virtual_machine=shared.VirtualMachine(
                    accelerators=[
                        shared.Accelerator(
                            count="nemo",
                            type="deserunt",
                        ),
                    ],
                    boot_disk_size_gb=2076279485001306565,
                    boot_image="maiores",
                    cpu_platform="quos",
                    disks=[
                        shared.Disk(
                            name="et",
                            size_gb=2418626545759797140,
                            source_image="illum",
                            type="quis",
                        ),
                    ],
                    docker_cache_images=[
                        "numquam",
                        "aliquam",
                        "dignissimos",
                    ],
                    enable_stackdriver_monitoring=True,
                    labels={
                        "ut": "sequi",
                    },
                    machine_type="esse",
                    network=shared.Network(
                        name="non",
                        subnetwork="id",
                        use_private_address=False,
                    ),
                    nvidia_driver_version="ipsa",
                    preemptible=False,
                    reservation="dolorem",
                    service_account=shared.ServiceAccount(
                        email="a",
                        scopes=[
                            "amet",
                        ],
                    ),
                    volumes=[
                        shared.Volume(
                            existing_disk=shared.ExistingDisk(
                                disk="natus",
                            ),
                            nfs_mount=shared.NfsMount(
                                target="velit",
                            ),
                            persistent_disk=shared.PersistentDisk(
                                size_gb=435428050689545107,
                                source_image="alias",
                                type="excepturi",
                            ),
                            volume="temporibus",
                        ),
                        shared.Volume(
                            existing_disk=shared.ExistingDisk(
                                disk="ut",
                            ),
                            nfs_mount=shared.NfsMount(
                                target="aliquam",
                            ),
                            persistent_disk=shared.PersistentDisk(
                                size_gb=8603608382322563670,
                                source_image="officiis",
                                type="voluptas",
                            ),
                            volume="aut",
                        ),
                        shared.Volume(
                            existing_disk=shared.ExistingDisk(
                                disk="voluptatibus",
                            ),
                            nfs_mount=shared.NfsMount(
                                target="rerum",
                            ),
                            persistent_disk=shared.PersistentDisk(
                                size_gb=6103563391960606643,
                                source_image="voluptatem",
                                type="in",
                            ),
                            volume="praesentium",
                        ),
                    ],
                ),
                zones=[
                    "perspiciatis",
                ],
            ),
            timeout="consectetur",
        ),
        pub_sub_topic="voluptatibus",
    ),
)
    
res = s.pipelines.genomics_pipelines_run(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### pipelines

* `genomics_pipelines_run` - Runs a pipeline. The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution. The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully. **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission: * `genomics.operations.create` [1]: /genomics/gsa

### projects

* `genomics_projects_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
* `genomics_projects_operations_list` - Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list`
* `genomics_projects_workers_check_in` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

### workers

* `genomics_workers_check_in` - The worker uses this method to retrieve the assigned operation and provide periodic status updates.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
