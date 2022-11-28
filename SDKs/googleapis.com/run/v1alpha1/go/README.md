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
    
    req := operations.RunNamespacesJobsCreateRequest{
        Security: operations.RunNamespacesJobsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RunNamespacesJobsCreatePathParams{
            Parent: "molestias",
        },
        QueryParams: operations.RunNamespacesJobsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "qui",
            Alt: "json",
            Callback: "occaecati",
            Fields: "quasi",
            Key: "fugiat",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "sed",
            UploadType: "rerum",
            UploadProtocol: "ea",
        },
        Request: &shared.Job{
            APIVersion: "at",
            Kind: "vel",
            Metadata: &shared.ObjectMeta{
                Annotations: map[string]string{
                    "voluptatem": "soluta",
                    "doloremque": "aliquid",
                    "rem": "tenetur",
                },
                ClusterName: "ea",
                CreationTimestamp: "amet",
                DeletionGracePeriodSeconds: 4539324799356275713,
                DeletionTimestamp: "minima",
                Finalizers: []string{
                    "maiores",
                    "aut",
                },
                GenerateName: "et",
                Generation: 8595555590632221388,
                Labels: map[string]string{
                    "et": "sint",
                    "consequatur": "reiciendis",
                },
                Name: "ducimus",
                Namespace: "et",
                OwnerReferences: []shared.OwnerReference{
                    shared.OwnerReference{
                        APIVersion: "quasi",
                        BlockOwnerDeletion: false,
                        Controller: false,
                        Kind: "in",
                        Name: "minus",
                        UID: "et",
                    },
                },
                ResourceVersion: "nostrum",
                SelfLink: "officiis",
                UID: "voluptas",
            },
            Spec: &shared.JobSpec{
                ActiveDeadlineSeconds: "doloremque",
                BackoffLimit: 942367122057403,
                Completions: 8461239543359939786,
                Parallelism: 3446250605363017021,
                Template: &shared.InstanceTemplateSpec{
                    Spec: &shared.InstanceSpec{
                        ActiveDeadlineSeconds: "corrupti",
                        Containers: []shared.Container{
                            shared.Container{
                                Args: []string{
                                    "quas",
                                    "reiciendis",
                                },
                                Command: []string{
                                    "iusto",
                                    "impedit",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "est",
                                        Value: "labore",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "soluta",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "et",
                                                },
                                                Name: "explicabo",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "rerum",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "numquam",
                                                },
                                                Name: "sapiente",
                                                Optional: true,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "provident",
                                        Value: "ut",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "pariatur",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "dolorem",
                                                },
                                                Name: "vero",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "ducimus",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "facilis",
                                                },
                                                Name: "omnis",
                                                Optional: true,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "id",
                                            },
                                            Name: "asperiores",
                                            Optional: true,
                                        },
                                        Prefix: "eum",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "voluptas",
                                            },
                                            Name: "quasi",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "aliquam",
                                ImagePullPolicy: "numquam",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "non",
                                        },
                                    },
                                    FailureThreshold: 4970867461748090633,
                                    Grpc: &shared.GrpcAction{
                                        Port: 1541933179374661096,
                                        Service: "ad",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "vitae",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "ex",
                                                Value: "ex",
                                            },
                                            shared.HTTPHeader{
                                                Name: "vero",
                                                Value: "omnis",
                                            },
                                        },
                                        Path: "et",
                                        Scheme: "sit",
                                    },
                                    InitialDelaySeconds: 6119577771300060840,
                                    PeriodSeconds: 1474905606053625402,
                                    SuccessThreshold: 2031747616737710686,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "molestiae",
                                        Port: 3169507003314032990,
                                    },
                                    TimeoutSeconds: 5296021733860897283,
                                },
                                Name: "sapiente",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 3603567268369737312,
                                        Name: "modi",
                                        Protocol: "harum",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 1654461404085660015,
                                        Name: "voluptatem",
                                        Protocol: "dolor",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "est",
                                        },
                                    },
                                    FailureThreshold: 5003982745527687064,
                                    Grpc: &shared.GrpcAction{
                                        Port: 8945323413450432401,
                                        Service: "rerum",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "doloremque",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "voluptatibus",
                                                Value: "voluptas",
                                            },
                                            shared.HTTPHeader{
                                                Name: "est",
                                                Value: "animi",
                                            },
                                        },
                                        Path: "vel",
                                        Scheme: "occaecati",
                                    },
                                    InitialDelaySeconds: 3633982601414020853,
                                    PeriodSeconds: 8350814459227397961,
                                    SuccessThreshold: 8245620777129958790,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "et",
                                        Port: 5509147761421278477,
                                    },
                                    TimeoutSeconds: 4688590533129750891,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "reprehenderit": "voluptatum",
                                    },
                                    Requests: map[string]string{
                                        "ut": "labore",
                                        "doloremque": "delectus",
                                        "aspernatur": "dignissimos",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 1141555431372790379,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "in",
                                        },
                                    },
                                    FailureThreshold: 2816689105639094560,
                                    Grpc: &shared.GrpcAction{
                                        Port: 2099878156621168149,
                                        Service: "repudiandae",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "molestias",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "consequatur",
                                                Value: "quis",
                                            },
                                            shared.HTTPHeader{
                                                Name: "sequi",
                                                Value: "qui",
                                            },
                                            shared.HTTPHeader{
                                                Name: "maiores",
                                                Value: "quod",
                                            },
                                        },
                                        Path: "itaque",
                                        Scheme: "architecto",
                                    },
                                    InitialDelaySeconds: 8249191943147746679,
                                    PeriodSeconds: 3380658039127992182,
                                    SuccessThreshold: 8521442371609802618,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "quam",
                                        Port: 3613051751460190901,
                                    },
                                    TimeoutSeconds: 3883089145808347607,
                                },
                                TerminationMessagePath: "ut",
                                TerminationMessagePolicy: "illum",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "aliquam",
                                        Name: "inventore",
                                        ReadOnly: true,
                                        SubPath: "earum",
                                    },
                                },
                                WorkingDir: "soluta",
                            },
                            shared.Container{
                                Args: []string{
                                    "excepturi",
                                    "totam",
                                    "veniam",
                                },
                                Command: []string{
                                    "aspernatur",
                                    "vitae",
                                    "eum",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "sint",
                                        Value: "voluptate",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "sit",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "repellendus",
                                                },
                                                Name: "corporis",
                                                Optional: true,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "ullam",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "sint",
                                                },
                                                Name: "ut",
                                                Optional: true,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "culpa",
                                        Value: "sunt",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "sit",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "voluptatem",
                                                },
                                                Name: "nihil",
                                                Optional: true,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "iusto",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "earum",
                                                },
                                                Name: "quibusdam",
                                                Optional: false,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "perspiciatis",
                                            },
                                            Name: "perspiciatis",
                                            Optional: true,
                                        },
                                        Prefix: "necessitatibus",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "nihil",
                                            },
                                            Name: "expedita",
                                            Optional: true,
                                        },
                                    },
                                },
                                Image: "consequatur",
                                ImagePullPolicy: "eligendi",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "voluptatibus",
                                            "tempore",
                                        },
                                    },
                                    FailureThreshold: 1461486700439304296,
                                    Grpc: &shared.GrpcAction{
                                        Port: 6958801857898114319,
                                        Service: "qui",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "et",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "culpa",
                                                Value: "id",
                                            },
                                            shared.HTTPHeader{
                                                Name: "ullam",
                                                Value: "et",
                                            },
                                        },
                                        Path: "sed",
                                        Scheme: "odit",
                                    },
                                    InitialDelaySeconds: 2661025999394640566,
                                    PeriodSeconds: 1701879520399258058,
                                    SuccessThreshold: 4916112897995536856,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "id",
                                        Port: 4436621812713643402,
                                    },
                                    TimeoutSeconds: 2470775265374970111,
                                },
                                Name: "iusto",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 7138677114797828728,
                                        Name: "eius",
                                        Protocol: "explicabo",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 2915513205126756781,
                                        Name: "quia",
                                        Protocol: "delectus",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 3925548684810317827,
                                        Name: "consequuntur",
                                        Protocol: "velit",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "et",
                                            "corporis",
                                            "voluptates",
                                        },
                                    },
                                    FailureThreshold: 7679575152548104904,
                                    Grpc: &shared.GrpcAction{
                                        Port: 2963919923495112752,
                                        Service: "provident",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "neque",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "qui",
                                                Value: "molestiae",
                                            },
                                            shared.HTTPHeader{
                                                Name: "deleniti",
                                                Value: "quisquam",
                                            },
                                        },
                                        Path: "error",
                                        Scheme: "est",
                                    },
                                    InitialDelaySeconds: 1835622084557857830,
                                    PeriodSeconds: 5175803226816502902,
                                    SuccessThreshold: 953808308230057915,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "doloremque",
                                        Port: 1604078686119253067,
                                    },
                                    TimeoutSeconds: 4963803875998146955,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "aut": "quae",
                                        "voluptate": "quo",
                                        "sint": "quis",
                                    },
                                    Requests: map[string]string{
                                        "doloremque": "debitis",
                                        "unde": "facilis",
                                        "nobis": "cum",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 2125335013438967309,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "dolor",
                                            "ipsa",
                                        },
                                    },
                                    FailureThreshold: 4095803601140624775,
                                    Grpc: &shared.GrpcAction{
                                        Port: 7746310136882242666,
                                        Service: "enim",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "labore",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "et",
                                                Value: "sit",
                                            },
                                            shared.HTTPHeader{
                                                Name: "est",
                                                Value: "est",
                                            },
                                            shared.HTTPHeader{
                                                Name: "veritatis",
                                                Value: "accusamus",
                                            },
                                        },
                                        Path: "enim",
                                        Scheme: "provident",
                                    },
                                    InitialDelaySeconds: 5111392661543865458,
                                    PeriodSeconds: 5483887904699893031,
                                    SuccessThreshold: 8839602701310775874,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "nulla",
                                        Port: 7981277484967011385,
                                    },
                                    TimeoutSeconds: 5949296481211853636,
                                },
                                TerminationMessagePath: "delectus",
                                TerminationMessagePolicy: "at",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "et",
                                        Name: "impedit",
                                        ReadOnly: true,
                                        SubPath: "sequi",
                                    },
                                },
                                WorkingDir: "dolorum",
                            },
                            shared.Container{
                                Args: []string{
                                    "minima",
                                },
                                Command: []string{
                                    "officiis",
                                    "et",
                                },
                                Env: []shared.EnvVar{
                                    shared.EnvVar{
                                        Name: "non",
                                        Value: "quae",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "beatae",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "et",
                                                },
                                                Name: "rerum",
                                                Optional: true,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "deleniti",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "esse",
                                                },
                                                Name: "ratione",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "corrupti",
                                        Value: "quod",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "qui",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "et",
                                                },
                                                Name: "sed",
                                                Optional: true,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "sapiente",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "optio",
                                                },
                                                Name: "omnis",
                                                Optional: false,
                                            },
                                        },
                                    },
                                    shared.EnvVar{
                                        Name: "inventore",
                                        Value: "id",
                                        ValueFrom: &shared.EnvVarSource{
                                            ConfigMapKeyRef: &shared.ConfigMapKeySelector{
                                                Key: "adipisci",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "error",
                                                },
                                                Name: "laudantium",
                                                Optional: false,
                                            },
                                            SecretKeyRef: &shared.SecretKeySelector{
                                                Key: "recusandae",
                                                LocalObjectReference: &shared.LocalObjectReference{
                                                    Name: "doloribus",
                                                },
                                                Name: "sed",
                                                Optional: true,
                                            },
                                        },
                                    },
                                },
                                EnvFrom: []shared.EnvFromSource{
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "perferendis",
                                            },
                                            Name: "officiis",
                                            Optional: false,
                                        },
                                        Prefix: "et",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "rerum",
                                            },
                                            Name: "qui",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "aliquam",
                                            },
                                            Name: "molestiae",
                                            Optional: true,
                                        },
                                        Prefix: "ipsa",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "rerum",
                                            },
                                            Name: "eaque",
                                            Optional: false,
                                        },
                                    },
                                    shared.EnvFromSource{
                                        ConfigMapRef: &shared.ConfigMapEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "enim",
                                            },
                                            Name: "vel",
                                            Optional: true,
                                        },
                                        Prefix: "omnis",
                                        SecretRef: &shared.SecretEnvSource{
                                            LocalObjectReference: &shared.LocalObjectReference{
                                                Name: "alias",
                                            },
                                            Name: "ea",
                                            Optional: false,
                                        },
                                    },
                                },
                                Image: "tempora",
                                ImagePullPolicy: "quis",
                                LivenessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "sequi",
                                        },
                                    },
                                    FailureThreshold: 6193917981153452844,
                                    Grpc: &shared.GrpcAction{
                                        Port: 9042431048538597238,
                                        Service: "ab",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "in",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "possimus",
                                                Value: "aspernatur",
                                            },
                                            shared.HTTPHeader{
                                                Name: "dolores",
                                                Value: "et",
                                            },
                                            shared.HTTPHeader{
                                                Name: "libero",
                                                Value: "inventore",
                                            },
                                        },
                                        Path: "quo",
                                        Scheme: "et",
                                    },
                                    InitialDelaySeconds: 451882523317497902,
                                    PeriodSeconds: 802477546956231620,
                                    SuccessThreshold: 6395140472053453916,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "tempora",
                                        Port: 3235054434341092000,
                                    },
                                    TimeoutSeconds: 3872944090730013512,
                                },
                                Name: "consequatur",
                                Ports: []shared.ContainerPort{
                                    shared.ContainerPort{
                                        ContainerPort: 6401695703117165297,
                                        Name: "error",
                                        Protocol: "sint",
                                    },
                                    shared.ContainerPort{
                                        ContainerPort: 4500759802704413865,
                                        Name: "autem",
                                        Protocol: "mollitia",
                                    },
                                },
                                ReadinessProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "quia",
                                            "mollitia",
                                        },
                                    },
                                    FailureThreshold: 2236116965037051564,
                                    Grpc: &shared.GrpcAction{
                                        Port: 1270205750598399805,
                                        Service: "in",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "sequi",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "quos",
                                                Value: "rerum",
                                            },
                                            shared.HTTPHeader{
                                                Name: "dolores",
                                                Value: "deserunt",
                                            },
                                            shared.HTTPHeader{
                                                Name: "et",
                                                Value: "vel",
                                            },
                                        },
                                        Path: "consectetur",
                                        Scheme: "officiis",
                                    },
                                    InitialDelaySeconds: 8504633154075854499,
                                    PeriodSeconds: 45114391743458575,
                                    SuccessThreshold: 4138072877811335702,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "corrupti",
                                        Port: 3077075037648512654,
                                    },
                                    TimeoutSeconds: 2574533273618454795,
                                },
                                Resources: &shared.ResourceRequirements{
                                    Limits: map[string]string{
                                        "provident": "ducimus",
                                        "voluptas": "quis",
                                        "impedit": "expedita",
                                    },
                                    Requests: map[string]string{
                                        "est": "alias",
                                        "sit": "tenetur",
                                        "qui": "cum",
                                    },
                                },
                                SecurityContext: &shared.SecurityContext{
                                    RunAsUser: 8666132570895663240,
                                },
                                StartupProbe: &shared.Probe{
                                    Exec: &shared.ExecAction{
                                        Command: []string{
                                            "voluptas",
                                        },
                                    },
                                    FailureThreshold: 59115062145819579,
                                    Grpc: &shared.GrpcAction{
                                        Port: 3475444160614041575,
                                        Service: "perferendis",
                                    },
                                    HTTPGet: &shared.HTTPGetAction{
                                        Host: "fuga",
                                        HTTPHeaders: []shared.HTTPHeader{
                                            shared.HTTPHeader{
                                                Name: "omnis",
                                                Value: "quisquam",
                                            },
                                        },
                                        Path: "commodi",
                                        Scheme: "et",
                                    },
                                    InitialDelaySeconds: 2026448774353975791,
                                    PeriodSeconds: 1768585792787595592,
                                    SuccessThreshold: 8313689477081018518,
                                    TCPSocket: &shared.TCPSocketAction{
                                        Host: "eum",
                                        Port: 5921247025217931772,
                                    },
                                    TimeoutSeconds: 2471335381233560891,
                                },
                                TerminationMessagePath: "minus",
                                TerminationMessagePolicy: "voluptatem",
                                VolumeMounts: []shared.VolumeMount{
                                    shared.VolumeMount{
                                        MountPath: "hic",
                                        Name: "rerum",
                                        ReadOnly: true,
                                        SubPath: "excepturi",
                                    },
                                    shared.VolumeMount{
                                        MountPath: "porro",
                                        Name: "eos",
                                        ReadOnly: true,
                                        SubPath: "consequatur",
                                    },
                                },
                                WorkingDir: "velit",
                            },
                        },
                        RestartPolicy: "aut",
                        ServiceAccountName: "occaecati",
                        TerminationGracePeriodSeconds: "ea",
                        Volumes: []shared.Volume{
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 3660212655194556557,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "dignissimos",
                                            Mode: 1680128215728570212,
                                            Path: "consequatur",
                                        },
                                    },
                                    Name: "iste",
                                    Optional: true,
                                },
                                Name: "assumenda",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 3872433627045221826,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "repellendus",
                                            Mode: 3650592891090512270,
                                            Path: "culpa",
                                        },
                                        shared.KeyToPath{
                                            Key: "modi",
                                            Mode: 7302297139680177634,
                                            Path: "ut",
                                        },
                                    },
                                    Optional: false,
                                    SecretName: "et",
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 1238046897637974504,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "voluptatem",
                                            Mode: 6941856187733852070,
                                            Path: "provident",
                                        },
                                        shared.KeyToPath{
                                            Key: "tempora",
                                            Mode: 1944378778775186525,
                                            Path: "quidem",
                                        },
                                        shared.KeyToPath{
                                            Key: "quod",
                                            Mode: 2639965261717590887,
                                            Path: "dolor",
                                        },
                                    },
                                    Name: "tenetur",
                                    Optional: true,
                                },
                                Name: "quia",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 7672768974913202693,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "debitis",
                                            Mode: 9073988974644715550,
                                            Path: "a",
                                        },
                                    },
                                    Optional: false,
                                    SecretName: "eaque",
                                },
                            },
                            shared.Volume{
                                ConfigMap: &shared.ConfigMapVolumeSource{
                                    DefaultMode: 2568905343333563592,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "vel",
                                            Mode: 9065771119699927634,
                                            Path: "est",
                                        },
                                        shared.KeyToPath{
                                            Key: "officiis",
                                            Mode: 3170573384197884262,
                                            Path: "explicabo",
                                        },
                                    },
                                    Name: "ab",
                                    Optional: false,
                                },
                                Name: "dicta",
                                Secret: &shared.SecretVolumeSource{
                                    DefaultMode: 8296632093730615736,
                                    Items: []shared.KeyToPath{
                                        shared.KeyToPath{
                                            Key: "fugit",
                                            Mode: 3943467218367361173,
                                            Path: "nihil",
                                        },
                                        shared.KeyToPath{
                                            Key: "quod",
                                            Mode: 9045397982087863512,
                                            Path: "sint",
                                        },
                                    },
                                    Optional: true,
                                    SecretName: "ut",
                                },
                            },
                        },
                    },
                },
                TTLSecondsAfterFinished: 8534978223868451056,
            },
            Status: &shared.JobStatus{
                Active: 8356579073957532003,
                CompletionTime: "velit",
                Conditions: []shared.JobCondition{
                    shared.JobCondition{
                        LastTransitionTime: "necessitatibus",
                        Message: "aut",
                        Reason: "enim",
                        Severity: "sit",
                        Status: "exercitationem",
                        Type: "voluptate",
                    },
                    shared.JobCondition{
                        LastTransitionTime: "explicabo",
                        Message: "esse",
                        Reason: "explicabo",
                        Severity: "aliquid",
                        Status: "voluptatum",
                        Type: "ea",
                    },
                    shared.JobCondition{
                        LastTransitionTime: "aut",
                        Message: "delectus",
                        Reason: "et",
                        Severity: "ullam",
                        Status: "quia",
                        Type: "est",
                    },
                },
                Failed: 5723222395514882552,
                ImageDigest: "saepe",
                Instances: []shared.InstanceStatus{
                    shared.InstanceStatus{
                        CompletionTime: "omnis",
                        Failed: 8482094748759209037,
                        Index: 5452769157446981348,
                        LastAttemptResult: &shared.InstanceAttemptResult{
                            ExitCode: 8845654876728268557,
                            Status: &shared.GoogleRPCStatus{
                                Code: 5338315572355245529,
                                Details: []map[string]interface{}{
                                    map[string]interface{}{
                                        "laudantium": "ea",
                                        "labore": "nisi",
                                    },
                                    map[string]interface{}{
                                        "facere": "omnis",
                                        "perferendis": "sint",
                                        "et": "est",
                                    },
                                },
                                Message: "harum",
                            },
                        },
                        LastExitCode: 4549685695499071311,
                        Restarted: 677107794368448037,
                        StartTime: "et",
                        Succeeded: 4409209313945003028,
                    },
                },
                ObservedGeneration: 7958560307140725875,
                StartTime: "accusantium",
                Succeeded: 263959742780581007,
            },
        },
    }
    
    res, err := s.Namespaces.RunNamespacesJobsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### namespaces

* `RunNamespacesJobsCreate` - Create a job.
* `RunNamespacesJobsDelete` - Delete a job.
* `RunNamespacesJobsGet` - Get information about a job.
* `RunNamespacesJobsList` - List jobs.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
