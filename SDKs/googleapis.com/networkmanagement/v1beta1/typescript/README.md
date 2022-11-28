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
    parent: "quos",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "ea",
    alt: "proto",
    callback: "et",
    fields: "occaecati",
    key: "non",
    oauthToken: "suscipit",
    prettyPrint: true,
    quotaUser: "perferendis",
    testId: "et",
    uploadType: "repellendus",
    uploadProtocol: "quo",
  },
  request: {
    description: "sunt",
    destination: {
      appEngineVersion: {
        uri: "rerum",
      },
      cloudFunction: {
        uri: "consequuntur",
      },
      cloudRunRevision: {
        uri: "alias",
      },
      cloudSqlInstance: "voluptatem",
      gkeMasterCluster: "cum",
      instance: "veritatis",
      ipAddress: "odio",
      network: "nostrum",
      networkType: "NON_GCP_NETWORK",
      port: 8166794903471616186,
      projectId: "est",
    },
    labels: {
      "quaerat": "placeat",
    },
    name: "ea",
    probingDetails: {
      abortCause: "PROBING_ABORT_CAUSE_UNSPECIFIED",
      destinationEgressLocation: {
        metropolitanArea: "vitae",
      },
      endpointInfo: {
        destinationIp: "dicta",
        destinationNetworkUri: "vero",
        destinationPort: 406892514386702842,
        protocol: "ut",
        sourceAgentUri: "omnis",
        sourceIp: "aut",
        sourceNetworkUri: "fugit",
        sourcePort: 2342556250709472868,
      },
      error: {
        code: 3630233539265663319,
        details: [
          {
            "est": "odio",
            "magnam": "blanditiis",
          },
          {
            "sit": "distinctio",
            "quaerat": "beatae",
            "quia": "sint",
          },
          {
            "omnis": "molestiae",
            "doloribus": "et",
            "sit": "maiores",
          },
        ],
        message: "eum",
      },
      probingLatency: {
        latencyPercentiles: [
          {
            latencyMicros: "enim",
            percent: 4913623229222588005,
          },
          {
            latencyMicros: "numquam",
            percent: 2548065803788474517,
          },
          {
            latencyMicros: "fugit",
            percent: 5511395499893954652,
          },
        ],
      },
      result: "REACHABILITY_INCONSISTENT",
      sentProbeCount: 7291791888769849865,
      successfulProbeCount: 2219912581291099494,
      verifyTime: "consequatur",
    },
    protocol: "non",
    reachabilityDetails: {
      error: {
        code: 6556454256354947128,
        details: [
          {
            "aperiam": "veniam",
          },
          {
            "in": "doloribus",
            "dolorem": "et",
          },
          {
            "et": "corrupti",
            "iste": "ipsam",
            "saepe": "repellat",
          },
        ],
        message: "nesciunt",
      },
      result: "REACHABLE",
      traces: [
        {
          endpointInfo: {
            destinationIp: "tenetur",
            destinationNetworkUri: "dicta",
            destinationPort: 1121377157772130420,
            protocol: "nemo",
            sourceAgentUri: "occaecati",
            sourceIp: "autem",
            sourceNetworkUri: "nesciunt",
            sourcePort: 7817225063413125512,
          },
          steps: [
            {
              abort: {
                cause: "MISMATCHED_IP_VERSION",
                projectsMissingPermission: [
                  "iure",
                  "et",
                ],
                resourceUri: "voluptatum",
              },
              appEngineVersion: {
                displayName: "itaque",
                environment: "et",
                runtime: "corrupti",
                uri: "et",
              },
              causesDrop: true,
              cloudFunction: {
                displayName: "aut",
                location: "similique",
                uri: "quibusdam",
                versionId: "earum",
              },
              cloudRunRevision: {
                displayName: "est",
                location: "quia",
                serviceName: "facilis",
                serviceUri: "error",
                uri: "ipsa",
              },
              cloudSqlInstance: {
                displayName: "nobis",
                externalIp: "aut",
                internalIp: "hic",
                networkUri: "labore",
                region: "ut",
                uri: "nostrum",
              },
              deliver: {
                resourceUri: "esse",
                target: "PSC_VPC_SC",
              },
              description: "ratione",
              drop: {
                cause: "UNKNOWN_INTERNAL_ADDRESS",
                resourceUri: "illum",
              },
              endpoint: {
                destinationIp: "perferendis",
                destinationNetworkUri: "commodi",
                destinationPort: 1171145952095700334,
                protocol: "autem",
                sourceAgentUri: "iusto",
                sourceIp: "voluptas",
                sourceNetworkUri: "commodi",
                sourcePort: 6067684880070941770,
              },
              firewall: {
                action: "optio",
                direction: "velit",
                displayName: "eaque",
                firewallRuleType: "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE",
                networkUri: "nemo",
                policy: "consequatur",
                priority: 5644771586617071549,
                targetServiceAccounts: [
                  "nostrum",
                ],
                targetTags: [
                  "eaque",
                  "et",
                ],
                uri: "esse",
              },
              forward: {
                resourceUri: "dicta",
                target: "INTERCONNECT",
              },
              forwardingRule: {
                displayName: "laborum",
                matchedPortRange: "suscipit",
                matchedProtocol: "iusto",
                networkUri: "quisquam",
                target: "sunt",
                uri: "nisi",
                vip: "eum",
              },
              gkeMaster: {
                clusterNetworkUri: "ipsam",
                clusterUri: "deleniti",
                externalIp: "ab",
                internalIp: "velit",
              },
              instance: {
                displayName: "possimus",
                externalIp: "porro",
                interface: "delectus",
                internalIp: "natus",
                networkTags: [
                  "dolorum",
                ],
                networkUri: "placeat",
                serviceAccount: "rerum",
                uri: "ullam",
              },
              loadBalancer: {
                backendType: "TARGET_POOL",
                backendUri: "neque",
                backends: [
                  {
                    displayName: "quisquam",
                    healthCheckAllowingFirewallRules: [
                      "quas",
                      "sint",
                      "nihil",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "praesentium",
                    ],
                    healthCheckFirewallState: "CONFIGURED",
                    uri: "saepe",
                  },
                  {
                    displayName: "tempora",
                    healthCheckAllowingFirewallRules: [
                      "natus",
                      "blanditiis",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "sit",
                      "architecto",
                      "expedita",
                    ],
                    healthCheckFirewallState: "CONFIGURED",
                    uri: "omnis",
                  },
                ],
                healthCheckUri: "voluptatem",
                loadBalancerType: "HTTP_PROXY",
              },
              network: {
                displayName: "officiis",
                matchedIpRange: "ut",
                uri: "dolorum",
              },
              projectId: "eos",
              route: {
                destIpRange: "iste",
                destPortRanges: [
                  "illum",
                ],
                displayName: "consequuntur",
                instanceTags: [
                  "voluptatum",
                ],
                networkUri: "explicabo",
                nextHop: "commodi",
                nextHopType: "NEXT_HOP_VPN_TUNNEL",
                priority: 1794453649375207473,
                protocols: [
                  "dignissimos",
                ],
                routeType: "SUBNET",
                srcIpRange: "sequi",
                srcPortRanges: [
                  "voluptatum",
                  "vero",
                ],
                uri: "quis",
              },
              state: "ARRIVE_AT_INSTANCE",
              vpcConnector: {
                displayName: "dignissimos",
                location: "cupiditate",
                uri: "ipsum",
              },
              vpnGateway: {
                displayName: "provident",
                ipAddress: "dignissimos",
                networkUri: "ut",
                region: "voluptatum",
                uri: "earum",
                vpnTunnelUri: "distinctio",
              },
              vpnTunnel: {
                displayName: "mollitia",
                networkUri: "vero",
                region: "et",
                remoteGateway: "natus",
                remoteGatewayIp: "aliquid",
                routingType: "DYNAMIC",
                sourceGateway: "dicta",
                sourceGatewayIp: "voluptatum",
                uri: "illum",
              },
            },
          ],
        },
        {
          endpointInfo: {
            destinationIp: "quam",
            destinationNetworkUri: "officia",
            destinationPort: 2343442719278574416,
            protocol: "ex",
            sourceAgentUri: "et",
            sourceIp: "laboriosam",
            sourceNetworkUri: "temporibus",
            sourcePort: 8579405288472525523,
          },
          steps: [
            {
              abort: {
                cause: "INTERNAL_ERROR",
                projectsMissingPermission: [
                  "blanditiis",
                ],
                resourceUri: "et",
              },
              appEngineVersion: {
                displayName: "beatae",
                environment: "ut",
                runtime: "esse",
                uri: "ut",
              },
              causesDrop: true,
              cloudFunction: {
                displayName: "aut",
                location: "est",
                uri: "in",
                versionId: "corrupti",
              },
              cloudRunRevision: {
                displayName: "ducimus",
                location: "amet",
                serviceName: "hic",
                serviceUri: "enim",
                uri: "animi",
              },
              cloudSqlInstance: {
                displayName: "ea",
                externalIp: "tempore",
                internalIp: "cupiditate",
                networkUri: "amet",
                region: "voluptatum",
                uri: "a",
              },
              deliver: {
                resourceUri: "nesciunt",
                target: "GKE_MASTER",
              },
              description: "nihil",
              drop: {
                cause: "GKE_MASTER_UNAUTHORIZED_ACCESS",
                resourceUri: "quaerat",
              },
              endpoint: {
                destinationIp: "cumque",
                destinationNetworkUri: "ad",
                destinationPort: 7083053716688054346,
                protocol: "ea",
                sourceAgentUri: "reprehenderit",
                sourceIp: "alias",
                sourceNetworkUri: "illum",
                sourcePort: 5056582515198587060,
              },
              firewall: {
                action: "ea",
                direction: "animi",
                displayName: "nostrum",
                firewallRuleType: "NETWORK_FIREWALL_POLICY_RULE",
                networkUri: "fugiat",
                policy: "nemo",
                priority: 2015698736238837837,
                targetServiceAccounts: [
                  "quis",
                  "rem",
                ],
                targetTags: [
                  "sint",
                ],
                uri: "earum",
              },
              forward: {
                resourceUri: "quia",
                target: "ANOTHER_PROJECT",
              },
              forwardingRule: {
                displayName: "vero",
                matchedPortRange: "et",
                matchedProtocol: "voluptas",
                networkUri: "fugiat",
                target: "atque",
                uri: "explicabo",
                vip: "tempora",
              },
              gkeMaster: {
                clusterNetworkUri: "similique",
                clusterUri: "impedit",
                externalIp: "dignissimos",
                internalIp: "dolores",
              },
              instance: {
                displayName: "a",
                externalIp: "et",
                interface: "porro",
                internalIp: "odit",
                networkTags: [
                  "ea",
                  "facilis",
                ],
                networkUri: "et",
                serviceAccount: "velit",
                uri: "vel",
              },
              loadBalancer: {
                backendType: "BACKEND_TYPE_UNSPECIFIED",
                backendUri: "atque",
                backends: [
                  {
                    displayName: "dolorem",
                    healthCheckAllowingFirewallRules: [
                      "iste",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "eum",
                      "ab",
                      "reiciendis",
                    ],
                    healthCheckFirewallState: "MISCONFIGURED",
                    uri: "nostrum",
                  },
                  {
                    displayName: "quod",
                    healthCheckAllowingFirewallRules: [
                      "perferendis",
                      "veritatis",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "repellendus",
                      "earum",
                      "perspiciatis",
                    ],
                    healthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                    uri: "provident",
                  },
                  {
                    displayName: "error",
                    healthCheckAllowingFirewallRules: [
                      "sit",
                      "deleniti",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "quia",
                      "ducimus",
                    ],
                    healthCheckFirewallState: "MISCONFIGURED",
                    uri: "facilis",
                  },
                ],
                healthCheckUri: "eos",
                loadBalancerType: "INTERNAL_TCP_UDP",
              },
              network: {
                displayName: "culpa",
                matchedIpRange: "sapiente",
                uri: "pariatur",
              },
              projectId: "quis",
              route: {
                destIpRange: "eaque",
                destPortRanges: [
                  "ipsam",
                ],
                displayName: "corrupti",
                instanceTags: [
                  "reprehenderit",
                  "omnis",
                  "quos",
                ],
                networkUri: "sed",
                nextHop: "aperiam",
                nextHopType: "NEXT_HOP_INSTANCE",
                priority: 635975495164142610,
                protocols: [
                  "quo",
                  "unde",
                ],
                routeType: "ROUTE_TYPE_UNSPECIFIED",
                srcIpRange: "est",
                srcPortRanges: [
                  "culpa",
                  "perferendis",
                  "quidem",
                ],
                uri: "hic",
              },
              state: "SPOOFING_APPROVED",
              vpcConnector: {
                displayName: "vero",
                location: "corrupti",
                uri: "est",
              },
              vpnGateway: {
                displayName: "deserunt",
                ipAddress: "dignissimos",
                networkUri: "qui",
                region: "accusamus",
                uri: "qui",
                vpnTunnelUri: "voluptas",
              },
              vpnTunnel: {
                displayName: "dolor",
                networkUri: "saepe",
                region: "nisi",
                remoteGateway: "rem",
                remoteGatewayIp: "sed",
                routingType: "ROUTING_TYPE_UNSPECIFIED",
                sourceGateway: "id",
                sourceGatewayIp: "in",
                uri: "occaecati",
              },
            },
            {
              abort: {
                cause: "GKE_KONNECTIVITY_PROXY_UNSUPPORTED",
                projectsMissingPermission: [
                  "corporis",
                ],
                resourceUri: "ab",
              },
              appEngineVersion: {
                displayName: "quo",
                environment: "aut",
                runtime: "perferendis",
                uri: "consequatur",
              },
              causesDrop: true,
              cloudFunction: {
                displayName: "minima",
                location: "reprehenderit",
                uri: "repellat",
                versionId: "eligendi",
              },
              cloudRunRevision: {
                displayName: "excepturi",
                location: "dicta",
                serviceName: "et",
                serviceUri: "et",
                uri: "ut",
              },
              cloudSqlInstance: {
                displayName: "expedita",
                externalIp: "error",
                internalIp: "molestiae",
                networkUri: "sed",
                region: "est",
                uri: "et",
              },
              deliver: {
                resourceUri: "ducimus",
                target: "PSC_PUBLISHED_SERVICE",
              },
              description: "vel",
              drop: {
                cause: "FORWARDING_RULE_REGION_MISMATCH",
                resourceUri: "vitae",
              },
              endpoint: {
                destinationIp: "possimus",
                destinationNetworkUri: "ducimus",
                destinationPort: 1744045867786174459,
                protocol: "quis",
                sourceAgentUri: "consequatur",
                sourceIp: "atque",
                sourceNetworkUri: "quia",
                sourcePort: 5932515898201635365,
              },
              firewall: {
                action: "suscipit",
                direction: "in",
                displayName: "repellendus",
                firewallRuleType: "NETWORK_FIREWALL_POLICY_RULE",
                networkUri: "fuga",
                policy: "et",
                priority: 1668987215539536292,
                targetServiceAccounts: [
                  "ut",
                  "repellendus",
                  "animi",
                ],
                targetTags: [
                  "et",
                ],
                uri: "rerum",
              },
              forward: {
                resourceUri: "aut",
                target: "PEERING_VPC",
              },
              forwardingRule: {
                displayName: "eum",
                matchedPortRange: "eius",
                matchedProtocol: "rerum",
                networkUri: "ea",
                target: "saepe",
                uri: "facere",
                vip: "dolor",
              },
              gkeMaster: {
                clusterNetworkUri: "quasi",
                clusterUri: "animi",
                externalIp: "quis",
                internalIp: "optio",
              },
              instance: {
                displayName: "sunt",
                externalIp: "ipsa",
                interface: "neque",
                internalIp: "et",
                networkTags: [
                  "vel",
                ],
                networkUri: "aut",
                serviceAccount: "eligendi",
                uri: "eum",
              },
              loadBalancer: {
                backendType: "TARGET_INSTANCE",
                backendUri: "nihil",
                backends: [
                  {
                    displayName: "velit",
                    healthCheckAllowingFirewallRules: [
                      "ipsa",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "ea",
                    ],
                    healthCheckFirewallState: "MISCONFIGURED",
                    uri: "dolores",
                  },
                  {
                    displayName: "quia",
                    healthCheckAllowingFirewallRules: [
                      "ut",
                      "debitis",
                      "et",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "odit",
                    ],
                    healthCheckFirewallState: "HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED",
                    uri: "odio",
                  },
                ],
                healthCheckUri: "enim",
                loadBalancerType: "LOAD_BALANCER_TYPE_UNSPECIFIED",
              },
              network: {
                displayName: "magni",
                matchedIpRange: "cum",
                uri: "ut",
              },
              projectId: "perspiciatis",
              route: {
                destIpRange: "aut",
                destPortRanges: [
                  "aspernatur",
                  "doloribus",
                  "at",
                ],
                displayName: "ipsam",
                instanceTags: [
                  "at",
                  "et",
                ],
                networkUri: "inventore",
                nextHop: "est",
                nextHopType: "NEXT_HOP_BLACKHOLE",
                priority: 6900336721021663873,
                protocols: [
                  "culpa",
                  "quia",
                  "expedita",
                ],
                routeType: "STATIC",
                srcIpRange: "doloremque",
                srcPortRanges: [
                  "et",
                ],
                uri: "dicta",
              },
              state: "DELIVER",
              vpcConnector: {
                displayName: "porro",
                location: "sint",
                uri: "aut",
              },
              vpnGateway: {
                displayName: "inventore",
                ipAddress: "ut",
                networkUri: "maiores",
                region: "voluptatem",
                uri: "quibusdam",
                vpnTunnelUri: "doloribus",
              },
              vpnTunnel: {
                displayName: "aut",
                networkUri: "illum",
                region: "ut",
                remoteGateway: "sit",
                remoteGatewayIp: "modi",
                routingType: "ROUTE_BASED",
                sourceGateway: "et",
                sourceGatewayIp: "nam",
                uri: "necessitatibus",
              },
            },
          ],
        },
        {
          endpointInfo: {
            destinationIp: "laborum",
            destinationNetworkUri: "enim",
            destinationPort: 4901173082104078004,
            protocol: "architecto",
            sourceAgentUri: "architecto",
            sourceIp: "harum",
            sourceNetworkUri: "voluptates",
            sourcePort: 7885399681297397340,
          },
          steps: [
            {
              abort: {
                cause: "GKE_KONNECTIVITY_PROXY_UNSUPPORTED",
                projectsMissingPermission: [
                  "sed",
                  "incidunt",
                ],
                resourceUri: "iste",
              },
              appEngineVersion: {
                displayName: "sit",
                environment: "est",
                runtime: "quo",
                uri: "explicabo",
              },
              causesDrop: true,
              cloudFunction: {
                displayName: "et",
                location: "quia",
                uri: "aspernatur",
                versionId: "animi",
              },
              cloudRunRevision: {
                displayName: "quasi",
                location: "qui",
                serviceName: "rerum",
                serviceUri: "odit",
                uri: "voluptas",
              },
              cloudSqlInstance: {
                displayName: "unde",
                externalIp: "perspiciatis",
                internalIp: "porro",
                networkUri: "dicta",
                region: "mollitia",
                uri: "totam",
              },
              deliver: {
                resourceUri: "beatae",
                target: "GOOGLE_API",
              },
              description: "unde",
              drop: {
                cause: "FORWARDING_RULE_MISMATCH",
                resourceUri: "vitae",
              },
              endpoint: {
                destinationIp: "quis",
                destinationNetworkUri: "consectetur",
                destinationPort: 2615193428840744870,
                protocol: "iusto",
                sourceAgentUri: "sit",
                sourceIp: "accusantium",
                sourceNetworkUri: "aliquid",
                sourcePort: 251481460403035334,
              },
              firewall: {
                action: "sit",
                direction: "doloribus",
                displayName: "expedita",
                firewallRuleType: "VPC_FIREWALL_RULE",
                networkUri: "est",
                policy: "doloremque",
                priority: 6881211550782960207,
                targetServiceAccounts: [
                  "iste",
                  "deleniti",
                ],
                targetTags: [
                  "saepe",
                ],
                uri: "aspernatur",
              },
              forward: {
                resourceUri: "at",
                target: "IMPORTED_CUSTOM_ROUTE_NEXT_HOP",
              },
              forwardingRule: {
                displayName: "accusamus",
                matchedPortRange: "culpa",
                matchedProtocol: "eius",
                networkUri: "et",
                target: "et",
                uri: "cupiditate",
                vip: "iure",
              },
              gkeMaster: {
                clusterNetworkUri: "doloremque",
                clusterUri: "et",
                externalIp: "ullam",
                internalIp: "architecto",
              },
              instance: {
                displayName: "corporis",
                externalIp: "ratione",
                interface: "corporis",
                internalIp: "et",
                networkTags: [
                  "eum",
                  "suscipit",
                ],
                networkUri: "cum",
                serviceAccount: "voluptas",
                uri: "et",
              },
              loadBalancer: {
                backendType: "TARGET_INSTANCE",
                backendUri: "inventore",
                backends: [
                  {
                    displayName: "fugit",
                    healthCheckAllowingFirewallRules: [
                      "doloribus",
                      "nesciunt",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "pariatur",
                      "vel",
                      "deleniti",
                    ],
                    healthCheckFirewallState: "CONFIGURED",
                    uri: "est",
                  },
                ],
                healthCheckUri: "laudantium",
                loadBalancerType: "SSL_PROXY",
              },
              network: {
                displayName: "animi",
                matchedIpRange: "laborum",
                uri: "iste",
              },
              projectId: "quo",
              route: {
                destIpRange: "delectus",
                destPortRanges: [
                  "sunt",
                  "ut",
                  "dicta",
                ],
                displayName: "tenetur",
                instanceTags: [
                  "vel",
                  "aut",
                  "eveniet",
                ],
                networkUri: "odio",
                nextHop: "qui",
                nextHopType: "NEXT_HOP_TYPE_UNSPECIFIED",
                priority: 967836110207562829,
                protocols: [
                  "minus",
                  "ratione",
                  "deserunt",
                ],
                routeType: "DYNAMIC",
                srcIpRange: "non",
                srcPortRanges: [
                  "et",
                  "enim",
                  "omnis",
                ],
                uri: "nisi",
              },
              state: "STATE_UNSPECIFIED",
              vpcConnector: {
                displayName: "rerum",
                location: "libero",
                uri: "ut",
              },
              vpnGateway: {
                displayName: "harum",
                ipAddress: "nemo",
                networkUri: "saepe",
                region: "porro",
                uri: "natus",
                vpnTunnelUri: "asperiores",
              },
              vpnTunnel: {
                displayName: "aut",
                networkUri: "tempore",
                region: "et",
                remoteGateway: "molestiae",
                remoteGatewayIp: "odio",
                routingType: "ROUTING_TYPE_UNSPECIFIED",
                sourceGateway: "fugiat",
                sourceGatewayIp: "quia",
                uri: "et",
              },
            },
            {
              abort: {
                cause: "INVALID_ARGUMENT",
                projectsMissingPermission: [
                  "ut",
                  "ipsa",
                  "id",
                ],
                resourceUri: "vel",
              },
              appEngineVersion: {
                displayName: "fugit",
                environment: "quos",
                runtime: "non",
                uri: "quia",
              },
              causesDrop: true,
              cloudFunction: {
                displayName: "voluptate",
                location: "ex",
                uri: "quod",
                versionId: "nam",
              },
              cloudRunRevision: {
                displayName: "quia",
                location: "ut",
                serviceName: "molestiae",
                serviceUri: "id",
                uri: "illo",
              },
              cloudSqlInstance: {
                displayName: "assumenda",
                externalIp: "dolores",
                internalIp: "in",
                networkUri: "animi",
                region: "mollitia",
                uri: "ex",
              },
              deliver: {
                resourceUri: "ex",
                target: "GOOGLE_API",
              },
              description: "est",
              drop: {
                cause: "CLOUD_SQL_INSTANCE_NO_IP_ADDRESS",
                resourceUri: "aut",
              },
              endpoint: {
                destinationIp: "commodi",
                destinationNetworkUri: "pariatur",
                destinationPort: 5552173562189497798,
                protocol: "molestiae",
                sourceAgentUri: "quia",
                sourceIp: "repudiandae",
                sourceNetworkUri: "omnis",
                sourcePort: 1304886885886881865,
              },
              firewall: {
                action: "maiores",
                direction: "aliquam",
                displayName: "incidunt",
                firewallRuleType: "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE",
                networkUri: "in",
                policy: "fuga",
                priority: 7190219170584462697,
                targetServiceAccounts: [
                  "maxime",
                  "sed",
                  "voluptatum",
                ],
                targetTags: [
                  "non",
                  "suscipit",
                  "velit",
                ],
                uri: "dicta",
              },
              forward: {
                resourceUri: "magni",
                target: "INTERCONNECT",
              },
              forwardingRule: {
                displayName: "ducimus",
                matchedPortRange: "dolores",
                matchedProtocol: "ipsam",
                networkUri: "accusantium",
                target: "ullam",
                uri: "repellendus",
                vip: "amet",
              },
              gkeMaster: {
                clusterNetworkUri: "consectetur",
                clusterUri: "est",
                externalIp: "incidunt",
                internalIp: "eos",
              },
              instance: {
                displayName: "est",
                externalIp: "debitis",
                interface: "reprehenderit",
                internalIp: "itaque",
                networkTags: [
                  "sapiente",
                  "pariatur",
                  "aut",
                ],
                networkUri: "aut",
                serviceAccount: "dolorem",
                uri: "accusamus",
              },
              loadBalancer: {
                backendType: "TARGET_INSTANCE",
                backendUri: "necessitatibus",
                backends: [
                  {
                    displayName: "mollitia",
                    healthCheckAllowingFirewallRules: [
                      "ullam",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "rem",
                      "eum",
                    ],
                    healthCheckFirewallState: "CONFIGURED",
                    uri: "consequatur",
                  },
                ],
                healthCheckUri: "officiis",
                loadBalancerType: "INTERNAL_TCP_UDP",
              },
              network: {
                displayName: "et",
                matchedIpRange: "quae",
                uri: "voluptas",
              },
              projectId: "nisi",
              route: {
                destIpRange: "ipsum",
                destPortRanges: [
                  "voluptatem",
                  "impedit",
                  "eos",
                ],
                displayName: "dolorem",
                instanceTags: [
                  "velit",
                  "et",
                ],
                networkUri: "quis",
                nextHop: "et",
                nextHopType: "NEXT_HOP_ILB",
                priority: 4474806255202991228,
                protocols: [
                  "dolorum",
                  "voluptas",
                ],
                routeType: "ROUTE_TYPE_UNSPECIFIED",
                srcIpRange: "deserunt",
                srcPortRanges: [
                  "nobis",
                ],
                uri: "odio",
              },
              state: "STATE_UNSPECIFIED",
              vpcConnector: {
                displayName: "dolorum",
                location: "odio",
                uri: "nobis",
              },
              vpnGateway: {
                displayName: "ut",
                ipAddress: "in",
                networkUri: "enim",
                region: "qui",
                uri: "nulla",
                vpnTunnelUri: "quis",
              },
              vpnTunnel: {
                displayName: "ad",
                networkUri: "eum",
                region: "magnam",
                remoteGateway: "nobis",
                remoteGatewayIp: "corporis",
                routingType: "ROUTING_TYPE_UNSPECIFIED",
                sourceGateway: "doloribus",
                sourceGatewayIp: "debitis",
                uri: "reprehenderit",
              },
            },
            {
              abort: {
                cause: "GKE_KONNECTIVITY_PROXY_UNSUPPORTED",
                projectsMissingPermission: [
                  "corporis",
                ],
                resourceUri: "aut",
              },
              appEngineVersion: {
                displayName: "aut",
                environment: "odio",
                runtime: "aut",
                uri: "tenetur",
              },
              causesDrop: true,
              cloudFunction: {
                displayName: "ut",
                location: "sed",
                uri: "veritatis",
                versionId: "error",
              },
              cloudRunRevision: {
                displayName: "natus",
                location: "ut",
                serviceName: "dolores",
                serviceUri: "nihil",
                uri: "ex",
              },
              cloudSqlInstance: {
                displayName: "et",
                externalIp: "et",
                internalIp: "sed",
                networkUri: "voluptas",
                region: "provident",
                uri: "necessitatibus",
              },
              deliver: {
                resourceUri: "ipsa",
                target: "TARGET_UNSPECIFIED",
              },
              description: "minus",
              drop: {
                cause: "FIREWALL_RULE",
                resourceUri: "sed",
              },
              endpoint: {
                destinationIp: "facilis",
                destinationNetworkUri: "ipsa",
                destinationPort: 2794322974374515266,
                protocol: "in",
                sourceAgentUri: "et",
                sourceIp: "voluptatum",
                sourceNetworkUri: "expedita",
                sourcePort: 331715307877144275,
              },
              firewall: {
                action: "laboriosam",
                direction: "quas",
                displayName: "quod",
                firewallRuleType: "VPC_FIREWALL_RULE",
                networkUri: "consequatur",
                policy: "quibusdam",
                priority: 7201327996250994425,
                targetServiceAccounts: [
                  "reiciendis",
                ],
                targetTags: [
                  "dicta",
                  "in",
                ],
                uri: "corrupti",
              },
              forward: {
                resourceUri: "aut",
                target: "VPN_GATEWAY",
              },
              forwardingRule: {
                displayName: "rerum",
                matchedPortRange: "excepturi",
                matchedProtocol: "expedita",
                networkUri: "blanditiis",
                target: "et",
                uri: "itaque",
                vip: "cupiditate",
              },
              gkeMaster: {
                clusterNetworkUri: "est",
                clusterUri: "eos",
                externalIp: "sed",
                internalIp: "aut",
              },
              instance: {
                displayName: "sit",
                externalIp: "ut",
                interface: "nesciunt",
                internalIp: "dolorum",
                networkTags: [
                  "porro",
                  "quam",
                  "vel",
                ],
                networkUri: "atque",
                serviceAccount: "assumenda",
                uri: "laborum",
              },
              loadBalancer: {
                backendType: "BACKEND_SERVICE",
                backendUri: "et",
                backends: [
                  {
                    displayName: "quasi",
                    healthCheckAllowingFirewallRules: [
                      "quod",
                    ],
                    healthCheckBlockingFirewallRules: [
                      "qui",
                    ],
                    healthCheckFirewallState: "CONFIGURED",
                    uri: "totam",
                  },
                ],
                healthCheckUri: "illo",
                loadBalancerType: "LOAD_BALANCER_TYPE_UNSPECIFIED",
              },
              network: {
                displayName: "iure",
                matchedIpRange: "distinctio",
                uri: "vel",
              },
              projectId: "odio",
              route: {
                destIpRange: "voluptatem",
                destPortRanges: [
                  "repellat",
                  "nam",
                ],
                displayName: "labore",
                instanceTags: [
                  "necessitatibus",
                  "est",
                  "tenetur",
                ],
                networkUri: "quasi",
                nextHop: "modi",
                nextHopType: "NEXT_HOP_ROUTER_APPLIANCE",
                priority: 8910616947332965707,
                protocols: [
                  "explicabo",
                ],
                routeType: "PEERING_STATIC",
                srcIpRange: "perspiciatis",
                srcPortRanges: [
                  "natus",
                  "rem",
                ],
                uri: "quidem",
              },
              state: "FORWARD",
              vpcConnector: {
                displayName: "commodi",
                location: "nemo",
                uri: "optio",
              },
              vpnGateway: {
                displayName: "est",
                ipAddress: "sunt",
                networkUri: "voluptatem",
                region: "natus",
                uri: "impedit",
                vpnTunnelUri: "officia",
              },
              vpnTunnel: {
                displayName: "et",
                networkUri: "atque",
                region: "sit",
                remoteGateway: "quis",
                remoteGatewayIp: "ipsum",
                routingType: "POLICY_BASED",
                sourceGateway: "dicta",
                sourceGatewayIp: "aut",
                uri: "autem",
              },
            },
          ],
        },
      ],
      verifyTime: "sint",
    },
    relatedProjects: [
      "ullam",
      "qui",
      "qui",
    ],
    source: {
      appEngineVersion: {
        uri: "dolores",
      },
      cloudFunction: {
        uri: "velit",
      },
      cloudRunRevision: {
        uri: "doloremque",
      },
      cloudSqlInstance: "rerum",
      gkeMasterCluster: "non",
      instance: "voluptates",
      ipAddress: "rem",
      network: "dolorem",
      networkType: "NON_GCP_NETWORK",
      port: 8950721137169359148,
      projectId: "dolor",
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
