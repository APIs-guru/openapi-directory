import { SpeakeasyBase } from "../../../internal/utils";
import { OptionalColor } from "./optionalcolor";
import { TableCellBorder } from "./tablecellborder";
import { Dimension } from "./dimension";
export declare enum TableCellStyleContentAlignmentEnum {
    ContentAlignmentUnspecified = "CONTENT_ALIGNMENT_UNSPECIFIED",
    ContentAlignmentUnsupported = "CONTENT_ALIGNMENT_UNSUPPORTED",
    Top = "TOP",
    Middle = "MIDDLE",
    Bottom = "BOTTOM"
}
/**
 * The style of a TableCell. Inherited table cell styles are represented as unset fields in this message. A table cell style can inherit from the table's style.
**/
export declare class TableCellStyle extends SpeakeasyBase {
    backgroundColor?: OptionalColor;
    borderBottom?: TableCellBorder;
    borderLeft?: TableCellBorder;
    borderRight?: TableCellBorder;
    borderTop?: TableCellBorder;
    columnSpan?: number;
    contentAlignment?: TableCellStyleContentAlignmentEnum;
    paddingBottom?: Dimension;
    paddingLeft?: Dimension;
    paddingRight?: Dimension;
    paddingTop?: Dimension;
    rowSpan?: number;
}
