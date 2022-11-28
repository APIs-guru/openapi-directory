import { SpeakeasyBase } from "../../../internal/utils";
import { NestedRackGroup } from "./nestedrackgroup";
import { NestedRackRole } from "./nestedrackrole";
import { NestedSite } from "./nestedsite";
import { NestedTenant } from "./nestedtenant";
export declare enum RackOuterUnitLabelEnum {
    Millimeters = "Millimeters",
    Inches = "Inches"
}
export declare enum RackOuterUnitValueEnum {
    Mm = "mm",
    In = "in"
}
export declare class RackOuterUnit extends SpeakeasyBase {
    label: RackOuterUnitLabelEnum;
    value: RackOuterUnitValueEnum;
}
export declare enum RackStatusLabelEnum {
    Reserved = "Reserved",
    Available = "Available",
    Planned = "Planned",
    Active = "Active",
    Deprecated = "Deprecated"
}
export declare enum RackStatusValueEnum {
    Reserved = "reserved",
    Available = "available",
    Planned = "planned",
    Active = "active",
    Deprecated = "deprecated"
}
export declare class RackStatus extends SpeakeasyBase {
    label: RackStatusLabelEnum;
    value: RackStatusValueEnum;
}
export declare enum RackTypeLabelEnum {
    TwoPostFrame = "2-post frame",
    FourPostFrame = "4-post frame",
    FourPostCabinet = "4-post cabinet",
    WallMountedFrame = "Wall-mounted frame",
    WallMountedCabinet = "Wall-mounted cabinet"
}
export declare enum RackTypeValueEnum {
    TwoPostFrame = "2-post-frame",
    FourPostFrame = "4-post-frame",
    FourPostCabinet = "4-post-cabinet",
    WallFrame = "wall-frame",
    WallCabinet = "wall-cabinet"
}
export declare class RackType extends SpeakeasyBase {
    label: RackTypeLabelEnum;
    value: RackTypeValueEnum;
}
export declare enum RackWidthLabelEnum {
    TenInches = "10 inches",
    NineteenInches = "19 inches",
    TwentyOneInches = "21 inches",
    TwentyThreeInches = "23 inches"
}
export declare class RackWidth extends SpeakeasyBase {
    label: RackWidthLabelEnum;
    value: number;
}
export declare class Rack extends SpeakeasyBase {
    assetTag?: string;
    comments?: string;
    created?: Date;
    customFields?: Map<string, any>;
    descUnits?: boolean;
    deviceCount?: number;
    displayName?: string;
    facilityId?: string;
    group?: NestedRackGroup;
    id?: number;
    lastUpdated?: Date;
    name: string;
    outerDepth?: number;
    outerUnit?: RackOuterUnit;
    outerWidth?: number;
    powerfeedCount?: number;
    role?: NestedRackRole;
    serial?: string;
    site: NestedSite;
    status?: RackStatus;
    tags?: string[];
    tenant?: NestedTenant;
    type?: RackType;
    uHeight?: number;
    width?: RackWidth;
}
