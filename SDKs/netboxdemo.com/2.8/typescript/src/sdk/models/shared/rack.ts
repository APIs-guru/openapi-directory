import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedRackGroup } from "./nestedrackgroup";
import { NestedRackRole } from "./nestedrackrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";

export enum RackOuterUnitLabelEnum {
    Millimeters = "Millimeters"
,    Inches = "Inches"
}

export enum RackOuterUnitValueEnum {
    Mm = "mm"
,    In = "in"
}


export class RackOuterUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: RackOuterUnitLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: RackOuterUnitValueEnum;
}

export enum RackStatusLabelEnum {
    Reserved = "Reserved"
,    Available = "Available"
,    Planned = "Planned"
,    Active = "Active"
,    Deprecated = "Deprecated"
}

export enum RackStatusValueEnum {
    Reserved = "reserved"
,    Available = "available"
,    Planned = "planned"
,    Active = "active"
,    Deprecated = "deprecated"
}


export class RackStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: RackStatusLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: RackStatusValueEnum;
}

export enum RackTypeLabelEnum {
    TwoPostFrame = "2-post frame"
,    FourPostFrame = "4-post frame"
,    FourPostCabinet = "4-post cabinet"
,    WallMountedFrame = "Wall-mounted frame"
,    WallMountedCabinet = "Wall-mounted cabinet"
}

export enum RackTypeValueEnum {
    TwoPostFrame = "2-post-frame"
,    FourPostFrame = "4-post-frame"
,    FourPostCabinet = "4-post-cabinet"
,    WallFrame = "wall-frame"
,    WallCabinet = "wall-cabinet"
}


export class RackType extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: RackTypeLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: RackTypeValueEnum;
}

export enum RackWidthLabelEnum {
    TenInches = "10 inches"
,    NineteenInches = "19 inches"
,    TwentyOneInches = "21 inches"
,    TwentyThreeInches = "23 inches"
}


export class RackWidth extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: RackWidthLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: number;
}


export class Rack extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_tag" })
  assetTag?: string;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=desc_units" })
  descUnits?: boolean;

  @Metadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=facility_id" })
  facilityId?: string;

  @Metadata({ data: "json, name=group" })
  group?: NestedRackGroup;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=outer_depth" })
  outerDepth?: number;

  @Metadata({ data: "json, name=outer_unit" })
  outerUnit?: RackOuterUnit;

  @Metadata({ data: "json, name=outer_width" })
  outerWidth?: number;

  @Metadata({ data: "json, name=powerfeed_count" })
  powerfeedCount?: number;

  @Metadata({ data: "json, name=role" })
  role?: NestedRackRole;

  @Metadata({ data: "json, name=serial" })
  serial?: string;

  @Metadata({ data: "json, name=site" })
  site: NestedSite;

  @Metadata({ data: "json, name=status" })
  status?: RackStatus;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @Metadata({ data: "json, name=type" })
  type?: RackType;

  @Metadata({ data: "json, name=u_height" })
  uHeight?: number;

  @Metadata({ data: "json, name=width" })
  width?: RackWidth;
}
