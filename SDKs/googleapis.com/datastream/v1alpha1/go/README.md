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
            Parent: "quibusdam",
        },
        QueryParams: operations.DatastreamProjectsLocationsConnectionProfilesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "possimus",
            Alt: "media",
            Callback: "nihil",
            ConnectionProfileID: "est",
            Fields: "quos",
            Key: "sint",
            OauthToken: "facilis",
            PrettyPrint: false,
            QuotaUser: "ipsa",
            RequestID: "officia",
            UploadType: "in",
            UploadProtocol: "nihil",
        },
        Request: &shared.ConnectionProfileInput{
            DisplayName: "illo",
            ForwardSSHConnectivity: &shared.ForwardSSHTunnelConnectivity{
                Hostname: "quos",
                Password: "facere",
                Port: 9197929128000679882,
                PrivateKey: "consequatur",
                Username: "magnam",
            },
            GcsProfile: &shared.GcsProfile{
                BucketName: "aliquid",
                RootPath: "in",
            },
            Labels: map[string]string{
                "vitae": "praesentium",
                "dolorum": "fugit",
            },
            MysqlProfile: &shared.MysqlProfileInput{
                Hostname: "molestiae",
                Password: "quisquam",
                Port: 4830508113816580991,
                SslConfig: &shared.MysqlSslConfigInput{
                    CaCertificate: "incidunt",
                    ClientCertificate: "dolorum",
                    ClientKey: "et",
                },
                Username: "accusamus",
            },
            NoConnectivity: map[string]interface{}{
                "necessitatibus": "animi",
            },
            OracleProfile: &shared.OracleProfile{
                ConnectionAttributes: map[string]string{
                    "rerum": "voluptas",
                },
                DatabaseService: "placeat",
                Hostname: "non",
                Password: "sit",
                Port: 3924871608859186553,
                Username: "est",
            },
            PrivateConnectivity: &shared.PrivateConnectivity{
                PrivateConnectionName: "rerum",
            },
            StaticServiceIPConnectivity: map[string]interface{}{
                "error": "distinctio",
                "veritatis": "quia",
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
* `DatastreamProjectsLocationsConnectionProfilesDiscover` - Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.
* `DatastreamProjectsLocationsConnectionProfilesList` - Use this method to list connection profiles created in a project and location.
* `DatastreamProjectsLocationsFetchStaticIps` - The FetchStaticIps API call exposes the static IP addresses used by Datastream.
* `DatastreamProjectsLocationsList` - Lists information about the supported locations for this service.
* `DatastreamProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DatastreamProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `DatastreamProjectsLocationsPrivateConnectionsCreate` - Use this method to create a private connectivity configuration.
* `DatastreamProjectsLocationsPrivateConnectionsList` - Use this method to list private connectivity configurations in a project and location.
* `DatastreamProjectsLocationsPrivateConnectionsRoutesCreate` - Use this method to create a route for a private connectivity in a project and location.
* `DatastreamProjectsLocationsPrivateConnectionsRoutesList` - Use this method to list routes created for a private connectivity in a project and location.
* `DatastreamProjectsLocationsStreamsCreate` - Use this method to create a stream.
* `DatastreamProjectsLocationsStreamsDelete` - Use this method to delete a stream.
* `DatastreamProjectsLocationsStreamsFetchErrors` - Use this method to fetch any errors associated with a stream.
* `DatastreamProjectsLocationsStreamsList` - Use this method to list streams in a project and location.
* `DatastreamProjectsLocationsStreamsObjectsGet` - Use this method to get details about a stream object.
* `DatastreamProjectsLocationsStreamsObjectsList` - Use this method to list the objects of a specific stream.
* `DatastreamProjectsLocationsStreamsObjectsStartBackfillJob` - Starts backfill job for the specified stream object.
* `DatastreamProjectsLocationsStreamsObjectsStopBackfillJob` - Stops the backfill job for the specified stream object.
* `DatastreamProjectsLocationsStreamsPatch` - Use this method to update the configuration of a stream.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
