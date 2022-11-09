import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellLocation } from "./tablecelllocation";


// InsertTableRowsRequest
/** 
 * Inserts rows into a table.
**/
export class InsertTableRowsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @Metadata({ data: "json, name=insertBelow" })
  insertBelow?: boolean;

  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=tableObjectId" })
  tableObjectId?: string;
}
