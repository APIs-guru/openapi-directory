import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedRackGroup } from "./nestedrackgroup";
import { NestedRackRole } from "./nestedrackrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";


export enum RackOuterUnitLabelEnum {
    Millimeters = "Millimeters",
    Inches = "Inches"
}

export enum RackOuterUnitValueEnum {
    Mm = "mm",
    In = "in"
}


export class RackOuterUnit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: RackOuterUnitLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: RackOuterUnitValueEnum;
}

export enum RackStatusLabelEnum {
    Reserved = "Reserved",
    Available = "Available",
    Planned = "Planned",
    Active = "Active",
    Deprecated = "Deprecated"
}

export enum RackStatusValueEnum {
    Reserved = "reserved",
    Available = "available",
    Planned = "planned",
    Active = "active",
    Deprecated = "deprecated"
}


export class RackStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: RackStatusLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: RackStatusValueEnum;
}

export enum RackTypeLabelEnum {
    TwoPostFrame = "2-post frame",
    FourPostFrame = "4-post frame",
    FourPostCabinet = "4-post cabinet",
    WallMountedFrame = "Wall-mounted frame",
    WallMountedCabinet = "Wall-mounted cabinet"
}

export enum RackTypeValueEnum {
    TwoPostFrame = "2-post-frame",
    FourPostFrame = "4-post-frame",
    FourPostCabinet = "4-post-cabinet",
    WallFrame = "wall-frame",
    WallCabinet = "wall-cabinet"
}


export class RackType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: RackTypeLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: RackTypeValueEnum;
}

export enum RackWidthLabelEnum {
    TenInches = "10 inches",
    NineteenInches = "19 inches",
    TwentyOneInches = "21 inches",
    TwentyThreeInches = "23 inches"
}


export class RackWidth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: RackWidthLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class Rack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_tag" })
  assetTag?: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=desc_units" })
  descUnits?: boolean;

  @SpeakeasyMetadata({ data: "json, name=device_count" })
  deviceCount?: number;

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

  @SpeakeasyMetadata({ data: "json, name=outer_depth" })
  outerDepth?: number;

  @SpeakeasyMetadata({ data: "json, name=outer_unit" })
  outerUnit?: RackOuterUnit;

  @SpeakeasyMetadata({ data: "json, name=outer_width" })
  outerWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=powerfeed_count" })
  powerfeedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: NestedRackRole;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site: NestedSite;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RackStatus;

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
