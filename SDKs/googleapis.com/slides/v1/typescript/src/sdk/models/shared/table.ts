import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableBorderRow } from "./tableborderrow";
import { TableColumnProperties } from "./tablecolumnproperties";
import { TableRow } from "./tablerow";
import { TableBorderRow } from "./tableborderrow";


// Table
/** 
 * A PageElement kind representing a table.
**/
export class Table extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: number;

  @Metadata({ data: "json, name=horizontalBorderRows", elemType: shared.TableBorderRow })
  horizontalBorderRows?: TableBorderRow[];

  @Metadata({ data: "json, name=rows" })
  rows?: number;

  @Metadata({ data: "json, name=tableColumns", elemType: shared.TableColumnProperties })
  tableColumns?: TableColumnProperties[];

  @Metadata({ data: "json, name=tableRows", elemType: shared.TableRow })
  tableRows?: TableRow[];

  @Metadata({ data: "json, name=verticalBorderRows", elemType: shared.TableBorderRow })
  verticalBorderRows?: TableBorderRow[];
}
