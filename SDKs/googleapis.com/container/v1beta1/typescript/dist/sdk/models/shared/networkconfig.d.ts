import { SpeakeasyBase } from "../../../internal/utils";
import { DefaultSnatStatus } from "./defaultsnatstatus";
import { DnsConfig } from "./dnsconfig";
import { GatewayApiConfig } from "./gatewayapiconfig";
import { ServiceExternalIPsConfig } from "./serviceexternalipsconfig";
export declare enum NetworkConfigDatapathProviderEnum {
    DatapathProviderUnspecified = "DATAPATH_PROVIDER_UNSPECIFIED",
    LegacyDatapath = "LEGACY_DATAPATH",
    AdvancedDatapath = "ADVANCED_DATAPATH"
}
export declare enum NetworkConfigPrivateIpv6GoogleAccessEnum {
    PrivateIpv6GoogleAccessUnspecified = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
    PrivateIpv6GoogleAccessDisabled = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED",
    PrivateIpv6GoogleAccessToGoogle = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE",
    PrivateIpv6GoogleAccessBidirectional = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
}
/**
 * NetworkConfig reports the relative names of network & subnetwork.
**/
export declare class NetworkConfig extends SpeakeasyBase {
    datapathProvider?: NetworkConfigDatapathProviderEnum;
    defaultSnatStatus?: DefaultSnatStatus;
    dnsConfig?: DnsConfig;
    enableIntraNodeVisibility?: boolean;
    enableL4ilbSubsetting?: boolean;
    gatewayApiConfig?: GatewayApiConfig;
    network?: string;
    privateIpv6GoogleAccess?: NetworkConfigPrivateIpv6GoogleAccessEnum;
    serviceExternalIpsConfig?: ServiceExternalIPsConfig;
    subnetwork?: string;
}
