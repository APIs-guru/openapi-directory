import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedRole } from "./nestedrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
import { NestedVlan } from "./nestedvlan";
import { NestedVrf } from "./nestedvrf";


export enum PrefixFamilyLabelEnum {
    IPv4 = "IPv4",
    IPv6 = "IPv6"
}


export class PrefixFamily extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: PrefixFamilyLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}

export enum PrefixStatusLabelEnum {
    Container = "Container",
    Active = "Active",
    Reserved = "Reserved",
    Deprecated = "Deprecated"
}

export enum PrefixStatusValueEnum {
    Container = "container",
    Active = "active",
    Reserved = "reserved",
    Deprecated = "deprecated"
}


export class PrefixStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: PrefixStatusLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: PrefixStatusValueEnum;
}


export class Prefix extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: PrefixFamily;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_pool" })
  isPool?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: NestedRole;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: NestedSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PrefixStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: NestedVlan;

  @SpeakeasyMetadata({ data: "json, name=vrf" })
  vrf?: NestedVrf;
}
