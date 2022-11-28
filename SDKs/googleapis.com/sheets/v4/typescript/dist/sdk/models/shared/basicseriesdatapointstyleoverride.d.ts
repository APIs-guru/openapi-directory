import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { PointStyle } from "./pointstyle";
/**
 * Style override settings for a single series data point.
**/
export declare class BasicSeriesDataPointStyleOverride extends SpeakeasyBase {
    color?: Color;
    colorStyle?: ColorStyle;
    index?: number;
    pointStyle?: PointStyle;
}
