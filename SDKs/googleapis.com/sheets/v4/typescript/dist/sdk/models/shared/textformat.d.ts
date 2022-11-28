import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { Link } from "./link";
/**
 * The format of a run of text in a cell. Absent values indicate that the field isn't specified.
**/
export declare class TextFormat extends SpeakeasyBase {
    bold?: boolean;
    fontFamily?: string;
    fontSize?: number;
    foregroundColor?: Color;
    foregroundColorStyle?: ColorStyle;
    italic?: boolean;
    link?: Link;
    strikethrough?: boolean;
    underline?: boolean;
}
