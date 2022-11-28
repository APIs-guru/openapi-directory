import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableColumnProperties } from "./tablecolumnproperties";



// UpdateTableColumnPropertiesRequest
/** 
 * Updates the properties of a Table column.
**/
export class UpdateTableColumnPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnIndices" })
  columnIndices?: number[];

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableColumnProperties" })
  tableColumnProperties?: TableColumnProperties;
}
