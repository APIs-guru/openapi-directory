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
            ManagedZone: "recusandae",
            Project: "aut",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "reiciendis",
            Alt: "json",
            Callback: "aut",
            ClientOperationID: "commodi",
            Fields: "vel",
            Key: "blanditiis",
            OauthToken: "aut",
            PrettyPrint: false,
            QuotaUser: "similique",
            UploadType: "ab",
            UploadProtocol: "soluta",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "et",
                    Name: "omnis",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "est",
                                                IPProtocol: "tcp",
                                                Kind: "qui",
                                                LoadBalancerType: "none",
                                                NetworkURL: "explicabo",
                                                Port: "autem",
                                                Project: "labore",
                                                Region: "iste",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "accusantium",
                                                IPProtocol: "undefined",
                                                Kind: "corrupti",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "enim",
                                                Port: "numquam",
                                                Project: "omnis",
                                                Region: "ipsam",
                                            },
                                        },
                                    },
                                    Kind: "quis",
                                    Location: "maiores",
                                    Rrdatas: []string{
                                        "ut",
                                        "tenetur",
                                    },
                                    SignatureRrdatas: []string{
                                        "sit",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quaerat",
                                                IPProtocol: "udp",
                                                Kind: "non",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ducimus",
                                                Port: "sed",
                                                Project: "ipsum",
                                                Region: "nobis",
                                            },
                                        },
                                    },
                                    Kind: "quibusdam",
                                    Location: "quam",
                                    Rrdatas: []string{
                                        "ut",
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolores",
                                        "nostrum",
                                    },
                                },
                            },
                            Kind: "est",
                        },
                        Kind: "vitae",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "nulla",
                                                    IPProtocol: "udp",
                                                    Kind: "quasi",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "expedita",
                                                    Port: "enim",
                                                    Project: "iure",
                                                    Region: "a",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "enim",
                                                    IPProtocol: "undefined",
                                                    Kind: "consequatur",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "ad",
                                                    Port: "modi",
                                                    Project: "temporibus",
                                                    Region: "accusamus",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "in",
                                                    IPProtocol: "udp",
                                                    Kind: "et",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "et",
                                                    Port: "non",
                                                    Project: "fugiat",
                                                    Region: "ea",
                                                },
                                            },
                                        },
                                        Kind: "similique",
                                        Location: "optio",
                                        Rrdatas: []string{
                                            "molestias",
                                            "dolorem",
                                        },
                                        SignatureRrdatas: []string{
                                            "neque",
                                            "ea",
                                            "at",
                                        },
                                    },
                                },
                                Kind: "aut",
                            },
                            Kind: "dolores",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "minima",
                                        IPProtocol: "tcp",
                                        Kind: "expedita",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "ex",
                                        Port: "dicta",
                                        Project: "minus",
                                        Region: "voluptas",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "ut",
                                        IPProtocol: "tcp",
                                        Kind: "unde",
                                        LoadBalancerType: "none",
                                        NetworkURL: "vitae",
                                        Port: "sapiente",
                                        Project: "eos",
                                        Region: "omnis",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "sit",
                                        IPProtocol: "undefined",
                                        Kind: "sequi",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "aut",
                                        Port: "voluptates",
                                        Project: "id",
                                        Region: "atque",
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
                                                IPAddress: "quis",
                                                IPProtocol: "undefined",
                                                Kind: "fugit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "alias",
                                                Port: "odio",
                                                Project: "delectus",
                                                Region: "fuga",
                                            },
                                        },
                                    },
                                    Kind: "est",
                                    Rrdatas: []string{
                                        "nostrum",
                                    },
                                    SignatureRrdatas: []string{
                                        "itaque",
                                    },
                                    Weight: 60.099998,
                                },
                            },
                            Kind: "beatae",
                        },
                    },
                    Rrdatas: []string{
                        "et",
                        "consequatur",
                        "odit",
                    },
                    SignatureRrdatas: []string{
                        "nam",
                        "eligendi",
                        "temporibus",
                    },
                    TTL: 7428740828765031150,
                    Type: "laudantium",
                },
                shared.ResourceRecordSet{
                    Kind: "sunt",
                    Name: "nostrum",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "omnis",
                                                IPProtocol: "undefined",
                                                Kind: "aperiam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "alias",
                                                Port: "voluptas",
                                                Project: "earum",
                                                Region: "adipisci",
                                            },
                                        },
                                    },
                                    Kind: "cum",
                                    Location: "qui",
                                    Rrdatas: []string{
                                        "consequatur",
                                        "et",
                                        "tempora",
                                    },
                                    SignatureRrdatas: []string{
                                        "aliquam",
                                        "quaerat",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ullam",
                                                IPProtocol: "udp",
                                                Kind: "perferendis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "et",
                                                Port: "ea",
                                                Project: "rerum",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "undefined",
                                                Kind: "non",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "et",
                                                Port: "deleniti",
                                                Project: "tenetur",
                                                Region: "sunt",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aperiam",
                                                IPProtocol: "udp",
                                                Kind: "consequatur",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "veniam",
                                                Port: "aliquid",
                                                Project: "amet",
                                                Region: "quaerat",
                                            },
                                        },
                                    },
                                    Kind: "sed",
                                    Location: "sint",
                                    Rrdatas: []string{
                                        "aut",
                                        "vel",
                                        "debitis",
                                    },
                                    SignatureRrdatas: []string{
                                        "inventore",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "labore",
                                                IPProtocol: "undefined",
                                                Kind: "nobis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "eaque",
                                                Port: "quia",
                                                Project: "id",
                                                Region: "cupiditate",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iste",
                                                IPProtocol: "udp",
                                                Kind: "eos",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ipsam",
                                                Port: "atque",
                                                Project: "dolorem",
                                                Region: "dolorem",
                                            },
                                        },
                                    },
                                    Kind: "recusandae",
                                    Location: "sit",
                                    Rrdatas: []string{
                                        "alias",
                                    },
                                    SignatureRrdatas: []string{
                                        "quidem",
                                        "est",
                                    },
                                },
                            },
                            Kind: "et",
                        },
                        Kind: "esse",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "id",
                                                    IPProtocol: "tcp",
                                                    Kind: "laborum",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "pariatur",
                                                    Port: "qui",
                                                    Project: "impedit",
                                                    Region: "consequatur",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptatem",
                                                    IPProtocol: "udp",
                                                    Kind: "molestias",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "et",
                                                    Port: "laboriosam",
                                                    Project: "neque",
                                                    Region: "voluptatibus",
                                                },
                                            },
                                        },
                                        Kind: "velit",
                                        Location: "magnam",
                                        Rrdatas: []string{
                                            "provident",
                                            "ipsum",
                                        },
                                        SignatureRrdatas: []string{
                                            "vel",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "delectus",
                                                    IPProtocol: "tcp",
                                                    Kind: "aliquid",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "sapiente",
                                                    Port: "in",
                                                    Project: "et",
                                                    Region: "dolore",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quia",
                                                    IPProtocol: "udp",
                                                    Kind: "aspernatur",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "error",
                                                    Port: "quas",
                                                    Project: "quidem",
                                                    Region: "eum",
                                                },
                                            },
                                        },
                                        Kind: "unde",
                                        Location: "dicta",
                                        Rrdatas: []string{
                                            "omnis",
                                            "non",
                                        },
                                        SignatureRrdatas: []string{
                                            "at",
                                            "suscipit",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "corporis",
                                                    IPProtocol: "undefined",
                                                    Kind: "eum",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "totam",
                                                    Port: "omnis",
                                                    Project: "aut",
                                                    Region: "distinctio",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "rerum",
                                                    IPProtocol: "tcp",
                                                    Kind: "aut",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "unde",
                                                    Port: "eos",
                                                    Project: "labore",
                                                    Region: "rem",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "quod",
                                                    IPProtocol: "udp",
                                                    Kind: "voluptatem",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "impedit",
                                                    Port: "ea",
                                                    Project: "qui",
                                                    Region: "dicta",
                                                },
                                            },
                                        },
                                        Kind: "cumque",
                                        Location: "ut",
                                        Rrdatas: []string{
                                            "nihil",
                                        },
                                        SignatureRrdatas: []string{
                                            "earum",
                                            "ipsum",
                                        },
                                    },
                                },
                                Kind: "id",
                            },
                            Kind: "repudiandae",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "alias",
                                        IPProtocol: "tcp",
                                        Kind: "voluptates",
                                        LoadBalancerType: "none",
                                        NetworkURL: "doloribus",
                                        Port: "hic",
                                        Project: "aliquam",
                                        Region: "inventore",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "est",
                                        IPProtocol: "udp",
                                        Kind: "unde",
                                        LoadBalancerType: "none",
                                        NetworkURL: "eos",
                                        Port: "tempora",
                                        Project: "ipsa",
                                        Region: "tenetur",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "ducimus",
                                        IPProtocol: "tcp",
                                        Kind: "natus",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "deserunt",
                                        Port: "recusandae",
                                        Project: "sit",
                                        Region: "fuga",
                                    },
                                },
                            },
                            TrickleTraffic: 31.200001,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "nostrum",
                                                IPProtocol: "udp",
                                                Kind: "nostrum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "molestiae",
                                                Port: "et",
                                                Project: "dolorem",
                                                Region: "enim",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "earum",
                                                IPProtocol: "tcp",
                                                Kind: "ex",
                                                LoadBalancerType: "none",
                                                NetworkURL: "et",
                                                Port: "nihil",
                                                Project: "magni",
                                                Region: "tempore",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veniam",
                                                IPProtocol: "undefined",
                                                Kind: "et",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "modi",
                                                Port: "at",
                                                Project: "corrupti",
                                                Region: "ipsam",
                                            },
                                        },
                                    },
                                    Kind: "velit",
                                    Rrdatas: []string{
                                        "ab",
                                        "natus",
                                    },
                                    SignatureRrdatas: []string{
                                        "explicabo",
                                    },
                                    Weight: 2.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quia",
                                                IPProtocol: "undefined",
                                                Kind: "perferendis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "earum",
                                                Port: "et",
                                                Project: "magni",
                                                Region: "voluptatem",
                                            },
                                        },
                                    },
                                    Kind: "eos",
                                    Rrdatas: []string{
                                        "nisi",
                                        "placeat",
                                    },
                                    SignatureRrdatas: []string{
                                        "error",
                                        "et",
                                    },
                                    Weight: 75.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "hic",
                                                IPProtocol: "tcp",
                                                Kind: "aut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "cupiditate",
                                                Port: "ut",
                                                Project: "explicabo",
                                                Region: "pariatur",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "corporis",
                                                IPProtocol: "tcp",
                                                Kind: "laboriosam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "blanditiis",
                                                Port: "et",
                                                Project: "voluptatum",
                                                Region: "exercitationem",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "inventore",
                                                IPProtocol: "udp",
                                                Kind: "ut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "et",
                                                Port: "ipsum",
                                                Project: "consequatur",
                                                Region: "ut",
                                            },
                                        },
                                    },
                                    Kind: "quibusdam",
                                    Rrdatas: []string{
                                        "odio",
                                    },
                                    SignatureRrdatas: []string{
                                        "nobis",
                                        "quia",
                                        "nihil",
                                    },
                                    Weight: 38.200001,
                                },
                            },
                            Kind: "consequuntur",
                        },
                    },
                    Rrdatas: []string{
                        "qui",
                        "omnis",
                    },
                    SignatureRrdatas: []string{
                        "voluptatem",
                    },
                    TTL: 5363860680367506524,
                    Type: "dolorem",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "qui",
                    Name: "dolores",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "rerum",
                                                IPProtocol: "udp",
                                                Kind: "ut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "distinctio",
                                                Port: "fugiat",
                                                Project: "aperiam",
                                                Region: "est",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "udp",
                                                Kind: "sit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "placeat",
                                                Port: "et",
                                                Project: "reiciendis",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "est",
                                                IPProtocol: "undefined",
                                                Kind: "similique",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ea",
                                                Port: "voluptate",
                                                Project: "dolor",
                                                Region: "minima",
                                            },
                                        },
                                    },
                                    Kind: "non",
                                    Location: "nostrum",
                                    Rrdatas: []string{
                                        "exercitationem",
                                        "libero",
                                        "laborum",
                                    },
                                    SignatureRrdatas: []string{
                                        "nisi",
                                        "sunt",
                                        "et",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "udp",
                                                Kind: "velit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "qui",
                                                Port: "architecto",
                                                Project: "odit",
                                                Region: "non",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptas",
                                                IPProtocol: "tcp",
                                                Kind: "eligendi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "pariatur",
                                                Port: "praesentium",
                                                Project: "eius",
                                                Region: "laborum",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "temporibus",
                                                IPProtocol: "undefined",
                                                Kind: "laborum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "fugit",
                                                Port: "nulla",
                                                Project: "commodi",
                                                Region: "impedit",
                                            },
                                        },
                                    },
                                    Kind: "officiis",
                                    Location: "labore",
                                    Rrdatas: []string{
                                        "et",
                                        "aspernatur",
                                        "qui",
                                    },
                                    SignatureRrdatas: []string{
                                        "voluptates",
                                    },
                                },
                            },
                            Kind: "esse",
                        },
                        Kind: "accusantium",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "odit",
                                                    IPProtocol: "tcp",
                                                    Kind: "cupiditate",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "est",
                                                    Port: "explicabo",
                                                    Project: "recusandae",
                                                    Region: "eius",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "incidunt",
                                                    IPProtocol: "udp",
                                                    Kind: "eum",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "iusto",
                                                    Port: "repellendus",
                                                    Project: "voluptatem",
                                                    Region: "in",
                                                },
                                            },
                                        },
                                        Kind: "rem",
                                        Location: "adipisci",
                                        Rrdatas: []string{
                                            "in",
                                            "qui",
                                        },
                                        SignatureRrdatas: []string{
                                            "placeat",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "aut",
                                                    IPProtocol: "undefined",
                                                    Kind: "hic",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "est",
                                                    Port: "quia",
                                                    Project: "ut",
                                                    Region: "omnis",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolores",
                                                    IPProtocol: "undefined",
                                                    Kind: "ratione",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "libero",
                                                    Port: "eius",
                                                    Project: "illo",
                                                    Region: "sapiente",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "et",
                                                    IPProtocol: "undefined",
                                                    Kind: "dolore",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "similique",
                                                    Port: "tempore",
                                                    Project: "sit",
                                                    Region: "dolore",
                                                },
                                            },
                                        },
                                        Kind: "libero",
                                        Location: "et",
                                        Rrdatas: []string{
                                            "aut",
                                        },
                                        SignatureRrdatas: []string{
                                            "quisquam",
                                            "cum",
                                            "corrupti",
                                        },
                                    },
                                },
                                Kind: "autem",
                            },
                            Kind: "id",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "totam",
                                        IPProtocol: "tcp",
                                        Kind: "quas",
                                        LoadBalancerType: "none",
                                        NetworkURL: "aut",
                                        Port: "hic",
                                        Project: "rerum",
                                        Region: "occaecati",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "iure",
                                        IPProtocol: "tcp",
                                        Kind: "voluptas",
                                        LoadBalancerType: "none",
                                        NetworkURL: "qui",
                                        Port: "ab",
                                        Project: "maxime",
                                        Region: "molestias",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quia",
                                        IPProtocol: "udp",
                                        Kind: "non",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "quisquam",
                                        Port: "nihil",
                                        Project: "illo",
                                        Region: "tempore",
                                    },
                                },
                            },
                            TrickleTraffic: 98.199997,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "pariatur",
                                                IPProtocol: "undefined",
                                                Kind: "reiciendis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ut",
                                                Port: "eum",
                                                Project: "quo",
                                                Region: "assumenda",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quisquam",
                                                IPProtocol: "udp",
                                                Kind: "placeat",
                                                LoadBalancerType: "none",
                                                NetworkURL: "necessitatibus",
                                                Port: "nulla",
                                                Project: "necessitatibus",
                                                Region: "iure",
                                            },
                                        },
                                    },
                                    Kind: "corporis",
                                    Rrdatas: []string{
                                        "quibusdam",
                                        "fugit",
                                    },
                                    SignatureRrdatas: []string{
                                        "praesentium",
                                    },
                                    Weight: 65.199997,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consectetur",
                                                IPProtocol: "undefined",
                                                Kind: "rerum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "enim",
                                                Port: "distinctio",
                                                Project: "voluptatem",
                                                Region: "omnis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quis",
                                                IPProtocol: "tcp",
                                                Kind: "quae",
                                                LoadBalancerType: "none",
                                                NetworkURL: "aperiam",
                                                Port: "dolor",
                                                Project: "hic",
                                                Region: "sed",
                                            },
                                        },
                                    },
                                    Kind: "quisquam",
                                    Rrdatas: []string{
                                        "deleniti",
                                    },
                                    SignatureRrdatas: []string{
                                        "quo",
                                        "voluptatem",
                                    },
                                    Weight: 58.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fugiat",
                                                IPProtocol: "tcp",
                                                Kind: "voluptatibus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "nobis",
                                                Port: "sit",
                                                Project: "ut",
                                                Region: "iusto",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "officia",
                                                IPProtocol: "undefined",
                                                Kind: "veniam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "dignissimos",
                                                Port: "impedit",
                                                Project: "et",
                                                Region: "sed",
                                            },
                                        },
                                    },
                                    Kind: "facere",
                                    Rrdatas: []string{
                                        "sequi",
                                    },
                                    SignatureRrdatas: []string{
                                        "nemo",
                                        "quos",
                                    },
                                    Weight: 65.199997,
                                },
                            },
                            Kind: "ipsam",
                        },
                    },
                    Rrdatas: []string{
                        "rerum",
                        "architecto",
                    },
                    SignatureRrdatas: []string{
                        "nulla",
                        "beatae",
                    },
                    TTL: 7965196274479804567,
                    Type: "cupiditate",
                },
            },
            ID: "voluptates",
            IsServing: true,
            Kind: "mollitia",
            StartTime: "reprehenderit",
            Status: "pending",
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
