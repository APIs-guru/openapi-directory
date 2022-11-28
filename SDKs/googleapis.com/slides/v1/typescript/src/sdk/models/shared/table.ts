import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableBorderRow } from "./tableborderrow";
import { TableColumnProperties } from "./tablecolumnproperties";
import { TableRow } from "./tablerow";



// Table
/** 
 * A PageElement kind representing a table.
**/
export class Table extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: number;

  @SpeakeasyMetadata({ data: "json, name=horizontalBorderRows", elemType: TableBorderRow })
  horizontalBorderRows?: TableBorderRow[];

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "json, name=tableColumns", elemType: TableColumnProperties })
  tableColumns?: TableColumnProperties[];

  @SpeakeasyMetadata({ data: "json, name=tableRows", elemType: TableRow })
  tableRows?: TableRow[];

  @SpeakeasyMetadata({ data: "json, name=verticalBorderRows", elemType: TableBorderRow })
  verticalBorderRows?: TableBorderRow[];
}
