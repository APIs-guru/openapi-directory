import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";



// InsertTableRowRequest
/** 
 * Inserts an empty row into a table.
**/
export class InsertTableRowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insertBelow" })
  insertBelow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tableCellLocation" })
  tableCellLocation?: TableCellLocation;
}
