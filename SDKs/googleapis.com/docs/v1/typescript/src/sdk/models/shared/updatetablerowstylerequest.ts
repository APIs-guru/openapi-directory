import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableRowStyle } from "./tablerowstyle";
import { Location } from "./location";



// UpdateTableRowStyleRequest
/** 
 * Updates the TableRowStyle of rows in a table.
**/
export class UpdateTableRowStyleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=rowIndices" })
  rowIndices?: number[];

  @SpeakeasyMetadata({ data: "json, name=tableRowStyle" })
  tableRowStyle?: TableRowStyle;

  @SpeakeasyMetadata({ data: "json, name=tableStartLocation" })
  tableStartLocation?: Location;
}
