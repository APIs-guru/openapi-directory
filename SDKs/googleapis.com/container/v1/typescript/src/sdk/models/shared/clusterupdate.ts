import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum ClusterUpdateDesiredDatapathProviderEnum {
    DatapathProviderUnspecified = "DATAPATH_PROVIDER_UNSPECIFIED",
    LegacyDatapath = "LEGACY_DATAPATH",
    AdvancedDatapath = "ADVANCED_DATAPATH"
}

export enum ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum {
    PrivateIpv6GoogleAccessUnspecified = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
    PrivateIpv6GoogleAccessDisabled = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED",
    PrivateIpv6GoogleAccessToGoogle = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE",
    PrivateIpv6GoogleAccessBidirectional = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
}


// ClusterUpdate
/** 
 * ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided.
**/
export class ClusterUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desiredAddonsConfig" })
  desiredAddonsConfig?: AddonsConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredAuthenticatorGroupsConfig" })
  desiredAuthenticatorGroupsConfig?: AuthenticatorGroupsConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredBinaryAuthorization" })
  desiredBinaryAuthorization?: BinaryAuthorization;

  @SpeakeasyMetadata({ data: "json, name=desiredClusterAutoscaling" })
  desiredClusterAutoscaling?: ClusterAutoscaling;

  @SpeakeasyMetadata({ data: "json, name=desiredCostManagementConfig" })
  desiredCostManagementConfig?: CostManagementConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredDatabaseEncryption" })
  desiredDatabaseEncryption?: DatabaseEncryption;

  @SpeakeasyMetadata({ data: "json, name=desiredDatapathProvider" })
  desiredDatapathProvider?: ClusterUpdateDesiredDatapathProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=desiredDefaultSnatStatus" })
  desiredDefaultSnatStatus?: DefaultSnatStatus;

  @SpeakeasyMetadata({ data: "json, name=desiredDnsConfig" })
  desiredDnsConfig?: DnsConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredEnablePrivateEndpoint" })
  desiredEnablePrivateEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=desiredGatewayApiConfig" })
  desiredGatewayApiConfig?: GatewayApiConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredGcfsConfig" })
  desiredGcfsConfig?: GcfsConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredIdentityServiceConfig" })
  desiredIdentityServiceConfig?: IdentityServiceConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredImageType" })
  desiredImageType?: string;

  @SpeakeasyMetadata({ data: "json, name=desiredIntraNodeVisibilityConfig" })
  desiredIntraNodeVisibilityConfig?: IntraNodeVisibilityConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredL4ilbSubsettingConfig" })
  desiredL4ilbSubsettingConfig?: IlbSubsettingConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredLocations" })
  desiredLocations?: string[];

  @SpeakeasyMetadata({ data: "json, name=desiredLoggingConfig" })
  desiredLoggingConfig?: LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredLoggingService" })
  desiredLoggingService?: string;

  @SpeakeasyMetadata({ data: "json, name=desiredMasterAuthorizedNetworksConfig" })
  desiredMasterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredMasterVersion" })
  desiredMasterVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=desiredMeshCertificates" })
  desiredMeshCertificates?: MeshCertificates;

  @SpeakeasyMetadata({ data: "json, name=desiredMonitoringConfig" })
  desiredMonitoringConfig?: MonitoringConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredMonitoringService" })
  desiredMonitoringService?: string;

  @SpeakeasyMetadata({ data: "json, name=desiredNodePoolAutoConfigNetworkTags" })
  desiredNodePoolAutoConfigNetworkTags?: NetworkTags;

  @SpeakeasyMetadata({ data: "json, name=desiredNodePoolAutoscaling" })
  desiredNodePoolAutoscaling?: NodePoolAutoscaling;

  @SpeakeasyMetadata({ data: "json, name=desiredNodePoolId" })
  desiredNodePoolId?: string;

  @SpeakeasyMetadata({ data: "json, name=desiredNodePoolLoggingConfig" })
  desiredNodePoolLoggingConfig?: NodePoolLoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredNodeVersion" })
  desiredNodeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=desiredNotificationConfig" })
  desiredNotificationConfig?: NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredPrivateClusterConfig" })
  desiredPrivateClusterConfig?: PrivateClusterConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredPrivateIpv6GoogleAccess" })
  desiredPrivateIpv6GoogleAccess?: ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=desiredReleaseChannel" })
  desiredReleaseChannel?: ReleaseChannel;

  @SpeakeasyMetadata({ data: "json, name=desiredResourceUsageExportConfig" })
  desiredResourceUsageExportConfig?: ResourceUsageExportConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredServiceExternalIpsConfig" })
  desiredServiceExternalIpsConfig?: ServiceExternalIPsConfig;

  @SpeakeasyMetadata({ data: "json, name=desiredShieldedNodes" })
  desiredShieldedNodes?: ShieldedNodes;

  @SpeakeasyMetadata({ data: "json, name=desiredVerticalPodAutoscaling" })
  desiredVerticalPodAutoscaling?: VerticalPodAutoscaling;

  @SpeakeasyMetadata({ data: "json, name=desiredWorkloadIdentityConfig" })
  desiredWorkloadIdentityConfig?: WorkloadIdentityConfig;
}
