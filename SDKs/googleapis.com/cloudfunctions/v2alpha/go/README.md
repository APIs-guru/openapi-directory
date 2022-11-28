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
            Parent: "qui",
        },
        QueryParams: operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "adipisci",
            Alt: "media",
            Callback: "perspiciatis",
            Fields: "porro",
            FunctionID: "ut",
            Key: "hic",
            OauthToken: "enim",
            PrettyPrint: false,
            QuotaUser: "non",
            UploadType: "optio",
            UploadProtocol: "vel",
        },
        Request: &shared.FunctionInput{
            BuildConfig: &shared.BuildConfigInput{
                BuildpackStack: "quae",
                DockerRegistry: "CONTAINER_REGISTRY",
                DockerRepository: "ut",
                EntryPoint: "consequatur",
                EnvironmentVariables: map[string]string{
                    "quibusdam": "dolorem",
                    "eius": "pariatur",
                    "consequuntur": "provident",
                },
                Runtime: "necessitatibus",
                Source: &shared.Source{
                    RepoSource: &shared.RepoSource{
                        BranchName: "cum",
                        CommitSha: "laborum",
                        Dir: "et",
                        InvertRegex: true,
                        ProjectID: "magnam",
                        RepoName: "molestiae",
                        TagName: "nisi",
                    },
                    StorageSource: &shared.StorageSource{
                        Bucket: "vel",
                        Generation: "aut",
                        Object: "suscipit",
                    },
                },
                SourceProvenance: &shared.SourceProvenance{
                    ResolvedRepoSource: &shared.RepoSource{
                        BranchName: "eum",
                        CommitSha: "officiis",
                        Dir: "maiores",
                        InvertRegex: true,
                        ProjectID: "non",
                        RepoName: "quia",
                        TagName: "facere",
                    },
                    ResolvedStorageSource: &shared.StorageSource{
                        Bucket: "dolor",
                        Generation: "molestiae",
                        Object: "culpa",
                    },
                },
                WorkerPool: "minus",
            },
            Description: "eum",
            Environment: "GEN_2",
            EventTrigger: &shared.EventTriggerInput{
                Channel: "aliquid",
                EventFilters: []shared.EventFilter{
                    shared.EventFilter{
                        Attribute: "qui",
                        Operator: "ut",
                        Value: "est",
                    },
                },
                EventType: "at",
                PubsubTopic: "enim",
                RetryPolicy: "RETRY_POLICY_RETRY",
                ServiceAccountEmail: "est",
                TriggerRegion: "optio",
            },
            Labels: map[string]string{
                "excepturi": "cum",
            },
            Name: "asperiores",
            ServiceConfig: &shared.ServiceConfigInput{
                AllTrafficOnLatestRevision: true,
                AvailableMemory: "est",
                EnvironmentVariables: map[string]string{
                    "et": "magni",
                },
                IngressSettings: "ALLOW_INTERNAL_ONLY",
                MaxInstanceCount: 2340771973895773848,
                MinInstanceCount: 8557564578179471857,
                SecretEnvironmentVariables: []shared.SecretEnvVar{
                    shared.SecretEnvVar{
                        Key: "consectetur",
                        ProjectID: "ut",
                        Secret: "voluptatem",
                        Version: "omnis",
                    },
                },
                SecretVolumes: []shared.SecretVolume{
                    shared.SecretVolume{
                        MountPath: "atque",
                        ProjectID: "consequatur",
                        Secret: "at",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "impedit",
                                Version: "nesciunt",
                            },
                            shared.SecretVersion{
                                Path: "exercitationem",
                                Version: "in",
                            },
                            shared.SecretVersion{
                                Path: "animi",
                                Version: "enim",
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: "sed",
                        ProjectID: "sint",
                        Secret: "quae",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "nesciunt",
                                Version: "fuga",
                            },
                            shared.SecretVersion{
                                Path: "animi",
                                Version: "pariatur",
                            },
                        },
                    },
                    shared.SecretVolume{
                        MountPath: "dolorum",
                        ProjectID: "tempora",
                        Secret: "doloribus",
                        Versions: []shared.SecretVersion{
                            shared.SecretVersion{
                                Path: "dolor",
                                Version: "ab",
                            },
                            shared.SecretVersion{
                                Path: "cum",
                                Version: "et",
                            },
                        },
                    },
                },
                SecurityLevel: "SECURE_ALWAYS",
                ServiceAccountEmail: "minus",
                TimeoutSeconds: 726249106625132825,
                VpcConnector: "quod",
                VpcConnectorEgressSettings: "PRIVATE_RANGES_ONLY",
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
