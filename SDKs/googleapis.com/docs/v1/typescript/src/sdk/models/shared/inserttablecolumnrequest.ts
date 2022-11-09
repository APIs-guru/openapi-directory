import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellLocation } from "./tablecelllocation";


// InsertTableColumnRequest
/** 
 * Inserts an empty column into a table.
**/
export class InsertTableColumnRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=insertRight" })
  insertRight?: boolean;

  @Metadata({ data: "json, name=tableCellLocation" })
  tableCellLocation?: TableCellLocation;
}
