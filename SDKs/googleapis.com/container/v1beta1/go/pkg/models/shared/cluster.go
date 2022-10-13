package shared

type ClusterStatusEnum string

const (
	ClusterStatusEnumStatusUnspecified ClusterStatusEnum = "STATUS_UNSPECIFIED"
	ClusterStatusEnumProvisioning      ClusterStatusEnum = "PROVISIONING"
	ClusterStatusEnumRunning           ClusterStatusEnum = "RUNNING"
	ClusterStatusEnumReconciling       ClusterStatusEnum = "RECONCILING"
	ClusterStatusEnumStopping          ClusterStatusEnum = "STOPPING"
	ClusterStatusEnumError             ClusterStatusEnum = "ERROR"
	ClusterStatusEnumDegraded          ClusterStatusEnum = "DEGRADED"
)

type Cluster struct {
	AddonsConfig                   *AddonsConfig                   `json:"addonsConfig"`
	AuthenticatorGroupsConfig      *AuthenticatorGroupsConfig      `json:"authenticatorGroupsConfig"`
	Autopilot                      *Autopilot                      `json:"autopilot"`
	Autoscaling                    *ClusterAutoscaling             `json:"autoscaling"`
	BinaryAuthorization            *BinaryAuthorization            `json:"binaryAuthorization"`
	ClusterIpv4Cidr                *string                         `json:"clusterIpv4Cidr"`
	ClusterTelemetry               *ClusterTelemetry               `json:"clusterTelemetry"`
	Conditions                     []StatusCondition               `json:"conditions"`
	ConfidentialNodes              *ConfidentialNodes              `json:"confidentialNodes"`
	CostManagementConfig           *CostManagementConfig           `json:"costManagementConfig"`
	CreateTime                     *string                         `json:"createTime"`
	CurrentMasterVersion           *string                         `json:"currentMasterVersion"`
	CurrentNodeCount               *int32                          `json:"currentNodeCount"`
	CurrentNodeVersion             *string                         `json:"currentNodeVersion"`
	DatabaseEncryption             *DatabaseEncryption             `json:"databaseEncryption"`
	DefaultMaxPodsConstraint       *MaxPodsConstraint              `json:"defaultMaxPodsConstraint"`
	Description                    *string                         `json:"description"`
	EnableKubernetesAlpha          *bool                           `json:"enableKubernetesAlpha"`
	EnableTpu                      *bool                           `json:"enableTpu"`
	Endpoint                       *string                         `json:"endpoint"`
	ExpireTime                     *string                         `json:"expireTime"`
	ID                             *string                         `json:"id"`
	IdentityServiceConfig          *IdentityServiceConfig          `json:"identityServiceConfig"`
	InitialClusterVersion          *string                         `json:"initialClusterVersion"`
	InitialNodeCount               *int32                          `json:"initialNodeCount"`
	InstanceGroupUrls              []string                        `json:"instanceGroupUrls"`
	IPAllocationPolicy             *IPAllocationPolicy             `json:"ipAllocationPolicy"`
	LabelFingerprint               *string                         `json:"labelFingerprint"`
	LegacyAbac                     *LegacyAbac                     `json:"legacyAbac"`
	Location                       *string                         `json:"location"`
	Locations                      []string                        `json:"locations"`
	LoggingConfig                  *LoggingConfig                  `json:"loggingConfig"`
	LoggingService                 *string                         `json:"loggingService"`
	MaintenancePolicy              *MaintenancePolicy              `json:"maintenancePolicy"`
	Master                         map[string]interface{}          `json:"master"`
	MasterAuth                     *MasterAuth                     `json:"masterAuth"`
	MasterAuthorizedNetworksConfig *MasterAuthorizedNetworksConfig `json:"masterAuthorizedNetworksConfig"`
	MasterIpv4CidrBlock            *string                         `json:"masterIpv4CidrBlock"`
	MeshCertificates               *MeshCertificates               `json:"meshCertificates"`
	MonitoringConfig               *MonitoringConfig               `json:"monitoringConfig"`
	MonitoringService              *string                         `json:"monitoringService"`
	Name                           *string                         `json:"name"`
	Network                        *string                         `json:"network"`
	NetworkConfig                  *NetworkConfig                  `json:"networkConfig"`
	NetworkPolicy                  *NetworkPolicy                  `json:"networkPolicy"`
	NodeConfig                     *NodeConfig                     `json:"nodeConfig"`
	NodeIpv4CidrSize               *int32                          `json:"nodeIpv4CidrSize"`
	NodePoolAutoConfig             *NodePoolAutoConfig             `json:"nodePoolAutoConfig"`
	NodePoolDefaults               *NodePoolDefaults               `json:"nodePoolDefaults"`
	NodePools                      []NodePool                      `json:"nodePools"`
	NotificationConfig             *NotificationConfig             `json:"notificationConfig"`
	PodSecurityPolicyConfig        *PodSecurityPolicyConfig        `json:"podSecurityPolicyConfig"`
	PrivateCluster                 *bool                           `json:"privateCluster"`
	PrivateClusterConfig           *PrivateClusterConfig           `json:"privateClusterConfig"`
	ProtectConfig                  *ProtectConfig                  `json:"protectConfig"`
	ReleaseChannel                 *ReleaseChannel                 `json:"releaseChannel"`
	ResourceLabels                 map[string]string               `json:"resourceLabels"`
	ResourceUsageExportConfig      *ResourceUsageExportConfig      `json:"resourceUsageExportConfig"`
	SelfLink                       *string                         `json:"selfLink"`
	ServicesIpv4Cidr               *string                         `json:"servicesIpv4Cidr"`
	ShieldedNodes                  *ShieldedNodes                  `json:"shieldedNodes"`
	Status                         *ClusterStatusEnum              `json:"status"`
	StatusMessage                  *string                         `json:"statusMessage"`
	Subnetwork                     *string                         `json:"subnetwork"`
	TpuConfig                      *TpuConfig                      `json:"tpuConfig"`
	TpuIpv4CidrBlock               *string                         `json:"tpuIpv4CidrBlock"`
	VerticalPodAutoscaling         *VerticalPodAutoscaling         `json:"verticalPodAutoscaling"`
	WorkloadAltsConfig             *WorkloadAltsConfig             `json:"workloadAltsConfig"`
	WorkloadCertificates           *WorkloadCertificates           `json:"workloadCertificates"`
	WorkloadIdentityConfig         *WorkloadIdentityConfig         `json:"workloadIdentityConfig"`
	Zone                           *string                         `json:"zone"`
}
