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
    
    req := operations.ConnectorsProjectsLocationsConnectionsCreateRequest{
        Security: operations.ConnectorsProjectsLocationsConnectionsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.ConnectorsProjectsLocationsConnectionsCreatePathParams{
            Parent: "non",
        },
        QueryParams: operations.ConnectorsProjectsLocationsConnectionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "eligendi",
            Alt: "json",
            Callback: "voluptas",
            ConnectionID: "eos",
            Fields: "modi",
            Key: "et",
            OauthToken: "rem",
            PrettyPrint: false,
            QuotaUser: "molestias",
            UploadType: "libero",
            UploadProtocol: "occaecati",
        },
        Request: &shared.ConnectionInput{
            AuthConfig: &shared.AuthConfig{
                AdditionalVariables: []shared.ConfigVariable{
                    shared.ConfigVariable{
                        BoolValue: true,
                        IntValue: "eos",
                        Key: "rerum",
                        SecretValue: &shared.Secret{
                            SecretVersion: "excepturi",
                        },
                        StringValue: "repellendus",
                    },
                },
                AuthType: "OAUTH2_CLIENT_CREDENTIALS",
                Oauth2ClientCredentials: &shared.Oauth2ClientCredentials{
                    ClientID: "qui",
                    ClientSecret: &shared.Secret{
                        SecretVersion: "commodi",
                    },
                },
                Oauth2JwtBearer: &shared.Oauth2JwtBearer{
                    ClientKey: &shared.Secret{
                        SecretVersion: "dolores",
                    },
                    JwtClaims: &shared.JwtClaims{
                        Audience: "aut",
                        Issuer: "necessitatibus",
                        Subject: "nesciunt",
                    },
                },
                SSHPublicKey: &shared.SSHPublicKey{
                    CertType: "magni",
                    SSHClientCert: &shared.Secret{
                        SecretVersion: "non",
                    },
                    SSHClientCertPass: &shared.Secret{
                        SecretVersion: "distinctio",
                    },
                    Username: "minima",
                },
                UserPassword: &shared.UserPassword{
                    Password: &shared.Secret{
                        SecretVersion: "ut",
                    },
                    Username: "aperiam",
                },
            },
            ConfigVariables: []shared.ConfigVariable{
                shared.ConfigVariable{
                    BoolValue: false,
                    IntValue: "sunt",
                    Key: "animi",
                    SecretValue: &shared.Secret{
                        SecretVersion: "mollitia",
                    },
                    StringValue: "excepturi",
                },
                shared.ConfigVariable{
                    BoolValue: false,
                    IntValue: "ut",
                    Key: "ex",
                    SecretValue: &shared.Secret{
                        SecretVersion: "ad",
                    },
                    StringValue: "assumenda",
                },
            },
            ConnectorVersion: "eaque",
            Description: "consequatur",
            DestinationConfigs: []shared.DestinationConfig{
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "velit",
                            Port: 7322938111960336165,
                            ServiceAttachment: "in",
                        },
                        shared.Destination{
                            Host: "veritatis",
                            Port: 5952822771195429582,
                            ServiceAttachment: "modi",
                        },
                        shared.Destination{
                            Host: "est",
                            Port: 1427910665186750051,
                            ServiceAttachment: "cumque",
                        },
                    },
                    Key: "natus",
                },
                shared.DestinationConfig{
                    Destinations: []shared.Destination{
                        shared.Destination{
                            Host: "beatae",
                            Port: 9144606812326692045,
                            ServiceAttachment: "amet",
                        },
                    },
                    Key: "dolorem",
                },
            },
            Labels: map[string]string{
                "similique": "et",
                "ducimus": "cupiditate",
                "consequatur": "exercitationem",
            },
            LockConfig: &shared.LockConfig{
                Locked: false,
                Reason: "voluptas",
            },
            NodeConfig: &shared.NodeConfig{
                MaxNodeCount: 6413110699676294475,
                MinNodeCount: 8175015999967088442,
            },
            ServiceAccount: "iste",
            Status: &shared.ConnectionStatus{
                Description: "corrupti",
                State: "UPDATING",
                Status: "quia",
            },
            Suspended: true,
        },
    }
    
    res, err := s.Projects.ConnectorsProjectsLocationsConnectionsCreate(ctx, req)
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

* `ConnectorsProjectsLocationsConnectionsCreate` - Creates a new Connection in a given project and location.
* `ConnectorsProjectsLocationsConnectionsList` - Lists Connections in a given project and location.
* `ConnectorsProjectsLocationsConnectionsPatch` - Updates the parameters of a single Connection.
* `ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasList` - List schema of a runtime actions filtered by action name.
* `ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasList` - List schema of a runtime entities filtered by entity name.
* `ConnectorsProjectsLocationsList` - Lists information about the supported locations for this service.
* `ConnectorsProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `ConnectorsProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `ConnectorsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `ConnectorsProjectsLocationsProvidersConnectorsList` - Lists Connectors in a given project and location.
* `ConnectorsProjectsLocationsProvidersConnectorsVersionsGet` - Gets details of a single connector version.
* `ConnectorsProjectsLocationsProvidersConnectorsVersionsList` - Lists Connector Versions in a given project and location.
* `ConnectorsProjectsLocationsProvidersGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `ConnectorsProjectsLocationsProvidersList` - Lists Providers in a given project and location.
* `ConnectorsProjectsLocationsProvidersSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `ConnectorsProjectsLocationsProvidersTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
