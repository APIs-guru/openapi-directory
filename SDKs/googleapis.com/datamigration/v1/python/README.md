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
    
req = operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest(
    security=operations.DatamigrationProjectsLocationsConnectionProfilesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DatamigrationProjectsLocationsConnectionProfilesCreatePathParams(
        parent="nam",
    ),
    query_params=operations.DatamigrationProjectsLocationsConnectionProfilesCreateQueryParams(
        dollar_xgafv="2",
        access_token="cumque",
        alt="json",
        callback="repellendus",
        connection_profile_id="cumque",
        fields="iste",
        key="asperiores",
        oauth_token="ut",
        pretty_print=True,
        quota_user="tenetur",
        request_id="impedit",
        upload_type="aut",
        upload_protocol="sit",
    ),
    request=shared.ConnectionProfileInput(
        alloydb=shared.AlloyDbConnectionProfileInput(
            cluster_id="ullam",
            settings=shared.AlloyDbSettingsInput(
                initial_user=shared.UserPasswordInput(
                    password="voluptas",
                    user="mollitia",
                ),
                labels={
                    "voluptatem": "libero",
                    "et": "velit",
                    "rerum": "totam",
                },
                primary_instance_settings=shared.PrimaryInstanceSettingsInput(
                    database_flags={
                        "libero": "est",
                    },
                    id="eum",
                    labels={
                        "quo": "enim",
                        "enim": "reprehenderit",
                    },
                    machine_config=shared.MachineConfig(
                        cpu_count=3452497793287034363,
                    ),
                ),
                vpc_network="deleniti",
            ),
        ),
        cloudsql=shared.CloudSQLConnectionProfileInput(
            settings=shared.CloudSQLSettingsInput(
                activation_policy="SQL_ACTIVATION_POLICY_UNSPECIFIED",
                auto_storage_increase=False,
                availability_type="ZONAL",
                cmek_key_name="quo",
                collation="ad",
                data_disk_size_gb="ad",
                data_disk_type="SQL_DATA_DISK_TYPE_UNSPECIFIED",
                database_flags={
                    "maiores": "soluta",
                },
                database_version="POSTGRES_14",
                ip_config=shared.SQLIPConfig(
                    authorized_networks=[
                        shared.SQLACLEntry(
                            expire_time="officiis",
                            label="veritatis",
                            ttl="fugit",
                            value="id",
                        ),
                        shared.SQLACLEntry(
                            expire_time="rerum",
                            label="alias",
                            ttl="enim",
                            value="cupiditate",
                        ),
                    ],
                    enable_ipv4=True,
                    private_network="et",
                    require_ssl=False,
                ),
                root_password="inventore",
                secondary_zone="voluptas",
                source_id="cumque",
                storage_auto_resize_limit="velit",
                tier="voluptatem",
                user_labels={
                    "cum": "ratione",
                    "ab": "eius",
                    "et": "consequatur",
                },
                zone="quasi",
            ),
        ),
        display_name="placeat",
        error=shared.Status(
            code=4808249340027072444,
            details=[
                {
                    "quia": "possimus",
                    "sit": "nostrum",
                },
            ],
            message="nesciunt",
        ),
        labels={
            "quae": "modi",
            "incidunt": "ad",
        },
        mysql=shared.MySQLConnectionProfileInput(
            cloud_sql_id="animi",
            host="iusto",
            password="laudantium",
            port=5783816651593308386,
            ssl=shared.SslConfigInput(
                ca_certificate="ea",
                client_certificate="facilis",
                client_key="vitae",
            ),
            username="consequatur",
        ),
        name="atque",
        postgresql=shared.PostgreSQLConnectionProfileInput(
            cloud_sql_id="pariatur",
            host="beatae",
            password="et",
            port=6051945376604600617,
            ssl=shared.SslConfigInput(
                ca_certificate="occaecati",
                client_certificate="quo",
                client_key="totam",
            ),
            username="in",
        ),
        provider="AURORA",
        state="DELETED",
    ),
)
    
res = s.projects.datamigration_projects_locations_connection_profiles_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `datamigration_projects_locations_connection_profiles_create` - Creates a new connection profile in a given project and location.
* `datamigration_projects_locations_connection_profiles_list` - Retrieves a list of all connection profiles in a given project and location.
* `datamigration_projects_locations_list` - Lists information about the supported locations for this service.
* `datamigration_projects_locations_migration_jobs_create` - Creates a new migration job in a given project and location.
* `datamigration_projects_locations_migration_jobs_generate_ssh_script` - Generate a SSH configuration script to configure the reverse SSH connectivity.
* `datamigration_projects_locations_migration_jobs_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `datamigration_projects_locations_migration_jobs_list` - Lists migration jobs in a given project and location.
* `datamigration_projects_locations_migration_jobs_patch` - Updates the parameters of a single migration job.
* `datamigration_projects_locations_migration_jobs_promote` - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
* `datamigration_projects_locations_migration_jobs_restart` - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
* `datamigration_projects_locations_migration_jobs_resume` - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
* `datamigration_projects_locations_migration_jobs_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `datamigration_projects_locations_migration_jobs_start` - Start an already created migration job.
* `datamigration_projects_locations_migration_jobs_stop` - Stops a running migration job.
* `datamigration_projects_locations_migration_jobs_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `datamigration_projects_locations_migration_jobs_verify` - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
* `datamigration_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datamigration_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `datamigration_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `datamigration_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
