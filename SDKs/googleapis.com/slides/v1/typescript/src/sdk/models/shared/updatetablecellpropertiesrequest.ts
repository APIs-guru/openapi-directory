import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellProperties } from "./tablecellproperties";
import { TableRange } from "./tablerange";



// UpdateTableCellPropertiesRequest
/** 
 * Update the properties of a TableCell.
**/
export class UpdateTableCellPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=tableCellProperties" })
  tableCellProperties?: TableCellProperties;

  @SpeakeasyMetadata({ data: "json, name=tableRange" })
  tableRange?: TableRange;
}
