import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellLocation } from "./tablecelllocation";
import { TableCellProperties } from "./tablecellproperties";
import { TextContent } from "./textcontent";


// TableCell
/** 
 * Properties and contents of each table cell.
**/
export class TableCell extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnSpan" })
  columnSpan?: number;

  @Metadata({ data: "json, name=location" })
  location?: TableCellLocation;

  @Metadata({ data: "json, name=rowSpan" })
  rowSpan?: number;

  @Metadata({ data: "json, name=tableCellProperties" })
  tableCellProperties?: TableCellProperties;

  @Metadata({ data: "json, name=text" })
  text?: TextContent;
}
