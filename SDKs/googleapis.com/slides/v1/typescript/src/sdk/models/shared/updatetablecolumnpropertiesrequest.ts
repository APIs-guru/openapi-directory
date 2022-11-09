import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableColumnProperties } from "./tablecolumnproperties";


// UpdateTableColumnPropertiesRequest
/** 
 * Updates the properties of a Table column.
**/
export class UpdateTableColumnPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnIndices" })
  columnIndices?: number[];

  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=tableColumnProperties" })
  tableColumnProperties?: TableColumnProperties;
}
