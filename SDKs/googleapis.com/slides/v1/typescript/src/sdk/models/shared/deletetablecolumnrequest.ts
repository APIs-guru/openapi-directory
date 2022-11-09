import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellLocation } from "./tablecelllocation";


// DeleteTableColumnRequest
/** 
 * Deletes a column from a table.
**/
export class DeleteTableColumnRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @Metadata({ data: "json, name=tableObjectId" })
  tableObjectId?: string;
}
