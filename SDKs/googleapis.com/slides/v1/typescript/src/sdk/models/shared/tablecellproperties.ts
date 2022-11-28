import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellBackgroundFill } from "./tablecellbackgroundfill";


export enum TableCellPropertiesContentAlignmentEnum {
    ContentAlignmentUnspecified = "CONTENT_ALIGNMENT_UNSPECIFIED",
    ContentAlignmentUnsupported = "CONTENT_ALIGNMENT_UNSUPPORTED",
    Top = "TOP",
    Middle = "MIDDLE",
    Bottom = "BOTTOM"
}


// TableCellProperties
/** 
 * The properties of the TableCell.
**/
export class TableCellProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentAlignment" })
  contentAlignment?: TableCellPropertiesContentAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=tableCellBackgroundFill" })
  tableCellBackgroundFill?: TableCellBackgroundFill;
}
