from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import addonsconfig
from . import authenticatorgroupsconfig
from . import autopilot
from . import clusterautoscaling
from . import binaryauthorization
from . import statuscondition
from . import confidentialnodes
from . import costmanagementconfig
from . import databaseencryption
from . import maxpodsconstraint
from . import identityserviceconfig
from . import ipallocationpolicy
from . import legacyabac
from . import loggingconfig
from . import maintenancepolicy
from . import masterauth
from . import masterauthorizednetworksconfig
from . import meshcertificates
from . import monitoringconfig
from . import networkconfig
from . import networkpolicy
from . import nodeconfig
from . import nodepoolautoconfig
from . import nodepooldefaults
from . import nodepool
from . import notificationconfig
from . import privateclusterconfig
from . import releasechannel
from . import resourceusageexportconfig
from . import shieldednodes
from . import verticalpodautoscaling
from . import workloadidentityconfig

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
class Cluster:
    addons_config: Optional[addonsconfig.AddonsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonsConfig' }})
    authenticator_groups_config: Optional[authenticatorgroupsconfig.AuthenticatorGroupsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticatorGroupsConfig' }})
    autopilot: Optional[autopilot.Autopilot] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autopilot' }})
    autoscaling: Optional[clusterautoscaling.ClusterAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoscaling' }})
    binary_authorization: Optional[binaryauthorization.BinaryAuthorization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'binaryAuthorization' }})
    cluster_ipv4_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterIpv4Cidr' }})
    conditions: Optional[List[statuscondition.StatusCondition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    confidential_nodes: Optional[confidentialnodes.ConfidentialNodes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidentialNodes' }})
    cost_management_config: Optional[costmanagementconfig.CostManagementConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costManagementConfig' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    current_master_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentMasterVersion' }})
    current_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentNodeCount' }})
    current_node_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentNodeVersion' }})
    database_encryption: Optional[databaseencryption.DatabaseEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseEncryption' }})
    default_max_pods_constraint: Optional[maxpodsconstraint.MaxPodsConstraint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultMaxPodsConstraint' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    enable_kubernetes_alpha: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableKubernetesAlpha' }})
    enable_tpu: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableTpu' }})
    endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identity_service_config: Optional[identityserviceconfig.IdentityServiceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityServiceConfig' }})
    initial_cluster_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialClusterVersion' }})
    initial_node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'initialNodeCount' }})
    instance_group_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceGroupUrls' }})
    ip_allocation_policy: Optional[ipallocationpolicy.IPAllocationPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAllocationPolicy' }})
    label_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelFingerprint' }})
    legacy_abac: Optional[legacyabac.LegacyAbac] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacyAbac' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    logging_config: Optional[loggingconfig.LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfig' }})
    logging_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingService' }})
    maintenance_policy: Optional[maintenancepolicy.MaintenancePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenancePolicy' }})
    master_auth: Optional[masterauth.MasterAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterAuth' }})
    master_authorized_networks_config: Optional[masterauthorizednetworksconfig.MasterAuthorizedNetworksConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterAuthorizedNetworksConfig' }})
    mesh_certificates: Optional[meshcertificates.MeshCertificates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshCertificates' }})
    monitoring_config: Optional[monitoringconfig.MonitoringConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoringConfig' }})
    monitoring_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monitoringService' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    network_config: Optional[networkconfig.NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfig' }})
    network_policy: Optional[networkpolicy.NetworkPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkPolicy' }})
    node_config: Optional[nodeconfig.NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeConfig' }})
    node_ipv4_cidr_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeIpv4CidrSize' }})
    node_pool_auto_config: Optional[nodepoolautoconfig.NodePoolAutoConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePoolAutoConfig' }})
    node_pool_defaults: Optional[nodepooldefaults.NodePoolDefaults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePoolDefaults' }})
    node_pools: Optional[List[nodepool.NodePool]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodePools' }})
    notification_config: Optional[notificationconfig.NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfig' }})
    private_cluster_config: Optional[privateclusterconfig.PrivateClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateClusterConfig' }})
    release_channel: Optional[releasechannel.ReleaseChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseChannel' }})
    resource_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceLabels' }})
    resource_usage_export_config: Optional[resourceusageexportconfig.ResourceUsageExportConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUsageExportConfig' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    services_ipv4_cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicesIpv4Cidr' }})
    shielded_nodes: Optional[shieldednodes.ShieldedNodes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shieldedNodes' }})
    status: Optional[ClusterStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMessage' }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetwork' }})
    tpu_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tpuIpv4CidrBlock' }})
    vertical_pod_autoscaling: Optional[verticalpodautoscaling.VerticalPodAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verticalPodAutoscaling' }})
    workload_identity_config: Optional[workloadidentityconfig.WorkloadIdentityConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadIdentityConfig' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
