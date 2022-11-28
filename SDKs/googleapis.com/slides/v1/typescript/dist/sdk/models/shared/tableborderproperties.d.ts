import { SpeakeasyBase } from "../../../internal/utils";
import { TableBorderFill } from "./tableborderfill";
import { Dimension } from "./dimension";
export declare enum TableBorderPropertiesDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH",
    DashDot = "DASH_DOT",
    LongDash = "LONG_DASH",
    LongDashDot = "LONG_DASH_DOT"
}
/**
 * The border styling properties of the TableBorderCell.
**/
export declare class TableBorderProperties extends SpeakeasyBase {
    dashStyle?: TableBorderPropertiesDashStyleEnum;
    tableBorderFill?: TableBorderFill;
    weight?: Dimension;
}
