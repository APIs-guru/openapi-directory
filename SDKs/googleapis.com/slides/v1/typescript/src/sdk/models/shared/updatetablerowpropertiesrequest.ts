import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableRowProperties } from "./tablerowproperties";


// UpdateTableRowPropertiesRequest
/** 
 * Updates the properties of a Table row.
**/
export class UpdateTableRowPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=rowIndices" })
  rowIndices?: number[];

  @Metadata({ data: "json, name=tableRowProperties" })
  tableRowProperties?: TableRowProperties;
}
