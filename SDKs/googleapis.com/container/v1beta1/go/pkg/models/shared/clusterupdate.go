package shared




type ClusterUpdateDesiredDatapathProviderEnum string

const (
    ClusterUpdateDesiredDatapathProviderEnumDatapathProviderUnspecified ClusterUpdateDesiredDatapathProviderEnum = "DATAPATH_PROVIDER_UNSPECIFIED"
ClusterUpdateDesiredDatapathProviderEnumLegacyDatapath ClusterUpdateDesiredDatapathProviderEnum = "LEGACY_DATAPATH"
ClusterUpdateDesiredDatapathProviderEnumAdvancedDatapath ClusterUpdateDesiredDatapathProviderEnum = "ADVANCED_DATAPATH"
)



type ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum string

const (
    ClusterUpdateDesiredPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessUnspecified ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
ClusterUpdateDesiredPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessDisabled ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED"
ClusterUpdateDesiredPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessToGoogle ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE"
ClusterUpdateDesiredPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessBidirectional ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
)


type ClusterUpdate struct {
    DesiredAddonsConfig *AddonsConfig `json:"desiredAddonsConfig,omitempty"`
    DesiredAuthenticatorGroupsConfig *AuthenticatorGroupsConfig `json:"desiredAuthenticatorGroupsConfig,omitempty"`
    DesiredBinaryAuthorization *BinaryAuthorization `json:"desiredBinaryAuthorization,omitempty"`
    DesiredClusterAutoscaling *ClusterAutoscaling `json:"desiredClusterAutoscaling,omitempty"`
    DesiredClusterTelemetry *ClusterTelemetry `json:"desiredClusterTelemetry,omitempty"`
    DesiredCostManagementConfig *CostManagementConfig `json:"desiredCostManagementConfig,omitempty"`
    DesiredDatabaseEncryption *DatabaseEncryption `json:"desiredDatabaseEncryption,omitempty"`
    DesiredDatapathProvider *ClusterUpdateDesiredDatapathProviderEnum `json:"desiredDatapathProvider,omitempty"`
    DesiredDefaultSnatStatus *DefaultSnatStatus `json:"desiredDefaultSnatStatus,omitempty"`
    DesiredDNSConfig *DNSConfig `json:"desiredDnsConfig,omitempty"`
    DesiredGcfsConfig *GcfsConfig `json:"desiredGcfsConfig,omitempty"`
    DesiredIdentityServiceConfig *IdentityServiceConfig `json:"desiredIdentityServiceConfig,omitempty"`
    DesiredImageType *string `json:"desiredImageType,omitempty"`
    DesiredIntraNodeVisibilityConfig *IntraNodeVisibilityConfig `json:"desiredIntraNodeVisibilityConfig,omitempty"`
    DesiredL4ilbSubsettingConfig *IlbSubsettingConfig `json:"desiredL4ilbSubsettingConfig,omitempty"`
    DesiredLocations []string `json:"desiredLocations,omitempty"`
    DesiredLoggingConfig *LoggingConfig `json:"desiredLoggingConfig,omitempty"`
    DesiredLoggingService *string `json:"desiredLoggingService,omitempty"`
    DesiredMaster map[string]interface{} `json:"desiredMaster,omitempty"`
    DesiredMasterAuthorizedNetworksConfig *MasterAuthorizedNetworksConfig `json:"desiredMasterAuthorizedNetworksConfig,omitempty"`
    DesiredMasterVersion *string `json:"desiredMasterVersion,omitempty"`
    DesiredMeshCertificates *MeshCertificates `json:"desiredMeshCertificates,omitempty"`
    DesiredMonitoringConfig *MonitoringConfig `json:"desiredMonitoringConfig,omitempty"`
    DesiredMonitoringService *string `json:"desiredMonitoringService,omitempty"`
    DesiredNodePoolAutoConfigNetworkTags *NetworkTags `json:"desiredNodePoolAutoConfigNetworkTags,omitempty"`
    DesiredNodePoolAutoscaling *NodePoolAutoscaling `json:"desiredNodePoolAutoscaling,omitempty"`
    DesiredNodePoolID *string `json:"desiredNodePoolId,omitempty"`
    DesiredNodePoolLoggingConfig *NodePoolLoggingConfig `json:"desiredNodePoolLoggingConfig,omitempty"`
    DesiredNodeVersion *string `json:"desiredNodeVersion,omitempty"`
    DesiredNotificationConfig *NotificationConfig `json:"desiredNotificationConfig,omitempty"`
    DesiredPodSecurityPolicyConfig *PodSecurityPolicyConfig `json:"desiredPodSecurityPolicyConfig,omitempty"`
    DesiredPrivateClusterConfig *PrivateClusterConfig `json:"desiredPrivateClusterConfig,omitempty"`
    DesiredPrivateIpv6GoogleAccess *ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum `json:"desiredPrivateIpv6GoogleAccess,omitempty"`
    DesiredProtectConfig *ProtectConfig `json:"desiredProtectConfig,omitempty"`
    DesiredReleaseChannel *ReleaseChannel `json:"desiredReleaseChannel,omitempty"`
    DesiredResourceUsageExportConfig *ResourceUsageExportConfig `json:"desiredResourceUsageExportConfig,omitempty"`
    DesiredServiceExternalIpsConfig *ServiceExternalIPsConfig `json:"desiredServiceExternalIpsConfig,omitempty"`
    DesiredShieldedNodes *ShieldedNodes `json:"desiredShieldedNodes,omitempty"`
    DesiredTpuConfig *TpuConfig `json:"desiredTpuConfig,omitempty"`
    DesiredVerticalPodAutoscaling *VerticalPodAutoscaling `json:"desiredVerticalPodAutoscaling,omitempty"`
    DesiredWorkloadAltsConfig *WorkloadAltsConfig `json:"desiredWorkloadAltsConfig,omitempty"`
    DesiredWorkloadCertificates *WorkloadCertificates `json:"desiredWorkloadCertificates,omitempty"`
    DesiredWorkloadIdentityConfig *WorkloadIdentityConfig `json:"desiredWorkloadIdentityConfig,omitempty"`
    
}

