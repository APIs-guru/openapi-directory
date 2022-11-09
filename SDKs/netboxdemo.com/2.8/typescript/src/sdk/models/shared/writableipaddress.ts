import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WritableIpAddressRoleEnum {
    Loopback = "loopback"
,    Secondary = "secondary"
,    Anycast = "anycast"
,    Vip = "vip"
,    Vrrp = "vrrp"
,    Hsrp = "hsrp"
,    Glbp = "glbp"
,    Carp = "carp"
}

export enum WritableIpAddressStatusEnum {
    Active = "active"
,    Reserved = "reserved"
,    Deprecated = "deprecated"
,    Dhcp = "dhcp"
}


export class WritableIpAddress extends SpeakeasyBase {
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
  family?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interface" })
  interface?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=nat_inside" })
  natInside?: number;

  @Metadata({ data: "json, name=nat_outside" })
  natOutside: number;

  @Metadata({ data: "json, name=role" })
  role?: WritableIpAddressRoleEnum;

  @Metadata({ data: "json, name=status" })
  status?: WritableIpAddressStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: number;

  @Metadata({ data: "json, name=vrf" })
  vrf?: number;
}
