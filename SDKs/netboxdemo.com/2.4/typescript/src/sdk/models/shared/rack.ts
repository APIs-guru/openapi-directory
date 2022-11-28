import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedRackGroup } from "./nestedrackgroup";
import { NestedRackRole } from "./nestedrackrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";



export class RackType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class RackWidth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class Rack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=desc_units" })
  descUnits?: boolean;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=facility_id" })
  facilityId?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: NestedRackGroup;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: NestedRackRole;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site: NestedSite;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RackType;

  @SpeakeasyMetadata({ data: "json, name=u_height" })
  uHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: RackWidth;
}
