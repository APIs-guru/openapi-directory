import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";



// InsertTableColumnsRequest
/** 
 * Inserts columns into a table. Other columns in the table will be resized to fit the new column.
**/
export class InsertTableColumnsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @SpeakeasyMetadata({ data: "json, name=insertRight" })
  insertRight?: boolean;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=tableObjectId" })
  tableObjectId?: string;
}
