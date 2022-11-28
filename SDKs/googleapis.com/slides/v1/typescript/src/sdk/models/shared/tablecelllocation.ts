import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TableCellLocation
/** 
 * A location of a single table cell within a table.
**/
export class TableCellLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnIndex" })
  columnIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=rowIndex" })
  rowIndex?: number;
}
