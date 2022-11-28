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
    
req = operations.ComposerProjectsLocationsEnvironmentsCreateRequest(
    security=operations.ComposerProjectsLocationsEnvironmentsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ComposerProjectsLocationsEnvironmentsCreatePathParams(
        parent="corporis",
    ),
    query_params=operations.ComposerProjectsLocationsEnvironmentsCreateQueryParams(
        dollar_xgafv="1",
        access_token="consequatur",
        alt="media",
        callback="tempora",
        fields="in",
        key="sed",
        oauth_token="dolor",
        pretty_print=True,
        quota_user="assumenda",
        upload_type="est",
        upload_protocol="consequatur",
    ),
    request=shared.EnvironmentInput(
        config=shared.EnvironmentConfigInput(
            airflow_uri="ipsa",
            dag_gcs_prefix="ut",
            database_config=shared.DatabaseConfig(
                machine_type="iure",
            ),
            encryption_config=shared.EncryptionConfig(
                kms_key_name="dicta",
            ),
            environment_size="ENVIRONMENT_SIZE_UNSPECIFIED",
            gke_cluster="voluptatem",
            maintenance_window=shared.MaintenanceWindow(
                end_time="sit",
                recurrence="qui",
                start_time="autem",
            ),
            master_authorized_networks_config=shared.MasterAuthorizedNetworksConfig(
                cidr_blocks=[
                    shared.CidrBlock(
                        cidr_block="fugiat",
                        display_name="eligendi",
                    ),
                    shared.CidrBlock(
                        cidr_block="quia",
                        display_name="neque",
                    ),
                ],
                enabled=True,
            ),
            node_config=shared.NodeConfig(
                disk_size_gb=4168920819476378105,
                enable_ip_masq_agent=True,
                ip_allocation_policy=shared.IPAllocationPolicy(
                    cluster_ipv4_cidr_block="aut",
                    cluster_secondary_range_name="sit",
                    services_ipv4_cidr_block="in",
                    services_secondary_range_name="sunt",
                    use_ip_aliases=True,
                ),
                location="ullam",
                machine_type="consequuntur",
                network="aperiam",
                oauth_scopes=[
                    "repellendus",
                    "natus",
                    "consectetur",
                ],
                service_account="unde",
                subnetwork="ut",
                tags=[
                    "ut",
                    "qui",
                    "aspernatur",
                ],
            ),
            node_count=2279341170733245843,
            private_environment_config=shared.PrivateEnvironmentConfigInput(
                cloud_composer_connection_subnetwork="quas",
                cloud_composer_network_ipv4_cidr_block="distinctio",
                cloud_sql_ipv4_cidr_block="saepe",
                enable_private_environment=True,
                enable_privately_used_public_ips=False,
                networking_config=shared.NetworkingConfig(
                    connection_type="CONNECTION_TYPE_UNSPECIFIED",
                ),
                private_cluster_config=shared.PrivateClusterConfigInput(
                    enable_private_endpoint=False,
                    master_ipv4_cidr_block="nesciunt",
                ),
                web_server_ipv4_cidr_block="rem",
            ),
            software_config=shared.SoftwareConfig(
                airflow_config_overrides={
                    "ratione": "placeat",
                    "quam": "odit",
                    "voluptate": "ipsum",
                },
                env_variables={
                    "pariatur": "dicta",
                    "nulla": "tenetur",
                },
                image_version="et",
                pypi_packages={
                    "ut": "modi",
                    "consequuntur": "ducimus",
                    "molestiae": "voluptas",
                },
                python_version="facilis",
                scheduler_count=2867322181936390622,
            ),
            web_server_config=shared.WebServerConfig(
                machine_type="modi",
            ),
            web_server_network_access_control=shared.WebServerNetworkAccessControl(
                allowed_ip_ranges=[
                    shared.AllowedIPRange(
                        description="quasi",
                        value="necessitatibus",
                    ),
                ],
            ),
            workloads_config=shared.WorkloadsConfig(
                scheduler=shared.SchedulerResource(
                    count=3406083734481139106,
                    cpu=7.100000,
                    memory_gb=34.099998,
                    storage_gb=50.099998,
                ),
                web_server=shared.WebServerResource(
                    cpu=80.099998,
                    memory_gb=75.099998,
                    storage_gb=88.199997,
                ),
                worker=shared.WorkerResource(
                    cpu=3.200000,
                    max_count=8764901745431848692,
                    memory_gb=61.099998,
                    min_count=3415318281050260438,
                    storage_gb=35.200001,
                ),
            ),
        ),
        create_time="dolores",
        labels={
            "tempora": "aliquam",
            "in": "iusto",
        },
        name="reiciendis",
        state="CREATING",
        update_time="laudantium",
        uuid="quae",
    ),
)
    
res = s.projects.composer_projects_locations_environments_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `composer_projects_locations_environments_create` - Create a new environment.
* `composer_projects_locations_environments_list` - List environments.
* `composer_projects_locations_environments_patch` - Update an environment.
* `composer_projects_locations_image_versions_list` - List ImageVersions for provided location.
* `composer_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `composer_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `composer_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
