import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellLocation } from "./tablecelllocation";


// InsertTableRowRequest
/** 
 * Inserts an empty row into a table.
**/
export class InsertTableRowRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=insertBelow" })
  insertBelow?: boolean;

  @Metadata({ data: "json, name=tableCellLocation" })
  tableCellLocation?: TableCellLocation;
}
