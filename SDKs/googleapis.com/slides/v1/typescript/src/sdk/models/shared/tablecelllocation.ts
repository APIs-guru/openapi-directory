import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TableCellLocation
/** 
 * A location of a single table cell within a table.
**/
export class TableCellLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnIndex" })
  columnIndex?: number;

  @Metadata({ data: "json, name=rowIndex" })
  rowIndex?: number;
}
