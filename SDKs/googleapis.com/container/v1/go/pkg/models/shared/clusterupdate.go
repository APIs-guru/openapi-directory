package shared

type ClusterUpdateDesiredDatapathProviderEnum string

const (
	ClusterUpdateDesiredDatapathProviderEnumDatapathProviderUnspecified ClusterUpdateDesiredDatapathProviderEnum = "DATAPATH_PROVIDER_UNSPECIFIED"
	ClusterUpdateDesiredDatapathProviderEnumLegacyDatapath              ClusterUpdateDesiredDatapathProviderEnum = "LEGACY_DATAPATH"
	ClusterUpdateDesiredDatapathProviderEnumAdvancedDatapath            ClusterUpdateDesiredDatapathProviderEnum = "ADVANCED_DATAPATH"
)

type ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum string

const (
	ClusterUpdateDesiredPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessUnspecified   ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
	ClusterUpdateDesiredPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessDisabled      ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED"
	ClusterUpdateDesiredPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessToGoogle      ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE"
	ClusterUpdateDesiredPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessBidirectional ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
)

type ClusterUpdate struct {
	DesiredAddonsConfig                   *AddonsConfig                                    `json:"desiredAddonsConfig"`
	DesiredAuthenticatorGroupsConfig      *AuthenticatorGroupsConfig                       `json:"desiredAuthenticatorGroupsConfig"`
	DesiredBinaryAuthorization            *BinaryAuthorization                             `json:"desiredBinaryAuthorization"`
	DesiredClusterAutoscaling             *ClusterAutoscaling                              `json:"desiredClusterAutoscaling"`
	DesiredCostManagementConfig           *CostManagementConfig                            `json:"desiredCostManagementConfig"`
	DesiredDatabaseEncryption             *DatabaseEncryption                              `json:"desiredDatabaseEncryption"`
	DesiredDatapathProvider               *ClusterUpdateDesiredDatapathProviderEnum        `json:"desiredDatapathProvider"`
	DesiredDefaultSnatStatus              *DefaultSnatStatus                               `json:"desiredDefaultSnatStatus"`
	DesiredDNSConfig                      *DNSConfig                                       `json:"desiredDnsConfig"`
	DesiredGcfsConfig                     *GcfsConfig                                      `json:"desiredGcfsConfig"`
	DesiredIdentityServiceConfig          *IdentityServiceConfig                           `json:"desiredIdentityServiceConfig"`
	DesiredImageType                      *string                                          `json:"desiredImageType"`
	DesiredIntraNodeVisibilityConfig      *IntraNodeVisibilityConfig                       `json:"desiredIntraNodeVisibilityConfig"`
	DesiredL4ilbSubsettingConfig          *IlbSubsettingConfig                             `json:"desiredL4ilbSubsettingConfig"`
	DesiredLocations                      []string                                         `json:"desiredLocations"`
	DesiredLoggingConfig                  *LoggingConfig                                   `json:"desiredLoggingConfig"`
	DesiredLoggingService                 *string                                          `json:"desiredLoggingService"`
	DesiredMasterAuthorizedNetworksConfig *MasterAuthorizedNetworksConfig                  `json:"desiredMasterAuthorizedNetworksConfig"`
	DesiredMasterVersion                  *string                                          `json:"desiredMasterVersion"`
	DesiredMeshCertificates               *MeshCertificates                                `json:"desiredMeshCertificates"`
	DesiredMonitoringConfig               *MonitoringConfig                                `json:"desiredMonitoringConfig"`
	DesiredMonitoringService              *string                                          `json:"desiredMonitoringService"`
	DesiredNodePoolAutoConfigNetworkTags  *NetworkTags                                     `json:"desiredNodePoolAutoConfigNetworkTags"`
	DesiredNodePoolAutoscaling            *NodePoolAutoscaling                             `json:"desiredNodePoolAutoscaling"`
	DesiredNodePoolID                     *string                                          `json:"desiredNodePoolId"`
	DesiredNodePoolLoggingConfig          *NodePoolLoggingConfig                           `json:"desiredNodePoolLoggingConfig"`
	DesiredNodeVersion                    *string                                          `json:"desiredNodeVersion"`
	DesiredNotificationConfig             *NotificationConfig                              `json:"desiredNotificationConfig"`
	DesiredPrivateClusterConfig           *PrivateClusterConfig                            `json:"desiredPrivateClusterConfig"`
	DesiredPrivateIpv6GoogleAccess        *ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum `json:"desiredPrivateIpv6GoogleAccess"`
	DesiredReleaseChannel                 *ReleaseChannel                                  `json:"desiredReleaseChannel"`
	DesiredResourceUsageExportConfig      *ResourceUsageExportConfig                       `json:"desiredResourceUsageExportConfig"`
	DesiredServiceExternalIpsConfig       *ServiceExternalIPsConfig                        `json:"desiredServiceExternalIpsConfig"`
	DesiredShieldedNodes                  *ShieldedNodes                                   `json:"desiredShieldedNodes"`
	DesiredVerticalPodAutoscaling         *VerticalPodAutoscaling                          `json:"desiredVerticalPodAutoscaling"`
	DesiredWorkloadIdentityConfig         *WorkloadIdentityConfig                          `json:"desiredWorkloadIdentityConfig"`
}
