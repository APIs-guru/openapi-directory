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
    
    req := operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest{
        Security: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreatePathParams{
            Parent: "quos",
        },
        QueryParams: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "ea",
            Alt: "proto",
            Callback: "et",
            Fields: "occaecati",
            Key: "non",
            OauthToken: "suscipit",
            PrettyPrint: true,
            QuotaUser: "perferendis",
            TestID: "et",
            UploadType: "repellendus",
            UploadProtocol: "quo",
        },
        Request: &shared.ConnectivityTestInput{
            Description: "sunt",
            Destination: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "rerum",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "consequuntur",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "alias",
                },
                CloudSQLInstance: "voluptatem",
                GkeMasterCluster: "cum",
                Instance: "veritatis",
                IPAddress: "odio",
                Network: "nostrum",
                NetworkType: "NON_GCP_NETWORK",
                Port: 8166794903471616186,
                ProjectID: "est",
            },
            Labels: map[string]string{
                "quaerat": "placeat",
            },
            Name: "ea",
            ProbingDetails: &shared.ProbingDetails{
                AbortCause: "PROBING_ABORT_CAUSE_UNSPECIFIED",
                DestinationEgressLocation: &shared.EdgeLocation{
                    MetropolitanArea: "vitae",
                },
                EndpointInfo: &shared.EndpointInfo{
                    DestinationIP: "dicta",
                    DestinationNetworkURI: "vero",
                    DestinationPort: 406892514386702842,
                    Protocol: "ut",
                    SourceAgentURI: "omnis",
                    SourceIP: "aut",
                    SourceNetworkURI: "fugit",
                    SourcePort: 2342556250709472868,
                },
                Error: &shared.Status{
                    Code: 3630233539265663319,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "est": "odio",
                            "magnam": "blanditiis",
                        },
                        map[string]interface{}{
                            "sit": "distinctio",
                            "quaerat": "beatae",
                            "quia": "sint",
                        },
                        map[string]interface{}{
                            "omnis": "molestiae",
                            "doloribus": "et",
                            "sit": "maiores",
                        },
                    },
                    Message: "eum",
                },
                ProbingLatency: &shared.LatencyDistribution{
                    LatencyPercentiles: []shared.LatencyPercentile{
                        shared.LatencyPercentile{
                            LatencyMicros: "enim",
                            Percent: 4913623229222588005,
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: "numquam",
                            Percent: 2548065803788474517,
                        },
                        shared.LatencyPercentile{
                            LatencyMicros: "fugit",
                            Percent: 5511395499893954652,
                        },
                    },
                },
                Result: "REACHABILITY_INCONSISTENT",
                SentProbeCount: 7291791888769849865,
                SuccessfulProbeCount: 2219912581291099494,
                VerifyTime: "consequatur",
            },
            Protocol: "non",
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: 6556454256354947128,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "aperiam": "veniam",
                        },
                        map[string]interface{}{
                            "in": "doloribus",
                            "dolorem": "et",
                        },
                        map[string]interface{}{
                            "et": "corrupti",
                            "iste": "ipsam",
                            "saepe": "repellat",
                        },
                    },
                    Message: "nesciunt",
                },
                Result: "REACHABLE",
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "tenetur",
                            DestinationNetworkURI: "dicta",
                            DestinationPort: 1121377157772130420,
                            Protocol: "nemo",
                            SourceAgentURI: "occaecati",
                            SourceIP: "autem",
                            SourceNetworkURI: "nesciunt",
                            SourcePort: 7817225063413125512,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "MISMATCHED_IP_VERSION",
                                    ProjectsMissingPermission: []string{
                                        "iure",
                                        "et",
                                    },
                                    ResourceURI: "voluptatum",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "itaque",
                                    Environment: "et",
                                    Runtime: "corrupti",
                                    URI: "et",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "aut",
                                    Location: "similique",
                                    URI: "quibusdam",
                                    VersionID: "earum",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "est",
                                    Location: "quia",
                                    ServiceName: "facilis",
                                    ServiceURI: "error",
                                    URI: "ipsa",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "nobis",
                                    ExternalIP: "aut",
                                    InternalIP: "hic",
                                    NetworkURI: "labore",
                                    Region: "ut",
                                    URI: "nostrum",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "esse",
                                    Target: "PSC_VPC_SC",
                                },
                                Description: "ratione",
                                Drop: &shared.DropInfo{
                                    Cause: "UNKNOWN_INTERNAL_ADDRESS",
                                    ResourceURI: "illum",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "perferendis",
                                    DestinationNetworkURI: "commodi",
                                    DestinationPort: 1171145952095700334,
                                    Protocol: "autem",
                                    SourceAgentURI: "iusto",
                                    SourceIP: "voluptas",
                                    SourceNetworkURI: "commodi",
                                    SourcePort: 6067684880070941770,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "optio",
                                    Direction: "velit",
                                    DisplayName: "eaque",
                                    FirewallRuleType: "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE",
                                    NetworkURI: "nemo",
                                    Policy: "consequatur",
                                    Priority: 5644771586617071549,
                                    TargetServiceAccounts: []string{
                                        "nostrum",
                                    },
                                    TargetTags: []string{
                                        "eaque",
                                        "et",
                                    },
                                    URI: "esse",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "dicta",
                                    Target: "INTERCONNECT",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "laborum",
                                    MatchedPortRange: "suscipit",
                                    MatchedProtocol: "iusto",
                                    NetworkURI: "quisquam",
                                    Target: "sunt",
                                    URI: "nisi",
                                    Vip: "eum",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "ipsam",
                                    ClusterURI: "deleniti",
                                    ExternalIP: "ab",
                                    InternalIP: "velit",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "possimus",
                                    ExternalIP: "porro",
                                    Interface: "delectus",
                                    InternalIP: "natus",
                                    NetworkTags: []string{
                                        "dolorum",
                                    },
                                    NetworkURI: "placeat",
                                    ServiceAccount: "rerum",
                                    URI: "ullam",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_POOL",
                                    BackendURI: "neque",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "quisquam",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "quas",
                                                "sint",
                                                "nihil",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "praesentium",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "saepe",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "tempora",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "natus",
                                                "blanditiis",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "sit",
                                                "architecto",
                                                "expedita",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "omnis",
                                        },
                                    },
                                    HealthCheckURI: "voluptatem",
                                    LoadBalancerType: "HTTP_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "officiis",
                                    MatchedIPRange: "ut",
                                    URI: "dolorum",
                                },
                                ProjectID: "eos",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "iste",
                                    DestPortRanges: []string{
                                        "illum",
                                    },
                                    DisplayName: "consequuntur",
                                    InstanceTags: []string{
                                        "voluptatum",
                                    },
                                    NetworkURI: "explicabo",
                                    NextHop: "commodi",
                                    NextHopType: "NEXT_HOP_VPN_TUNNEL",
                                    Priority: 1794453649375207473,
                                    Protocols: []string{
                                        "dignissimos",
                                    },
                                    RouteType: "SUBNET",
                                    SrcIPRange: "sequi",
                                    SrcPortRanges: []string{
                                        "voluptatum",
                                        "vero",
                                    },
                                    URI: "quis",
                                },
                                State: "ARRIVE_AT_INSTANCE",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "dignissimos",
                                    Location: "cupiditate",
                                    URI: "ipsum",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "provident",
                                    IPAddress: "dignissimos",
                                    NetworkURI: "ut",
                                    Region: "voluptatum",
                                    URI: "earum",
                                    VpnTunnelURI: "distinctio",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "mollitia",
                                    NetworkURI: "vero",
                                    Region: "et",
                                    RemoteGateway: "natus",
                                    RemoteGatewayIP: "aliquid",
                                    RoutingType: "DYNAMIC",
                                    SourceGateway: "dicta",
                                    SourceGatewayIP: "voluptatum",
                                    URI: "illum",
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "quam",
                            DestinationNetworkURI: "officia",
                            DestinationPort: 2343442719278574416,
                            Protocol: "ex",
                            SourceAgentURI: "et",
                            SourceIP: "laboriosam",
                            SourceNetworkURI: "temporibus",
                            SourcePort: 8579405288472525523,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "INTERNAL_ERROR",
                                    ProjectsMissingPermission: []string{
                                        "blanditiis",
                                    },
                                    ResourceURI: "et",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "beatae",
                                    Environment: "ut",
                                    Runtime: "esse",
                                    URI: "ut",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "aut",
                                    Location: "est",
                                    URI: "in",
                                    VersionID: "corrupti",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "ducimus",
                                    Location: "amet",
                                    ServiceName: "hic",
                                    ServiceURI: "enim",
                                    URI: "animi",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "ea",
                                    ExternalIP: "tempore",
                                    InternalIP: "cupiditate",
                                    NetworkURI: "amet",
                                    Region: "voluptatum",
                                    URI: "a",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "nesciunt",
                                    Target: "GKE_MASTER",
                                },
                                Description: "nihil",
                                Drop: &shared.DropInfo{
                                    Cause: "GKE_MASTER_UNAUTHORIZED_ACCESS",
                                    ResourceURI: "quaerat",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "cumque",
                                    DestinationNetworkURI: "ad",
                                    DestinationPort: 7083053716688054346,
                                    Protocol: "ea",
                                    SourceAgentURI: "reprehenderit",
                                    SourceIP: "alias",
                                    SourceNetworkURI: "illum",
                                    SourcePort: 5056582515198587060,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "ea",
                                    Direction: "animi",
                                    DisplayName: "nostrum",
                                    FirewallRuleType: "NETWORK_FIREWALL_POLICY_RULE",
                                    NetworkURI: "fugiat",
                                    Policy: "nemo",
                                    Priority: 2015698736238837837,
                                    TargetServiceAccounts: []string{
                                        "quis",
                                        "rem",
                                    },
                                    TargetTags: []string{
                                        "sint",
                                    },
                                    URI: "earum",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "quia",
                                    Target: "ANOTHER_PROJECT",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "vero",
                                    MatchedPortRange: "et",
                                    MatchedProtocol: "voluptas",
                                    NetworkURI: "fugiat",
                                    Target: "atque",
                                    URI: "explicabo",
                                    Vip: "tempora",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "similique",
                                    ClusterURI: "impedit",
                                    ExternalIP: "dignissimos",
                                    InternalIP: "dolores",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "a",
                                    ExternalIP: "et",
                                    Interface: "porro",
                                    InternalIP: "odit",
                                    NetworkTags: []string{
                                        "ea",
                                        "facilis",
                                    },
                                    NetworkURI: "et",
                                    ServiceAccount: "velit",
                                    URI: "vel",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_TYPE_UNSPECIFIED",
                                    BackendURI: "atque",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "dolorem",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "iste",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "eum",
                                                "ab",
                                                "reiciendis",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "nostrum",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "quod",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "perferendis",
                                                "veritatis",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "repellendus",
                                                "earum",
                                                "perspiciatis",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "provident",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "error",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "sit",
                                                "deleniti",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "quia",
                                                "ducimus",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "facilis",
                                        },
                                    },
                                    HealthCheckURI: "eos",
                                    LoadBalancerType: "INTERNAL_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "culpa",
                                    MatchedIPRange: "sapiente",
                                    URI: "pariatur",
                                },
                                ProjectID: "quis",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "eaque",
                                    DestPortRanges: []string{
                                        "ipsam",
                                    },
                                    DisplayName: "corrupti",
                                    InstanceTags: []string{
                                        "reprehenderit",
                                        "omnis",
                                        "quos",
                                    },
                                    NetworkURI: "sed",
                                    NextHop: "aperiam",
                                    NextHopType: "NEXT_HOP_INSTANCE",
                                    Priority: 635975495164142610,
                                    Protocols: []string{
                                        "quo",
                                        "unde",
                                    },
                                    RouteType: "ROUTE_TYPE_UNSPECIFIED",
                                    SrcIPRange: "est",
                                    SrcPortRanges: []string{
                                        "culpa",
                                        "perferendis",
                                        "quidem",
                                    },
                                    URI: "hic",
                                },
                                State: "SPOOFING_APPROVED",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "vero",
                                    Location: "corrupti",
                                    URI: "est",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "deserunt",
                                    IPAddress: "dignissimos",
                                    NetworkURI: "qui",
                                    Region: "accusamus",
                                    URI: "qui",
                                    VpnTunnelURI: "voluptas",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "dolor",
                                    NetworkURI: "saepe",
                                    Region: "nisi",
                                    RemoteGateway: "rem",
                                    RemoteGatewayIP: "sed",
                                    RoutingType: "ROUTING_TYPE_UNSPECIFIED",
                                    SourceGateway: "id",
                                    SourceGatewayIP: "in",
                                    URI: "occaecati",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "GKE_KONNECTIVITY_PROXY_UNSUPPORTED",
                                    ProjectsMissingPermission: []string{
                                        "corporis",
                                    },
                                    ResourceURI: "ab",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "quo",
                                    Environment: "aut",
                                    Runtime: "perferendis",
                                    URI: "consequatur",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "minima",
                                    Location: "reprehenderit",
                                    URI: "repellat",
                                    VersionID: "eligendi",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "excepturi",
                                    Location: "dicta",
                                    ServiceName: "et",
                                    ServiceURI: "et",
                                    URI: "ut",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "expedita",
                                    ExternalIP: "error",
                                    InternalIP: "molestiae",
                                    NetworkURI: "sed",
                                    Region: "est",
                                    URI: "et",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "ducimus",
                                    Target: "PSC_PUBLISHED_SERVICE",
                                },
                                Description: "vel",
                                Drop: &shared.DropInfo{
                                    Cause: "FORWARDING_RULE_REGION_MISMATCH",
                                    ResourceURI: "vitae",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "possimus",
                                    DestinationNetworkURI: "ducimus",
                                    DestinationPort: 1744045867786174459,
                                    Protocol: "quis",
                                    SourceAgentURI: "consequatur",
                                    SourceIP: "atque",
                                    SourceNetworkURI: "quia",
                                    SourcePort: 5932515898201635365,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "suscipit",
                                    Direction: "in",
                                    DisplayName: "repellendus",
                                    FirewallRuleType: "NETWORK_FIREWALL_POLICY_RULE",
                                    NetworkURI: "fuga",
                                    Policy: "et",
                                    Priority: 1668987215539536292,
                                    TargetServiceAccounts: []string{
                                        "ut",
                                        "repellendus",
                                        "animi",
                                    },
                                    TargetTags: []string{
                                        "et",
                                    },
                                    URI: "rerum",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "aut",
                                    Target: "PEERING_VPC",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "eum",
                                    MatchedPortRange: "eius",
                                    MatchedProtocol: "rerum",
                                    NetworkURI: "ea",
                                    Target: "saepe",
                                    URI: "facere",
                                    Vip: "dolor",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "quasi",
                                    ClusterURI: "animi",
                                    ExternalIP: "quis",
                                    InternalIP: "optio",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "sunt",
                                    ExternalIP: "ipsa",
                                    Interface: "neque",
                                    InternalIP: "et",
                                    NetworkTags: []string{
                                        "vel",
                                    },
                                    NetworkURI: "aut",
                                    ServiceAccount: "eligendi",
                                    URI: "eum",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_INSTANCE",
                                    BackendURI: "nihil",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "velit",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "ipsa",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "ea",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "dolores",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "quia",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "ut",
                                                "debitis",
                                                "et",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "odit",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "odio",
                                        },
                                    },
                                    HealthCheckURI: "enim",
                                    LoadBalancerType: "LOAD_BALANCER_TYPE_UNSPECIFIED",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "magni",
                                    MatchedIPRange: "cum",
                                    URI: "ut",
                                },
                                ProjectID: "perspiciatis",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "aut",
                                    DestPortRanges: []string{
                                        "aspernatur",
                                        "doloribus",
                                        "at",
                                    },
                                    DisplayName: "ipsam",
                                    InstanceTags: []string{
                                        "at",
                                        "et",
                                    },
                                    NetworkURI: "inventore",
                                    NextHop: "est",
                                    NextHopType: "NEXT_HOP_BLACKHOLE",
                                    Priority: 6900336721021663873,
                                    Protocols: []string{
                                        "culpa",
                                        "quia",
                                        "expedita",
                                    },
                                    RouteType: "STATIC",
                                    SrcIPRange: "doloremque",
                                    SrcPortRanges: []string{
                                        "et",
                                    },
                                    URI: "dicta",
                                },
                                State: "DELIVER",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "porro",
                                    Location: "sint",
                                    URI: "aut",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "inventore",
                                    IPAddress: "ut",
                                    NetworkURI: "maiores",
                                    Region: "voluptatem",
                                    URI: "quibusdam",
                                    VpnTunnelURI: "doloribus",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "aut",
                                    NetworkURI: "illum",
                                    Region: "ut",
                                    RemoteGateway: "sit",
                                    RemoteGatewayIP: "modi",
                                    RoutingType: "ROUTE_BASED",
                                    SourceGateway: "et",
                                    SourceGatewayIP: "nam",
                                    URI: "necessitatibus",
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "laborum",
                            DestinationNetworkURI: "enim",
                            DestinationPort: 4901173082104078004,
                            Protocol: "architecto",
                            SourceAgentURI: "architecto",
                            SourceIP: "harum",
                            SourceNetworkURI: "voluptates",
                            SourcePort: 7885399681297397340,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "GKE_KONNECTIVITY_PROXY_UNSUPPORTED",
                                    ProjectsMissingPermission: []string{
                                        "sed",
                                        "incidunt",
                                    },
                                    ResourceURI: "iste",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "sit",
                                    Environment: "est",
                                    Runtime: "quo",
                                    URI: "explicabo",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "et",
                                    Location: "quia",
                                    URI: "aspernatur",
                                    VersionID: "animi",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "quasi",
                                    Location: "qui",
                                    ServiceName: "rerum",
                                    ServiceURI: "odit",
                                    URI: "voluptas",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "unde",
                                    ExternalIP: "perspiciatis",
                                    InternalIP: "porro",
                                    NetworkURI: "dicta",
                                    Region: "mollitia",
                                    URI: "totam",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "beatae",
                                    Target: "GOOGLE_API",
                                },
                                Description: "unde",
                                Drop: &shared.DropInfo{
                                    Cause: "FORWARDING_RULE_MISMATCH",
                                    ResourceURI: "vitae",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "quis",
                                    DestinationNetworkURI: "consectetur",
                                    DestinationPort: 2615193428840744870,
                                    Protocol: "iusto",
                                    SourceAgentURI: "sit",
                                    SourceIP: "accusantium",
                                    SourceNetworkURI: "aliquid",
                                    SourcePort: 251481460403035334,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "sit",
                                    Direction: "doloribus",
                                    DisplayName: "expedita",
                                    FirewallRuleType: "VPC_FIREWALL_RULE",
                                    NetworkURI: "est",
                                    Policy: "doloremque",
                                    Priority: 6881211550782960207,
                                    TargetServiceAccounts: []string{
                                        "iste",
                                        "deleniti",
                                    },
                                    TargetTags: []string{
                                        "saepe",
                                    },
                                    URI: "aspernatur",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "at",
                                    Target: "IMPORTED_CUSTOM_ROUTE_NEXT_HOP",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "accusamus",
                                    MatchedPortRange: "culpa",
                                    MatchedProtocol: "eius",
                                    NetworkURI: "et",
                                    Target: "et",
                                    URI: "cupiditate",
                                    Vip: "iure",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "doloremque",
                                    ClusterURI: "et",
                                    ExternalIP: "ullam",
                                    InternalIP: "architecto",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "corporis",
                                    ExternalIP: "ratione",
                                    Interface: "corporis",
                                    InternalIP: "et",
                                    NetworkTags: []string{
                                        "eum",
                                        "suscipit",
                                    },
                                    NetworkURI: "cum",
                                    ServiceAccount: "voluptas",
                                    URI: "et",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_INSTANCE",
                                    BackendURI: "inventore",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "fugit",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "doloribus",
                                                "nesciunt",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "pariatur",
                                                "vel",
                                                "deleniti",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "est",
                                        },
                                    },
                                    HealthCheckURI: "laudantium",
                                    LoadBalancerType: "SSL_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "animi",
                                    MatchedIPRange: "laborum",
                                    URI: "iste",
                                },
                                ProjectID: "quo",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "delectus",
                                    DestPortRanges: []string{
                                        "sunt",
                                        "ut",
                                        "dicta",
                                    },
                                    DisplayName: "tenetur",
                                    InstanceTags: []string{
                                        "vel",
                                        "aut",
                                        "eveniet",
                                    },
                                    NetworkURI: "odio",
                                    NextHop: "qui",
                                    NextHopType: "NEXT_HOP_TYPE_UNSPECIFIED",
                                    Priority: 967836110207562829,
                                    Protocols: []string{
                                        "minus",
                                        "ratione",
                                        "deserunt",
                                    },
                                    RouteType: "DYNAMIC",
                                    SrcIPRange: "non",
                                    SrcPortRanges: []string{
                                        "et",
                                        "enim",
                                        "omnis",
                                    },
                                    URI: "nisi",
                                },
                                State: "STATE_UNSPECIFIED",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "rerum",
                                    Location: "libero",
                                    URI: "ut",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "harum",
                                    IPAddress: "nemo",
                                    NetworkURI: "saepe",
                                    Region: "porro",
                                    URI: "natus",
                                    VpnTunnelURI: "asperiores",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "aut",
                                    NetworkURI: "tempore",
                                    Region: "et",
                                    RemoteGateway: "molestiae",
                                    RemoteGatewayIP: "odio",
                                    RoutingType: "ROUTING_TYPE_UNSPECIFIED",
                                    SourceGateway: "fugiat",
                                    SourceGatewayIP: "quia",
                                    URI: "et",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "INVALID_ARGUMENT",
                                    ProjectsMissingPermission: []string{
                                        "ut",
                                        "ipsa",
                                        "id",
                                    },
                                    ResourceURI: "vel",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "fugit",
                                    Environment: "quos",
                                    Runtime: "non",
                                    URI: "quia",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "voluptate",
                                    Location: "ex",
                                    URI: "quod",
                                    VersionID: "nam",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "quia",
                                    Location: "ut",
                                    ServiceName: "molestiae",
                                    ServiceURI: "id",
                                    URI: "illo",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "assumenda",
                                    ExternalIP: "dolores",
                                    InternalIP: "in",
                                    NetworkURI: "animi",
                                    Region: "mollitia",
                                    URI: "ex",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "ex",
                                    Target: "GOOGLE_API",
                                },
                                Description: "est",
                                Drop: &shared.DropInfo{
                                    Cause: "CLOUD_SQL_INSTANCE_NO_IP_ADDRESS",
                                    ResourceURI: "aut",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "commodi",
                                    DestinationNetworkURI: "pariatur",
                                    DestinationPort: 5552173562189497798,
                                    Protocol: "molestiae",
                                    SourceAgentURI: "quia",
                                    SourceIP: "repudiandae",
                                    SourceNetworkURI: "omnis",
                                    SourcePort: 1304886885886881865,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "maiores",
                                    Direction: "aliquam",
                                    DisplayName: "incidunt",
                                    FirewallRuleType: "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE",
                                    NetworkURI: "in",
                                    Policy: "fuga",
                                    Priority: 7190219170584462697,
                                    TargetServiceAccounts: []string{
                                        "maxime",
                                        "sed",
                                        "voluptatum",
                                    },
                                    TargetTags: []string{
                                        "non",
                                        "suscipit",
                                        "velit",
                                    },
                                    URI: "dicta",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "magni",
                                    Target: "INTERCONNECT",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "ducimus",
                                    MatchedPortRange: "dolores",
                                    MatchedProtocol: "ipsam",
                                    NetworkURI: "accusantium",
                                    Target: "ullam",
                                    URI: "repellendus",
                                    Vip: "amet",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "consectetur",
                                    ClusterURI: "est",
                                    ExternalIP: "incidunt",
                                    InternalIP: "eos",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "est",
                                    ExternalIP: "debitis",
                                    Interface: "reprehenderit",
                                    InternalIP: "itaque",
                                    NetworkTags: []string{
                                        "sapiente",
                                        "pariatur",
                                        "aut",
                                    },
                                    NetworkURI: "aut",
                                    ServiceAccount: "dolorem",
                                    URI: "accusamus",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_INSTANCE",
                                    BackendURI: "necessitatibus",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "mollitia",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "ullam",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "rem",
                                                "eum",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "consequatur",
                                        },
                                    },
                                    HealthCheckURI: "officiis",
                                    LoadBalancerType: "INTERNAL_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "et",
                                    MatchedIPRange: "quae",
                                    URI: "voluptas",
                                },
                                ProjectID: "nisi",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "ipsum",
                                    DestPortRanges: []string{
                                        "voluptatem",
                                        "impedit",
                                        "eos",
                                    },
                                    DisplayName: "dolorem",
                                    InstanceTags: []string{
                                        "velit",
                                        "et",
                                    },
                                    NetworkURI: "quis",
                                    NextHop: "et",
                                    NextHopType: "NEXT_HOP_ILB",
                                    Priority: 4474806255202991228,
                                    Protocols: []string{
                                        "dolorum",
                                        "voluptas",
                                    },
                                    RouteType: "ROUTE_TYPE_UNSPECIFIED",
                                    SrcIPRange: "deserunt",
                                    SrcPortRanges: []string{
                                        "nobis",
                                    },
                                    URI: "odio",
                                },
                                State: "STATE_UNSPECIFIED",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "dolorum",
                                    Location: "odio",
                                    URI: "nobis",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "ut",
                                    IPAddress: "in",
                                    NetworkURI: "enim",
                                    Region: "qui",
                                    URI: "nulla",
                                    VpnTunnelURI: "quis",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "ad",
                                    NetworkURI: "eum",
                                    Region: "magnam",
                                    RemoteGateway: "nobis",
                                    RemoteGatewayIP: "corporis",
                                    RoutingType: "ROUTING_TYPE_UNSPECIFIED",
                                    SourceGateway: "doloribus",
                                    SourceGatewayIP: "debitis",
                                    URI: "reprehenderit",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "GKE_KONNECTIVITY_PROXY_UNSUPPORTED",
                                    ProjectsMissingPermission: []string{
                                        "corporis",
                                    },
                                    ResourceURI: "aut",
                                },
                                AppEngineVersion: &shared.AppEngineVersionInfo{
                                    DisplayName: "aut",
                                    Environment: "odio",
                                    Runtime: "aut",
                                    URI: "tenetur",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "ut",
                                    Location: "sed",
                                    URI: "veritatis",
                                    VersionID: "error",
                                },
                                CloudRunRevision: &shared.CloudRunRevisionInfo{
                                    DisplayName: "natus",
                                    Location: "ut",
                                    ServiceName: "dolores",
                                    ServiceURI: "nihil",
                                    URI: "ex",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "et",
                                    ExternalIP: "et",
                                    InternalIP: "sed",
                                    NetworkURI: "voluptas",
                                    Region: "provident",
                                    URI: "necessitatibus",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "ipsa",
                                    Target: "TARGET_UNSPECIFIED",
                                },
                                Description: "minus",
                                Drop: &shared.DropInfo{
                                    Cause: "FIREWALL_RULE",
                                    ResourceURI: "sed",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "facilis",
                                    DestinationNetworkURI: "ipsa",
                                    DestinationPort: 2794322974374515266,
                                    Protocol: "in",
                                    SourceAgentURI: "et",
                                    SourceIP: "voluptatum",
                                    SourceNetworkURI: "expedita",
                                    SourcePort: 331715307877144275,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "laboriosam",
                                    Direction: "quas",
                                    DisplayName: "quod",
                                    FirewallRuleType: "VPC_FIREWALL_RULE",
                                    NetworkURI: "consequatur",
                                    Policy: "quibusdam",
                                    Priority: 7201327996250994425,
                                    TargetServiceAccounts: []string{
                                        "reiciendis",
                                    },
                                    TargetTags: []string{
                                        "dicta",
                                        "in",
                                    },
                                    URI: "corrupti",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "aut",
                                    Target: "VPN_GATEWAY",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "rerum",
                                    MatchedPortRange: "excepturi",
                                    MatchedProtocol: "expedita",
                                    NetworkURI: "blanditiis",
                                    Target: "et",
                                    URI: "itaque",
                                    Vip: "cupiditate",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "est",
                                    ClusterURI: "eos",
                                    ExternalIP: "sed",
                                    InternalIP: "aut",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "sit",
                                    ExternalIP: "ut",
                                    Interface: "nesciunt",
                                    InternalIP: "dolorum",
                                    NetworkTags: []string{
                                        "porro",
                                        "quam",
                                        "vel",
                                    },
                                    NetworkURI: "atque",
                                    ServiceAccount: "assumenda",
                                    URI: "laborum",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "BACKEND_SERVICE",
                                    BackendURI: "et",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "quasi",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "quod",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "qui",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "totam",
                                        },
                                    },
                                    HealthCheckURI: "illo",
                                    LoadBalancerType: "LOAD_BALANCER_TYPE_UNSPECIFIED",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "iure",
                                    MatchedIPRange: "distinctio",
                                    URI: "vel",
                                },
                                ProjectID: "odio",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "voluptatem",
                                    DestPortRanges: []string{
                                        "repellat",
                                        "nam",
                                    },
                                    DisplayName: "labore",
                                    InstanceTags: []string{
                                        "necessitatibus",
                                        "est",
                                        "tenetur",
                                    },
                                    NetworkURI: "quasi",
                                    NextHop: "modi",
                                    NextHopType: "NEXT_HOP_ROUTER_APPLIANCE",
                                    Priority: 8910616947332965707,
                                    Protocols: []string{
                                        "explicabo",
                                    },
                                    RouteType: "PEERING_STATIC",
                                    SrcIPRange: "perspiciatis",
                                    SrcPortRanges: []string{
                                        "natus",
                                        "rem",
                                    },
                                    URI: "quidem",
                                },
                                State: "FORWARD",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "commodi",
                                    Location: "nemo",
                                    URI: "optio",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "est",
                                    IPAddress: "sunt",
                                    NetworkURI: "voluptatem",
                                    Region: "natus",
                                    URI: "impedit",
                                    VpnTunnelURI: "officia",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "et",
                                    NetworkURI: "atque",
                                    Region: "sit",
                                    RemoteGateway: "quis",
                                    RemoteGatewayIP: "ipsum",
                                    RoutingType: "POLICY_BASED",
                                    SourceGateway: "dicta",
                                    SourceGatewayIP: "aut",
                                    URI: "autem",
                                },
                            },
                        },
                    },
                },
                VerifyTime: "sint",
            },
            RelatedProjects: []string{
                "ullam",
                "qui",
                "qui",
            },
            Source: &shared.Endpoint{
                AppEngineVersion: &shared.AppEngineVersionEndpoint{
                    URI: "dolores",
                },
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "velit",
                },
                CloudRunRevision: &shared.CloudRunRevisionEndpoint{
                    URI: "doloremque",
                },
                CloudSQLInstance: "rerum",
                GkeMasterCluster: "non",
                Instance: "voluptates",
                IPAddress: "rem",
                Network: "dolorem",
                NetworkType: "NON_GCP_NETWORK",
                Port: 8950721137169359148,
                ProjectID: "dolor",
            },
        },
    }
    
    res, err := s.Projects.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreate(ctx, req)
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

* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreate` - Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsList` - Lists all Connectivity Tests owned by a project.
* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsPatch` - Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsRerun` - Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `NetworkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `NetworkmanagementProjectsLocationsGlobalOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `NetworkmanagementProjectsLocationsGlobalOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `NetworkmanagementProjectsLocationsGlobalOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `NetworkmanagementProjectsLocationsGlobalOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `NetworkmanagementProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
