import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddonsConfig } from "./addonsconfig";
import { AuthenticatorGroupsConfig } from "./authenticatorgroupsconfig";
import { BinaryAuthorization } from "./binaryauthorization";
import { ClusterAutoscaling } from "./clusterautoscaling";
import { ClusterTelemetry } from "./clustertelemetry";
import { CostManagementConfig } from "./costmanagementconfig";
import { DatabaseEncryption } from "./databaseencryption";
import { DefaultSnatStatus } from "./defaultsnatstatus";
import { DnsConfig } from "./dnsconfig";
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
import { PodSecurityPolicyConfig } from "./podsecuritypolicyconfig";
import { PrivateClusterConfig } from "./privateclusterconfig";
import { ProtectConfig } from "./protectconfig";
import { ReleaseChannel } from "./releasechannel";
import { ResourceUsageExportConfig } from "./resourceusageexportconfig";
import { ServiceExternalIPsConfig } from "./serviceexternalipsconfig";
import { ShieldedNodes } from "./shieldednodes";
import { TpuConfig } from "./tpuconfig";
import { VerticalPodAutoscaling } from "./verticalpodautoscaling";
import { WorkloadAltsConfig } from "./workloadaltsconfig";
import { WorkloadCertificates } from "./workloadcertificates";
import { WorkloadIdentityConfig } from "./workloadidentityconfig";

export enum ClusterUpdateDesiredDatapathProviderEnum {
    DatapathProviderUnspecified = "DATAPATH_PROVIDER_UNSPECIFIED"
,    LegacyDatapath = "LEGACY_DATAPATH"
,    AdvancedDatapath = "ADVANCED_DATAPATH"
}

export enum ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum {
    PrivateIpv6GoogleAccessUnspecified = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
,    PrivateIpv6GoogleAccessDisabled = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED"
,    PrivateIpv6GoogleAccessToGoogle = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE"
,    PrivateIpv6GoogleAccessBidirectional = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
}


// ClusterUpdate
/** 
 * ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided.
**/
export class ClusterUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=desiredAddonsConfig" })
  desiredAddonsConfig?: AddonsConfig;

  @Metadata({ data: "json, name=desiredAuthenticatorGroupsConfig" })
  desiredAuthenticatorGroupsConfig?: AuthenticatorGroupsConfig;

  @Metadata({ data: "json, name=desiredBinaryAuthorization" })
  desiredBinaryAuthorization?: BinaryAuthorization;

  @Metadata({ data: "json, name=desiredClusterAutoscaling" })
  desiredClusterAutoscaling?: ClusterAutoscaling;

  @Metadata({ data: "json, name=desiredClusterTelemetry" })
  desiredClusterTelemetry?: ClusterTelemetry;

  @Metadata({ data: "json, name=desiredCostManagementConfig" })
  desiredCostManagementConfig?: CostManagementConfig;

  @Metadata({ data: "json, name=desiredDatabaseEncryption" })
  desiredDatabaseEncryption?: DatabaseEncryption;

  @Metadata({ data: "json, name=desiredDatapathProvider" })
  desiredDatapathProvider?: ClusterUpdateDesiredDatapathProviderEnum;

  @Metadata({ data: "json, name=desiredDefaultSnatStatus" })
  desiredDefaultSnatStatus?: DefaultSnatStatus;

  @Metadata({ data: "json, name=desiredDnsConfig" })
  desiredDnsConfig?: DnsConfig;

  @Metadata({ data: "json, name=desiredGcfsConfig" })
  desiredGcfsConfig?: GcfsConfig;

  @Metadata({ data: "json, name=desiredIdentityServiceConfig" })
  desiredIdentityServiceConfig?: IdentityServiceConfig;

  @Metadata({ data: "json, name=desiredImageType" })
  desiredImageType?: string;

  @Metadata({ data: "json, name=desiredIntraNodeVisibilityConfig" })
  desiredIntraNodeVisibilityConfig?: IntraNodeVisibilityConfig;

  @Metadata({ data: "json, name=desiredL4ilbSubsettingConfig" })
  desiredL4ilbSubsettingConfig?: IlbSubsettingConfig;

  @Metadata({ data: "json, name=desiredLocations" })
  desiredLocations?: string[];

  @Metadata({ data: "json, name=desiredLoggingConfig" })
  desiredLoggingConfig?: LoggingConfig;

  @Metadata({ data: "json, name=desiredLoggingService" })
  desiredLoggingService?: string;

  @Metadata({ data: "json, name=desiredMaster" })
  desiredMaster?: Map<string, any>;

  @Metadata({ data: "json, name=desiredMasterAuthorizedNetworksConfig" })
  desiredMasterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;

  @Metadata({ data: "json, name=desiredMasterVersion" })
  desiredMasterVersion?: string;

  @Metadata({ data: "json, name=desiredMeshCertificates" })
  desiredMeshCertificates?: MeshCertificates;

  @Metadata({ data: "json, name=desiredMonitoringConfig" })
  desiredMonitoringConfig?: MonitoringConfig;

  @Metadata({ data: "json, name=desiredMonitoringService" })
  desiredMonitoringService?: string;

  @Metadata({ data: "json, name=desiredNodePoolAutoConfigNetworkTags" })
  desiredNodePoolAutoConfigNetworkTags?: NetworkTags;

  @Metadata({ data: "json, name=desiredNodePoolAutoscaling" })
  desiredNodePoolAutoscaling?: NodePoolAutoscaling;

  @Metadata({ data: "json, name=desiredNodePoolId" })
  desiredNodePoolId?: string;

  @Metadata({ data: "json, name=desiredNodePoolLoggingConfig" })
  desiredNodePoolLoggingConfig?: NodePoolLoggingConfig;

  @Metadata({ data: "json, name=desiredNodeVersion" })
  desiredNodeVersion?: string;

  @Metadata({ data: "json, name=desiredNotificationConfig" })
  desiredNotificationConfig?: NotificationConfig;

  @Metadata({ data: "json, name=desiredPodSecurityPolicyConfig" })
  desiredPodSecurityPolicyConfig?: PodSecurityPolicyConfig;

  @Metadata({ data: "json, name=desiredPrivateClusterConfig" })
  desiredPrivateClusterConfig?: PrivateClusterConfig;

  @Metadata({ data: "json, name=desiredPrivateIpv6GoogleAccess" })
  desiredPrivateIpv6GoogleAccess?: ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum;

  @Metadata({ data: "json, name=desiredProtectConfig" })
  desiredProtectConfig?: ProtectConfig;

  @Metadata({ data: "json, name=desiredReleaseChannel" })
  desiredReleaseChannel?: ReleaseChannel;

  @Metadata({ data: "json, name=desiredResourceUsageExportConfig" })
  desiredResourceUsageExportConfig?: ResourceUsageExportConfig;

  @Metadata({ data: "json, name=desiredServiceExternalIpsConfig" })
  desiredServiceExternalIpsConfig?: ServiceExternalIPsConfig;

  @Metadata({ data: "json, name=desiredShieldedNodes" })
  desiredShieldedNodes?: ShieldedNodes;

  @Metadata({ data: "json, name=desiredTpuConfig" })
  desiredTpuConfig?: TpuConfig;

  @Metadata({ data: "json, name=desiredVerticalPodAutoscaling" })
  desiredVerticalPodAutoscaling?: VerticalPodAutoscaling;

  @Metadata({ data: "json, name=desiredWorkloadAltsConfig" })
  desiredWorkloadAltsConfig?: WorkloadAltsConfig;

  @Metadata({ data: "json, name=desiredWorkloadCertificates" })
  desiredWorkloadCertificates?: WorkloadCertificates;

  @Metadata({ data: "json, name=desiredWorkloadIdentityConfig" })
  desiredWorkloadIdentityConfig?: WorkloadIdentityConfig;
}
