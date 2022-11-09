import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableColumnProperties } from "./tablecolumnproperties";
import { Location } from "./location";


// UpdateTableColumnPropertiesRequest
/** 
 * Updates the TableColumnProperties of columns in a table.
**/
export class UpdateTableColumnPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnIndices" })
  columnIndices?: number[];

  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=tableColumnProperties" })
  tableColumnProperties?: TableColumnProperties;

  @Metadata({ data: "json, name=tableStartLocation" })
  tableStartLocation?: Location;
}
