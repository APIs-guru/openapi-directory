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
    
    req := operations.DNSChangesCreateRequest{
        Security: operations.DNSChangesCreateSecurity{
            Option1: &operations.DNSChangesCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.DNSChangesCreatePathParams{
            Location: "non",
            ManagedZone: "corrupti",
            Project: "rerum",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "veritatis",
            Alt: "json",
            Callback: "recusandae",
            ClientOperationID: "modi",
            Fields: "odit",
            Key: "voluptatum",
            OauthToken: "neque",
            PrettyPrint: false,
            QuotaUser: "eos",
            UploadType: "harum",
            UploadProtocol: "molestiae",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "a",
                    Name: "amet",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "omnis",
                                                IPProtocol: "TCP",
                                                Kind: "id",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "illum",
                                                Port: "ut",
                                                Project: "optio",
                                                Region: "quisquam",
                                            },
                                        },
                                    },
                                    Kind: "mollitia",
                                    Location: "et",
                                    Rrdatas: []string{
                                        "assumenda",
                                        "quas",
                                        "tenetur",
                                    },
                                    SignatureRrdatas: []string{
                                        "repellat",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "recusandae",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "aut",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "et",
                                                Port: "ut",
                                                Project: "voluptatem",
                                                Region: "doloremque",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptas",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "voluptatem",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "laborum",
                                                Port: "accusamus",
                                                Project: "quia",
                                                Region: "exercitationem",
                                            },
                                        },
                                    },
                                    Kind: "repellendus",
                                    Location: "optio",
                                    Rrdatas: []string{
                                        "et",
                                        "voluptatum",
                                        "ducimus",
                                    },
                                    SignatureRrdatas: []string{
                                        "aut",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quidem",
                                                IPProtocol: "UDP",
                                                Kind: "impedit",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "pariatur",
                                                Port: "blanditiis",
                                                Project: "repudiandae",
                                                Region: "consequatur",
                                            },
                                        },
                                    },
                                    Kind: "incidunt",
                                    Location: "autem",
                                    Rrdatas: []string{
                                        "qui",
                                        "quia",
                                    },
                                    SignatureRrdatas: []string{
                                        "molestiae",
                                        "ipsum",
                                    },
                                },
                            },
                            Kind: "quos",
                        },
                        Kind: "dignissimos",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "iste",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "sunt",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "nesciunt",
                                                    Port: "libero",
                                                    Project: "sint",
                                                    Region: "architecto",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "facere",
                                                    IPProtocol: "UDP",
                                                    Kind: "eaque",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "aut",
                                                    Port: "tenetur",
                                                    Project: "culpa",
                                                    Region: "nobis",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "animi",
                                                    IPProtocol: "UDP",
                                                    Kind: "minima",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "autem",
                                                    Port: "ipsa",
                                                    Project: "sit",
                                                    Region: "voluptatibus",
                                                },
                                            },
                                        },
                                        Kind: "sit",
                                        Location: "aspernatur",
                                        Rrdatas: []string{
                                            "vel",
                                            "itaque",
                                        },
                                        SignatureRrdatas: []string{
                                            "animi",
                                            "praesentium",
                                        },
                                    },
                                },
                                Kind: "voluptatibus",
                            },
                            Kind: "non",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "eius",
                                        IPProtocol: "TCP",
                                        Kind: "perferendis",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "placeat",
                                        Port: "dolore",
                                        Project: "voluptatem",
                                        Region: "sunt",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "itaque",
                                        IPProtocol: "UNDEFINED",
                                        Kind: "quo",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "porro",
                                        Port: "ea",
                                        Project: "porro",
                                        Region: "dolor",
                                    },
                                },
                            },
                            TrickleTraffic: 35.200001,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "harum",
                                                IPProtocol: "TCP",
                                                Kind: "laudantium",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "repellendus",
                                                Port: "voluptatem",
                                                Project: "reiciendis",
                                                Region: "maxime",
                                            },
                                        },
                                    },
                                    Kind: "vel",
                                    Rrdatas: []string{
                                        "numquam",
                                    },
                                    SignatureRrdatas: []string{
                                        "a",
                                        "est",
                                        "cum",
                                    },
                                    Weight: 21.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sed",
                                                IPProtocol: "UDP",
                                                Kind: "maiores",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "aliquam",
                                                Port: "qui",
                                                Project: "quis",
                                                Region: "aut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "atque",
                                                IPProtocol: "TCP",
                                                Kind: "vel",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "molestiae",
                                                Port: "est",
                                                Project: "non",
                                                Region: "deleniti",
                                            },
                                        },
                                    },
                                    Kind: "expedita",
                                    Rrdatas: []string{
                                        "dolor",
                                    },
                                    SignatureRrdatas: []string{
                                        "nulla",
                                        "corrupti",
                                        "ut",
                                    },
                                    Weight: 32.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "minima",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "praesentium",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "non",
                                                Port: "corrupti",
                                                Project: "voluptas",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "atque",
                                    Rrdatas: []string{
                                        "maiores",
                                        "eum",
                                        "eos",
                                    },
                                    SignatureRrdatas: []string{
                                        "iste",
                                        "reprehenderit",
                                    },
                                    Weight: 77.199997,
                                },
                            },
                            Kind: "ut",
                        },
                    },
                    Rrdatas: []string{
                        "eum",
                    },
                    SignatureRrdatas: []string{
                        "totam",
                    },
                    TTL: 6275568315369541702,
                    Type: "quae",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "dicta",
                    Name: "enim",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quo",
                                                IPProtocol: "TCP",
                                                Kind: "rerum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "quasi",
                                                Port: "quia",
                                                Project: "vel",
                                                Region: "sed",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "UDP",
                                                Kind: "aut",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "modi",
                                                Port: "ex",
                                                Project: "cum",
                                                Region: "quis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "TCP",
                                                Kind: "voluptates",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "pariatur",
                                                Port: "omnis",
                                                Project: "rerum",
                                                Region: "omnis",
                                            },
                                        },
                                    },
                                    Kind: "veritatis",
                                    Location: "voluptate",
                                    Rrdatas: []string{
                                        "autem",
                                        "vel",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolore",
                                    },
                                },
                            },
                            Kind: "sequi",
                        },
                        Kind: "esse",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "perspiciatis",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "beatae",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "non",
                                                    Port: "vel",
                                                    Project: "in",
                                                    Region: "facilis",
                                                },
                                            },
                                        },
                                        Kind: "magni",
                                        Location: "est",
                                        Rrdatas: []string{
                                            "libero",
                                        },
                                        SignatureRrdatas: []string{
                                            "nulla",
                                            "minus",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "neque",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "et",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "pariatur",
                                                    Port: "perspiciatis",
                                                    Project: "laboriosam",
                                                    Region: "fuga",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "est",
                                                    IPProtocol: "TCP",
                                                    Kind: "dignissimos",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "quia",
                                                    Port: "omnis",
                                                    Project: "sint",
                                                    Region: "molestias",
                                                },
                                            },
                                        },
                                        Kind: "nemo",
                                        Location: "provident",
                                        Rrdatas: []string{
                                            "vel",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptatem",
                                            "inventore",
                                            "at",
                                        },
                                    },
                                },
                                Kind: "et",
                            },
                            Kind: "quos",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "corrupti",
                                        IPProtocol: "TCP",
                                        Kind: "magni",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "repellat",
                                        Port: "reprehenderit",
                                        Project: "laboriosam",
                                        Region: "soluta",
                                    },
                                },
                            },
                            TrickleTraffic: 43.099998,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "velit",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "ut",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "dolorem",
                                                Port: "quaerat",
                                                Project: "consequatur",
                                                Region: "nihil",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatum",
                                                IPProtocol: "UDP",
                                                Kind: "earum",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "cumque",
                                                Port: "eos",
                                                Project: "minus",
                                                Region: "sint",
                                            },
                                        },
                                    },
                                    Kind: "nobis",
                                    Rrdatas: []string{
                                        "excepturi",
                                        "maiores",
                                    },
                                    SignatureRrdatas: []string{
                                        "earum",
                                        "omnis",
                                        "libero",
                                    },
                                    Weight: 25.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "praesentium",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "est",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "dolore",
                                                Port: "quis",
                                                Project: "id",
                                                Region: "tempore",
                                            },
                                        },
                                    },
                                    Kind: "veniam",
                                    Rrdatas: []string{
                                        "et",
                                        "ipsa",
                                    },
                                    SignatureRrdatas: []string{
                                        "natus",
                                        "quas",
                                        "dolor",
                                    },
                                    Weight: 12.200000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "qui",
                                                IPProtocol: "UDP",
                                                Kind: "dicta",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "quibusdam",
                                                Port: "inventore",
                                                Project: "laborum",
                                                Region: "modi",
                                            },
                                        },
                                    },
                                    Kind: "facilis",
                                    Rrdatas: []string{
                                        "rem",
                                        "delectus",
                                        "cupiditate",
                                    },
                                    SignatureRrdatas: []string{
                                        "ad",
                                    },
                                    Weight: 9.200000,
                                },
                            },
                            Kind: "sit",
                        },
                    },
                    Rrdatas: []string{
                        "quos",
                        "est",
                    },
                    SignatureRrdatas: []string{
                        "reiciendis",
                        "ad",
                    },
                    TTL: 7871550843386053795,
                    Type: "dicta",
                },
                shared.ResourceRecordSet{
                    Kind: "dolores",
                    Name: "ut",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "explicabo",
                                                IPProtocol: "UDP",
                                                Kind: "temporibus",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "eveniet",
                                                Port: "perferendis",
                                                Project: "mollitia",
                                                Region: "accusamus",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "at",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "quo",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "adipisci",
                                                Port: "hic",
                                                Project: "veniam",
                                                Region: "expedita",
                                            },
                                        },
                                    },
                                    Kind: "praesentium",
                                    Location: "odio",
                                    Rrdatas: []string{
                                        "exercitationem",
                                        "non",
                                    },
                                    SignatureRrdatas: []string{
                                        "nam",
                                        "nobis",
                                    },
                                },
                            },
                            Kind: "debitis",
                        },
                        Kind: "adipisci",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ex",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "eaque",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "ipsam",
                                                    Port: "consequuntur",
                                                    Project: "quod",
                                                    Region: "sed",
                                                },
                                            },
                                        },
                                        Kind: "eos",
                                        Location: "et",
                                        Rrdatas: []string{
                                            "voluptatem",
                                            "enim",
                                            "voluptatem",
                                        },
                                        SignatureRrdatas: []string{
                                            "aliquam",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "cupiditate",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "eius",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "tempore",
                                                    Port: "nulla",
                                                    Project: "qui",
                                                    Region: "nam",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "assumenda",
                                                    IPProtocol: "UDP",
                                                    Kind: "aut",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "facere",
                                                    Port: "quam",
                                                    Project: "rerum",
                                                    Region: "quo",
                                                },
                                            },
                                        },
                                        Kind: "iure",
                                        Location: "aut",
                                        Rrdatas: []string{
                                            "qui",
                                        },
                                        SignatureRrdatas: []string{
                                            "ullam",
                                            "quod",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "velit",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "cum",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "et",
                                                    Port: "quia",
                                                    Project: "rerum",
                                                    Region: "fuga",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "cum",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "voluptatem",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "distinctio",
                                                    Port: "voluptatem",
                                                    Project: "quisquam",
                                                    Region: "qui",
                                                },
                                            },
                                        },
                                        Kind: "at",
                                        Location: "expedita",
                                        Rrdatas: []string{
                                            "illo",
                                            "qui",
                                        },
                                        SignatureRrdatas: []string{
                                            "non",
                                            "at",
                                            "non",
                                        },
                                    },
                                },
                                Kind: "id",
                            },
                            Kind: "inventore",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "eum",
                                        IPProtocol: "TCP",
                                        Kind: "dolorem",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "magnam",
                                        Port: "voluptates",
                                        Project: "eum",
                                        Region: "ut",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "magni",
                                        IPProtocol: "UDP",
                                        Kind: "ducimus",
                                        LoadBalancerType: "NONE",
                                        NetworkURL: "rerum",
                                        Port: "est",
                                        Project: "blanditiis",
                                        Region: "voluptatem",
                                    },
                                },
                            },
                            TrickleTraffic: 45.200001,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "a",
                                                IPProtocol: "TCP",
                                                Kind: "iure",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "corrupti",
                                                Port: "dolores",
                                                Project: "voluptas",
                                                Region: "nam",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iusto",
                                                IPProtocol: "UNDEFINED",
                                                Kind: "consequuntur",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "voluptas",
                                                Port: "dignissimos",
                                                Project: "facere",
                                                Region: "hic",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quos",
                                                IPProtocol: "TCP",
                                                Kind: "odio",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "quia",
                                                Port: "quaerat",
                                                Project: "fugit",
                                                Region: "est",
                                            },
                                        },
                                    },
                                    Kind: "nisi",
                                    Rrdatas: []string{
                                        "aut",
                                        "sed",
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "aspernatur",
                                        "ipsa",
                                        "voluptatibus",
                                    },
                                    Weight: 20.100000,
                                },
                            },
                            Kind: "eveniet",
                        },
                    },
                    Rrdatas: []string{
                        "eaque",
                        "repudiandae",
                    },
                    SignatureRrdatas: []string{
                        "rerum",
                    },
                    TTL: 1275075907353863185,
                    Type: "unde",
                },
                shared.ResourceRecordSet{
                    Kind: "officia",
                    Name: "sed",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "doloremque",
                                                IPProtocol: "TCP",
                                                Kind: "fuga",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "sequi",
                                                Port: "magnam",
                                                Project: "fugit",
                                                Region: "commodi",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "numquam",
                                                IPProtocol: "TCP",
                                                Kind: "odio",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "nihil",
                                                Port: "repellendus",
                                                Project: "non",
                                                Region: "minus",
                                            },
                                        },
                                    },
                                    Kind: "provident",
                                    Location: "temporibus",
                                    Rrdatas: []string{
                                        "magni",
                                        "accusantium",
                                        "libero",
                                    },
                                    SignatureRrdatas: []string{
                                        "rerum",
                                        "nesciunt",
                                        "ut",
                                    },
                                },
                            },
                            Kind: "voluptas",
                        },
                        Kind: "quia",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "deserunt",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "nesciunt",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "sint",
                                                    Port: "possimus",
                                                    Project: "voluptates",
                                                    Region: "cum",
                                                },
                                            },
                                        },
                                        Kind: "saepe",
                                        Location: "assumenda",
                                        Rrdatas: []string{
                                            "rerum",
                                            "vero",
                                            "debitis",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolor",
                                            "iusto",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quasi",
                                                    IPProtocol: "TCP",
                                                    Kind: "et",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "perspiciatis",
                                                    Port: "aliquam",
                                                    Project: "pariatur",
                                                    Region: "inventore",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nisi",
                                                    IPProtocol: "UDP",
                                                    Kind: "amet",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "deserunt",
                                                    Port: "qui",
                                                    Project: "voluptatem",
                                                    Region: "illum",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "cum",
                                                    IPProtocol: "TCP",
                                                    Kind: "sunt",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "sapiente",
                                                    Port: "minus",
                                                    Project: "ipsam",
                                                    Region: "reprehenderit",
                                                },
                                            },
                                        },
                                        Kind: "a",
                                        Location: "aut",
                                        Rrdatas: []string{
                                            "nulla",
                                            "culpa",
                                        },
                                        SignatureRrdatas: []string{
                                            "aut",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "officia",
                                                    IPProtocol: "UNDEFINED",
                                                    Kind: "quas",
                                                    LoadBalancerType: "REGIONAL_L4ILB",
                                                    NetworkURL: "aperiam",
                                                    Port: "dolorum",
                                                    Project: "nobis",
                                                    Region: "impedit",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "rem",
                                                    IPProtocol: "TCP",
                                                    Kind: "in",
                                                    LoadBalancerType: "NONE",
                                                    NetworkURL: "cumque",
                                                    Port: "cupiditate",
                                                    Project: "et",
                                                    Region: "officiis",
                                                },
                                            },
                                        },
                                        Kind: "officiis",
                                        Location: "nesciunt",
                                        Rrdatas: []string{
                                            "eligendi",
                                            "quasi",
                                            "autem",
                                        },
                                        SignatureRrdatas: []string{
                                            "veritatis",
                                        },
                                    },
                                },
                                Kind: "reprehenderit",
                            },
                            Kind: "non",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "enim",
                                        IPProtocol: "UDP",
                                        Kind: "autem",
                                        LoadBalancerType: "REGIONAL_L4ILB",
                                        NetworkURL: "praesentium",
                                        Port: "velit",
                                        Project: "praesentium",
                                        Region: "possimus",
                                    },
                                },
                            },
                            TrickleTraffic: 27.200001,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "UDP",
                                                Kind: "at",
                                                LoadBalancerType: "NONE",
                                                NetworkURL: "consequuntur",
                                                Port: "ducimus",
                                                Project: "pariatur",
                                                Region: "est",
                                            },
                                        },
                                    },
                                    Kind: "sit",
                                    Rrdatas: []string{
                                        "aut",
                                        "cum",
                                    },
                                    SignatureRrdatas: []string{
                                        "sint",
                                    },
                                    Weight: 0.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "est",
                                                IPProtocol: "TCP",
                                                Kind: "quia",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "modi",
                                                Port: "eius",
                                                Project: "eos",
                                                Region: "accusamus",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nisi",
                                                IPProtocol: "TCP",
                                                Kind: "quas",
                                                LoadBalancerType: "REGIONAL_L4ILB",
                                                NetworkURL: "voluptatem",
                                                Port: "in",
                                                Project: "distinctio",
                                                Region: "sit",
                                            },
                                        },
                                    },
                                    Kind: "velit",
                                    Rrdatas: []string{
                                        "aut",
                                    },
                                    SignatureRrdatas: []string{
                                        "ea",
                                    },
                                    Weight: 61.200001,
                                },
                            },
                            Kind: "ea",
                        },
                    },
                    Rrdatas: []string{
                        "illo",
                        "nihil",
                    },
                    SignatureRrdatas: []string{
                        "magni",
                    },
                    TTL: 1258140067766798810,
                    Type: "commodi",
                },
            },
            ID: "provident",
            IsServing: false,
            Kind: "sed",
            StartTime: "illo",
            Status: "DONE",
        },
    }
    
    res, err := s.Changes.DNSChangesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Change != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### changes

* `DNSChangesCreate` - Atomically updates the ResourceRecordSet collection.
* `DNSChangesGet` - Fetches the representation of an existing Change.
* `DNSChangesList` - Enumerates Changes to a ResourceRecordSet collection.

### dnsKeys

* `DNSDNSKeysGet` - Fetches the representation of an existing DnsKey.
* `DNSDNSKeysList` - Enumerates DnsKeys to a ResourceRecordSet collection.

### managedZoneOperations

* `DNSManagedZoneOperationsGet` - Fetches the representation of an existing Operation.
* `DNSManagedZoneOperationsList` - Enumerates Operations for the given ManagedZone.

### managedZones

* `DNSManagedZonesCreate` - Creates a new ManagedZone.
* `DNSManagedZonesDelete` - Deletes a previously created ManagedZone.
* `DNSManagedZonesGet` - Fetches the representation of an existing ManagedZone.
* `DNSManagedZonesGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `DNSManagedZonesList` - Enumerates ManagedZones that have been created but not yet deleted.
* `DNSManagedZonesPatch` - Applies a partial update to an existing ManagedZone.
* `DNSManagedZonesSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `DNSManagedZonesTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `DNSManagedZonesUpdate` - Updates an existing ManagedZone.

### policies

* `DNSPoliciesCreate` - Creates a new Policy.
* `DNSPoliciesDelete` - Deletes a previously created Policy. Fails if the policy is still being referenced by a network.
* `DNSPoliciesGet` - Fetches the representation of an existing Policy.
* `DNSPoliciesList` - Enumerates all Policies associated with a project.
* `DNSPoliciesPatch` - Applies a partial update to an existing Policy.
* `DNSPoliciesUpdate` - Updates an existing Policy.

### projects

* `DNSProjectsGet` - Fetches the representation of an existing Project.

### resourceRecordSets

* `DNSResourceRecordSetsCreate` - Creates a new ResourceRecordSet.
* `DNSResourceRecordSetsDelete` - Deletes a previously created ResourceRecordSet.
* `DNSResourceRecordSetsGet` - Fetches the representation of an existing ResourceRecordSet.
* `DNSResourceRecordSetsList` - Enumerates ResourceRecordSets that you have created but not yet deleted.
* `DNSResourceRecordSetsPatch` - Applies a partial update to an existing ResourceRecordSet.

### responsePolicies

* `DNSResponsePoliciesCreate` - Creates a new Response Policy
* `DNSResponsePoliciesDelete` - Deletes a previously created Response Policy. Fails if the response policy is non-empty or still being referenced by a network.
* `DNSResponsePoliciesGet` - Fetches the representation of an existing Response Policy.
* `DNSResponsePoliciesList` - Enumerates all Response Policies associated with a project.
* `DNSResponsePoliciesPatch` - Applies a partial update to an existing Response Policy.
* `DNSResponsePoliciesUpdate` - Updates an existing Response Policy.

### responsePolicyRules

* `DNSResponsePolicyRulesCreate` - Creates a new Response Policy Rule.
* `DNSResponsePolicyRulesDelete` - Deletes a previously created Response Policy Rule.
* `DNSResponsePolicyRulesGet` - Fetches the representation of an existing Response Policy Rule.
* `DNSResponsePolicyRulesList` - Enumerates all Response Policy Rules associated with a project.
* `DNSResponsePolicyRulesPatch` - Applies a partial update to an existing Response Policy Rule.
* `DNSResponsePolicyRulesUpdate` - Updates an existing Response Policy Rule.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
