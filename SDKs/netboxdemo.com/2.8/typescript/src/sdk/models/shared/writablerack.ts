import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WritableRackOuterUnitEnum {
    Mm = "mm",
    In = "in"
}

export enum WritableRackStatusEnum {
    Reserved = "reserved",
    Available = "available",
    Planned = "planned",
    Active = "active",
    Deprecated = "deprecated"
}

export enum WritableRackTypeEnum {
    TwoPostFrame = "2-post-frame",
    FourPostFrame = "4-post-frame",
    FourPostCabinet = "4-post-cabinet",
    WallFrame = "wall-frame",
    WallCabinet = "wall-cabinet"
}


export class WritableRackInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_tag" })
  assetTag?: string;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=desc_units" })
  descUnits?: boolean;

  @SpeakeasyMetadata({ data: "json, name=facility_id" })
  facilityId?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=outer_depth" })
  outerDepth?: number;

  @SpeakeasyMetadata({ data: "json, name=outer_unit" })
  outerUnit?: WritableRackOuterUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=outer_width" })
  outerWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: number;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WritableRackStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: WritableRackTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=u_height" })
  uHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
