import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
import { TableBorderProperties } from "./tableborderproperties";



// TableBorderCell
/** 
 * The properties of each border cell.
**/
export class TableBorderCell extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: TableCellLocation;

  @SpeakeasyMetadata({ data: "json, name=tableBorderProperties" })
  tableBorderProperties?: TableBorderProperties;
}
