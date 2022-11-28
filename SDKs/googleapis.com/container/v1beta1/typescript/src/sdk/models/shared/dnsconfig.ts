import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DnsConfigClusterDnsEnum {
    ProviderUnspecified = "PROVIDER_UNSPECIFIED",
    PlatformDefault = "PLATFORM_DEFAULT",
    CloudDns = "CLOUD_DNS"
}

export enum DnsConfigClusterDnsScopeEnum {
    DnsScopeUnspecified = "DNS_SCOPE_UNSPECIFIED",
    ClusterScope = "CLUSTER_SCOPE",
    VpcScope = "VPC_SCOPE"
}


// DnsConfig
/** 
 * DNSConfig contains the desired set of options for configuring clusterDNS.
**/
export class DnsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterDns" })
  clusterDns?: DnsConfigClusterDnsEnum;

  @SpeakeasyMetadata({ data: "json, name=clusterDnsDomain" })
  clusterDnsDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterDnsScope" })
  clusterDnsScope?: DnsConfigClusterDnsScopeEnum;
}
