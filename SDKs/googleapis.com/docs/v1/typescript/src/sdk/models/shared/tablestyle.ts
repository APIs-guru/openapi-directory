import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableColumnProperties } from "./tablecolumnproperties";



// TableStyle
/** 
 * Styles that apply to a table.
**/
export class TableStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tableColumnProperties", elemType: TableColumnProperties })
  tableColumnProperties?: TableColumnProperties[];
}
