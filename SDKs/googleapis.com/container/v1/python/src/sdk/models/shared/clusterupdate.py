from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""ClusterUpdate
    ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided.
    """
    
    desired_addons_config: Optional[AddonsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredAddonsConfig') }})
    desired_authenticator_groups_config: Optional[AuthenticatorGroupsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredAuthenticatorGroupsConfig') }})
    desired_binary_authorization: Optional[BinaryAuthorization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredBinaryAuthorization') }})
    desired_cluster_autoscaling: Optional[ClusterAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredClusterAutoscaling') }})
    desired_cost_management_config: Optional[CostManagementConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredCostManagementConfig') }})
    desired_database_encryption: Optional[DatabaseEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredDatabaseEncryption') }})
    desired_datapath_provider: Optional[ClusterUpdateDesiredDatapathProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredDatapathProvider') }})
    desired_default_snat_status: Optional[DefaultSnatStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredDefaultSnatStatus') }})
    desired_dns_config: Optional[DNSConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredDnsConfig') }})
    desired_enable_private_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredEnablePrivateEndpoint') }})
    desired_gateway_api_config: Optional[GatewayAPIConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredGatewayApiConfig') }})
    desired_gcfs_config: Optional[GcfsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredGcfsConfig') }})
    desired_identity_service_config: Optional[IdentityServiceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredIdentityServiceConfig') }})
    desired_image_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredImageType') }})
    desired_intra_node_visibility_config: Optional[IntraNodeVisibilityConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredIntraNodeVisibilityConfig') }})
    desired_l4ilb_subsetting_config: Optional[IlbSubsettingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredL4ilbSubsettingConfig') }})
    desired_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredLocations') }})
    desired_logging_config: Optional[LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredLoggingConfig') }})
    desired_logging_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredLoggingService') }})
    desired_master_authorized_networks_config: Optional[MasterAuthorizedNetworksConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredMasterAuthorizedNetworksConfig') }})
    desired_master_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredMasterVersion') }})
    desired_mesh_certificates: Optional[MeshCertificates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredMeshCertificates') }})
    desired_monitoring_config: Optional[MonitoringConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredMonitoringConfig') }})
    desired_monitoring_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredMonitoringService') }})
    desired_node_pool_auto_config_network_tags: Optional[NetworkTags] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredNodePoolAutoConfigNetworkTags') }})
    desired_node_pool_autoscaling: Optional[NodePoolAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredNodePoolAutoscaling') }})
    desired_node_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredNodePoolId') }})
    desired_node_pool_logging_config: Optional[NodePoolLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredNodePoolLoggingConfig') }})
    desired_node_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredNodeVersion') }})
    desired_notification_config: Optional[NotificationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredNotificationConfig') }})
    desired_private_cluster_config: Optional[PrivateClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredPrivateClusterConfig') }})
    desired_private_ipv6_google_access: Optional[ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredPrivateIpv6GoogleAccess') }})
    desired_release_channel: Optional[ReleaseChannel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredReleaseChannel') }})
    desired_resource_usage_export_config: Optional[ResourceUsageExportConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredResourceUsageExportConfig') }})
    desired_service_external_ips_config: Optional[ServiceExternalIPsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredServiceExternalIpsConfig') }})
    desired_shielded_nodes: Optional[ShieldedNodes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredShieldedNodes') }})
    desired_vertical_pod_autoscaling: Optional[VerticalPodAutoscaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredVerticalPodAutoscaling') }})
    desired_workload_identity_config: Optional[WorkloadIdentityConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desiredWorkloadIdentityConfig') }})
    
