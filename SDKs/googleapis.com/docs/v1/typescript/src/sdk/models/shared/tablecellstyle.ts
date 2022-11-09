import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OptionalColor } from "./optionalcolor";
import { TableCellBorder } from "./tablecellborder";
import { TableCellBorder } from "./tablecellborder";
import { TableCellBorder } from "./tablecellborder";
import { TableCellBorder } from "./tablecellborder";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";

export enum TableCellStyleContentAlignmentEnum {
    ContentAlignmentUnspecified = "CONTENT_ALIGNMENT_UNSPECIFIED"
,    ContentAlignmentUnsupported = "CONTENT_ALIGNMENT_UNSUPPORTED"
,    Top = "TOP"
,    Middle = "MIDDLE"
,    Bottom = "BOTTOM"
}


// TableCellStyle
/** 
 * The style of a TableCell. Inherited table cell styles are represented as unset fields in this message. A table cell style can inherit from the table's style.
**/
export class TableCellStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: OptionalColor;

  @Metadata({ data: "json, name=borderBottom" })
  borderBottom?: TableCellBorder;

  @Metadata({ data: "json, name=borderLeft" })
  borderLeft?: TableCellBorder;

  @Metadata({ data: "json, name=borderRight" })
  borderRight?: TableCellBorder;

  @Metadata({ data: "json, name=borderTop" })
  borderTop?: TableCellBorder;

  @Metadata({ data: "json, name=columnSpan" })
  columnSpan?: number;

  @Metadata({ data: "json, name=contentAlignment" })
  contentAlignment?: TableCellStyleContentAlignmentEnum;

  @Metadata({ data: "json, name=paddingBottom" })
  paddingBottom?: Dimension;

  @Metadata({ data: "json, name=paddingLeft" })
  paddingLeft?: Dimension;

  @Metadata({ data: "json, name=paddingRight" })
  paddingRight?: Dimension;

  @Metadata({ data: "json, name=paddingTop" })
  paddingTop?: Dimension;

  @Metadata({ data: "json, name=rowSpan" })
  rowSpan?: number;
}
