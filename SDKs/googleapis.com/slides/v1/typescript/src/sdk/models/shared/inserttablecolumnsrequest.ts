import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellLocation } from "./tablecelllocation";


// InsertTableColumnsRequest
/** 
 * Inserts columns into a table. Other columns in the table will be resized to fit the new column.
**/
export class InsertTableColumnsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @Metadata({ data: "json, name=insertRight" })
  insertRight?: boolean;

  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=tableObjectId" })
  tableObjectId?: string;
}
