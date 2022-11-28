import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
import { IpAllocationPolicyInput } from "./ipallocationpolicy";


export enum ClusterStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Running = "RUNNING",
    Reconciling = "RECONCILING",
    Stopping = "STOPPING",
    Error = "ERROR",
    Degraded = "DEGRADED"
}


// Cluster
/** 
 * A Google Kubernetes Engine cluster.
**/
export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addonsConfig" })
  addonsConfig?: AddonsConfig;

  @SpeakeasyMetadata({ data: "json, name=authenticatorGroupsConfig" })
  authenticatorGroupsConfig?: AuthenticatorGroupsConfig;

  @SpeakeasyMetadata({ data: "json, name=autopilot" })
  autopilot?: Autopilot;

  @SpeakeasyMetadata({ data: "json, name=autoscaling" })
  autoscaling?: ClusterAutoscaling;

  @SpeakeasyMetadata({ data: "json, name=binaryAuthorization" })
  binaryAuthorization?: BinaryAuthorization;

  @SpeakeasyMetadata({ data: "json, name=clusterIpv4Cidr" })
  clusterIpv4Cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterTelemetry" })
  clusterTelemetry?: ClusterTelemetry;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: StatusCondition })
  conditions?: StatusCondition[];

  @SpeakeasyMetadata({ data: "json, name=confidentialNodes" })
  confidentialNodes?: ConfidentialNodes;

  @SpeakeasyMetadata({ data: "json, name=costManagementConfig" })
  costManagementConfig?: CostManagementConfig;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=currentMasterVersion" })
  currentMasterVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=currentNodeCount" })
  currentNodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=currentNodeVersion" })
  currentNodeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=databaseEncryption" })
  databaseEncryption?: DatabaseEncryption;

  @SpeakeasyMetadata({ data: "json, name=defaultMaxPodsConstraint" })
  defaultMaxPodsConstraint?: MaxPodsConstraint;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enableKubernetesAlpha" })
  enableKubernetesAlpha?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableTpu" })
  enableTpu?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=identityServiceConfig" })
  identityServiceConfig?: IdentityServiceConfig;

  @SpeakeasyMetadata({ data: "json, name=initialClusterVersion" })
  initialClusterVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=initialNodeCount" })
  initialNodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=instanceGroupUrls" })
  instanceGroupUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=ipAllocationPolicy" })
  ipAllocationPolicy?: IpAllocationPolicy;

  @SpeakeasyMetadata({ data: "json, name=labelFingerprint" })
  labelFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=legacyAbac" })
  legacyAbac?: LegacyAbac;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations?: string[];

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=loggingService" })
  loggingService?: string;

  @SpeakeasyMetadata({ data: "json, name=maintenancePolicy" })
  maintenancePolicy?: MaintenancePolicy;

  @SpeakeasyMetadata({ data: "json, name=master" })
  master?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=masterAuth" })
  masterAuth?: MasterAuth;

  @SpeakeasyMetadata({ data: "json, name=masterAuthorizedNetworksConfig" })
  masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;

  @SpeakeasyMetadata({ data: "json, name=masterIpv4CidrBlock" })
  masterIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=meshCertificates" })
  meshCertificates?: MeshCertificates;

  @SpeakeasyMetadata({ data: "json, name=monitoringConfig" })
  monitoringConfig?: MonitoringConfig;

  @SpeakeasyMetadata({ data: "json, name=monitoringService" })
  monitoringService?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=networkPolicy" })
  networkPolicy?: NetworkPolicy;

  @SpeakeasyMetadata({ data: "json, name=nodeConfig" })
  nodeConfig?: NodeConfig;

  @SpeakeasyMetadata({ data: "json, name=nodeIpv4CidrSize" })
  nodeIpv4CidrSize?: number;

  @SpeakeasyMetadata({ data: "json, name=nodePoolAutoConfig" })
  nodePoolAutoConfig?: NodePoolAutoConfig;

  @SpeakeasyMetadata({ data: "json, name=nodePoolDefaults" })
  nodePoolDefaults?: NodePoolDefaults;

  @SpeakeasyMetadata({ data: "json, name=nodePools", elemType: NodePool })
  nodePools?: NodePool[];

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=podSecurityPolicyConfig" })
  podSecurityPolicyConfig?: PodSecurityPolicyConfig;

  @SpeakeasyMetadata({ data: "json, name=privateCluster" })
  privateCluster?: boolean;

  @SpeakeasyMetadata({ data: "json, name=privateClusterConfig" })
  privateClusterConfig?: PrivateClusterConfig;

  @SpeakeasyMetadata({ data: "json, name=protectConfig" })
  protectConfig?: ProtectConfig;

  @SpeakeasyMetadata({ data: "json, name=releaseChannel" })
  releaseChannel?: ReleaseChannel;

  @SpeakeasyMetadata({ data: "json, name=resourceLabels" })
  resourceLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resourceUsageExportConfig" })
  resourceUsageExportConfig?: ResourceUsageExportConfig;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=servicesIpv4Cidr" })
  servicesIpv4Cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=shieldedNodes" })
  shieldedNodes?: ShieldedNodes;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ClusterStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=tpuConfig" })
  tpuConfig?: TpuConfig;

  @SpeakeasyMetadata({ data: "json, name=tpuIpv4CidrBlock" })
  tpuIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=verticalPodAutoscaling" })
  verticalPodAutoscaling?: VerticalPodAutoscaling;

  @SpeakeasyMetadata({ data: "json, name=workloadAltsConfig" })
  workloadAltsConfig?: WorkloadAltsConfig;

  @SpeakeasyMetadata({ data: "json, name=workloadCertificates" })
  workloadCertificates?: WorkloadCertificates;

  @SpeakeasyMetadata({ data: "json, name=workloadIdentityConfig" })
  workloadIdentityConfig?: WorkloadIdentityConfig;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}


// ClusterInput
/** 
 * A Google Kubernetes Engine cluster.
**/
export class ClusterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addonsConfig" })
  addonsConfig?: AddonsConfig;

  @SpeakeasyMetadata({ data: "json, name=authenticatorGroupsConfig" })
  authenticatorGroupsConfig?: AuthenticatorGroupsConfig;

  @SpeakeasyMetadata({ data: "json, name=autopilot" })
  autopilot?: Autopilot;

  @SpeakeasyMetadata({ data: "json, name=autoscaling" })
  autoscaling?: ClusterAutoscaling;

  @SpeakeasyMetadata({ data: "json, name=binaryAuthorization" })
  binaryAuthorization?: BinaryAuthorization;

  @SpeakeasyMetadata({ data: "json, name=clusterIpv4Cidr" })
  clusterIpv4Cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterTelemetry" })
  clusterTelemetry?: ClusterTelemetry;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: StatusCondition })
  conditions?: StatusCondition[];

  @SpeakeasyMetadata({ data: "json, name=confidentialNodes" })
  confidentialNodes?: ConfidentialNodes;

  @SpeakeasyMetadata({ data: "json, name=costManagementConfig" })
  costManagementConfig?: CostManagementConfig;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=currentMasterVersion" })
  currentMasterVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=currentNodeCount" })
  currentNodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=currentNodeVersion" })
  currentNodeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=databaseEncryption" })
  databaseEncryption?: DatabaseEncryption;

  @SpeakeasyMetadata({ data: "json, name=defaultMaxPodsConstraint" })
  defaultMaxPodsConstraint?: MaxPodsConstraint;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enableKubernetesAlpha" })
  enableKubernetesAlpha?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableTpu" })
  enableTpu?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=identityServiceConfig" })
  identityServiceConfig?: IdentityServiceConfig;

  @SpeakeasyMetadata({ data: "json, name=initialClusterVersion" })
  initialClusterVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=initialNodeCount" })
  initialNodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=instanceGroupUrls" })
  instanceGroupUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=ipAllocationPolicy" })
  ipAllocationPolicy?: IpAllocationPolicyInput;

  @SpeakeasyMetadata({ data: "json, name=labelFingerprint" })
  labelFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=legacyAbac" })
  legacyAbac?: LegacyAbac;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations?: string[];

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=loggingService" })
  loggingService?: string;

  @SpeakeasyMetadata({ data: "json, name=maintenancePolicy" })
  maintenancePolicy?: MaintenancePolicy;

  @SpeakeasyMetadata({ data: "json, name=master" })
  master?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=masterAuth" })
  masterAuth?: MasterAuth;

  @SpeakeasyMetadata({ data: "json, name=masterAuthorizedNetworksConfig" })
  masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;

  @SpeakeasyMetadata({ data: "json, name=masterIpv4CidrBlock" })
  masterIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=meshCertificates" })
  meshCertificates?: MeshCertificates;

  @SpeakeasyMetadata({ data: "json, name=monitoringConfig" })
  monitoringConfig?: MonitoringConfig;

  @SpeakeasyMetadata({ data: "json, name=monitoringService" })
  monitoringService?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=networkPolicy" })
  networkPolicy?: NetworkPolicy;

  @SpeakeasyMetadata({ data: "json, name=nodeConfig" })
  nodeConfig?: NodeConfig;

  @SpeakeasyMetadata({ data: "json, name=nodeIpv4CidrSize" })
  nodeIpv4CidrSize?: number;

  @SpeakeasyMetadata({ data: "json, name=nodePoolAutoConfig" })
  nodePoolAutoConfig?: NodePoolAutoConfig;

  @SpeakeasyMetadata({ data: "json, name=nodePoolDefaults" })
  nodePoolDefaults?: NodePoolDefaults;

  @SpeakeasyMetadata({ data: "json, name=nodePools", elemType: NodePool })
  nodePools?: NodePool[];

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=podSecurityPolicyConfig" })
  podSecurityPolicyConfig?: PodSecurityPolicyConfig;

  @SpeakeasyMetadata({ data: "json, name=privateCluster" })
  privateCluster?: boolean;

  @SpeakeasyMetadata({ data: "json, name=privateClusterConfig" })
  privateClusterConfig?: PrivateClusterConfig;

  @SpeakeasyMetadata({ data: "json, name=protectConfig" })
  protectConfig?: ProtectConfig;

  @SpeakeasyMetadata({ data: "json, name=releaseChannel" })
  releaseChannel?: ReleaseChannel;

  @SpeakeasyMetadata({ data: "json, name=resourceLabels" })
  resourceLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resourceUsageExportConfig" })
  resourceUsageExportConfig?: ResourceUsageExportConfig;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=servicesIpv4Cidr" })
  servicesIpv4Cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=shieldedNodes" })
  shieldedNodes?: ShieldedNodes;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ClusterStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=tpuConfig" })
  tpuConfig?: TpuConfig;

  @SpeakeasyMetadata({ data: "json, name=tpuIpv4CidrBlock" })
  tpuIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=verticalPodAutoscaling" })
  verticalPodAutoscaling?: VerticalPodAutoscaling;

  @SpeakeasyMetadata({ data: "json, name=workloadAltsConfig" })
  workloadAltsConfig?: WorkloadAltsConfig;

  @SpeakeasyMetadata({ data: "json, name=workloadCertificates" })
  workloadCertificates?: WorkloadCertificates;

  @SpeakeasyMetadata({ data: "json, name=workloadIdentityConfig" })
  workloadIdentityConfig?: WorkloadIdentityConfig;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
