import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableColumnProperties } from "./tablecolumnproperties";
import { Location } from "./location";



// UpdateTableColumnPropertiesRequest
/** 
 * Updates the TableColumnProperties of columns in a table.
**/
export class UpdateTableColumnPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnIndices" })
  columnIndices?: number[];

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=tableColumnProperties" })
  tableColumnProperties?: TableColumnProperties;

  @SpeakeasyMetadata({ data: "json, name=tableStartLocation" })
  tableStartLocation?: Location;
}
