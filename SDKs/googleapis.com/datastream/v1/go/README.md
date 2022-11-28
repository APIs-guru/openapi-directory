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
    
    req := operations.DatastreamProjectsLocationsConnectionProfilesCreateRequest{
        Security: operations.DatastreamProjectsLocationsConnectionProfilesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DatastreamProjectsLocationsConnectionProfilesCreatePathParams{
            Parent: "dignissimos",
        },
        QueryParams: operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "quis",
            Alt: "proto",
            Callback: "dolores",
            ConnectionProfileID: "voluptatem",
            Fields: "sed",
            Force: true,
            Key: "et",
            OauthToken: "enim",
            PrettyPrint: false,
            QuotaUser: "vero",
            RequestID: "nisi",
            UploadType: "occaecati",
            UploadProtocol: "qui",
            ValidateOnly: true,
        },
        Request: &shared.ConnectionProfileInput{
            BigqueryProfile: map[string]interface{}{
                "veritatis": "corporis",
            },
            DisplayName: "fugiat",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "dolor",
                Password: "voluptatem",
                Port: 88593726215372726,
                PrivateKey: "quo",
                Username: "aliquid",
            },
            GcsProfile: &shared.GcsProfile{
                Bucket: "eum",
                RootPath: "veniam",
            },
            Labels: map[string]string{
                "id": "neque",
                "exercitationem": "architecto",
                "suscipit": "dolores",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "dolores",
                Password: "maiores",
                Port: 8619365412726495595,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "facilis",
                    ClientCertificate: "enim",
                    ClientKey: "accusantium",
                },
                Username: "nihil",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "velit": "libero",
                },
                DatabaseService: "est",
                Hostname: "tempora",
                Password: "eius",
                Port: 6426046401014374835,
                Username: "non",
            },
            PostgresqlProfile: &shared.PostgresqlProfile{
                Database: "et",
                Hostname: "sit",
                Password: "qui",
                Port: 5409926317833318634,
                Username: "soluta",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnection: "voluptatum",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "delectus": "accusamus",
                "suscipit": "doloremque",
                "dolores": "quis",
            },
        },
    }
    
    res, err := s.Projects.DatastreamProjectsLocationsConnectionProfilesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `DatastreamProjectsLocationsConnectionProfilesCreate` - Use this method to create a connection profile in a project and location.
* `DatastreamProjectsLocationsConnectionProfilesDiscover` - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
* `DatastreamProjectsLocationsConnectionProfilesList` - Use this method to list connection profiles created in a project and location.
* `DatastreamProjectsLocationsFetchStaticIps` - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* `DatastreamProjectsLocationsList` - Lists information about the supported locations for this service.
* `DatastreamProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatastreamProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `DatastreamProjectsLocationsPrivateConnectionsCreate` - Use this method to create a private connectivity configuration.
* `DatastreamProjectsLocationsPrivateConnectionsList` - Use this method to list private connectivity configurations in a project and location.
* `DatastreamProjectsLocationsPrivateConnectionsRoutesCreate` - Use this method to create a route for a private connectivity configuration in a project and location.
* `DatastreamProjectsLocationsPrivateConnectionsRoutesList` - Use this method to list routes created for a private connectivity configuration in a project and location.
* `DatastreamProjectsLocationsStreamsCreate` - Use this method to create a stream.
* `DatastreamProjectsLocationsStreamsDelete` - Use this method to delete a stream.
* `DatastreamProjectsLocationsStreamsList` - Use this method to list streams in a project and location.
* `DatastreamProjectsLocationsStreamsObjectsGet` - Use this method to get details about a stream object.
* `DatastreamProjectsLocationsStreamsObjectsList` - Use this method to list the objects of a specific stream.
* `DatastreamProjectsLocationsStreamsObjectsLookup` - Use this method to look up a stream object by its source object identifier.
* `DatastreamProjectsLocationsStreamsObjectsStartBackfillJob` - Use this method to start a backfill job for the specified stream object.
* `DatastreamProjectsLocationsStreamsObjectsStopBackfillJob` - Use this method to stop a backfill job for the specified stream object.
* `DatastreamProjectsLocationsStreamsPatch` - Use this method to update the configuration of a stream.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
