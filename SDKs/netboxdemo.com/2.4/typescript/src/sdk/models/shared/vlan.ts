import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedVlanGroup } from "./nestedvlangroup";
import { NestedRole } from "./nestedrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";



export class VlanStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class Vlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: NestedVlanGroup;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: NestedRole;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: NestedSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VlanStatus;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @SpeakeasyMetadata({ data: "json, name=vid" })
  vid: number;
}
