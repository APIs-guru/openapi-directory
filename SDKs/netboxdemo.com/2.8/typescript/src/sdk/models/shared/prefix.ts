import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedRole } from "./nestedrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { NestedVlan } from "./nestedvlan";
import { NestedVrf } from "./nestedvrf";

export enum PrefixFamilyLabelEnum {
    IPv4 = "IPv4"
,    IPv6 = "IPv6"
}


export class PrefixFamily extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: PrefixFamilyLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: number;
}

export enum PrefixStatusLabelEnum {
    Container = "Container"
,    Active = "Active"
,    Reserved = "Reserved"
,    Deprecated = "Deprecated"
}

export enum PrefixStatusValueEnum {
    Container = "container"
,    Active = "active"
,    Reserved = "reserved"
,    Deprecated = "deprecated"
}


export class PrefixStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: PrefixStatusLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: PrefixStatusValueEnum;
}


export class Prefix extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=family" })
  family?: PrefixFamily;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_pool" })
  isPool?: boolean;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=prefix" })
  prefix: string;

  @Metadata({ data: "json, name=role" })
  role?: NestedRole;

  @Metadata({ data: "json, name=site" })
  site?: NestedSite;

  @Metadata({ data: "json, name=status" })
  status?: PrefixStatus;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @Metadata({ data: "json, name=vlan" })
  vlan?: NestedVlan;

  @Metadata({ data: "json, name=vrf" })
  vrf?: NestedVrf;
}
