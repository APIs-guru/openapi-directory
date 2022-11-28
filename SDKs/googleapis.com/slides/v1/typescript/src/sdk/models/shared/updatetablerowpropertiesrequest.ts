import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableRowProperties } from "./tablerowproperties";



// UpdateTableRowPropertiesRequest
/** 
 * Updates the properties of a Table row.
**/
export class UpdateTableRowPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=rowIndices" })
  rowIndices?: number[];

  @SpeakeasyMetadata({ data: "json, name=tableRowProperties" })
  tableRowProperties?: TableRowProperties;
}
