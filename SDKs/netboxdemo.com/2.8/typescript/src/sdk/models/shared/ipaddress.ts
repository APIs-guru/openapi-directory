import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IpAddressInterface } from "./ipaddressinterface";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedTenant } from "./nestedtenant";
import { NestedVrf } from "./nestedvrf";


export enum IpAddressFamilyLabelEnum {
    IPv4 = "IPv4",
    IPv6 = "IPv6"
}


export class IpAddressFamily extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: IpAddressFamilyLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

export enum IpAddressRoleLabelEnum {
    Loopback = "Loopback",
    Secondary = "Secondary",
    Anycast = "Anycast",
    Vip = "VIP",
    Vrrp = "VRRP",
    Hsrp = "HSRP",
    Glbp = "GLBP",
    Carp = "CARP"
}

export enum IpAddressRoleValueEnum {
    Loopback = "loopback",
    Secondary = "secondary",
    Anycast = "anycast",
    Vip = "vip",
    Vrrp = "vrrp",
    Hsrp = "hsrp",
    Glbp = "glbp",
    Carp = "carp"
}


export class IpAddressRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: IpAddressRoleLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: IpAddressRoleValueEnum;
}

export enum IpAddressStatusLabelEnum {
    Active = "Active",
    Reserved = "Reserved",
    Deprecated = "Deprecated",
    Dhcp = "DHCP"
}

export enum IpAddressStatusValueEnum {
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated",
    Dhcp = "dhcp"
}


export class IpAddressStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: IpAddressStatusLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: IpAddressStatusValueEnum;
}


export class IpAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dns_name" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: IpAddressFamily;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interface" })
  interface?: IpAddressInterface;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=nat_inside" })
  natInside?: NestedIpAddress;

  @SpeakeasyMetadata({ data: "json, name=nat_outside" })
  natOutside?: NestedIpAddress;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: IpAddressRole;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: IpAddressStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @SpeakeasyMetadata({ data: "json, name=vrf" })
  vrf?: NestedVrf;
}
