import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IpAddressTypeEnum {
    Ipv4 = "ipv4",
    Ipv6 = "ipv6",
    Ipv6Pool = "ipv6/pool",
    Ipv6Range = "ipv6/range"
}
/**
 * An IP address that exists in Linode's system, either IPv4 or IPv6.
 *
**/
export declare class IpAddress extends SpeakeasyBase {
    address?: string;
    gateway?: string;
    linodeId?: number;
    prefix?: number;
    public?: boolean;
    rdns?: string;
    region?: string;
    subnetMask?: string;
    type?: IpAddressTypeEnum;
}
/**
 * An IP address that exists in Linode's system, either IPv4 or IPv6.
 *
**/
export declare class IpAddressInput extends SpeakeasyBase {
    rdns?: string;
}
