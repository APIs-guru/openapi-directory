import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellLocation } from "./tablecelllocation";


// DeleteTableRowRequest
/** 
 * Deletes a row from a table.
**/
export class DeleteTableRowRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=tableCellLocation" })
  tableCellLocation?: TableCellLocation;
}
