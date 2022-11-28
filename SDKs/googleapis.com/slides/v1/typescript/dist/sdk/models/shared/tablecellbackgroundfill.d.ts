import { SpeakeasyBase } from "../../../internal/utils";
import { SolidFill } from "./solidfill";
export declare enum TableCellBackgroundFillPropertyStateEnum {
    Rendered = "RENDERED",
    NotRendered = "NOT_RENDERED",
    Inherit = "INHERIT"
}
/**
 * The table cell background fill.
**/
export declare class TableCellBackgroundFill extends SpeakeasyBase {
    propertyState?: TableCellBackgroundFillPropertyStateEnum;
    solidFill?: SolidFill;
}
