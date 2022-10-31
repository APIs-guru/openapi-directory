package shared




type NetworkConfigDatapathProviderEnum string

const (
    NetworkConfigDatapathProviderEnumDatapathProviderUnspecified NetworkConfigDatapathProviderEnum = "DATAPATH_PROVIDER_UNSPECIFIED"
NetworkConfigDatapathProviderEnumLegacyDatapath NetworkConfigDatapathProviderEnum = "LEGACY_DATAPATH"
NetworkConfigDatapathProviderEnumAdvancedDatapath NetworkConfigDatapathProviderEnum = "ADVANCED_DATAPATH"
)



type NetworkConfigPrivateIpv6GoogleAccessEnum string

const (
    NetworkConfigPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessUnspecified NetworkConfigPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
NetworkConfigPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessDisabled NetworkConfigPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED"
NetworkConfigPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessToGoogle NetworkConfigPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE"
NetworkConfigPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessBidirectional NetworkConfigPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
)


type NetworkConfig struct {
    DatapathProvider *NetworkConfigDatapathProviderEnum `json:"datapathProvider,omitempty"`
    DefaultSnatStatus *DefaultSnatStatus `json:"defaultSnatStatus,omitempty"`
    DNSConfig *DNSConfig `json:"dnsConfig,omitempty"`
    EnableIntraNodeVisibility *bool `json:"enableIntraNodeVisibility,omitempty"`
    EnableL4ilbSubsetting *bool `json:"enableL4ilbSubsetting,omitempty"`
    Network *string `json:"network,omitempty"`
    PrivateIpv6GoogleAccess *NetworkConfigPrivateIpv6GoogleAccessEnum `json:"privateIpv6GoogleAccess,omitempty"`
    ServiceExternalIpsConfig *ServiceExternalIPsConfig `json:"serviceExternalIpsConfig,omitempty"`
    Subnetwork *string `json:"subnetwork,omitempty"`
    
}

