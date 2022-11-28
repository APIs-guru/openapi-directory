import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
export declare enum BorderStyleEnum {
    StyleUnspecified = "STYLE_UNSPECIFIED",
    Dotted = "DOTTED",
    Dashed = "DASHED",
    Solid = "SOLID",
    SolidMedium = "SOLID_MEDIUM",
    SolidThick = "SOLID_THICK",
    None = "NONE",
    Double = "DOUBLE"
}
/**
 * A border along a cell.
**/
export declare class Border extends SpeakeasyBase {
    color?: Color;
    colorStyle?: ColorStyle;
    style?: BorderStyleEnum;
    width?: number;
}
