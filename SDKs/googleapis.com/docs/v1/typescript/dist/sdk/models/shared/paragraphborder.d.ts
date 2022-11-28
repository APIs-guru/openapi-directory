import { SpeakeasyBase } from "../../../internal/utils";
import { OptionalColor } from "./optionalcolor";
import { Dimension } from "./dimension";
export declare enum ParagraphBorderDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH"
}
/**
 * A border around a paragraph.
**/
export declare class ParagraphBorder extends SpeakeasyBase {
    color?: OptionalColor;
    dashStyle?: ParagraphBorderDashStyleEnum;
    padding?: Dimension;
    width?: Dimension;
}
