import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableRowStyle } from "./tablerowstyle";
import { Location } from "./location";


// UpdateTableRowStyleRequest
/** 
 * Updates the TableRowStyle of rows in a table.
**/
export class UpdateTableRowStyleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=rowIndices" })
  rowIndices?: number[];

  @Metadata({ data: "json, name=tableRowStyle" })
  tableRowStyle?: TableRowStyle;

  @Metadata({ data: "json, name=tableStartLocation" })
  tableStartLocation?: Location;
}
