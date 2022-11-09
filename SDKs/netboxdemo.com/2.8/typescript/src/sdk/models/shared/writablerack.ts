import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WritableRackOuterUnitEnum {
    Mm = "mm"
,    In = "in"
}

export enum WritableRackStatusEnum {
    Reserved = "reserved"
,    Available = "available"
,    Planned = "planned"
,    Active = "active"
,    Deprecated = "deprecated"
}

export enum WritableRackTypeEnum {
    TwoPostFrame = "2-post-frame"
,    FourPostFrame = "4-post-frame"
,    FourPostCabinet = "4-post-cabinet"
,    WallFrame = "wall-frame"
,    WallCabinet = "wall-cabinet"
}


export class WritableRack extends SpeakeasyBase {
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
  group?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=outer_depth" })
  outerDepth?: number;

  @Metadata({ data: "json, name=outer_unit" })
  outerUnit?: WritableRackOuterUnitEnum;

  @Metadata({ data: "json, name=outer_width" })
  outerWidth?: number;

  @Metadata({ data: "json, name=powerfeed_count" })
  powerfeedCount?: number;

  @Metadata({ data: "json, name=role" })
  role?: number;

  @Metadata({ data: "json, name=serial" })
  serial?: string;

  @Metadata({ data: "json, name=site" })
  site: number;

  @Metadata({ data: "json, name=status" })
  status?: WritableRackStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: number;

  @Metadata({ data: "json, name=type" })
  type?: WritableRackTypeEnum;

  @Metadata({ data: "json, name=u_height" })
  uHeight?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
