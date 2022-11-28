from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ClusterStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    PROVISIONING = "PROVISIONING"
    RUNNING = "RUNNING"
    RECONCILING = "RECONCILING"
    STOPPING = "STOPPING"
    ERROR = "ERROR"
    DEGRADED = "DEGRADED"


@dataclass_json
@dataclass
class ClusterInput:
    r"""ClusterInput
    A Google Kubernetes Engine cluster.
    """
    
    addons_config: Optional[AddonsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addonsConfig') }})
    authenticator_groups_config: Optional[AuthenticatorGroupsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticatorGroupsConfig') }})
    autopilot: Optional[Autopilot] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autopilot') }})
    autoscaling: Optional[ClusterAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscaling') }})
    binary_authorization: Optional[BinaryAuthorization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryAuthorization') }})
    cluster_ipv4_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterIpv4Cidr') }})
    conditions: Optional[List[StatusCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    confidential_nodes: Optional[ConfidentialNodes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidentialNodes') }})
    cost_management_config: Optional[CostManagementConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costManagementConfig') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    current_master_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentMasterVersion') }})
    current_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentNodeCount') }})
    current_node_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentNodeVersion') }})
    database_encryption: Optional[DatabaseEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseEncryption') }})
    default_max_pods_constraint: Optional[MaxPodsConstraint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultMaxPodsConstraint') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enable_kubernetes_alpha: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableKubernetesAlpha') }})
    enable_tpu: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableTpu') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    identity_service_config: Optional[IdentityServiceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityServiceConfig') }})
    initial_cluster_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialClusterVersion') }})
    initial_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialNodeCount') }})
    instance_group_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceGroupUrls') }})
    ip_allocation_policy: Optional[IPAllocationPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAllocationPolicy') }})
    label_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelFingerprint') }})
    legacy_abac: Optional[LegacyAbac] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyAbac') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    logging_config: Optional[LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    logging_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingService') }})
    maintenance_policy: Optional[MaintenancePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenancePolicy') }})
    master_auth: Optional[MasterAuth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterAuth') }})
    master_authorized_networks_config: Optional[MasterAuthorizedNetworksConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterAuthorizedNetworksConfig') }})
    mesh_certificates: Optional[MeshCertificates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshCertificates') }})
    monitoring_config: Optional[MonitoringConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoringConfig') }})
    monitoring_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoringService') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    network_policy: Optional[NetworkPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkPolicy') }})
    node_config: Optional[NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeConfig') }})
    node_ipv4_cidr_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeIpv4CidrSize') }})
    node_pool_auto_config: Optional[NodePoolAutoConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePoolAutoConfig') }})
    node_pool_defaults: Optional[NodePoolDefaults] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePoolDefaults') }})
    node_pools: Optional[List[NodePool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePools') }})
    notification_config: Optional[NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfig') }})
    private_cluster_config: Optional[PrivateClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateClusterConfig') }})
    release_channel: Optional[ReleaseChannel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseChannel') }})
    resource_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLabels') }})
    resource_usage_export_config: Optional[ResourceUsageExportConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUsageExportConfig') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    services_ipv4_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicesIpv4Cidr') }})
    shielded_nodes: Optional[ShieldedNodes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedNodes') }})
    status: Optional[ClusterStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    tpu_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tpuIpv4CidrBlock') }})
    vertical_pod_autoscaling: Optional[VerticalPodAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verticalPodAutoscaling') }})
    workload_identity_config: Optional[WorkloadIdentityConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadIdentityConfig') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    

@dataclass_json
@dataclass
class Cluster:
    r"""Cluster
    A Google Kubernetes Engine cluster.
    """
    
    addons_config: Optional[AddonsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addonsConfig') }})
    authenticator_groups_config: Optional[AuthenticatorGroupsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticatorGroupsConfig') }})
    autopilot: Optional[Autopilot] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autopilot') }})
    autoscaling: Optional[ClusterAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscaling') }})
    binary_authorization: Optional[BinaryAuthorization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('binaryAuthorization') }})
    cluster_ipv4_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterIpv4Cidr') }})
    conditions: Optional[List[StatusCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    confidential_nodes: Optional[ConfidentialNodes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidentialNodes') }})
    cost_management_config: Optional[CostManagementConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costManagementConfig') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    current_master_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentMasterVersion') }})
    current_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentNodeCount') }})
    current_node_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentNodeVersion') }})
    database_encryption: Optional[DatabaseEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseEncryption') }})
    default_max_pods_constraint: Optional[MaxPodsConstraint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultMaxPodsConstraint') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    enable_kubernetes_alpha: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableKubernetesAlpha') }})
    enable_tpu: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableTpu') }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    identity_service_config: Optional[IdentityServiceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityServiceConfig') }})
    initial_cluster_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialClusterVersion') }})
    initial_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initialNodeCount') }})
    instance_group_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceGroupUrls') }})
    ip_allocation_policy: Optional[IPAllocationPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAllocationPolicy') }})
    label_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelFingerprint') }})
    legacy_abac: Optional[LegacyAbac] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyAbac') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    logging_config: Optional[LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    logging_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingService') }})
    maintenance_policy: Optional[MaintenancePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenancePolicy') }})
    master_auth: Optional[MasterAuth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterAuth') }})
    master_authorized_networks_config: Optional[MasterAuthorizedNetworksConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterAuthorizedNetworksConfig') }})
    mesh_certificates: Optional[MeshCertificates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshCertificates') }})
    monitoring_config: Optional[MonitoringConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoringConfig') }})
    monitoring_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoringService') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    network_policy: Optional[NetworkPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkPolicy') }})
    node_config: Optional[NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeConfig') }})
    node_ipv4_cidr_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeIpv4CidrSize') }})
    node_pool_auto_config: Optional[NodePoolAutoConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePoolAutoConfig') }})
    node_pool_defaults: Optional[NodePoolDefaults] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePoolDefaults') }})
    node_pools: Optional[List[NodePool]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodePools') }})
    notification_config: Optional[NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfig') }})
    private_cluster_config: Optional[PrivateClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateClusterConfig') }})
    release_channel: Optional[ReleaseChannel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseChannel') }})
    resource_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceLabels') }})
    resource_usage_export_config: Optional[ResourceUsageExportConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUsageExportConfig') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    services_ipv4_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicesIpv4Cidr') }})
    shielded_nodes: Optional[ShieldedNodes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedNodes') }})
    status: Optional[ClusterStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetwork') }})
    tpu_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tpuIpv4CidrBlock') }})
    vertical_pod_autoscaling: Optional[VerticalPodAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verticalPodAutoscaling') }})
    workload_identity_config: Optional[WorkloadIdentityConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadIdentityConfig') }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zone') }})
    
