import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedVlanGroup } from "./nestedvlangroup";
import { NestedRole } from "./nestedrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";

export enum VlanStatusLabelEnum {
    Active = "Active"
,    Reserved = "Reserved"
,    Deprecated = "Deprecated"
}

export enum VlanStatusValueEnum {
    Active = "active"
,    Reserved = "reserved"
,    Deprecated = "deprecated"
}


export class VlanStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: VlanStatusLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: VlanStatusValueEnum;
}


export class Vlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=group" })
  group?: NestedVlanGroup;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=prefix_count" })
  prefixCount?: number;

  @Metadata({ data: "json, name=role" })
  role?: NestedRole;

  @Metadata({ data: "json, name=site" })
  site?: NestedSite;

  @Metadata({ data: "json, name=status" })
  status?: VlanStatus;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @Metadata({ data: "json, name=vid" })
  vid: number;
}
