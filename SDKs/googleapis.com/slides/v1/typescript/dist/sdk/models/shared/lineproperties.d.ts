import { SpeakeasyBase } from "../../../internal/utils";
import { LineConnection } from "./lineconnection";
import { LineFill } from "./linefill";
import { Link } from "./link";
import { Dimension } from "./dimension";
export declare enum LinePropertiesDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH",
    DashDot = "DASH_DOT",
    LongDash = "LONG_DASH",
    LongDashDot = "LONG_DASH_DOT"
}
export declare enum LinePropertiesEndArrowEnum {
    ArrowStyleUnspecified = "ARROW_STYLE_UNSPECIFIED",
    None = "NONE",
    StealthArrow = "STEALTH_ARROW",
    FillArrow = "FILL_ARROW",
    FillCircle = "FILL_CIRCLE",
    FillSquare = "FILL_SQUARE",
    FillDiamond = "FILL_DIAMOND",
    OpenArrow = "OPEN_ARROW",
    OpenCircle = "OPEN_CIRCLE",
    OpenSquare = "OPEN_SQUARE",
    OpenDiamond = "OPEN_DIAMOND"
}
export declare enum LinePropertiesStartArrowEnum {
    ArrowStyleUnspecified = "ARROW_STYLE_UNSPECIFIED",
    None = "NONE",
    StealthArrow = "STEALTH_ARROW",
    FillArrow = "FILL_ARROW",
    FillCircle = "FILL_CIRCLE",
    FillSquare = "FILL_SQUARE",
    FillDiamond = "FILL_DIAMOND",
    OpenArrow = "OPEN_ARROW",
    OpenCircle = "OPEN_CIRCLE",
    OpenSquare = "OPEN_SQUARE",
    OpenDiamond = "OPEN_DIAMOND"
}
/**
 * The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor.
**/
export declare class LineProperties extends SpeakeasyBase {
    dashStyle?: LinePropertiesDashStyleEnum;
    endArrow?: LinePropertiesEndArrowEnum;
    endConnection?: LineConnection;
    lineFill?: LineFill;
    link?: Link;
    startArrow?: LinePropertiesStartArrowEnum;
    startConnection?: LineConnection;
    weight?: Dimension;
}
