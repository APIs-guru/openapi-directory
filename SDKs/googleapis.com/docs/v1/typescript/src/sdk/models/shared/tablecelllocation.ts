import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// TableCellLocation
/** 
 * Location of a single cell within a table.
**/
export class TableCellLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnIndex" })
  columnIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=rowIndex" })
  rowIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=tableStartLocation" })
  tableStartLocation?: Location;
}
