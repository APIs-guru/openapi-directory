import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";



// InsertTableColumnRequest
/** 
 * Inserts an empty column into a table.
**/
export class InsertTableColumnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insertRight" })
  insertRight?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tableCellLocation" })
  tableCellLocation?: TableCellLocation;
}
