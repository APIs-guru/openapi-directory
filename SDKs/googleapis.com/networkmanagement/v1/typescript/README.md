# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest, NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "nihil",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "culpa",
    alt: "json",
    callback: "laudantium",
    fields: "voluptatem",
    key: "deserunt",
    oauthToken: "laborum",
    prettyPrint: true,
    quotaUser: "praesentium",
    testId: "quibusdam",
    uploadType: "saepe",
    uploadProtocol: "in",
  },
  request: {
    description: "recusandae",
    destination: {
      cloudFunction: {
        uri: "odio",
      },
      cloudSqlInstance: "ut",
      gkeMasterCluster: "atque",
      instance: "voluptates",
      ipAddress: "dolorum",
      network: "quia",
      networkType: "GCP_NETWORK",
      port: 7629641516016178145,
      projectId: "deleniti",
    },
    labels: {
      "eos": "quasi",
    },
    name: "quis",
    protocol: "praesentium",
    reachabilityDetails: {
      error: {
        code: 3676206911506782032,
        details: [
          {
            "est": "accusantium",
            "rerum": "pariatur",
          },
        ],
        message: "fuga",
      },
      result: "AMBIGUOUS",
      traces: [
        {
          endpointInfo: {
            destinationIp: "molestiae",
            destinationNetworkUri: "nisi",
            destinationPort: 7215180393867524824,
            protocol: "veritatis",
            sourceIp: "officiis",
            sourceNetworkUri: "vel",
            sourcePort: 5830518212590307683,
          },
          steps: [
            {
              abort: {
                cause: "MISMATCHED_SOURCE_NETWORK",
                projectsMissingPermission: [
                  "placeat",
                  "consectetur",
                ],
                resourceUri: "sed",
              },
              causesDrop: true,
              cloudFunction: {
                displayName: "modi",
                location: "vel",
                uri: "amet",
                versionId: "adipisci",
              },
              cloudSqlInstance: {
                displayName: "consequuntur",
                externalIp: "voluptates",
                internalIp: "ullam",
                networkUri: "alias",
                region: "recusandae",
                uri: "nihil",
              },
              deliver: {
                resourceUri: "itaque",
                target: "PSC_GOOGLE_API",
              },
              description: "sapiente",
              drop: {
                cause: "CLOUD_SQL_INSTANCE_NOT_RUNNING",
                resourceUri: "voluptatem",
              },
              endpoint: {
                destinationIp: "repudiandae",
                destinationNetworkUri: "eligendi",
                destinationPort: 4800944783392072888,
                protocol: "veritatis",
                sourceIp: "eaque",
                sourceNetworkUri: "consequatur",
                sourcePort: 8268274953394897045,
              },
              firewall: {
                action: "tempore",
                direction: "quia",
                displayName: "soluta",
                firewallRuleType: "NETWORK_FIREWALL_POLICY_RULE",
                networkUri: "aut",
                policy: "autem",
                priority: 384999311801709440,
                targetServiceAccounts: [
                  "quae",
                  "voluptatem",
                ],
                targetTags: [
                  "velit",
                  "voluptates",
                ],
                uri: "ut",
              },
              forward: {
                resourceUri: "voluptas",
                target: "ANOTHER_PROJECT",
              },
              forwardingRule: {
                displayName: "eaque",
                matchedPortRange: "suscipit",
                matchedProtocol: "voluptas",
                networkUri: "pariatur",
                target: "quae",
                uri: "consequatur",
                vip: "magni",
              },
              gkeMaster: {
                clusterNetworkUri: "odit",
                clusterUri: "modi",
                externalIp: "ipsum",
                internalIp: "quis",
              },
              instance: {
                displayName: "eos",
                externalIp: "repudiandae",
                interface: "deserunt",
                internalIp: "minus",
                networkTags: [
                  "autem",
                ],
                networkUri: "voluptas",
                serviceAccount: "aliquid",
                uri: "perferendis",
              },
              loadBalancer: {
                backendType: "TARGET_INSTANCE",
                backendUri: "voluptatem",
                backends: [
                  {
                    displayName: "omnis",
                    healthCheckAllowingFirewallRules: [
                      "voluptatem",
                      "sed",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "aspernatur",
                      "vel",
                      "molestiae",
                    ],
                    healthCheckFirewallState: "MISCONFIGURED",
                    uri: "repellendus",
                  },
                ],
                healthCheckUri: "voluptas",
                loadBalancerType: "INTERNAL_TCP_UDP",
              },
              network: {
                displayName: "dolorum",
                matchedIpRange: "harum",
                uri: "facilis",
              },
              projectId: "non",
              route: {
                destIpRange: "pariatur",
                destPortRanges: [
                  "adipisci",
                  "fugiat",
                  "rerum",
                ],
                displayName: "et",
                instanceTags: [
                  "et",
                  "rem",
                  "magni",
                ],
                networkUri: "modi",
                nextHop: "quia",
                nextHopType: "NEXT_HOP_VPN_GATEWAY",
                priority: 86588252287369921,
                protocols: [
                  "et",
                ],
                routeType: "PEERING_DYNAMIC",
                srcIpRange: "maiores",
                srcPortRanges: [
                  "placeat",
                ],
                uri: "sequi",
              },
              state: "APPLY_EGRESS_FIREWALL_RULE",
              vpcConnector: {
                displayName: "quaerat",
                location: "numquam",
                uri: "facilis",
              },
              vpnGateway: {
                displayName: "non",
                ipAddress: "dolor",
                networkUri: "exercitationem",
                region: "tenetur",
                uri: "totam",
                vpnTunnelUri: "quidem",
              },
              vpnTunnel: {
                displayName: "aliquam",
                networkUri: "dicta",
                region: "dolor",
                remoteGateway: "est",
                remoteGatewayIp: "suscipit",
                routingType: "POLICY_BASED",
                sourceGateway: "beatae",
                sourceGatewayIp: "optio",
                uri: "deserunt",
              },
            },
            {
              abort: {
                cause: "MISMATCHED_IP_VERSION",
                projectsMissingPermission: [
                  "sed",
                  "ea",
                  "rerum",
                ],
                resourceUri: "id",
              },
              causesDrop: true,
              cloudFunction: {
                displayName: "id",
                location: "deleniti",
                uri: "nulla",
                versionId: "aliquam",
              },
              cloudSqlInstance: {
                displayName: "officiis",
                externalIp: "quo",
                internalIp: "officiis",
                networkUri: "aliquam",
                region: "molestiae",
                uri: "sed",
              },
              deliver: {
                resourceUri: "neque",
                target: "GKE_MASTER",
              },
              description: "consequatur",
              drop: {
                cause: "CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS",
                resourceUri: "sit",
              },
              endpoint: {
                destinationIp: "dolor",
                destinationNetworkUri: "tenetur",
                destinationPort: 7240132822833978926,
                protocol: "asperiores",
                sourceIp: "ullam",
                sourceNetworkUri: "libero",
                sourcePort: 7901331956566971997,
              },
              firewall: {
                action: "provident",
                direction: "qui",
                displayName: "delectus",
                firewallRuleType: "FIREWALL_RULE_TYPE_UNSPECIFIED",
                networkUri: "sequi",
                policy: "consequatur",
                priority: 7119364310802313927,
                targetServiceAccounts: [
                  "facere",
                  "reprehenderit",
                ],
                targetTags: [
                  "et",
                ],
                uri: "dolore",
              },
              forward: {
                resourceUri: "quia",
                target: "INTERCONNECT",
              },
              forwardingRule: {
                displayName: "quod",
                matchedPortRange: "tempora",
                matchedProtocol: "ducimus",
                networkUri: "ipsam",
                target: "sed",
                uri: "occaecati",
                vip: "quia",
              },
              gkeMaster: {
                clusterNetworkUri: "in",
                clusterUri: "aperiam",
                externalIp: "porro",
                internalIp: "error",
              },
              instance: {
                displayName: "doloremque",
                externalIp: "maiores",
                interface: "beatae",
                internalIp: "explicabo",
                networkTags: [
                  "omnis",
                ],
                networkUri: "excepturi",
                serviceAccount: "et",
                uri: "dolores",
              },
              loadBalancer: {
                backendType: "TARGET_INSTANCE",
                backendUri: "corrupti",
                backends: [
                  {
                    displayName: "voluptatem",
                    healthCheckAllowingFirewallRules: [
                      "itaque",
                      "maxime",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "tenetur",
                      "ipsa",
                      "molestiae",
                    ],
                    healthCheckFirewallState: "MISCONFIGURED",
                    uri: "esse",
                  },
                  {
                    displayName: "quo",
                    healthCheckAllowingFirewallRules: [
                      "dolor",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "voluptates",
                      "perspiciatis",
                      "et",
                    ],
                    healthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                    uri: "error",
                  },
                  {
                    displayName: "occaecati",
                    healthCheckAllowingFirewallRules: [
                      "harum",
                      "dignissimos",
                      "et",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "omnis",
                      "recusandae",
                      "autem",
                    ],
                    healthCheckFirewallState: "MISCONFIGURED",
                    uri: "laboriosam",
                  },
                ],
                healthCheckUri: "earum",
                loadBalancerType: "NETWORK_TCP_UDP",
              },
              network: {
                displayName: "cumque",
                matchedIpRange: "ut",
                uri: "ullam",
              },
              projectId: "quae",
              route: {
                destIpRange: "ea",
                destPortRanges: [
                  "consequatur",
                  "in",
                ],
                displayName: "qui",
                instanceTags: [
                  "iste",
                  "molestiae",
                  "quo",
                ],
                networkUri: "laboriosam",
                nextHop: "accusantium",
                nextHopType: "NEXT_HOP_INTERCONNECT",
                priority: 3108530207816673627,
                protocols: [
                  "hic",
                ],
                routeType: "POLICY_BASED",
                srcIpRange: "quidem",
                srcPortRanges: [
                  "rerum",
                  "magnam",
                  "facere",
                ],
                uri: "voluptate",
              },
              state: "DELIVER",
              vpcConnector: {
                displayName: "nesciunt",
                location: "quaerat",
                uri: "sit",
              },
              vpnGateway: {
                displayName: "et",
                ipAddress: "vitae",
                networkUri: "earum",
                region: "voluptas",
                uri: "fuga",
                vpnTunnelUri: "nostrum",
              },
              vpnTunnel: {
                displayName: "saepe",
                networkUri: "quia",
                region: "quia",
                remoteGateway: "delectus",
                remoteGatewayIp: "rerum",
                routingType: "DYNAMIC",
                sourceGateway: "dolores",
                sourceGatewayIp: "vel",
                uri: "ut",
              },
            },
          ],
        },
        {
          endpointInfo: {
            destinationIp: "ut",
            destinationNetworkUri: "dolorem",
            destinationPort: 684328843672476604,
            protocol: "ut",
            sourceIp: "in",
            sourceNetworkUri: "qui",
            sourcePort: 1905154508241483757,
          },
          steps: [
            {
              abort: {
                cause: "MISMATCHED_SOURCE_NETWORK",
                projectsMissingPermission: [
                  "sit",
                ],
                resourceUri: "repudiandae",
              },
              causesDrop: false,
              cloudFunction: {
                displayName: "suscipit",
                location: "cum",
                uri: "esse",
                versionId: "unde",
              },
              cloudSqlInstance: {
                displayName: "suscipit",
                externalIp: "neque",
                internalIp: "sed",
                networkUri: "adipisci",
                region: "culpa",
                uri: "pariatur",
              },
              deliver: {
                resourceUri: "praesentium",
                target: "GOOGLE_API",
              },
              description: "eos",
              drop: {
                cause: "CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC",
                resourceUri: "sed",
              },
              endpoint: {
                destinationIp: "perferendis",
                destinationNetworkUri: "beatae",
                destinationPort: 1839920340321638855,
                protocol: "natus",
                sourceIp: "et",
                sourceNetworkUri: "similique",
                sourcePort: 7497775427843803951,
              },
              firewall: {
                action: "harum",
                direction: "quae",
                displayName: "aut",
                firewallRuleType: "IMPLIED_VPC_FIREWALL_RULE",
                networkUri: "a",
                policy: "est",
                priority: 728340456569195508,
                targetServiceAccounts: [
                  "officia",
                  "hic",
                  "temporibus",
                ],
                targetTags: [
                  "accusamus",
                  "beatae",
                ],
                uri: "ut",
              },
              forward: {
                resourceUri: "tempore",
                target: "PEERING_VPC",
              },
              forwardingRule: {
                displayName: "itaque",
                matchedPortRange: "omnis",
                matchedProtocol: "nesciunt",
                networkUri: "cum",
                target: "architecto",
                uri: "ad",
                vip: "sint",
              },
              gkeMaster: {
                clusterNetworkUri: "alias",
                clusterUri: "enim",
                externalIp: "provident",
                internalIp: "voluptatem",
              },
              instance: {
                displayName: "autem",
                externalIp: "maiores",
                interface: "distinctio",
                internalIp: "voluptas",
                networkTags: [
                  "cupiditate",
                  "sit",
                  "ut",
                ],
                networkUri: "nemo",
                serviceAccount: "ex",
                uri: "porro",
              },
              loadBalancer: {
                backendType: "TARGET_POOL",
                backendUri: "nemo",
                backends: [
                  {
                    displayName: "doloribus",
                    healthCheckAllowingFirewallRules: [
                      "eaque",
                      "sit",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "vel",
                      "a",
                      "nihil",
                    ],
                    healthCheckFirewallState: "MISCONFIGURED",
                    uri: "et",
                  },
                  {
                    displayName: "exercitationem",
                    healthCheckAllowingFirewallRules: [
                      "dignissimos",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "nemo",
                    ],
                    healthCheckFirewallState: "CONFIGURED",
                    uri: "quos",
                  },
                ],
                healthCheckUri: "reprehenderit",
                loadBalancerType: "SSL_PROXY",
              },
              network: {
                displayName: "nobis",
                matchedIpRange: "quia",
                uri: "eius",
              },
              projectId: "qui",
              route: {
                destIpRange: "unde",
                destPortRanges: [
                  "pariatur",
                  "et",
                  "eum",
                ],
                displayName: "quia",
                instanceTags: [
                  "perspiciatis",
                  "molestias",
                ],
                networkUri: "magni",
                nextHop: "dolores",
                nextHopType: "NEXT_HOP_PEERING",
                priority: 2125611512880150363,
                protocols: [
                  "vel",
                ],
                routeType: "ROUTE_TYPE_UNSPECIFIED",
                srcIpRange: "soluta",
                srcPortRanges: [
                  "illum",
                  "ut",
                ],
                uri: "sequi",
              },
              state: "NAT",
              vpcConnector: {
                displayName: "aut",
                location: "qui",
                uri: "est",
              },
              vpnGateway: {
                displayName: "voluptas",
                ipAddress: "laborum",
                networkUri: "error",
                region: "ut",
                uri: "consequatur",
                vpnTunnelUri: "sunt",
              },
              vpnTunnel: {
                displayName: "aut",
                networkUri: "eveniet",
                region: "magni",
                remoteGateway: "consequatur",
                remoteGatewayIp: "et",
                routingType: "ROUTING_TYPE_UNSPECIFIED",
                sourceGateway: "ab",
                sourceGatewayIp: "eum",
                uri: "nihil",
              },
            },
          ],
        },
      ],
      verifyTime: "dolorem",
    },
    relatedProjects: [
      "consequatur",
    ],
    source: {
      cloudFunction: {
        uri: "sunt",
      },
      cloudSqlInstance: "eaque",
      gkeMasterCluster: "exercitationem",
      instance: "tenetur",
      ipAddress: "atque",
      network: "veniam",
      networkType: "GCP_NETWORK",
      port: 8590454310484481497,
      projectId: "magnam",
    },
  },
};

sdk.projects.networkmanagementProjectsLocationsGlobalConnectivityTestsCreate(req).then((res: NetworkmanagementProjectsLocationsGlobalConnectivityTestsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `networkmanagementProjectsLocationsGlobalConnectivityTestsCreate` - Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
* `networkmanagementProjectsLocationsGlobalConnectivityTestsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networkmanagementProjectsLocationsGlobalConnectivityTestsList` - Lists all Connectivity Tests owned by a project.
* `networkmanagementProjectsLocationsGlobalConnectivityTestsPatch` - Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
* `networkmanagementProjectsLocationsGlobalConnectivityTestsRerun` - Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
* `networkmanagementProjectsLocationsGlobalConnectivityTestsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networkmanagementProjectsLocationsGlobalConnectivityTestsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `networkmanagementProjectsLocationsGlobalOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networkmanagementProjectsLocationsGlobalOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `networkmanagementProjectsLocationsGlobalOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `networkmanagementProjectsLocationsGlobalOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `networkmanagementProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
