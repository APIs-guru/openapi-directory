from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import addonsconfig
from . import authenticatorgroupsconfig
from . import binaryauthorization
from . import clusterautoscaling
from . import costmanagementconfig
from . import databaseencryption
from . import defaultsnatstatus
from . import dnsconfig
from . import gcfsconfig
from . import identityserviceconfig
from . import intranodevisibilityconfig
from . import ilbsubsettingconfig
from . import loggingconfig
from . import masterauthorizednetworksconfig
from . import meshcertificates
from . import monitoringconfig
from . import networktags
from . import nodepoolautoscaling
from . import nodepoolloggingconfig
from . import notificationconfig
from . import privateclusterconfig
from . import releasechannel
from . import resourceusageexportconfig
from . import serviceexternalipsconfig
from . import shieldednodes
from . import verticalpodautoscaling
from . import workloadidentityconfig

class ClusterUpdateDesiredDatapathProviderEnum(str, Enum):
    DATAPATH_PROVIDER_UNSPECIFIED = "DATAPATH_PROVIDER_UNSPECIFIED"
    LEGACY_DATAPATH = "LEGACY_DATAPATH"
    ADVANCED_DATAPATH = "ADVANCED_DATAPATH"

class ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum(str, Enum):
    PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
    PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED"
    PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE"
    PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"


@dataclass_json
@dataclass
class ClusterUpdate:
    desired_addons_config: Optional[addonsconfig.AddonsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredAddonsConfig' }})
    desired_authenticator_groups_config: Optional[authenticatorgroupsconfig.AuthenticatorGroupsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredAuthenticatorGroupsConfig' }})
    desired_binary_authorization: Optional[binaryauthorization.BinaryAuthorization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredBinaryAuthorization' }})
    desired_cluster_autoscaling: Optional[clusterautoscaling.ClusterAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredClusterAutoscaling' }})
    desired_cost_management_config: Optional[costmanagementconfig.CostManagementConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredCostManagementConfig' }})
    desired_database_encryption: Optional[databaseencryption.DatabaseEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredDatabaseEncryption' }})
    desired_datapath_provider: Optional[ClusterUpdateDesiredDatapathProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredDatapathProvider' }})
    desired_default_snat_status: Optional[defaultsnatstatus.DefaultSnatStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredDefaultSnatStatus' }})
    desired_dns_config: Optional[dnsconfig.DNSConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredDnsConfig' }})
    desired_gcfs_config: Optional[gcfsconfig.GcfsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredGcfsConfig' }})
    desired_identity_service_config: Optional[identityserviceconfig.IdentityServiceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredIdentityServiceConfig' }})
    desired_image_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredImageType' }})
    desired_intra_node_visibility_config: Optional[intranodevisibilityconfig.IntraNodeVisibilityConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredIntraNodeVisibilityConfig' }})
    desired_l4ilb_subsetting_config: Optional[ilbsubsettingconfig.IlbSubsettingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredL4ilbSubsettingConfig' }})
    desired_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredLocations' }})
    desired_logging_config: Optional[loggingconfig.LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredLoggingConfig' }})
    desired_logging_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredLoggingService' }})
    desired_master_authorized_networks_config: Optional[masterauthorizednetworksconfig.MasterAuthorizedNetworksConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredMasterAuthorizedNetworksConfig' }})
    desired_master_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredMasterVersion' }})
    desired_mesh_certificates: Optional[meshcertificates.MeshCertificates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredMeshCertificates' }})
    desired_monitoring_config: Optional[monitoringconfig.MonitoringConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredMonitoringConfig' }})
    desired_monitoring_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredMonitoringService' }})
    desired_node_pool_auto_config_network_tags: Optional[networktags.NetworkTags] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredNodePoolAutoConfigNetworkTags' }})
    desired_node_pool_autoscaling: Optional[nodepoolautoscaling.NodePoolAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredNodePoolAutoscaling' }})
    desired_node_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredNodePoolId' }})
    desired_node_pool_logging_config: Optional[nodepoolloggingconfig.NodePoolLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredNodePoolLoggingConfig' }})
    desired_node_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredNodeVersion' }})
    desired_notification_config: Optional[notificationconfig.NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredNotificationConfig' }})
    desired_private_cluster_config: Optional[privateclusterconfig.PrivateClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredPrivateClusterConfig' }})
    desired_private_ipv6_google_access: Optional[ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredPrivateIpv6GoogleAccess' }})
    desired_release_channel: Optional[releasechannel.ReleaseChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredReleaseChannel' }})
    desired_resource_usage_export_config: Optional[resourceusageexportconfig.ResourceUsageExportConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredResourceUsageExportConfig' }})
    desired_service_external_ips_config: Optional[serviceexternalipsconfig.ServiceExternalIPsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredServiceExternalIpsConfig' }})
    desired_shielded_nodes: Optional[shieldednodes.ShieldedNodes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredShieldedNodes' }})
    desired_vertical_pod_autoscaling: Optional[verticalpodautoscaling.VerticalPodAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredVerticalPodAutoscaling' }})
    desired_workload_identity_config: Optional[workloadidentityconfig.WorkloadIdentityConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredWorkloadIdentityConfig' }})
    
