import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DnsConfigClusterDnsEnum {
    ProviderUnspecified = "PROVIDER_UNSPECIFIED"
,    PlatformDefault = "PLATFORM_DEFAULT"
,    CloudDns = "CLOUD_DNS"
}

export enum DnsConfigClusterDnsScopeEnum {
    DnsScopeUnspecified = "DNS_SCOPE_UNSPECIFIED"
,    ClusterScope = "CLUSTER_SCOPE"
,    VpcScope = "VPC_SCOPE"
}


// DnsConfig
/** 
 * DNSConfig contains the desired set of options for configuring clusterDNS.
**/
export class DnsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterDns" })
  clusterDns?: DnsConfigClusterDnsEnum;

  @Metadata({ data: "json, name=clusterDnsDomain" })
  clusterDnsDomain?: string;

  @Metadata({ data: "json, name=clusterDnsScope" })
  clusterDnsScope?: DnsConfigClusterDnsScopeEnum;
}
