import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressInterface } from "./ipaddressinterface";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedTenant } from "./nestedtenant";
import { NestedVrf } from "./nestedvrf";
export declare enum IpAddressFamilyLabelEnum {
    IPv4 = "IPv4",
    IPv6 = "IPv6"
}
export declare class IpAddressFamily extends SpeakeasyBase {
    label: IpAddressFamilyLabelEnum;
    value: number;
}
export declare enum IpAddressRoleLabelEnum {
    Loopback = "Loopback",
    Secondary = "Secondary",
    Anycast = "Anycast",
    Vip = "VIP",
    Vrrp = "VRRP",
    Hsrp = "HSRP",
    Glbp = "GLBP",
    Carp = "CARP"
}
export declare enum IpAddressRoleValueEnum {
    Loopback = "loopback",
    Secondary = "secondary",
    Anycast = "anycast",
    Vip = "vip",
    Vrrp = "vrrp",
    Hsrp = "hsrp",
    Glbp = "glbp",
    Carp = "carp"
}
export declare class IpAddressRole extends SpeakeasyBase {
    label: IpAddressRoleLabelEnum;
    value: IpAddressRoleValueEnum;
}
export declare enum IpAddressStatusLabelEnum {
    Active = "Active",
    Reserved = "Reserved",
    Deprecated = "Deprecated",
    Dhcp = "DHCP"
}
export declare enum IpAddressStatusValueEnum {
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated",
    Dhcp = "dhcp"
}
export declare class IpAddressStatus extends SpeakeasyBase {
    label: IpAddressStatusLabelEnum;
    value: IpAddressStatusValueEnum;
}
export declare class IpAddress extends SpeakeasyBase {
    address: string;
    created?: Date;
    customFields?: Map<string, any>;
    description?: string;
    dnsName?: string;
    family?: IpAddressFamily;
    id?: number;
    interface?: IpAddressInterface;
    lastUpdated?: Date;
    natInside?: NestedIpAddress;
    natOutside?: NestedIpAddress;
    role?: IpAddressRole;
    status?: IpAddressStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vrf?: NestedVrf;
}
