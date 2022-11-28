import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DefaultSnatStatus } from "./defaultsnatstatus";
import { DnsConfig } from "./dnsconfig";
import { GatewayApiConfig } from "./gatewayapiconfig";
import { ServiceExternalIPsConfig } from "./serviceexternalipsconfig";


export enum NetworkConfigDatapathProviderEnum {
    DatapathProviderUnspecified = "DATAPATH_PROVIDER_UNSPECIFIED",
    LegacyDatapath = "LEGACY_DATAPATH",
    AdvancedDatapath = "ADVANCED_DATAPATH"
}

export enum NetworkConfigPrivateIpv6GoogleAccessEnum {
    PrivateIpv6GoogleAccessUnspecified = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
    PrivateIpv6GoogleAccessDisabled = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED",
    PrivateIpv6GoogleAccessToGoogle = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE",
    PrivateIpv6GoogleAccessBidirectional = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
}


// NetworkConfig
/** 
 * NetworkConfig reports the relative names of network & subnetwork.
**/
export class NetworkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datapathProvider" })
  datapathProvider?: NetworkConfigDatapathProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultSnatStatus" })
  defaultSnatStatus?: DefaultSnatStatus;

  @SpeakeasyMetadata({ data: "json, name=dnsConfig" })
  dnsConfig?: DnsConfig;

  @SpeakeasyMetadata({ data: "json, name=enableIntraNodeVisibility" })
  enableIntraNodeVisibility?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableL4ilbSubsetting" })
  enableL4ilbSubsetting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=gatewayApiConfig" })
  gatewayApiConfig?: GatewayApiConfig;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=privateIpv6GoogleAccess" })
  privateIpv6GoogleAccess?: NetworkConfigPrivateIpv6GoogleAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceExternalIpsConfig" })
  serviceExternalIpsConfig?: ServiceExternalIPsConfig;

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;
}
