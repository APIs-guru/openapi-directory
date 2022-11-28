import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DnsConfigClusterDnsEnum {
    ProviderUnspecified = "PROVIDER_UNSPECIFIED",
    PlatformDefault = "PLATFORM_DEFAULT",
    CloudDns = "CLOUD_DNS"
}
export declare enum DnsConfigClusterDnsScopeEnum {
    DnsScopeUnspecified = "DNS_SCOPE_UNSPECIFIED",
    ClusterScope = "CLUSTER_SCOPE",
    VpcScope = "VPC_SCOPE"
}
/**
 * DNSConfig contains the desired set of options for configuring clusterDNS.
**/
export declare class DnsConfig extends SpeakeasyBase {
    clusterDns?: DnsConfigClusterDnsEnum;
    clusterDnsDomain?: string;
    clusterDnsScope?: DnsConfigClusterDnsScopeEnum;
}
