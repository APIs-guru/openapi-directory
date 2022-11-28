import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LineStyleTypeEnum {
    LineDashTypeUnspecified = "LINE_DASH_TYPE_UNSPECIFIED",
    Invisible = "INVISIBLE",
    Custom = "CUSTOM",
    Solid = "SOLID",
    Dotted = "DOTTED",
    MediumDashed = "MEDIUM_DASHED",
    MediumDashedDotted = "MEDIUM_DASHED_DOTTED",
    LongDashed = "LONG_DASHED",
    LongDashedDotted = "LONG_DASHED_DOTTED"
}
/**
 * Properties that describe the style of a line.
**/
export declare class LineStyle extends SpeakeasyBase {
    type?: LineStyleTypeEnum;
    width?: number;
}
