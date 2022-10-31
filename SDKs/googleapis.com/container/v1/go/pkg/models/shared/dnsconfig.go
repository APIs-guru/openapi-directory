package shared

type DNSConfigClusterDNSEnum string

const (
	DNSConfigClusterDNSEnumProviderUnspecified DNSConfigClusterDNSEnum = "PROVIDER_UNSPECIFIED"
	DNSConfigClusterDNSEnumPlatformDefault     DNSConfigClusterDNSEnum = "PLATFORM_DEFAULT"
	DNSConfigClusterDNSEnumCloudDNS            DNSConfigClusterDNSEnum = "CLOUD_DNS"
)

type DNSConfigClusterDNSScopeEnum string

const (
	DNSConfigClusterDNSScopeEnumDNSScopeUnspecified DNSConfigClusterDNSScopeEnum = "DNS_SCOPE_UNSPECIFIED"
	DNSConfigClusterDNSScopeEnumVpcScope            DNSConfigClusterDNSScopeEnum = "VPC_SCOPE"
)

type DNSConfig struct {
	ClusterDNS       *DNSConfigClusterDNSEnum      `json:"clusterDns,omitempty"`
	ClusterDNSDomain *string                       `json:"clusterDnsDomain,omitempty"`
	ClusterDNSScope  *DNSConfigClusterDNSScopeEnum `json:"clusterDnsScope,omitempty"`
}
