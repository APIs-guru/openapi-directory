import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AddonsConfig } from "./addonsconfig";
import { AuthenticatorGroupsConfig } from "./authenticatorgroupsconfig";
import { Autopilot } from "./autopilot";
import { ClusterAutoscaling } from "./clusterautoscaling";
import { BinaryAuthorization } from "./binaryauthorization";
import { ClusterTelemetry } from "./clustertelemetry";
import { StatusCondition } from "./statuscondition";
import { ConfidentialNodes } from "./confidentialnodes";
import { CostManagementConfig } from "./costmanagementconfig";
import { DatabaseEncryption } from "./databaseencryption";
import { MaxPodsConstraint } from "./maxpodsconstraint";
import { IdentityServiceConfig } from "./identityserviceconfig";
import { IpAllocationPolicy } from "./ipallocationpolicy";
import { LegacyAbac } from "./legacyabac";
import { LoggingConfig } from "./loggingconfig";
import { MaintenancePolicy } from "./maintenancepolicy";
import { MasterAuth } from "./masterauth";
import { MasterAuthorizedNetworksConfig } from "./masterauthorizednetworksconfig";
import { MeshCertificates } from "./meshcertificates";
import { MonitoringConfig } from "./monitoringconfig";
import { NetworkConfig } from "./networkconfig";
import { NetworkPolicy } from "./networkpolicy";
import { NodeConfig } from "./nodeconfig";
import { NodePoolAutoConfig } from "./nodepoolautoconfig";
import { NodePoolDefaults } from "./nodepooldefaults";
import { NodePool } from "./nodepool";
import { NotificationConfig } from "./notificationconfig";
import { PodSecurityPolicyConfig } from "./podsecuritypolicyconfig";
import { PrivateClusterConfig } from "./privateclusterconfig";
import { ProtectConfig } from "./protectconfig";
import { ReleaseChannel } from "./releasechannel";
import { ResourceUsageExportConfig } from "./resourceusageexportconfig";
import { ShieldedNodes } from "./shieldednodes";
import { TpuConfig } from "./tpuconfig";
import { VerticalPodAutoscaling } from "./verticalpodautoscaling";
import { WorkloadAltsConfig } from "./workloadaltsconfig";
import { WorkloadCertificates } from "./workloadcertificates";
import { WorkloadIdentityConfig } from "./workloadidentityconfig";

export enum ClusterStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    Provisioning = "PROVISIONING"
,    Running = "RUNNING"
,    Reconciling = "RECONCILING"
,    Stopping = "STOPPING"
,    Error = "ERROR"
,    Degraded = "DEGRADED"
}


// Cluster
/** 
 * A Google Kubernetes Engine cluster.
**/
export class Cluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=addonsConfig" })
  addonsConfig?: AddonsConfig;

  @Metadata({ data: "json, name=authenticatorGroupsConfig" })
  authenticatorGroupsConfig?: AuthenticatorGroupsConfig;

  @Metadata({ data: "json, name=autopilot" })
  autopilot?: Autopilot;

  @Metadata({ data: "json, name=autoscaling" })
  autoscaling?: ClusterAutoscaling;

  @Metadata({ data: "json, name=binaryAuthorization" })
  binaryAuthorization?: BinaryAuthorization;

  @Metadata({ data: "json, name=clusterIpv4Cidr" })
  clusterIpv4Cidr?: string;

  @Metadata({ data: "json, name=clusterTelemetry" })
  clusterTelemetry?: ClusterTelemetry;

  @Metadata({ data: "json, name=conditions", elemType: shared.StatusCondition })
  conditions?: StatusCondition[];

  @Metadata({ data: "json, name=confidentialNodes" })
  confidentialNodes?: ConfidentialNodes;

  @Metadata({ data: "json, name=costManagementConfig" })
  costManagementConfig?: CostManagementConfig;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=currentMasterVersion" })
  currentMasterVersion?: string;

  @Metadata({ data: "json, name=currentNodeCount" })
  currentNodeCount?: number;

  @Metadata({ data: "json, name=currentNodeVersion" })
  currentNodeVersion?: string;

  @Metadata({ data: "json, name=databaseEncryption" })
  databaseEncryption?: DatabaseEncryption;

  @Metadata({ data: "json, name=defaultMaxPodsConstraint" })
  defaultMaxPodsConstraint?: MaxPodsConstraint;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enableKubernetesAlpha" })
  enableKubernetesAlpha?: boolean;

  @Metadata({ data: "json, name=enableTpu" })
  enableTpu?: boolean;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=identityServiceConfig" })
  identityServiceConfig?: IdentityServiceConfig;

  @Metadata({ data: "json, name=initialClusterVersion" })
  initialClusterVersion?: string;

  @Metadata({ data: "json, name=initialNodeCount" })
  initialNodeCount?: number;

  @Metadata({ data: "json, name=instanceGroupUrls" })
  instanceGroupUrls?: string[];

  @Metadata({ data: "json, name=ipAllocationPolicy" })
  ipAllocationPolicy?: IpAllocationPolicy;

  @Metadata({ data: "json, name=labelFingerprint" })
  labelFingerprint?: string;

  @Metadata({ data: "json, name=legacyAbac" })
  legacyAbac?: LegacyAbac;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=locations" })
  locations?: string[];

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @Metadata({ data: "json, name=loggingService" })
  loggingService?: string;

  @Metadata({ data: "json, name=maintenancePolicy" })
  maintenancePolicy?: MaintenancePolicy;

  @Metadata({ data: "json, name=master" })
  master?: Map<string, any>;

  @Metadata({ data: "json, name=masterAuth" })
  masterAuth?: MasterAuth;

  @Metadata({ data: "json, name=masterAuthorizedNetworksConfig" })
  masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;

  @Metadata({ data: "json, name=masterIpv4CidrBlock" })
  masterIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=meshCertificates" })
  meshCertificates?: MeshCertificates;

  @Metadata({ data: "json, name=monitoringConfig" })
  monitoringConfig?: MonitoringConfig;

  @Metadata({ data: "json, name=monitoringService" })
  monitoringService?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @Metadata({ data: "json, name=networkPolicy" })
  networkPolicy?: NetworkPolicy;

  @Metadata({ data: "json, name=nodeConfig" })
  nodeConfig?: NodeConfig;

  @Metadata({ data: "json, name=nodeIpv4CidrSize" })
  nodeIpv4CidrSize?: number;

  @Metadata({ data: "json, name=nodePoolAutoConfig" })
  nodePoolAutoConfig?: NodePoolAutoConfig;

  @Metadata({ data: "json, name=nodePoolDefaults" })
  nodePoolDefaults?: NodePoolDefaults;

  @Metadata({ data: "json, name=nodePools", elemType: shared.NodePool })
  nodePools?: NodePool[];

  @Metadata({ data: "json, name=notificationConfig" })
  notificationConfig?: NotificationConfig;

  @Metadata({ data: "json, name=podSecurityPolicyConfig" })
  podSecurityPolicyConfig?: PodSecurityPolicyConfig;

  @Metadata({ data: "json, name=privateCluster" })
  privateCluster?: boolean;

  @Metadata({ data: "json, name=privateClusterConfig" })
  privateClusterConfig?: PrivateClusterConfig;

  @Metadata({ data: "json, name=protectConfig" })
  protectConfig?: ProtectConfig;

  @Metadata({ data: "json, name=releaseChannel" })
  releaseChannel?: ReleaseChannel;

  @Metadata({ data: "json, name=resourceLabels" })
  resourceLabels?: Map<string, string>;

  @Metadata({ data: "json, name=resourceUsageExportConfig" })
  resourceUsageExportConfig?: ResourceUsageExportConfig;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=servicesIpv4Cidr" })
  servicesIpv4Cidr?: string;

  @Metadata({ data: "json, name=shieldedNodes" })
  shieldedNodes?: ShieldedNodes;

  @Metadata({ data: "json, name=status" })
  status?: ClusterStatusEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @Metadata({ data: "json, name=tpuConfig" })
  tpuConfig?: TpuConfig;

  @Metadata({ data: "json, name=tpuIpv4CidrBlock" })
  tpuIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=verticalPodAutoscaling" })
  verticalPodAutoscaling?: VerticalPodAutoscaling;

  @Metadata({ data: "json, name=workloadAltsConfig" })
  workloadAltsConfig?: WorkloadAltsConfig;

  @Metadata({ data: "json, name=workloadCertificates" })
  workloadCertificates?: WorkloadCertificates;

  @Metadata({ data: "json, name=workloadIdentityConfig" })
  workloadIdentityConfig?: WorkloadIdentityConfig;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
