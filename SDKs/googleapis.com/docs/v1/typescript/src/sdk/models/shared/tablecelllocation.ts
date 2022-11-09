import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// TableCellLocation
/** 
 * Location of a single cell within a table.
**/
export class TableCellLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnIndex" })
  columnIndex?: number;

  @Metadata({ data: "json, name=rowIndex" })
  rowIndex?: number;

  @Metadata({ data: "json, name=tableStartLocation" })
  tableStartLocation?: Location;
}
