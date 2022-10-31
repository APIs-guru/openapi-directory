package shared




type ClusterStatusEnum string

const (
    ClusterStatusEnumStatusUnspecified ClusterStatusEnum = "STATUS_UNSPECIFIED"
ClusterStatusEnumProvisioning ClusterStatusEnum = "PROVISIONING"
ClusterStatusEnumRunning ClusterStatusEnum = "RUNNING"
ClusterStatusEnumReconciling ClusterStatusEnum = "RECONCILING"
ClusterStatusEnumStopping ClusterStatusEnum = "STOPPING"
ClusterStatusEnumError ClusterStatusEnum = "ERROR"
ClusterStatusEnumDegraded ClusterStatusEnum = "DEGRADED"
)


type Cluster struct {
    AddonsConfig *AddonsConfig `json:"addonsConfig,omitempty"`
    AuthenticatorGroupsConfig *AuthenticatorGroupsConfig `json:"authenticatorGroupsConfig,omitempty"`
    Autopilot *Autopilot `json:"autopilot,omitempty"`
    Autoscaling *ClusterAutoscaling `json:"autoscaling,omitempty"`
    BinaryAuthorization *BinaryAuthorization `json:"binaryAuthorization,omitempty"`
    ClusterIpv4Cidr *string `json:"clusterIpv4Cidr,omitempty"`
    Conditions []StatusCondition `json:"conditions,omitempty"`
    ConfidentialNodes *ConfidentialNodes `json:"confidentialNodes,omitempty"`
    CostManagementConfig *CostManagementConfig `json:"costManagementConfig,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    CurrentMasterVersion *string `json:"currentMasterVersion,omitempty"`
    CurrentNodeCount *int32 `json:"currentNodeCount,omitempty"`
    CurrentNodeVersion *string `json:"currentNodeVersion,omitempty"`
    DatabaseEncryption *DatabaseEncryption `json:"databaseEncryption,omitempty"`
    DefaultMaxPodsConstraint *MaxPodsConstraint `json:"defaultMaxPodsConstraint,omitempty"`
    Description *string `json:"description,omitempty"`
    EnableKubernetesAlpha *bool `json:"enableKubernetesAlpha,omitempty"`
    EnableTpu *bool `json:"enableTpu,omitempty"`
    Endpoint *string `json:"endpoint,omitempty"`
    ExpireTime *string `json:"expireTime,omitempty"`
    ID *string `json:"id,omitempty"`
    IdentityServiceConfig *IdentityServiceConfig `json:"identityServiceConfig,omitempty"`
    InitialClusterVersion *string `json:"initialClusterVersion,omitempty"`
    InitialNodeCount *int32 `json:"initialNodeCount,omitempty"`
    InstanceGroupUrls []string `json:"instanceGroupUrls,omitempty"`
    IPAllocationPolicy *IPAllocationPolicy `json:"ipAllocationPolicy,omitempty"`
    LabelFingerprint *string `json:"labelFingerprint,omitempty"`
    LegacyAbac *LegacyAbac `json:"legacyAbac,omitempty"`
    Location *string `json:"location,omitempty"`
    Locations []string `json:"locations,omitempty"`
    LoggingConfig *LoggingConfig `json:"loggingConfig,omitempty"`
    LoggingService *string `json:"loggingService,omitempty"`
    MaintenancePolicy *MaintenancePolicy `json:"maintenancePolicy,omitempty"`
    MasterAuth *MasterAuth `json:"masterAuth,omitempty"`
    MasterAuthorizedNetworksConfig *MasterAuthorizedNetworksConfig `json:"masterAuthorizedNetworksConfig,omitempty"`
    MeshCertificates *MeshCertificates `json:"meshCertificates,omitempty"`
    MonitoringConfig *MonitoringConfig `json:"monitoringConfig,omitempty"`
    MonitoringService *string `json:"monitoringService,omitempty"`
    Name *string `json:"name,omitempty"`
    Network *string `json:"network,omitempty"`
    NetworkConfig *NetworkConfig `json:"networkConfig,omitempty"`
    NetworkPolicy *NetworkPolicy `json:"networkPolicy,omitempty"`
    NodeConfig *NodeConfig `json:"nodeConfig,omitempty"`
    NodeIpv4CidrSize *int32 `json:"nodeIpv4CidrSize,omitempty"`
    NodePoolAutoConfig *NodePoolAutoConfig `json:"nodePoolAutoConfig,omitempty"`
    NodePoolDefaults *NodePoolDefaults `json:"nodePoolDefaults,omitempty"`
    NodePools []NodePool `json:"nodePools,omitempty"`
    NotificationConfig *NotificationConfig `json:"notificationConfig,omitempty"`
    PrivateClusterConfig *PrivateClusterConfig `json:"privateClusterConfig,omitempty"`
    ReleaseChannel *ReleaseChannel `json:"releaseChannel,omitempty"`
    ResourceLabels map[string]string `json:"resourceLabels,omitempty"`
    ResourceUsageExportConfig *ResourceUsageExportConfig `json:"resourceUsageExportConfig,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    ServicesIpv4Cidr *string `json:"servicesIpv4Cidr,omitempty"`
    ShieldedNodes *ShieldedNodes `json:"shieldedNodes,omitempty"`
    Status *ClusterStatusEnum `json:"status,omitempty"`
    StatusMessage *string `json:"statusMessage,omitempty"`
    Subnetwork *string `json:"subnetwork,omitempty"`
    TpuIpv4CidrBlock *string `json:"tpuIpv4CidrBlock,omitempty"`
    VerticalPodAutoscaling *VerticalPodAutoscaling `json:"verticalPodAutoscaling,omitempty"`
    WorkloadIdentityConfig *WorkloadIdentityConfig `json:"workloadIdentityConfig,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

