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
    
    req := operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest{
        Security: operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudfunctionsProjectsLocationsFunctionsCreatePathParams{
            Parent: "illo",
        },
        QueryParams: operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "atque",
            Alt: "json",
            Callback: "incidunt",
            Fields: "at",
            FunctionID: "dolor",
            Key: "totam",
            OauthToken: "qui",
            PrettyPrint: true,
            QuotaUser: "saepe",
            UploadType: "qui",
            UploadProtocol: "vel",
        },
        Request: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "accusamus",
                DockerRegistry: "CONTAINER_REGISTRY",
                DockerRepository: "architecto",
                EntryPoint: "harum",
                EnvironmentVariables: map[string]string{
                    "omnis": "aspernatur",
                },
                Runtime: "eum",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "id",
                        CommitSha: "quo",
                        Dir: "unde",
                        InvertRegex: true,
                        ProjectID: "itaque",
                        RepoName: "ut",
                        TagName: "voluptatibus",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "laborum",
                        Generation: "unde",
                        Object: "aliquam",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "omnis",
                        CommitSha: "in",
                        Dir: "iusto",
                        InvertRegex: true,
                        ProjectID: "incidunt",
                        RepoName: "et",
                        TagName: "et",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "nisi",
                        Generation: "laboriosam",
                        Object: "repellat",
                    },
                },
                WorkerPool: "molestias",
            },
            Description: "velit",
            Environment: "ENVIRONMENT_UNSPECIFIED",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "sed",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "deleniti",
                        Operator: "in",
                        Value: "reiciendis",
                    },
                    shared.EventFilter{
                        Attribute: "et",
                        Operator: "blanditiis",
                        Value: "nemo",
                    },
                },
                EventType: "officiis",
                PubsubTopic: "sed",
                RetryPolicy: "RETRY_POLICY_RETRY",
                ServiceAccountEmail: "est",
                TriggerRegion: "quo",
            },
            Labels: map[string]string{
                "nam": "exercitationem",
            },
            Name: "iusto",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: true,
                AvailableMemory: "incidunt",
                EnvironmentVariables: map[string]string{
                    "molestiae": "assumenda",
                    "quae": "quia",
                    "et": "architecto",
                },
                IngressSettings: "ALLOW_INTERNAL_AND_GCLB",
                MaxInstanceCount: 1249372551754401195,
                MinInstanceCount: 2612374165539454459,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "quo",
                        ProjectID: "consequuntur",
                        Secret: "quia",
                        Version: "et",
                    },
                    shared.SecretEnvVar{
                        Key: "sequi",
                        ProjectID: "aut",
                        Secret: "quibusdam",
                        Version: "ipsum",
                    },
                    shared.SecretEnvVar{
                        Key: "assumenda",
                        ProjectID: "laborum",
                        Secret: "quidem",
                        Version: "aliquam",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "omnis",
                        ProjectID: "sint",
                        Secret: "qui",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "perspiciatis",
                                Version: "excepturi",
                            },
                            shared.SecretVersion{
                                Path: "quis",
                                Version: "illo",
                            },
                            shared.SecretVersion{
                                Path: "magnam",
                                Version: "perspiciatis",
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: "deserunt",
                        ProjectID: "ratione",
                        Secret: "est",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "sit",
                                Version: "voluptas",
                            },
                            shared.SecretVersion{
                                Path: "est",
                                Version: "labore",
                            },
                            shared.SecretVersion{
                                Path: "dolorum",
                                Version: "exercitationem",
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: "illum",
                        ProjectID: "tempora",
                        Secret: "animi",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "voluptatibus",
                                Version: "sed",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURITY_LEVEL_UNSPECIFIED",
                ServiceAccountEmail: "enim",
                TimeoutSeconds: 9009814317629227096,
                VpcConnector: "et",
                VpcConnectorEgressSettings: "ALL_TRAFFIC",
            },
        },
    }
    
    res, err := s.Projects.CloudfunctionsProjectsLocationsFunctionsCreate(ctx, req)
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

* `CloudfunctionsProjectsLocationsFunctionsCreate` - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
* `CloudfunctionsProjectsLocationsFunctionsDelete` - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
* `CloudfunctionsProjectsLocationsFunctionsGenerateDownloadURL` - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
* `CloudfunctionsProjectsLocationsFunctionsGenerateUploadURL` - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* `CloudfunctionsProjectsLocationsFunctionsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `CloudfunctionsProjectsLocationsFunctionsList` - Returns a list of functions that belong to the requested project.
* `CloudfunctionsProjectsLocationsFunctionsPatch` - Updates existing function.
* `CloudfunctionsProjectsLocationsFunctionsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `CloudfunctionsProjectsLocationsFunctionsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `CloudfunctionsProjectsLocationsList` - Lists information about the supported locations for this service.
* `CloudfunctionsProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `CloudfunctionsProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `CloudfunctionsProjectsLocationsRuntimesList` - Returns a list of runtimes that are supported for the requested project.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
