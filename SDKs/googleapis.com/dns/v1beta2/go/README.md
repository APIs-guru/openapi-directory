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
            ManagedZone: "autem",
            Project: "sapiente",
        },
        QueryParams: operations.DNSChangesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "tempora",
            Alt: "media",
            Callback: "temporibus",
            ClientOperationID: "delectus",
            Fields: "adipisci",
            Key: "cum",
            OauthToken: "ipsam",
            PrettyPrint: false,
            QuotaUser: "quaerat",
            UploadType: "et",
            UploadProtocol: "ex",
        },
        Request: &shared.Change{
            Additions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "exercitationem",
                    Name: "debitis",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "enim",
                                                IPProtocol: "udp",
                                                Kind: "eligendi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "sit",
                                                Port: "vitae",
                                                Project: "unde",
                                                Region: "facilis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "labore",
                                                IPProtocol: "udp",
                                                Kind: "aut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "harum",
                                                Port: "quo",
                                                Project: "aut",
                                                Region: "consequatur",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "iste",
                                                IPProtocol: "undefined",
                                                Kind: "consequatur",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "a",
                                                Port: "ut",
                                                Project: "doloremque",
                                                Region: "maxime",
                                            },
                                        },
                                    },
                                    Kind: "odio",
                                    Location: "temporibus",
                                    Rrdatas: []string{
                                        "dolorem",
                                        "autem",
                                        "occaecati",
                                    },
                                    SignatureRrdatas: []string{
                                        "aut",
                                    },
                                },
                            },
                            Kind: "nisi",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "esse",
                                                IPProtocol: "tcp",
                                                Kind: "et",
                                                LoadBalancerType: "none",
                                                NetworkURL: "atque",
                                                Port: "et",
                                                Project: "minus",
                                                Region: "qui",
                                            },
                                        },
                                    },
                                    Kind: "neque",
                                    Location: "sit",
                                    Rrdatas: []string{
                                        "sunt",
                                        "similique",
                                        "quibusdam",
                                    },
                                    SignatureRrdatas: []string{
                                        "assumenda",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "earum",
                                                IPProtocol: "undefined",
                                                Kind: "illo",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quam",
                                                Port: "modi",
                                                Project: "at",
                                                Region: "illum",
                                            },
                                        },
                                    },
                                    Kind: "unde",
                                    Location: "et",
                                    Rrdatas: []string{
                                        "ipsam",
                                        "vel",
                                    },
                                    SignatureRrdatas: []string{
                                        "eum",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "provident",
                                                IPProtocol: "tcp",
                                                Kind: "fuga",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "aut",
                                                Port: "at",
                                                Project: "eum",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "assumenda",
                                                IPProtocol: "tcp",
                                                Kind: "est",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "eos",
                                                Port: "quas",
                                                Project: "beatae",
                                                Region: "cumque",
                                            },
                                        },
                                    },
                                    Kind: "aliquid",
                                    Location: "culpa",
                                    Rrdatas: []string{
                                        "qui",
                                        "est",
                                        "et",
                                    },
                                    SignatureRrdatas: []string{
                                        "consectetur",
                                        "amet",
                                        "consequuntur",
                                    },
                                },
                            },
                            Kind: "ad",
                        },
                        Kind: "qui",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "accusantium",
                                                    IPProtocol: "udp",
                                                    Kind: "voluptas",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "facere",
                                                    Port: "ut",
                                                    Project: "quod",
                                                    Region: "molestias",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "illum",
                                                    IPProtocol: "tcp",
                                                    Kind: "quis",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "est",
                                                    Port: "et",
                                                    Project: "temporibus",
                                                    Region: "occaecati",
                                                },
                                            },
                                        },
                                        Kind: "expedita",
                                        Location: "et",
                                        Rrdatas: []string{
                                            "soluta",
                                            "nobis",
                                        },
                                        SignatureRrdatas: []string{
                                            "blanditiis",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "accusamus",
                                                    IPProtocol: "tcp",
                                                    Kind: "beatae",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "corporis",
                                                    Port: "sit",
                                                    Project: "animi",
                                                    Region: "possimus",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ut",
                                                    IPProtocol: "udp",
                                                    Kind: "nostrum",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "aspernatur",
                                                    Port: "recusandae",
                                                    Project: "fugiat",
                                                    Region: "non",
                                                },
                                            },
                                        },
                                        Kind: "odit",
                                        Location: "et",
                                        Rrdatas: []string{
                                            "qui",
                                        },
                                        SignatureRrdatas: []string{
                                            "laborum",
                                        },
                                    },
                                },
                                Kind: "molestiae",
                            },
                            Kind: "eum",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "alias",
                                        IPProtocol: "udp",
                                        Kind: "aliquid",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "maxime",
                                        Port: "at",
                                        Project: "accusantium",
                                        Region: "voluptatibus",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "ut",
                                        IPProtocol: "udp",
                                        Kind: "nesciunt",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "et",
                                        Port: "tempore",
                                        Project: "dolorum",
                                        Region: "quasi",
                                    },
                                },
                            },
                            TrickleTraffic: 50.099998,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veniam",
                                                IPProtocol: "tcp",
                                                Kind: "rerum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "sint",
                                                Port: "non",
                                                Project: "rerum",
                                                Region: "eius",
                                            },
                                        },
                                    },
                                    Kind: "ducimus",
                                    Rrdatas: []string{
                                        "nisi",
                                    },
                                    SignatureRrdatas: []string{
                                        "ipsa",
                                    },
                                    Weight: 61.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatum",
                                                IPProtocol: "udp",
                                                Kind: "iure",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "porro",
                                                Port: "est",
                                                Project: "nobis",
                                                Region: "quibusdam",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "assumenda",
                                                IPProtocol: "udp",
                                                Kind: "voluptas",
                                                LoadBalancerType: "none",
                                                NetworkURL: "in",
                                                Port: "explicabo",
                                                Project: "aliquid",
                                                Region: "delectus",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sunt",
                                                IPProtocol: "undefined",
                                                Kind: "fugiat",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "veritatis",
                                                Port: "natus",
                                                Project: "quae",
                                                Region: "perferendis",
                                            },
                                        },
                                    },
                                    Kind: "sequi",
                                    Rrdatas: []string{
                                        "accusantium",
                                    },
                                    SignatureRrdatas: []string{
                                        "maxime",
                                        "quaerat",
                                        "maxime",
                                    },
                                    Weight: 41.200001,
                                },
                            },
                            Kind: "quod",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "neque",
                                                IPProtocol: "undefined",
                                                Kind: "culpa",
                                                LoadBalancerType: "none",
                                                NetworkURL: "blanditiis",
                                                Port: "sunt",
                                                Project: "officia",
                                                Region: "corporis",
                                            },
                                        },
                                    },
                                    Kind: "autem",
                                    Rrdatas: []string{
                                        "rerum",
                                    },
                                    SignatureRrdatas: []string{
                                        "quibusdam",
                                        "tenetur",
                                    },
                                    Weight: 77.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "pariatur",
                                                IPProtocol: "udp",
                                                Kind: "debitis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quo",
                                                Port: "dolorem",
                                                Project: "est",
                                                Region: "cum",
                                            },
                                        },
                                    },
                                    Kind: "dolor",
                                    Rrdatas: []string{
                                        "sit",
                                        "omnis",
                                    },
                                    SignatureRrdatas: []string{
                                        "porro",
                                        "corrupti",
                                        "debitis",
                                    },
                                    Weight: 36.200001,
                                },
                            },
                            Kind: "occaecati",
                        },
                    },
                    Rrdatas: []string{
                        "qui",
                        "dolor",
                    },
                    SignatureRrdatas: []string{
                        "quam",
                    },
                    TTL: 2847369613302132848,
                    Type: "quo",
                },
                shared.ResourceRecordSet{
                    Kind: "minus",
                    Name: "eum",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aspernatur",
                                                IPProtocol: "tcp",
                                                Kind: "delectus",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "odit",
                                                Port: "dignissimos",
                                                Project: "sapiente",
                                                Region: "sapiente",
                                            },
                                        },
                                    },
                                    Kind: "non",
                                    Location: "in",
                                    Rrdatas: []string{
                                        "quam",
                                        "impedit",
                                    },
                                    SignatureRrdatas: []string{
                                        "quod",
                                        "accusamus",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "numquam",
                                                IPProtocol: "udp",
                                                Kind: "atque",
                                                LoadBalancerType: "none",
                                                NetworkURL: "in",
                                                Port: "maiores",
                                                Project: "quae",
                                                Region: "aspernatur",
                                            },
                                        },
                                    },
                                    Kind: "inventore",
                                    Location: "ea",
                                    Rrdatas: []string{
                                        "qui",
                                        "aperiam",
                                    },
                                    SignatureRrdatas: []string{
                                        "quam",
                                        "laboriosam",
                                        "et",
                                    },
                                },
                            },
                            Kind: "consequuntur",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "sit",
                                                IPProtocol: "udp",
                                                Kind: "laudantium",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "et",
                                                Port: "similique",
                                                Project: "sit",
                                                Region: "velit",
                                            },
                                        },
                                    },
                                    Kind: "quod",
                                    Location: "repellendus",
                                    Rrdatas: []string{
                                        "dolorum",
                                        "eligendi",
                                    },
                                    SignatureRrdatas: []string{
                                        "fuga",
                                        "voluptatem",
                                    },
                                },
                            },
                            Kind: "animi",
                        },
                        Kind: "voluptatem",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolor",
                                                    IPProtocol: "tcp",
                                                    Kind: "rerum",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "possimus",
                                                    Port: "nesciunt",
                                                    Project: "incidunt",
                                                    Region: "molestiae",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "at",
                                                    IPProtocol: "tcp",
                                                    Kind: "soluta",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "corporis",
                                                    Port: "voluptatem",
                                                    Project: "natus",
                                                    Region: "quae",
                                                },
                                            },
                                        },
                                        Kind: "laboriosam",
                                        Location: "qui",
                                        Rrdatas: []string{
                                            "non",
                                        },
                                        SignatureRrdatas: []string{
                                            "quo",
                                            "commodi",
                                            "voluptas",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "mollitia",
                                                    IPProtocol: "udp",
                                                    Kind: "enim",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "dolores",
                                                    Port: "cum",
                                                    Project: "excepturi",
                                                    Region: "in",
                                                },
                                            },
                                        },
                                        Kind: "in",
                                        Location: "odio",
                                        Rrdatas: []string{
                                            "ipsam",
                                            "facere",
                                        },
                                        SignatureRrdatas: []string{
                                            "aliquid",
                                        },
                                    },
                                },
                                Kind: "quo",
                            },
                            Kind: "nihil",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "velit",
                                        IPProtocol: "tcp",
                                        Kind: "numquam",
                                        LoadBalancerType: "none",
                                        NetworkURL: "dolor",
                                        Port: "et",
                                        Project: "necessitatibus",
                                        Region: "sapiente",
                                    },
                                },
                            },
                            TrickleTraffic: 67.099998,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "at",
                                                IPProtocol: "udp",
                                                Kind: "asperiores",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "dolorem",
                                                Port: "totam",
                                                Project: "suscipit",
                                                Region: "ipsum",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "facere",
                                                IPProtocol: "udp",
                                                Kind: "voluptas",
                                                LoadBalancerType: "none",
                                                NetworkURL: "et",
                                                Port: "quis",
                                                Project: "nulla",
                                                Region: "qui",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ea",
                                                IPProtocol: "udp",
                                                Kind: "ipsa",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "saepe",
                                                Port: "beatae",
                                                Project: "ipsum",
                                                Region: "eveniet",
                                            },
                                        },
                                    },
                                    Kind: "necessitatibus",
                                    Rrdatas: []string{
                                        "et",
                                        "iure",
                                        "quia",
                                    },
                                    SignatureRrdatas: []string{
                                        "nostrum",
                                        "itaque",
                                    },
                                    Weight: 6.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ipsam",
                                                IPProtocol: "tcp",
                                                Kind: "dolorem",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quia",
                                                Port: "non",
                                                Project: "suscipit",
                                                Region: "similique",
                                            },
                                        },
                                    },
                                    Kind: "vel",
                                    Rrdatas: []string{
                                        "provident",
                                        "ducimus",
                                    },
                                    SignatureRrdatas: []string{
                                        "quaerat",
                                        "rerum",
                                    },
                                    Weight: 10.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptates",
                                                IPProtocol: "undefined",
                                                Kind: "earum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "praesentium",
                                                Port: "maxime",
                                                Project: "dolorem",
                                                Region: "fugiat",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatem",
                                                IPProtocol: "undefined",
                                                Kind: "dolores",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ex",
                                                Port: "aliquid",
                                                Project: "aliquid",
                                                Region: "nesciunt",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "culpa",
                                                IPProtocol: "udp",
                                                Kind: "maiores",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "voluptatem",
                                                Port: "itaque",
                                                Project: "est",
                                                Region: "optio",
                                            },
                                        },
                                    },
                                    Kind: "consectetur",
                                    Rrdatas: []string{
                                        "ab",
                                        "ab",
                                    },
                                    SignatureRrdatas: []string{
                                        "eum",
                                    },
                                    Weight: 35.200001,
                                },
                            },
                            Kind: "aut",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "modi",
                                                IPProtocol: "tcp",
                                                Kind: "et",
                                                LoadBalancerType: "none",
                                                NetworkURL: "aperiam",
                                                Port: "inventore",
                                                Project: "soluta",
                                                Region: "quia",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fugiat",
                                                IPProtocol: "tcp",
                                                Kind: "repellat",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quasi",
                                                Port: "dolores",
                                                Project: "minima",
                                                Region: "saepe",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "praesentium",
                                                IPProtocol: "udp",
                                                Kind: "quo",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ex",
                                                Port: "quibusdam",
                                                Project: "corrupti",
                                                Region: "voluptates",
                                            },
                                        },
                                    },
                                    Kind: "sunt",
                                    Rrdatas: []string{
                                        "aut",
                                        "vel",
                                        "et",
                                    },
                                    SignatureRrdatas: []string{
                                        "maiores",
                                    },
                                    Weight: 78.199997,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatum",
                                                IPProtocol: "undefined",
                                                Kind: "ut",
                                                LoadBalancerType: "none",
                                                NetworkURL: "minima",
                                                Port: "laudantium",
                                                Project: "rerum",
                                                Region: "aut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "amet",
                                                IPProtocol: "udp",
                                                Kind: "reprehenderit",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "repudiandae",
                                                Port: "dolorem",
                                                Project: "occaecati",
                                                Region: "officia",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ducimus",
                                                IPProtocol: "tcp",
                                                Kind: "et",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ipsam",
                                                Port: "aut",
                                                Project: "qui",
                                                Region: "necessitatibus",
                                            },
                                        },
                                    },
                                    Kind: "voluptas",
                                    Rrdatas: []string{
                                        "quisquam",
                                        "esse",
                                    },
                                    SignatureRrdatas: []string{
                                        "rerum",
                                        "repellat",
                                        "voluptatem",
                                    },
                                    Weight: 47.099998,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "earum",
                                                IPProtocol: "tcp",
                                                Kind: "maiores",
                                                LoadBalancerType: "none",
                                                NetworkURL: "id",
                                                Port: "eligendi",
                                                Project: "tenetur",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "consectetur",
                                    Rrdatas: []string{
                                        "quas",
                                        "consequuntur",
                                    },
                                    SignatureRrdatas: []string{
                                        "molestiae",
                                    },
                                    Weight: 26.200001,
                                },
                            },
                            Kind: "quibusdam",
                        },
                    },
                    Rrdatas: []string{
                        "rerum",
                        "blanditiis",
                    },
                    SignatureRrdatas: []string{
                        "et",
                        "accusamus",
                    },
                    TTL: 1085505481150236459,
                    Type: "accusamus",
                },
                shared.ResourceRecordSet{
                    Kind: "maiores",
                    Name: "iste",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eos",
                                                IPProtocol: "udp",
                                                Kind: "quaerat",
                                                LoadBalancerType: "none",
                                                NetworkURL: "perspiciatis",
                                                Port: "atque",
                                                Project: "quidem",
                                                Region: "qui",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "suscipit",
                                                IPProtocol: "undefined",
                                                Kind: "sed",
                                                LoadBalancerType: "none",
                                                NetworkURL: "mollitia",
                                                Port: "nulla",
                                                Project: "voluptatem",
                                                Region: "dolor",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "labore",
                                                IPProtocol: "tcp",
                                                Kind: "veritatis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "possimus",
                                                Port: "laborum",
                                                Project: "maiores",
                                                Region: "nobis",
                                            },
                                        },
                                    },
                                    Kind: "id",
                                    Location: "at",
                                    Rrdatas: []string{
                                        "et",
                                        "quasi",
                                        "sint",
                                    },
                                    SignatureRrdatas: []string{
                                        "culpa",
                                        "fuga",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cumque",
                                                IPProtocol: "undefined",
                                                Kind: "optio",
                                                LoadBalancerType: "none",
                                                NetworkURL: "placeat",
                                                Port: "nihil",
                                                Project: "quia",
                                                Region: "saepe",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptas",
                                                IPProtocol: "tcp",
                                                Kind: "earum",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quia",
                                                Port: "nam",
                                                Project: "in",
                                                Region: "ut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "tcp",
                                                Kind: "aspernatur",
                                                LoadBalancerType: "none",
                                                NetworkURL: "beatae",
                                                Port: "nobis",
                                                Project: "ex",
                                                Region: "repellat",
                                            },
                                        },
                                    },
                                    Kind: "in",
                                    Location: "voluptatibus",
                                    Rrdatas: []string{
                                        "et",
                                        "nihil",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolorum",
                                        "adipisci",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "maxime",
                                                IPProtocol: "undefined",
                                                Kind: "sunt",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "omnis",
                                                Port: "et",
                                                Project: "sed",
                                                Region: "dolorum",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "numquam",
                                                IPProtocol: "undefined",
                                                Kind: "aut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "harum",
                                                Port: "veritatis",
                                                Project: "in",
                                                Region: "totam",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "undefined",
                                                Kind: "temporibus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "fugit",
                                                Port: "quae",
                                                Project: "sed",
                                                Region: "voluptate",
                                            },
                                        },
                                    },
                                    Kind: "autem",
                                    Location: "pariatur",
                                    Rrdatas: []string{
                                        "itaque",
                                        "quos",
                                        "assumenda",
                                    },
                                    SignatureRrdatas: []string{
                                        "id",
                                        "et",
                                    },
                                },
                            },
                            Kind: "voluptate",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "magnam",
                                                IPProtocol: "udp",
                                                Kind: "doloremque",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ratione",
                                                Port: "sequi",
                                                Project: "distinctio",
                                                Region: "ut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "et",
                                                IPProtocol: "undefined",
                                                Kind: "voluptate",
                                                LoadBalancerType: "none",
                                                NetworkURL: "corporis",
                                                Port: "quod",
                                                Project: "et",
                                                Region: "nisi",
                                            },
                                        },
                                    },
                                    Kind: "vel",
                                    Location: "incidunt",
                                    Rrdatas: []string{
                                        "incidunt",
                                    },
                                    SignatureRrdatas: []string{
                                        "aut",
                                        "odio",
                                    },
                                },
                            },
                            Kind: "ipsam",
                        },
                        Kind: "id",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: false,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dolor",
                                                    IPProtocol: "undefined",
                                                    Kind: "dolore",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "hic",
                                                    Port: "velit",
                                                    Project: "ad",
                                                    Region: "esse",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "sit",
                                                    IPProtocol: "undefined",
                                                    Kind: "reprehenderit",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "saepe",
                                                    Port: "tempora",
                                                    Project: "harum",
                                                    Region: "aut",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "dignissimos",
                                                    IPProtocol: "tcp",
                                                    Kind: "et",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "qui",
                                                    Port: "ut",
                                                    Project: "occaecati",
                                                    Region: "deserunt",
                                                },
                                            },
                                        },
                                        Kind: "ut",
                                        Location: "provident",
                                        Rrdatas: []string{
                                            "animi",
                                        },
                                        SignatureRrdatas: []string{
                                            "dolore",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "est",
                                                    IPProtocol: "undefined",
                                                    Kind: "ipsam",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "tempora",
                                                    Port: "voluptatibus",
                                                    Project: "corporis",
                                                    Region: "ex",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "voluptatem",
                                                    IPProtocol: "tcp",
                                                    Kind: "dolorem",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "maxime",
                                                    Port: "consequatur",
                                                    Project: "quaerat",
                                                    Region: "amet",
                                                },
                                            },
                                        },
                                        Kind: "ullam",
                                        Location: "adipisci",
                                        Rrdatas: []string{
                                            "sit",
                                            "suscipit",
                                        },
                                        SignatureRrdatas: []string{
                                            "nobis",
                                        },
                                    },
                                },
                                Kind: "dolorum",
                            },
                            Kind: "eum",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "perspiciatis",
                                        IPProtocol: "udp",
                                        Kind: "facilis",
                                        LoadBalancerType: "regionalL4ilb",
                                        NetworkURL: "et",
                                        Port: "molestiae",
                                        Project: "culpa",
                                        Region: "error",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "nostrum",
                                        IPProtocol: "tcp",
                                        Kind: "voluptate",
                                        LoadBalancerType: "none",
                                        NetworkURL: "nihil",
                                        Port: "quia",
                                        Project: "saepe",
                                        Region: "illum",
                                    },
                                },
                            },
                            TrickleTraffic: 5.100000,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ut",
                                                IPProtocol: "udp",
                                                Kind: "ut",
                                                LoadBalancerType: "none",
                                                NetworkURL: "non",
                                                Port: "mollitia",
                                                Project: "sed",
                                                Region: "ducimus",
                                            },
                                        },
                                    },
                                    Kind: "quo",
                                    Rrdatas: []string{
                                        "enim",
                                        "quia",
                                        "sit",
                                    },
                                    SignatureRrdatas: []string{
                                        "error",
                                        "et",
                                    },
                                    Weight: 43.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolorum",
                                                IPProtocol: "udp",
                                                Kind: "tenetur",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "animi",
                                                Port: "non",
                                                Project: "rerum",
                                                Region: "non",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "porro",
                                                IPProtocol: "undefined",
                                                Kind: "eligendi",
                                                LoadBalancerType: "none",
                                                NetworkURL: "sed",
                                                Port: "maiores",
                                                Project: "non",
                                                Region: "expedita",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quia",
                                                IPProtocol: "undefined",
                                                Kind: "quia",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quia",
                                                Port: "pariatur",
                                                Project: "aliquam",
                                                Region: "quidem",
                                            },
                                        },
                                    },
                                    Kind: "officia",
                                    Rrdatas: []string{
                                        "cum",
                                    },
                                    SignatureRrdatas: []string{
                                        "aut",
                                        "pariatur",
                                        "voluptas",
                                    },
                                    Weight: 0.200000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "rerum",
                                                IPProtocol: "tcp",
                                                Kind: "velit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "enim",
                                                Port: "dolores",
                                                Project: "eos",
                                                Region: "sunt",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptatem",
                                                IPProtocol: "udp",
                                                Kind: "dolores",
                                                LoadBalancerType: "none",
                                                NetworkURL: "earum",
                                                Port: "in",
                                                Project: "facere",
                                                Region: "tempore",
                                            },
                                        },
                                    },
                                    Kind: "non",
                                    Rrdatas: []string{
                                        "voluptas",
                                    },
                                    SignatureRrdatas: []string{
                                        "totam",
                                        "unde",
                                        "sed",
                                    },
                                    Weight: 21.200001,
                                },
                            },
                            Kind: "temporibus",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "facere",
                                                IPProtocol: "udp",
                                                Kind: "aut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "dignissimos",
                                                Port: "ipsam",
                                                Project: "voluptatem",
                                                Region: "error",
                                            },
                                        },
                                    },
                                    Kind: "et",
                                    Rrdatas: []string{
                                        "voluptatibus",
                                    },
                                    SignatureRrdatas: []string{
                                        "hic",
                                    },
                                    Weight: 96.199997,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "a",
                                                IPProtocol: "undefined",
                                                Kind: "nihil",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ut",
                                                Port: "sunt",
                                                Project: "sit",
                                                Region: "ut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quo",
                                                IPProtocol: "tcp",
                                                Kind: "est",
                                                LoadBalancerType: "none",
                                                NetworkURL: "animi",
                                                Port: "quibusdam",
                                                Project: "earum",
                                                Region: "doloribus",
                                            },
                                        },
                                    },
                                    Kind: "consequatur",
                                    Rrdatas: []string{
                                        "minus",
                                        "et",
                                        "est",
                                    },
                                    SignatureRrdatas: []string{
                                        "doloribus",
                                        "qui",
                                        "aliquam",
                                    },
                                    Weight: 93.199997,
                                },
                            },
                            Kind: "officia",
                        },
                    },
                    Rrdatas: []string{
                        "et",
                    },
                    SignatureRrdatas: []string{
                        "commodi",
                    },
                    TTL: 4625874526789808411,
                    Type: "temporibus",
                },
            },
            Deletions: []shared.ResourceRecordSet{
                shared.ResourceRecordSet{
                    Kind: "beatae",
                    Name: "aut",
                    RoutingPolicy: &shared.RrSetRoutingPolicy{
                        Geo: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: false,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "a",
                                                IPProtocol: "tcp",
                                                Kind: "omnis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "vel",
                                                Port: "beatae",
                                                Project: "laboriosam",
                                                Region: "autem",
                                            },
                                        },
                                    },
                                    Kind: "nemo",
                                    Location: "similique",
                                    Rrdatas: []string{
                                        "ipsum",
                                        "asperiores",
                                        "deleniti",
                                    },
                                    SignatureRrdatas: []string{
                                        "cupiditate",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ea",
                                                IPProtocol: "tcp",
                                                Kind: "eos",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "ut",
                                                Port: "reiciendis",
                                                Project: "odio",
                                                Region: "quia",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "voluptas",
                                                IPProtocol: "tcp",
                                                Kind: "reiciendis",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "dolor",
                                                Port: "nulla",
                                                Project: "quia",
                                                Region: "enim",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "cum",
                                                IPProtocol: "udp",
                                                Kind: "veniam",
                                                LoadBalancerType: "none",
                                                NetworkURL: "harum",
                                                Port: "aut",
                                                Project: "qui",
                                                Region: "ipsum",
                                            },
                                        },
                                    },
                                    Kind: "est",
                                    Location: "dolorem",
                                    Rrdatas: []string{
                                        "molestiae",
                                        "nam",
                                    },
                                    SignatureRrdatas: []string{
                                        "earum",
                                        "ex",
                                    },
                                },
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "veniam",
                                                IPProtocol: "tcp",
                                                Kind: "fuga",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "doloribus",
                                                Port: "maxime",
                                                Project: "quod",
                                                Region: "ea",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "occaecati",
                                                IPProtocol: "tcp",
                                                Kind: "amet",
                                                LoadBalancerType: "none",
                                                NetworkURL: "ducimus",
                                                Port: "ipsam",
                                                Project: "et",
                                                Region: "voluptas",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "animi",
                                                IPProtocol: "undefined",
                                                Kind: "optio",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "labore",
                                                Port: "voluptatem",
                                                Project: "id",
                                                Region: "labore",
                                            },
                                        },
                                    },
                                    Kind: "eos",
                                    Location: "iste",
                                    Rrdatas: []string{
                                        "fugiat",
                                        "perspiciatis",
                                        "modi",
                                    },
                                    SignatureRrdatas: []string{
                                        "eum",
                                    },
                                },
                            },
                            Kind: "esse",
                        },
                        GeoPolicy: &shared.RrSetRoutingPolicyGeoPolicy{
                            EnableFencing: true,
                            Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "fugiat",
                                                IPProtocol: "undefined",
                                                Kind: "suscipit",
                                                LoadBalancerType: "none",
                                                NetworkURL: "aut",
                                                Port: "praesentium",
                                                Project: "molestias",
                                                Region: "doloremque",
                                            },
                                        },
                                    },
                                    Kind: "accusamus",
                                    Location: "quo",
                                    Rrdatas: []string{
                                        "mollitia",
                                        "rerum",
                                    },
                                    SignatureRrdatas: []string{
                                        "dolor",
                                        "sit",
                                    },
                                },
                            },
                            Kind: "veniam",
                        },
                        Kind: "vel",
                        PrimaryBackup: &shared.RrSetRoutingPolicyPrimaryBackupPolicy{
                            BackupGeoTargets: &shared.RrSetRoutingPolicyGeoPolicy{
                                EnableFencing: true,
                                Items: []shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "delectus",
                                                    IPProtocol: "tcp",
                                                    Kind: "dolor",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "fuga",
                                                    Port: "recusandae",
                                                    Project: "in",
                                                    Region: "quae",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ipsum",
                                                    IPProtocol: "tcp",
                                                    Kind: "et",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "vero",
                                                    Port: "autem",
                                                    Project: "laboriosam",
                                                    Region: "adipisci",
                                                },
                                            },
                                        },
                                        Kind: "incidunt",
                                        Location: "distinctio",
                                        Rrdatas: []string{
                                            "magnam",
                                        },
                                        SignatureRrdatas: []string{
                                            "voluptatum",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "odit",
                                                    IPProtocol: "undefined",
                                                    Kind: "aspernatur",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "vitae",
                                                    Port: "accusantium",
                                                    Project: "atque",
                                                    Region: "possimus",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "ex",
                                                    IPProtocol: "undefined",
                                                    Kind: "asperiores",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "cupiditate",
                                                    Port: "voluptas",
                                                    Project: "corporis",
                                                    Region: "vero",
                                                },
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "sed",
                                                    IPProtocol: "udp",
                                                    Kind: "molestiae",
                                                    LoadBalancerType: "none",
                                                    NetworkURL: "exercitationem",
                                                    Port: "nesciunt",
                                                    Project: "omnis",
                                                    Region: "odio",
                                                },
                                            },
                                        },
                                        Kind: "blanditiis",
                                        Location: "veritatis",
                                        Rrdatas: []string{
                                            "ipsa",
                                        },
                                        SignatureRrdatas: []string{
                                            "magni",
                                            "quibusdam",
                                            "assumenda",
                                        },
                                    },
                                    shared.RrSetRoutingPolicyGeoPolicyGeoPolicyItem{
                                        HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                            InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                    IPAddress: "minus",
                                                    IPProtocol: "tcp",
                                                    Kind: "quod",
                                                    LoadBalancerType: "regionalL4ilb",
                                                    NetworkURL: "quaerat",
                                                    Port: "non",
                                                    Project: "qui",
                                                    Region: "ab",
                                                },
                                            },
                                        },
                                        Kind: "quo",
                                        Location: "et",
                                        Rrdatas: []string{
                                            "enim",
                                        },
                                        SignatureRrdatas: []string{
                                            "ut",
                                            "expedita",
                                            "quo",
                                        },
                                    },
                                },
                                Kind: "beatae",
                            },
                            Kind: "maxime",
                            PrimaryTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "eum",
                                        IPProtocol: "udp",
                                        Kind: "sed",
                                        LoadBalancerType: "none",
                                        NetworkURL: "veritatis",
                                        Port: "et",
                                        Project: "in",
                                        Region: "voluptas",
                                    },
                                    shared.RrSetRoutingPolicyLoadBalancerTarget{
                                        IPAddress: "quis",
                                        IPProtocol: "tcp",
                                        Kind: "voluptatem",
                                        LoadBalancerType: "none",
                                        NetworkURL: "aut",
                                        Port: "maiores",
                                        Project: "sit",
                                        Region: "quo",
                                    },
                                },
                            },
                            TrickleTraffic: 65.099998,
                        },
                        Wrr: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "omnis",
                                                IPProtocol: "undefined",
                                                Kind: "id",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "similique",
                                                Port: "consectetur",
                                                Project: "earum",
                                                Region: "expedita",
                                            },
                                        },
                                    },
                                    Kind: "delectus",
                                    Rrdatas: []string{
                                        "velit",
                                        "eaque",
                                        "perferendis",
                                    },
                                    SignatureRrdatas: []string{
                                        "neque",
                                    },
                                    Weight: 74.199997,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "a",
                                                IPProtocol: "undefined",
                                                Kind: "temporibus",
                                                LoadBalancerType: "none",
                                                NetworkURL: "enim",
                                                Port: "nam",
                                                Project: "architecto",
                                                Region: "reiciendis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "dolor",
                                                IPProtocol: "tcp",
                                                Kind: "corporis",
                                                LoadBalancerType: "none",
                                                NetworkURL: "necessitatibus",
                                                Port: "quia",
                                                Project: "minus",
                                                Region: "non",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "eligendi",
                                                IPProtocol: "udp",
                                                Kind: "ipsum",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "explicabo",
                                                Port: "aut",
                                                Project: "id",
                                                Region: "sint",
                                            },
                                        },
                                    },
                                    Kind: "nihil",
                                    Rrdatas: []string{
                                        "quis",
                                        "ab",
                                    },
                                    SignatureRrdatas: []string{
                                        "nam",
                                    },
                                    Weight: 29.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "doloremque",
                                                IPProtocol: "undefined",
                                                Kind: "quas",
                                                LoadBalancerType: "none",
                                                NetworkURL: "dolores",
                                                Port: "officia",
                                                Project: "eligendi",
                                                Region: "et",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "aut",
                                                IPProtocol: "undefined",
                                                Kind: "aut",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quis",
                                                Port: "ab",
                                                Project: "inventore",
                                                Region: "deleniti",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ratione",
                                                IPProtocol: "undefined",
                                                Kind: "vitae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "totam",
                                                Port: "omnis",
                                                Project: "consequatur",
                                                Region: "labore",
                                            },
                                        },
                                    },
                                    Kind: "sapiente",
                                    Rrdatas: []string{
                                        "voluptas",
                                        "perspiciatis",
                                    },
                                    SignatureRrdatas: []string{
                                        "iusto",
                                    },
                                    Weight: 82.199997,
                                },
                            },
                            Kind: "laboriosam",
                        },
                        WrrPolicy: &shared.RrSetRoutingPolicyWrrPolicy{
                            Items: []shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "exercitationem",
                                                IPProtocol: "undefined",
                                                Kind: "et",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "quo",
                                                Port: "magni",
                                                Project: "est",
                                                Region: "omnis",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "consectetur",
                                                IPProtocol: "udp",
                                                Kind: "non",
                                                LoadBalancerType: "none",
                                                NetworkURL: "quia",
                                                Port: "rerum",
                                                Project: "facere",
                                                Region: "architecto",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "delectus",
                                                IPProtocol: "udp",
                                                Kind: "repudiandae",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "saepe",
                                                Port: "rerum",
                                                Project: "quas",
                                                Region: "et",
                                            },
                                        },
                                    },
                                    Kind: "quasi",
                                    Rrdatas: []string{
                                        "blanditiis",
                                        "hic",
                                    },
                                    SignatureRrdatas: []string{
                                        "perferendis",
                                        "voluptatem",
                                        "quia",
                                    },
                                    Weight: 16.200001,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "ratione",
                                                IPProtocol: "udp",
                                                Kind: "dolorem",
                                                LoadBalancerType: "none",
                                                NetworkURL: "enim",
                                                Port: "veritatis",
                                                Project: "quidem",
                                                Region: "ut",
                                            },
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "porro",
                                                IPProtocol: "tcp",
                                                Kind: "saepe",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "esse",
                                                Port: "quibusdam",
                                                Project: "dolor",
                                                Region: "deleniti",
                                            },
                                        },
                                    },
                                    Kind: "debitis",
                                    Rrdatas: []string{
                                        "quos",
                                        "magni",
                                        "voluptas",
                                    },
                                    SignatureRrdatas: []string{
                                        "sapiente",
                                    },
                                    Weight: 23.100000,
                                },
                                shared.RrSetRoutingPolicyWrrPolicyWrrPolicyItem{
                                    HealthCheckedTargets: &shared.RrSetRoutingPolicyHealthCheckTargets{
                                        InternalLoadBalancers: []shared.RrSetRoutingPolicyLoadBalancerTarget{
                                            shared.RrSetRoutingPolicyLoadBalancerTarget{
                                                IPAddress: "quod",
                                                IPProtocol: "udp",
                                                Kind: "quibusdam",
                                                LoadBalancerType: "regionalL4ilb",
                                                NetworkURL: "itaque",
                                                Port: "quae",
                                                Project: "aliquid",
                                                Region: "ut",
                                            },
                                        },
                                    },
                                    Kind: "magni",
                                    Rrdatas: []string{
                                        "facilis",
                                        "fugiat",
                                    },
                                    SignatureRrdatas: []string{
                                        "quas",
                                        "sed",
                                    },
                                    Weight: 62.200001,
                                },
                            },
                            Kind: "perspiciatis",
                        },
                    },
                    Rrdatas: []string{
                        "omnis",
                        "sit",
                    },
                    SignatureRrdatas: []string{
                        "totam",
                    },
                    TTL: 2911300226704644765,
                    Type: "culpa",
                },
            },
            ID: "commodi",
            IsServing: true,
            Kind: "et",
            StartTime: "ratione",
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
