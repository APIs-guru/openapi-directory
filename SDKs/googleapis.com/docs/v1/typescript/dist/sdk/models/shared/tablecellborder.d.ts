import { SpeakeasyBase } from "../../../internal/utils";
import { OptionalColor } from "./optionalcolor";
import { Dimension } from "./dimension";
export declare enum TableCellBorderDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH"
}
/**
 * A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.
**/
export declare class TableCellBorder extends SpeakeasyBase {
    color?: OptionalColor;
    dashStyle?: TableCellBorderDashStyleEnum;
    width?: Dimension;
}
