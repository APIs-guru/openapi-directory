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
    
req = operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest(
    security=operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DatastreamProjectsLocationsConnectionProfilesCreatePathParams(
        parent="dignissimos",
    ),
    query_params=operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams(
        dollar_xgafv="2",
        access_token="quis",
        alt="proto",
        callback="dolores",
        connection_profile_id="voluptatem",
        fields="sed",
        force=True,
        key="et",
        oauth_token="enim",
        pretty_print=False,
        quota_user="vero",
        request_id="nisi",
        upload_type="occaecati",
        upload_protocol="qui",
        validate_only=True,
    ),
    request=shared.ConnectionProfileInput(
        bigquery_profile={
            "veritatis": "corporis",
        },
        display_name="fugiat",
        forward_ssh_connectivity=shared.ForwardSSHTunnelConnectivity(
            hostname="dolor",
            password="voluptatem",
            port=88593726215372726,
            private_key="quo",
            username="aliquid",
        ),
        gcs_profile=shared.GcsProfile(
            bucket="eum",
            root_path="veniam",
        ),
        labels={
            "id": "neque",
            "exercitationem": "architecto",
            "suscipit": "dolores",
        },
        mysql_profile=shared.MysqlProfileInput(
            hostname="dolores",
            password="maiores",
            port=8619365412726495595,
            ssl_config=shared.MysqlSslConfigInput(
                ca_certificate="facilis",
                client_certificate="enim",
                client_key="accusantium",
            ),
            username="nihil",
        ),
        oracle_profile=shared.OracleProfile(
            connection_attributes={
                "velit": "libero",
            },
            database_service="est",
            hostname="tempora",
            password="eius",
            port=6426046401014374835,
            username="non",
        ),
        postgresql_profile=shared.PostgresqlProfile(
            database="et",
            hostname="sit",
            password="qui",
            port=5409926317833318634,
            username="soluta",
        ),
        private_connectivity=shared.PrivateConnectivity(
            private_connection="voluptatum",
        ),
        static_service_ip_connectivity={
            "delectus": "accusamus",
            "suscipit": "doloremque",
            "dolores": "quis",
        },
    ),
)
    
res = s.projects.datastream_projects_locations_connection_profiles_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `datastream_projects_locations_connection_profiles_create` - Use this method to create a connection profile in a project and location.
* `datastream_projects_locations_connection_profiles_discover` - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
* `datastream_projects_locations_connection_profiles_list` - Use this method to list connection profiles created in a project and location.
* `datastream_projects_locations_fetch_static_ips` - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* `datastream_projects_locations_list` - Lists information about the supported locations for this service.
* `datastream_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `datastream_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `datastream_projects_locations_private_connections_create` - Use this method to create a private connectivity configuration.
* `datastream_projects_locations_private_connections_list` - Use this method to list private connectivity configurations in a project and location.
* `datastream_projects_locations_private_connections_routes_create` - Use this method to create a route for a private connectivity configuration in a project and location.
* `datastream_projects_locations_private_connections_routes_list` - Use this method to list routes created for a private connectivity configuration in a project and location.
* `datastream_projects_locations_streams_create` - Use this method to create a stream.
* `datastream_projects_locations_streams_delete` - Use this method to delete a stream.
* `datastream_projects_locations_streams_list` - Use this method to list streams in a project and location.
* `datastream_projects_locations_streams_objects_get` - Use this method to get details about a stream object.
* `datastream_projects_locations_streams_objects_list` - Use this method to list the objects of a specific stream.
* `datastream_projects_locations_streams_objects_lookup` - Use this method to look up a stream object by its source object identifier.
* `datastream_projects_locations_streams_objects_start_backfill_job` - Use this method to start a backfill job for the specified stream object.
* `datastream_projects_locations_streams_objects_stop_backfill_job` - Use this method to stop a backfill job for the specified stream object.
* `datastream_projects_locations_streams_patch` - Use this method to update the configuration of a stream.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
