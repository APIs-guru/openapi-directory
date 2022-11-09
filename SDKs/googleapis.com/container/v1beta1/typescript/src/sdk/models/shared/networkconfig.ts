import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DefaultSnatStatus } from "./defaultsnatstatus";
import { DnsConfig } from "./dnsconfig";
import { ServiceExternalIPsConfig } from "./serviceexternalipsconfig";

export enum NetworkConfigDatapathProviderEnum {
    DatapathProviderUnspecified = "DATAPATH_PROVIDER_UNSPECIFIED"
,    LegacyDatapath = "LEGACY_DATAPATH"
,    AdvancedDatapath = "ADVANCED_DATAPATH"
}

export enum NetworkConfigPrivateIpv6GoogleAccessEnum {
    PrivateIpv6GoogleAccessUnspecified = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
,    PrivateIpv6GoogleAccessDisabled = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED"
,    PrivateIpv6GoogleAccessToGoogle = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE"
,    PrivateIpv6GoogleAccessBidirectional = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
}


// NetworkConfig
/** 
 * NetworkConfig reports the relative names of network & subnetwork.
**/
export class NetworkConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=datapathProvider" })
  datapathProvider?: NetworkConfigDatapathProviderEnum;

  @Metadata({ data: "json, name=defaultSnatStatus" })
  defaultSnatStatus?: DefaultSnatStatus;

  @Metadata({ data: "json, name=dnsConfig" })
  dnsConfig?: DnsConfig;

  @Metadata({ data: "json, name=enableIntraNodeVisibility" })
  enableIntraNodeVisibility?: boolean;

  @Metadata({ data: "json, name=enableL4ilbSubsetting" })
  enableL4ilbSubsetting?: boolean;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=privateIpv6GoogleAccess" })
  privateIpv6GoogleAccess?: NetworkConfigPrivateIpv6GoogleAccessEnum;

  @Metadata({ data: "json, name=serviceExternalIpsConfig" })
  serviceExternalIpsConfig?: ServiceExternalIPsConfig;

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;
}
