import { SpeakeasyBase } from "../../../internal/utils";
import { AddonsConfig } from "./addonsconfig";
import { AuthenticatorGroupsConfig } from "./authenticatorgroupsconfig";
import { BinaryAuthorization } from "./binaryauthorization";
import { ClusterAutoscaling } from "./clusterautoscaling";
import { CostManagementConfig } from "./costmanagementconfig";
import { DatabaseEncryption } from "./databaseencryption";
import { DefaultSnatStatus } from "./defaultsnatstatus";
import { DnsConfig } from "./dnsconfig";
import { GatewayApiConfig } from "./gatewayapiconfig";
import { GcfsConfig } from "./gcfsconfig";
import { IdentityServiceConfig } from "./identityserviceconfig";
import { IntraNodeVisibilityConfig } from "./intranodevisibilityconfig";
import { IlbSubsettingConfig } from "./ilbsubsettingconfig";
import { LoggingConfig } from "./loggingconfig";
import { MasterAuthorizedNetworksConfig } from "./masterauthorizednetworksconfig";
import { MeshCertificates } from "./meshcertificates";
import { MonitoringConfig } from "./monitoringconfig";
import { NetworkTags } from "./networktags";
import { NodePoolAutoscaling } from "./nodepoolautoscaling";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";
import { NotificationConfig } from "./notificationconfig";
import { PrivateClusterConfig } from "./privateclusterconfig";
import { ReleaseChannel } from "./releasechannel";
import { ResourceUsageExportConfig } from "./resourceusageexportconfig";
import { ServiceExternalIPsConfig } from "./serviceexternalipsconfig";
import { ShieldedNodes } from "./shieldednodes";
import { VerticalPodAutoscaling } from "./verticalpodautoscaling";
import { WorkloadIdentityConfig } from "./workloadidentityconfig";
export declare enum ClusterUpdateDesiredDatapathProviderEnum {
    DatapathProviderUnspecified = "DATAPATH_PROVIDER_UNSPECIFIED",
    LegacyDatapath = "LEGACY_DATAPATH",
    AdvancedDatapath = "ADVANCED_DATAPATH"
}
export declare enum ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum {
    PrivateIpv6GoogleAccessUnspecified = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
    PrivateIpv6GoogleAccessDisabled = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED",
    PrivateIpv6GoogleAccessToGoogle = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE",
    PrivateIpv6GoogleAccessBidirectional = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
}
/**
 * ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided.
**/
export declare class ClusterUpdate extends SpeakeasyBase {
    desiredAddonsConfig?: AddonsConfig;
    desiredAuthenticatorGroupsConfig?: AuthenticatorGroupsConfig;
    desiredBinaryAuthorization?: BinaryAuthorization;
    desiredClusterAutoscaling?: ClusterAutoscaling;
    desiredCostManagementConfig?: CostManagementConfig;
    desiredDatabaseEncryption?: DatabaseEncryption;
    desiredDatapathProvider?: ClusterUpdateDesiredDatapathProviderEnum;
    desiredDefaultSnatStatus?: DefaultSnatStatus;
    desiredDnsConfig?: DnsConfig;
    desiredEnablePrivateEndpoint?: boolean;
    desiredGatewayApiConfig?: GatewayApiConfig;
    desiredGcfsConfig?: GcfsConfig;
    desiredIdentityServiceConfig?: IdentityServiceConfig;
    desiredImageType?: string;
    desiredIntraNodeVisibilityConfig?: IntraNodeVisibilityConfig;
    desiredL4ilbSubsettingConfig?: IlbSubsettingConfig;
    desiredLocations?: string[];
    desiredLoggingConfig?: LoggingConfig;
    desiredLoggingService?: string;
    desiredMasterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
    desiredMasterVersion?: string;
    desiredMeshCertificates?: MeshCertificates;
    desiredMonitoringConfig?: MonitoringConfig;
    desiredMonitoringService?: string;
    desiredNodePoolAutoConfigNetworkTags?: NetworkTags;
    desiredNodePoolAutoscaling?: NodePoolAutoscaling;
    desiredNodePoolId?: string;
    desiredNodePoolLoggingConfig?: NodePoolLoggingConfig;
    desiredNodeVersion?: string;
    desiredNotificationConfig?: NotificationConfig;
    desiredPrivateClusterConfig?: PrivateClusterConfig;
    desiredPrivateIpv6GoogleAccess?: ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum;
    desiredReleaseChannel?: ReleaseChannel;
    desiredResourceUsageExportConfig?: ResourceUsageExportConfig;
    desiredServiceExternalIpsConfig?: ServiceExternalIPsConfig;
    desiredShieldedNodes?: ShieldedNodes;
    desiredVerticalPodAutoscaling?: VerticalPodAutoscaling;
    desiredWorkloadIdentityConfig?: WorkloadIdentityConfig;
}
