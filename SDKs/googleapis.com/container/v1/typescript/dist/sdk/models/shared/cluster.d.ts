import { SpeakeasyBase } from "../../../internal/utils";
import { AddonsConfig } from "./addonsconfig";
import { AuthenticatorGroupsConfig } from "./authenticatorgroupsconfig";
import { Autopilot } from "./autopilot";
import { ClusterAutoscaling } from "./clusterautoscaling";
import { BinaryAuthorization } from "./binaryauthorization";
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
import { PrivateClusterConfig } from "./privateclusterconfig";
import { ReleaseChannel } from "./releasechannel";
import { ResourceUsageExportConfig } from "./resourceusageexportconfig";
import { ShieldedNodes } from "./shieldednodes";
import { VerticalPodAutoscaling } from "./verticalpodautoscaling";
import { WorkloadIdentityConfig } from "./workloadidentityconfig";
export declare enum ClusterStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Running = "RUNNING",
    Reconciling = "RECONCILING",
    Stopping = "STOPPING",
    Error = "ERROR",
    Degraded = "DEGRADED"
}
/**
 * A Google Kubernetes Engine cluster.
**/
export declare class ClusterInput extends SpeakeasyBase {
    addonsConfig?: AddonsConfig;
    authenticatorGroupsConfig?: AuthenticatorGroupsConfig;
    autopilot?: Autopilot;
    autoscaling?: ClusterAutoscaling;
    binaryAuthorization?: BinaryAuthorization;
    clusterIpv4Cidr?: string;
    conditions?: StatusCondition[];
    confidentialNodes?: ConfidentialNodes;
    costManagementConfig?: CostManagementConfig;
    createTime?: string;
    currentMasterVersion?: string;
    currentNodeCount?: number;
    currentNodeVersion?: string;
    databaseEncryption?: DatabaseEncryption;
    defaultMaxPodsConstraint?: MaxPodsConstraint;
    description?: string;
    enableKubernetesAlpha?: boolean;
    enableTpu?: boolean;
    endpoint?: string;
    expireTime?: string;
    identityServiceConfig?: IdentityServiceConfig;
    initialClusterVersion?: string;
    initialNodeCount?: number;
    instanceGroupUrls?: string[];
    ipAllocationPolicy?: IpAllocationPolicy;
    labelFingerprint?: string;
    legacyAbac?: LegacyAbac;
    location?: string;
    locations?: string[];
    loggingConfig?: LoggingConfig;
    loggingService?: string;
    maintenancePolicy?: MaintenancePolicy;
    masterAuth?: MasterAuth;
    masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
    meshCertificates?: MeshCertificates;
    monitoringConfig?: MonitoringConfig;
    monitoringService?: string;
    name?: string;
    network?: string;
    networkConfig?: NetworkConfig;
    networkPolicy?: NetworkPolicy;
    nodeConfig?: NodeConfig;
    nodeIpv4CidrSize?: number;
    nodePoolAutoConfig?: NodePoolAutoConfig;
    nodePoolDefaults?: NodePoolDefaults;
    nodePools?: NodePool[];
    notificationConfig?: NotificationConfig;
    privateClusterConfig?: PrivateClusterConfig;
    releaseChannel?: ReleaseChannel;
    resourceLabels?: Map<string, string>;
    resourceUsageExportConfig?: ResourceUsageExportConfig;
    selfLink?: string;
    servicesIpv4Cidr?: string;
    shieldedNodes?: ShieldedNodes;
    status?: ClusterStatusEnum;
    statusMessage?: string;
    subnetwork?: string;
    tpuIpv4CidrBlock?: string;
    verticalPodAutoscaling?: VerticalPodAutoscaling;
    workloadIdentityConfig?: WorkloadIdentityConfig;
    zone?: string;
}
/**
 * A Google Kubernetes Engine cluster.
**/
export declare class Cluster extends SpeakeasyBase {
    addonsConfig?: AddonsConfig;
    authenticatorGroupsConfig?: AuthenticatorGroupsConfig;
    autopilot?: Autopilot;
    autoscaling?: ClusterAutoscaling;
    binaryAuthorization?: BinaryAuthorization;
    clusterIpv4Cidr?: string;
    conditions?: StatusCondition[];
    confidentialNodes?: ConfidentialNodes;
    costManagementConfig?: CostManagementConfig;
    createTime?: string;
    currentMasterVersion?: string;
    currentNodeCount?: number;
    currentNodeVersion?: string;
    databaseEncryption?: DatabaseEncryption;
    defaultMaxPodsConstraint?: MaxPodsConstraint;
    description?: string;
    enableKubernetesAlpha?: boolean;
    enableTpu?: boolean;
    endpoint?: string;
    expireTime?: string;
    id?: string;
    identityServiceConfig?: IdentityServiceConfig;
    initialClusterVersion?: string;
    initialNodeCount?: number;
    instanceGroupUrls?: string[];
    ipAllocationPolicy?: IpAllocationPolicy;
    labelFingerprint?: string;
    legacyAbac?: LegacyAbac;
    location?: string;
    locations?: string[];
    loggingConfig?: LoggingConfig;
    loggingService?: string;
    maintenancePolicy?: MaintenancePolicy;
    masterAuth?: MasterAuth;
    masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
    meshCertificates?: MeshCertificates;
    monitoringConfig?: MonitoringConfig;
    monitoringService?: string;
    name?: string;
    network?: string;
    networkConfig?: NetworkConfig;
    networkPolicy?: NetworkPolicy;
    nodeConfig?: NodeConfig;
    nodeIpv4CidrSize?: number;
    nodePoolAutoConfig?: NodePoolAutoConfig;
    nodePoolDefaults?: NodePoolDefaults;
    nodePools?: NodePool[];
    notificationConfig?: NotificationConfig;
    privateClusterConfig?: PrivateClusterConfig;
    releaseChannel?: ReleaseChannel;
    resourceLabels?: Map<string, string>;
    resourceUsageExportConfig?: ResourceUsageExportConfig;
    selfLink?: string;
    servicesIpv4Cidr?: string;
    shieldedNodes?: ShieldedNodes;
    status?: ClusterStatusEnum;
    statusMessage?: string;
    subnetwork?: string;
    tpuIpv4CidrBlock?: string;
    verticalPodAutoscaling?: VerticalPodAutoscaling;
    workloadIdentityConfig?: WorkloadIdentityConfig;
    zone?: string;
}
