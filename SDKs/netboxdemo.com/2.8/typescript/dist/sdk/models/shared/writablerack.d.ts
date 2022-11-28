import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableRackOuterUnitEnum {
    Mm = "mm",
    In = "in"
}
export declare enum WritableRackStatusEnum {
    Reserved = "reserved",
    Available = "available",
    Planned = "planned",
    Active = "active",
    Deprecated = "deprecated"
}
export declare enum WritableRackTypeEnum {
    TwoPostFrame = "2-post-frame",
    FourPostFrame = "4-post-frame",
    FourPostCabinet = "4-post-cabinet",
    WallFrame = "wall-frame",
    WallCabinet = "wall-cabinet"
}
export declare class WritableRackInput extends SpeakeasyBase {
    assetTag?: string;
    comments?: string;
    customFields?: Map<string, any>;
    descUnits?: boolean;
    facilityId?: string;
    group?: number;
    name: string;
    outerDepth?: number;
    outerUnit?: WritableRackOuterUnitEnum;
    outerWidth?: number;
    role?: number;
    serial?: string;
    site: number;
    status?: WritableRackStatusEnum;
    tags?: string[];
    tenant?: number;
    type?: WritableRackTypeEnum;
    uHeight?: number;
    width?: number;
}
