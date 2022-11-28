import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";



// InsertTableRowsRequest
/** 
 * Inserts rows into a table.
**/
export class InsertTableRowsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @SpeakeasyMetadata({ data: "json, name=insertBelow" })
  insertBelow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=tableObjectId" })
  tableObjectId?: string;
}
