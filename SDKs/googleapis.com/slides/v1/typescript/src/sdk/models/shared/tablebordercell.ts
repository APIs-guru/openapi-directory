import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellLocation } from "./tablecelllocation";
import { TableBorderProperties } from "./tableborderproperties";


// TableBorderCell
/** 
 * The properties of each border cell.
**/
export class TableBorderCell extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: TableCellLocation;

  @Metadata({ data: "json, name=tableBorderProperties" })
  tableBorderProperties?: TableBorderProperties;
}
