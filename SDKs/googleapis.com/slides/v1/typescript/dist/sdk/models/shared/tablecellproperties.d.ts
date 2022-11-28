import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellBackgroundFill } from "./tablecellbackgroundfill";
export declare enum TableCellPropertiesContentAlignmentEnum {
    ContentAlignmentUnspecified = "CONTENT_ALIGNMENT_UNSPECIFIED",
    ContentAlignmentUnsupported = "CONTENT_ALIGNMENT_UNSUPPORTED",
    Top = "TOP",
    Middle = "MIDDLE",
    Bottom = "BOTTOM"
}
/**
 * The properties of the TableCell.
**/
export declare class TableCellProperties extends SpeakeasyBase {
    contentAlignment?: TableCellPropertiesContentAlignmentEnum;
    tableCellBackgroundFill?: TableCellBackgroundFill;
}
