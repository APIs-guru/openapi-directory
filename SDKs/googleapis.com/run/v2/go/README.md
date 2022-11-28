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
    
    req := operations.RunProjectsLocationsJobsCreateRequest{
        Security: operations.RunProjectsLocationsJobsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RunProjectsLocationsJobsCreatePathParams{
            Parent: "nihil",
        },
        QueryParams: operations.RunProjectsLocationsJobsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "recusandae",
            Alt: "proto",
            Callback: "illum",
            Fields: "non",
            JobID: "aliquam",
            Key: "amet",
            OauthToken: "repellat",
            PrettyPrint: false,
            QuotaUser: "id",
            UploadType: "saepe",
            UploadProtocol: "ducimus",
            ValidateOnly: false,
        },
        Request: &shared.GoogleCloudRunV2JobInput{
            Annotations: map[string]string{
                "rerum": "et",
            },
            BinaryAuthorization: &shared.GoogleCloudRunV2BinaryAuthorization{
                BreakglassJustification: "fugit",
                UseDefault: false,
            },
            Client: "non",
            ClientVersion: "voluptatem",
            Labels: map[string]string{
                "recusandae": "nam",
                "et": "quas",
                "illo": "sequi",
            },
            LatestCreatedExecution: &shared.GoogleCloudRunV2ExecutionReference{
                CompletionTime: "aliquid",
                CreateTime: "quia",
                Name: "soluta",
            },
            LaunchStage: "EARLY_ACCESS",
            Name: "non",
            Template: &shared.GoogleCloudRunV2ExecutionTemplate{
                Annotations: map[string]string{
                    "fugit": "unde",
                    "rerum": "assumenda",
                },
                Labels: map[string]string{
                    "in": "asperiores",
                },
                Parallelism: 8133177959774302768,
                TaskCount: 2088010228750697258,
                Template: &shared.GoogleCloudRunV2TaskTemplate{
                    Containers: []shared.GoogleCloudRunV2Container{
                        shared.GoogleCloudRunV2Container{
                            Args: []string{
                                "assumenda",
                                "iusto",
                                "ut",
                            },
                            Command: []string{
                                "cum",
                                "voluptatum",
                                "assumenda",
                            },
                            Env: []shared.GoogleCloudRunV2EnvVar{
                                shared.GoogleCloudRunV2EnvVar{
                                    Name: "incidunt",
                                    Value: "alias",
                                    ValueSource: &shared.GoogleCloudRunV2EnvVarSource{
                                        SecretKeyRef: &shared.GoogleCloudRunV2SecretKeySelector{
                                            Secret: "repellat",
                                            Version: "laudantium",
                                        },
                                    },
                                },
                            },
                            Image: "error",
                            LivenessProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 2688713530206355012,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 7797975416061594680,
                                    Service: "quo",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "atque",
                                            Value: "autem",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "quia",
                                            Value: "repellendus",
                                        },
                                    },
                                    Path: "doloribus",
                                },
                                InitialDelaySeconds: 4443577522108449003,
                                PeriodSeconds: 6012277344778440788,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 4340614223364639070,
                                },
                                TimeoutSeconds: 4866929186078153440,
                            },
                            Name: "ratione",
                            Ports: []shared.GoogleCloudRunV2ContainerPort{
                                shared.GoogleCloudRunV2ContainerPort{
                                    ContainerPort: 6419353881739319704,
                                    Name: "officiis",
                                },
                            },
                            Resources: &shared.GoogleCloudRunV2ResourceRequirements{
                                CPUIdle: true,
                                Limits: map[string]string{
                                    "autem": "explicabo",
                                    "sit": "exercitationem",
                                },
                            },
                            StartupProbe: &shared.GoogleCloudRunV2Probe{
                                FailureThreshold: 7776858227574719823,
                                Grpc: &shared.GoogleCloudRunV2GrpcAction{
                                    Port: 8461745410967704242,
                                    Service: "expedita",
                                },
                                HTTPGet: &shared.GoogleCloudRunV2HTTPGetAction{
                                    HTTPHeaders: []shared.GoogleCloudRunV2HTTPHeader{
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "aut",
                                            Value: "consequatur",
                                        },
                                        shared.GoogleCloudRunV2HTTPHeader{
                                            Name: "id",
                                            Value: "esse",
                                        },
                                    },
                                    Path: "ad",
                                },
                                InitialDelaySeconds: 5318683032343837309,
                                PeriodSeconds: 7329191305231516644,
                                TCPSocket: &shared.GoogleCloudRunV2TCPSocketAction{
                                    Port: 8816393691003044773,
                                },
                                TimeoutSeconds: 4234836057574666443,
                            },
                            VolumeMounts: []shared.GoogleCloudRunV2VolumeMount{
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "nisi",
                                    Name: "consequatur",
                                },
                                shared.GoogleCloudRunV2VolumeMount{
                                    MountPath: "voluptas",
                                    Name: "excepturi",
                                },
                            },
                            WorkingDir: "laboriosam",
                        },
                    },
                    EncryptionKey: "commodi",
                    ExecutionEnvironment: "EXECUTION_ENVIRONMENT_GEN2",
                    MaxRetries: 2263638279881521272,
                    ServiceAccount: "ut",
                    Timeout: "ad",
                    Volumes: []shared.GoogleCloudRunV2Volume{
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "quam",
                                    "ut",
                                    "ut",
                                },
                            },
                            Name: "maxime",
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: 2779996097369498188,
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 1296355341537513384,
                                        Path: "corrupti",
                                        Version: "odio",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 7715066473898005523,
                                        Path: "veritatis",
                                        Version: "dolores",
                                    },
                                },
                                Secret: "omnis",
                            },
                        },
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "eum",
                                },
                            },
                            Name: "voluptatem",
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: 8608591140297173030,
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 4560515961557779437,
                                        Path: "voluptate",
                                        Version: "esse",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 5562338305340948272,
                                        Path: "velit",
                                        Version: "nihil",
                                    },
                                },
                                Secret: "cum",
                            },
                        },
                        shared.GoogleCloudRunV2Volume{
                            CloudSQLInstance: &shared.GoogleCloudRunV2CloudSQLInstance{
                                Instances: []string{
                                    "tempora",
                                    "repellat",
                                },
                            },
                            Name: "corrupti",
                            Secret: &shared.GoogleCloudRunV2SecretVolumeSource{
                                DefaultMode: 757858087760365431,
                                Items: []shared.GoogleCloudRunV2VersionToPath{
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 976024132249045875,
                                        Path: "ut",
                                        Version: "atque",
                                    },
                                    shared.GoogleCloudRunV2VersionToPath{
                                        Mode: 589641567226220685,
                                        Path: "et",
                                        Version: "quia",
                                    },
                                },
                                Secret: "laboriosam",
                            },
                        },
                    },
                    VpcAccess: &shared.GoogleCloudRunV2VpcAccess{
                        Connector: "voluptatem",
                        Egress: "VPC_EGRESS_UNSPECIFIED",
                    },
                },
            },
            TerminalCondition: &shared.GoogleCloudRunV2Condition{
                ExecutionReason: "NON_ZERO_EXIT_CODE",
                LastTransitionTime: "quidem",
                Message: "sed",
                Reason: "CONTAINER_IMAGE_UNAUTHORIZED",
                RevisionReason: "MIN_INSTANCES_NOT_PROVISIONED",
                Severity: "WARNING",
                State: "CONDITION_SUCCEEDED",
                Type: "debitis",
            },
        },
    }
    
    res, err := s.Projects.RunProjectsLocationsJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `RunProjectsLocationsJobsCreate` - Creates a Job.
* `RunProjectsLocationsJobsExecutionsList` - Lists Executions from a Job.
* `RunProjectsLocationsJobsExecutionsTasksList` - Lists Tasks from an Execution of a Job.
* `RunProjectsLocationsJobsList` - Lists Jobs.
* `RunProjectsLocationsJobsRun` - Triggers creation of a new Execution of this Job.
* `RunProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `RunProjectsLocationsServicesCreate` - Creates a new Service in a given project and location.
* `RunProjectsLocationsServicesGetIamPolicy` - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
* `RunProjectsLocationsServicesList` - Lists Services.
* `RunProjectsLocationsServicesPatch` - Updates a Service.
* `RunProjectsLocationsServicesRevisionsDelete` - Deletes a Revision.
* `RunProjectsLocationsServicesRevisionsGet` - Gets information about a Revision.
* `RunProjectsLocationsServicesRevisionsList` - Lists Revisions from a given Service, or from a given location.
* `RunProjectsLocationsServicesSetIamPolicy` - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* `RunProjectsLocationsServicesTestIamPermissions` - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
