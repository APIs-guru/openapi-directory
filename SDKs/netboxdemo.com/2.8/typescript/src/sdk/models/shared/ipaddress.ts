import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IpAddressInterface } from "./ipaddressinterface";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedTenant } from "./nestedtenant";
import { NestedVrf } from "./nestedvrf";

export enum IpAddressFamilyLabelEnum {
    IPv4 = "IPv4"
,    IPv6 = "IPv6"
}


export class IpAddressFamily extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: IpAddressFamilyLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: number;
}

export enum IpAddressRoleLabelEnum {
    Loopback = "Loopback"
,    Secondary = "Secondary"
,    Anycast = "Anycast"
,    Vip = "VIP"
,    Vrrp = "VRRP"
,    Hsrp = "HSRP"
,    Glbp = "GLBP"
,    Carp = "CARP"
}

export enum IpAddressRoleValueEnum {
    Loopback = "loopback"
,    Secondary = "secondary"
,    Anycast = "anycast"
,    Vip = "vip"
,    Vrrp = "vrrp"
,    Hsrp = "hsrp"
,    Glbp = "glbp"
,    Carp = "carp"
}


export class IpAddressRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: IpAddressRoleLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: IpAddressRoleValueEnum;
}

export enum IpAddressStatusLabelEnum {
    Active = "Active"
,    Reserved = "Reserved"
,    Deprecated = "Deprecated"
,    Dhcp = "DHCP"
}

export enum IpAddressStatusValueEnum {
    Active = "active"
,    Reserved = "reserved"
,    Deprecated = "deprecated"
,    Dhcp = "dhcp"
}


export class IpAddressStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: IpAddressStatusLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: IpAddressStatusValueEnum;
}


export class IpAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dns_name" })
  dnsName?: string;

  @Metadata({ data: "json, name=family" })
  family?: IpAddressFamily;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interface" })
  interface?: IpAddressInterface;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=nat_inside" })
  natInside?: NestedIpAddress;

  @Metadata({ data: "json, name=nat_outside" })
  natOutside?: NestedIpAddress;

  @Metadata({ data: "json, name=role" })
  role?: IpAddressRole;

  @Metadata({ data: "json, name=status" })
  status?: IpAddressStatus;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @Metadata({ data: "json, name=vrf" })
  vrf?: NestedVrf;
}
