import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NetworkConfigConnectModeEnum {
    ConnectModeUnspecified = "CONNECT_MODE_UNSPECIFIED",
    DirectPeering = "DIRECT_PEERING",
    PrivateServiceAccess = "PRIVATE_SERVICE_ACCESS"
}
export declare enum NetworkConfigModesEnum {
    AddressModeUnspecified = "ADDRESS_MODE_UNSPECIFIED",
    ModeIpv4 = "MODE_IPV4"
}
/**
 * Network configuration for the instance.
**/
export declare class NetworkConfigInput extends SpeakeasyBase {
    connectMode?: NetworkConfigConnectModeEnum;
    modes?: NetworkConfigModesEnum[];
    network?: string;
    reservedIpRange?: string;
}
/**
 * Network configuration for the instance.
**/
export declare class NetworkConfig extends SpeakeasyBase {
    connectMode?: NetworkConfigConnectModeEnum;
    ipAddresses?: string[];
    modes?: NetworkConfigModesEnum[];
    network?: string;
    reservedIpRange?: string;
}
