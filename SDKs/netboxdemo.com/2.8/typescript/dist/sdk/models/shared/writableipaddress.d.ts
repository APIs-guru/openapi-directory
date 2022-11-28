import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableIpAddressRoleEnum {
    Loopback = "loopback",
    Secondary = "secondary",
    Anycast = "anycast",
    Vip = "vip",
    Vrrp = "vrrp",
    Hsrp = "hsrp",
    Glbp = "glbp",
    Carp = "carp"
}
export declare enum WritableIpAddressStatusEnum {
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated",
    Dhcp = "dhcp"
}
export declare class WritableIpAddressInput extends SpeakeasyBase {
    address: string;
    customFields?: Map<string, any>;
    description?: string;
    dnsName?: string;
    interface?: number;
    natInside?: number;
    natOutside: number;
    role?: WritableIpAddressRoleEnum;
    status?: WritableIpAddressStatusEnum;
    tags?: string[];
    tenant?: number;
    vrf?: number;
}
