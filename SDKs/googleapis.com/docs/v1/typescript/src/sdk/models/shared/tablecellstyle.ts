import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionalColor } from "./optionalcolor";
import { TableCellBorder } from "./tablecellborder";
import { Dimension } from "./dimension";


export enum TableCellStyleContentAlignmentEnum {
    ContentAlignmentUnspecified = "CONTENT_ALIGNMENT_UNSPECIFIED",
    ContentAlignmentUnsupported = "CONTENT_ALIGNMENT_UNSUPPORTED",
    Top = "TOP",
    Middle = "MIDDLE",
    Bottom = "BOTTOM"
}


// TableCellStyle
/** 
 * The style of a TableCell. Inherited table cell styles are represented as unset fields in this message. A table cell style can inherit from the table's style.
**/
export class TableCellStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: OptionalColor;

  @SpeakeasyMetadata({ data: "json, name=borderBottom" })
  borderBottom?: TableCellBorder;

  @SpeakeasyMetadata({ data: "json, name=borderLeft" })
  borderLeft?: TableCellBorder;

  @SpeakeasyMetadata({ data: "json, name=borderRight" })
  borderRight?: TableCellBorder;

  @SpeakeasyMetadata({ data: "json, name=borderTop" })
  borderTop?: TableCellBorder;

  @SpeakeasyMetadata({ data: "json, name=columnSpan" })
  columnSpan?: number;

  @SpeakeasyMetadata({ data: "json, name=contentAlignment" })
  contentAlignment?: TableCellStyleContentAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=paddingBottom" })
  paddingBottom?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=paddingLeft" })
  paddingLeft?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=paddingRight" })
  paddingRight?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=paddingTop" })
  paddingTop?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=rowSpan" })
  rowSpan?: number;
}
