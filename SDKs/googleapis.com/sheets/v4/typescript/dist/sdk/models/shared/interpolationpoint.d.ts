import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
export declare enum InterpolationPointTypeEnum {
    InterpolationPointTypeUnspecified = "INTERPOLATION_POINT_TYPE_UNSPECIFIED",
    Min = "MIN",
    Max = "MAX",
    Number = "NUMBER",
    Percent = "PERCENT",
    Percentile = "PERCENTILE"
}
/**
 * A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.
**/
export declare class InterpolationPoint extends SpeakeasyBase {
    color?: Color;
    colorStyle?: ColorStyle;
    type?: InterpolationPointTypeEnum;
    value?: string;
}
