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
	ClusterDNS       *DNSConfigClusterDNSEnum      `json:"clusterDns"`
	ClusterDNSDomain *string                       `json:"clusterDnsDomain"`
	ClusterDNSScope  *DNSConfigClusterDNSScopeEnum `json:"clusterDnsScope"`
}
