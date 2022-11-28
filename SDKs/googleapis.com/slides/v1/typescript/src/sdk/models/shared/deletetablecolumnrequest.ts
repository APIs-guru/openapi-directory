import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";



// DeleteTableColumnRequest
/** 
 * Deletes a column from a table.
**/
export class DeleteTableColumnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @SpeakeasyMetadata({ data: "json, name=tableObjectId" })
  tableObjectId?: string;
}
