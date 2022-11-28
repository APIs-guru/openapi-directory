import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
import { TableCellProperties } from "./tablecellproperties";
import { TextContent } from "./textcontent";



// TableCell
/** 
 * Properties and contents of each table cell.
**/
export class TableCell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnSpan" })
  columnSpan?: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: TableCellLocation;

  @SpeakeasyMetadata({ data: "json, name=rowSpan" })
  rowSpan?: number;

  @SpeakeasyMetadata({ data: "json, name=tableCellProperties" })
  tableCellProperties?: TableCellProperties;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: TextContent;
}
