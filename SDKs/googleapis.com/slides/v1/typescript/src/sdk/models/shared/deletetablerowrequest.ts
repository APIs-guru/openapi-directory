import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";



// DeleteTableRowRequest
/** 
 * Deletes a row from a table.
**/
export class DeleteTableRowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @SpeakeasyMetadata({ data: "json, name=tableObjectId" })
  tableObjectId?: string;
}
