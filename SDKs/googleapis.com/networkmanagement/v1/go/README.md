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
            Parent: "nihil",
        },
        QueryParams: operations.NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "json",
            Callback: "laudantium",
            Fields: "voluptatem",
            Key: "deserunt",
            OauthToken: "laborum",
            PrettyPrint: true,
            QuotaUser: "praesentium",
            TestID: "quibusdam",
            UploadType: "saepe",
            UploadProtocol: "in",
        },
        Request: &shared.ConnectivityTestInput{
            Description: "recusandae",
            Destination: &shared.Endpoint{
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "odio",
                },
                CloudSQLInstance: "ut",
                GkeMasterCluster: "atque",
                Instance: "voluptates",
                IPAddress: "dolorum",
                Network: "quia",
                NetworkType: "GCP_NETWORK",
                Port: 7629641516016178145,
                ProjectID: "deleniti",
            },
            Labels: map[string]string{
                "eos": "quasi",
            },
            Name: "quis",
            Protocol: "praesentium",
            ReachabilityDetails: &shared.ReachabilityDetails{
                Error: &shared.Status{
                    Code: 3676206911506782032,
                    Details: []map[string]interface{}{
                        map[string]interface{}{
                            "est": "accusantium",
                            "rerum": "pariatur",
                        },
                    },
                    Message: "fuga",
                },
                Result: "AMBIGUOUS",
                Traces: []shared.Trace{
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "molestiae",
                            DestinationNetworkURI: "nisi",
                            DestinationPort: 7215180393867524824,
                            Protocol: "veritatis",
                            SourceIP: "officiis",
                            SourceNetworkURI: "vel",
                            SourcePort: 5830518212590307683,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "MISMATCHED_SOURCE_NETWORK",
                                    ProjectsMissingPermission: []string{
                                        "placeat",
                                        "consectetur",
                                    },
                                    ResourceURI: "sed",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "modi",
                                    Location: "vel",
                                    URI: "amet",
                                    VersionID: "adipisci",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "consequuntur",
                                    ExternalIP: "voluptates",
                                    InternalIP: "ullam",
                                    NetworkURI: "alias",
                                    Region: "recusandae",
                                    URI: "nihil",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "itaque",
                                    Target: "PSC_GOOGLE_API",
                                },
                                Description: "sapiente",
                                Drop: &shared.DropInfo{
                                    Cause: "CLOUD_SQL_INSTANCE_NOT_RUNNING",
                                    ResourceURI: "voluptatem",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "repudiandae",
                                    DestinationNetworkURI: "eligendi",
                                    DestinationPort: 4800944783392072888,
                                    Protocol: "veritatis",
                                    SourceIP: "eaque",
                                    SourceNetworkURI: "consequatur",
                                    SourcePort: 8268274953394897045,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "tempore",
                                    Direction: "quia",
                                    DisplayName: "soluta",
                                    FirewallRuleType: "NETWORK_FIREWALL_POLICY_RULE",
                                    NetworkURI: "aut",
                                    Policy: "autem",
                                    Priority: 384999311801709440,
                                    TargetServiceAccounts: []string{
                                        "quae",
                                        "voluptatem",
                                    },
                                    TargetTags: []string{
                                        "velit",
                                        "voluptates",
                                    },
                                    URI: "ut",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "voluptas",
                                    Target: "ANOTHER_PROJECT",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "eaque",
                                    MatchedPortRange: "suscipit",
                                    MatchedProtocol: "voluptas",
                                    NetworkURI: "pariatur",
                                    Target: "quae",
                                    URI: "consequatur",
                                    Vip: "magni",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "odit",
                                    ClusterURI: "modi",
                                    ExternalIP: "ipsum",
                                    InternalIP: "quis",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "eos",
                                    ExternalIP: "repudiandae",
                                    Interface: "deserunt",
                                    InternalIP: "minus",
                                    NetworkTags: []string{
                                        "autem",
                                    },
                                    NetworkURI: "voluptas",
                                    ServiceAccount: "aliquid",
                                    URI: "perferendis",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_INSTANCE",
                                    BackendURI: "voluptatem",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "omnis",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "voluptatem",
                                                "sed",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "aspernatur",
                                                "vel",
                                                "molestiae",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "repellendus",
                                        },
                                    },
                                    HealthCheckURI: "voluptas",
                                    LoadBalancerType: "INTERNAL_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "dolorum",
                                    MatchedIPRange: "harum",
                                    URI: "facilis",
                                },
                                ProjectID: "non",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "pariatur",
                                    DestPortRanges: []string{
                                        "adipisci",
                                        "fugiat",
                                        "rerum",
                                    },
                                    DisplayName: "et",
                                    InstanceTags: []string{
                                        "et",
                                        "rem",
                                        "magni",
                                    },
                                    NetworkURI: "modi",
                                    NextHop: "quia",
                                    NextHopType: "NEXT_HOP_VPN_GATEWAY",
                                    Priority: 86588252287369921,
                                    Protocols: []string{
                                        "et",
                                    },
                                    RouteType: "PEERING_DYNAMIC",
                                    SrcIPRange: "maiores",
                                    SrcPortRanges: []string{
                                        "placeat",
                                    },
                                    URI: "sequi",
                                },
                                State: "APPLY_EGRESS_FIREWALL_RULE",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "quaerat",
                                    Location: "numquam",
                                    URI: "facilis",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "non",
                                    IPAddress: "dolor",
                                    NetworkURI: "exercitationem",
                                    Region: "tenetur",
                                    URI: "totam",
                                    VpnTunnelURI: "quidem",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "aliquam",
                                    NetworkURI: "dicta",
                                    Region: "dolor",
                                    RemoteGateway: "est",
                                    RemoteGatewayIP: "suscipit",
                                    RoutingType: "POLICY_BASED",
                                    SourceGateway: "beatae",
                                    SourceGatewayIP: "optio",
                                    URI: "deserunt",
                                },
                            },
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "MISMATCHED_IP_VERSION",
                                    ProjectsMissingPermission: []string{
                                        "sed",
                                        "ea",
                                        "rerum",
                                    },
                                    ResourceURI: "id",
                                },
                                CausesDrop: true,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "id",
                                    Location: "deleniti",
                                    URI: "nulla",
                                    VersionID: "aliquam",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "officiis",
                                    ExternalIP: "quo",
                                    InternalIP: "officiis",
                                    NetworkURI: "aliquam",
                                    Region: "molestiae",
                                    URI: "sed",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "neque",
                                    Target: "GKE_MASTER",
                                },
                                Description: "consequatur",
                                Drop: &shared.DropInfo{
                                    Cause: "CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS",
                                    ResourceURI: "sit",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "dolor",
                                    DestinationNetworkURI: "tenetur",
                                    DestinationPort: 7240132822833978926,
                                    Protocol: "asperiores",
                                    SourceIP: "ullam",
                                    SourceNetworkURI: "libero",
                                    SourcePort: 7901331956566971997,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "provident",
                                    Direction: "qui",
                                    DisplayName: "delectus",
                                    FirewallRuleType: "FIREWALL_RULE_TYPE_UNSPECIFIED",
                                    NetworkURI: "sequi",
                                    Policy: "consequatur",
                                    Priority: 7119364310802313927,
                                    TargetServiceAccounts: []string{
                                        "facere",
                                        "reprehenderit",
                                    },
                                    TargetTags: []string{
                                        "et",
                                    },
                                    URI: "dolore",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "quia",
                                    Target: "INTERCONNECT",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "quod",
                                    MatchedPortRange: "tempora",
                                    MatchedProtocol: "ducimus",
                                    NetworkURI: "ipsam",
                                    Target: "sed",
                                    URI: "occaecati",
                                    Vip: "quia",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "in",
                                    ClusterURI: "aperiam",
                                    ExternalIP: "porro",
                                    InternalIP: "error",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "doloremque",
                                    ExternalIP: "maiores",
                                    Interface: "beatae",
                                    InternalIP: "explicabo",
                                    NetworkTags: []string{
                                        "omnis",
                                    },
                                    NetworkURI: "excepturi",
                                    ServiceAccount: "et",
                                    URI: "dolores",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_INSTANCE",
                                    BackendURI: "corrupti",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "voluptatem",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "itaque",
                                                "maxime",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "tenetur",
                                                "ipsa",
                                                "molestiae",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "esse",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "quo",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "dolor",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "voluptates",
                                                "perspiciatis",
                                                "et",
                                            },
                                            HealthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                                            URI: "error",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "occaecati",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "harum",
                                                "dignissimos",
                                                "et",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "omnis",
                                                "recusandae",
                                                "autem",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "laboriosam",
                                        },
                                    },
                                    HealthCheckURI: "earum",
                                    LoadBalancerType: "NETWORK_TCP_UDP",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "cumque",
                                    MatchedIPRange: "ut",
                                    URI: "ullam",
                                },
                                ProjectID: "quae",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "ea",
                                    DestPortRanges: []string{
                                        "consequatur",
                                        "in",
                                    },
                                    DisplayName: "qui",
                                    InstanceTags: []string{
                                        "iste",
                                        "molestiae",
                                        "quo",
                                    },
                                    NetworkURI: "laboriosam",
                                    NextHop: "accusantium",
                                    NextHopType: "NEXT_HOP_INTERCONNECT",
                                    Priority: 3108530207816673627,
                                    Protocols: []string{
                                        "hic",
                                    },
                                    RouteType: "POLICY_BASED",
                                    SrcIPRange: "quidem",
                                    SrcPortRanges: []string{
                                        "rerum",
                                        "magnam",
                                        "facere",
                                    },
                                    URI: "voluptate",
                                },
                                State: "DELIVER",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "nesciunt",
                                    Location: "quaerat",
                                    URI: "sit",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "et",
                                    IPAddress: "vitae",
                                    NetworkURI: "earum",
                                    Region: "voluptas",
                                    URI: "fuga",
                                    VpnTunnelURI: "nostrum",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "saepe",
                                    NetworkURI: "quia",
                                    Region: "quia",
                                    RemoteGateway: "delectus",
                                    RemoteGatewayIP: "rerum",
                                    RoutingType: "DYNAMIC",
                                    SourceGateway: "dolores",
                                    SourceGatewayIP: "vel",
                                    URI: "ut",
                                },
                            },
                        },
                    },
                    shared.Trace{
                        EndpointInfo: &shared.EndpointInfo{
                            DestinationIP: "ut",
                            DestinationNetworkURI: "dolorem",
                            DestinationPort: 684328843672476604,
                            Protocol: "ut",
                            SourceIP: "in",
                            SourceNetworkURI: "qui",
                            SourcePort: 1905154508241483757,
                        },
                        Steps: []shared.Step{
                            shared.Step{
                                Abort: &shared.AbortInfo{
                                    Cause: "MISMATCHED_SOURCE_NETWORK",
                                    ProjectsMissingPermission: []string{
                                        "sit",
                                    },
                                    ResourceURI: "repudiandae",
                                },
                                CausesDrop: false,
                                CloudFunction: &shared.CloudFunctionInfo{
                                    DisplayName: "suscipit",
                                    Location: "cum",
                                    URI: "esse",
                                    VersionID: "unde",
                                },
                                CloudSQLInstance: &shared.CloudSQLInstanceInfo{
                                    DisplayName: "suscipit",
                                    ExternalIP: "neque",
                                    InternalIP: "sed",
                                    NetworkURI: "adipisci",
                                    Region: "culpa",
                                    URI: "pariatur",
                                },
                                Deliver: &shared.DeliverInfo{
                                    ResourceURI: "praesentium",
                                    Target: "GOOGLE_API",
                                },
                                Description: "eos",
                                Drop: &shared.DropInfo{
                                    Cause: "CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC",
                                    ResourceURI: "sed",
                                },
                                Endpoint: &shared.EndpointInfo{
                                    DestinationIP: "perferendis",
                                    DestinationNetworkURI: "beatae",
                                    DestinationPort: 1839920340321638855,
                                    Protocol: "natus",
                                    SourceIP: "et",
                                    SourceNetworkURI: "similique",
                                    SourcePort: 7497775427843803951,
                                },
                                Firewall: &shared.FirewallInfo{
                                    Action: "harum",
                                    Direction: "quae",
                                    DisplayName: "aut",
                                    FirewallRuleType: "IMPLIED_VPC_FIREWALL_RULE",
                                    NetworkURI: "a",
                                    Policy: "est",
                                    Priority: 728340456569195508,
                                    TargetServiceAccounts: []string{
                                        "officia",
                                        "hic",
                                        "temporibus",
                                    },
                                    TargetTags: []string{
                                        "accusamus",
                                        "beatae",
                                    },
                                    URI: "ut",
                                },
                                Forward: &shared.ForwardInfo{
                                    ResourceURI: "tempore",
                                    Target: "PEERING_VPC",
                                },
                                ForwardingRule: &shared.ForwardingRuleInfo{
                                    DisplayName: "itaque",
                                    MatchedPortRange: "omnis",
                                    MatchedProtocol: "nesciunt",
                                    NetworkURI: "cum",
                                    Target: "architecto",
                                    URI: "ad",
                                    Vip: "sint",
                                },
                                GkeMaster: &shared.GkeMasterInfo{
                                    ClusterNetworkURI: "alias",
                                    ClusterURI: "enim",
                                    ExternalIP: "provident",
                                    InternalIP: "voluptatem",
                                },
                                Instance: &shared.InstanceInfo{
                                    DisplayName: "autem",
                                    ExternalIP: "maiores",
                                    Interface: "distinctio",
                                    InternalIP: "voluptas",
                                    NetworkTags: []string{
                                        "cupiditate",
                                        "sit",
                                        "ut",
                                    },
                                    NetworkURI: "nemo",
                                    ServiceAccount: "ex",
                                    URI: "porro",
                                },
                                LoadBalancer: &shared.LoadBalancerInfo{
                                    BackendType: "TARGET_POOL",
                                    BackendURI: "nemo",
                                    Backends: []shared.LoadBalancerBackend{
                                        shared.LoadBalancerBackend{
                                            DisplayName: "doloribus",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "eaque",
                                                "sit",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "vel",
                                                "a",
                                                "nihil",
                                            },
                                            HealthCheckFirewallState: "MISCONFIGURED",
                                            URI: "et",
                                        },
                                        shared.LoadBalancerBackend{
                                            DisplayName: "exercitationem",
                                            HealthCheckAllowingFirewallRules: []string{
                                                "dignissimos",
                                            },
                                            HealthCheckBlockingFirewallRules: []string{
                                                "nemo",
                                            },
                                            HealthCheckFirewallState: "CONFIGURED",
                                            URI: "quos",
                                        },
                                    },
                                    HealthCheckURI: "reprehenderit",
                                    LoadBalancerType: "SSL_PROXY",
                                },
                                Network: &shared.NetworkInfo{
                                    DisplayName: "nobis",
                                    MatchedIPRange: "quia",
                                    URI: "eius",
                                },
                                ProjectID: "qui",
                                Route: &shared.RouteInfo{
                                    DestIPRange: "unde",
                                    DestPortRanges: []string{
                                        "pariatur",
                                        "et",
                                        "eum",
                                    },
                                    DisplayName: "quia",
                                    InstanceTags: []string{
                                        "perspiciatis",
                                        "molestias",
                                    },
                                    NetworkURI: "magni",
                                    NextHop: "dolores",
                                    NextHopType: "NEXT_HOP_PEERING",
                                    Priority: 2125611512880150363,
                                    Protocols: []string{
                                        "vel",
                                    },
                                    RouteType: "ROUTE_TYPE_UNSPECIFIED",
                                    SrcIPRange: "soluta",
                                    SrcPortRanges: []string{
                                        "illum",
                                        "ut",
                                    },
                                    URI: "sequi",
                                },
                                State: "NAT",
                                VpcConnector: &shared.VpcConnectorInfo{
                                    DisplayName: "aut",
                                    Location: "qui",
                                    URI: "est",
                                },
                                VpnGateway: &shared.VpnGatewayInfo{
                                    DisplayName: "voluptas",
                                    IPAddress: "laborum",
                                    NetworkURI: "error",
                                    Region: "ut",
                                    URI: "consequatur",
                                    VpnTunnelURI: "sunt",
                                },
                                VpnTunnel: &shared.VpnTunnelInfo{
                                    DisplayName: "aut",
                                    NetworkURI: "eveniet",
                                    Region: "magni",
                                    RemoteGateway: "consequatur",
                                    RemoteGatewayIP: "et",
                                    RoutingType: "ROUTING_TYPE_UNSPECIFIED",
                                    SourceGateway: "ab",
                                    SourceGatewayIP: "eum",
                                    URI: "nihil",
                                },
                            },
                        },
                    },
                },
                VerifyTime: "dolorem",
            },
            RelatedProjects: []string{
                "consequatur",
            },
            Source: &shared.Endpoint{
                CloudFunction: &shared.CloudFunctionEndpoint{
                    URI: "sunt",
                },
                CloudSQLInstance: "eaque",
                GkeMasterCluster: "exercitationem",
                Instance: "tenetur",
                IPAddress: "atque",
                Network: "veniam",
                NetworkType: "GCP_NETWORK",
                Port: 8590454310484481497,
                ProjectID: "magnam",
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
