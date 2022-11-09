import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellProperties } from "./tablecellproperties";
import { TableRange } from "./tablerange";


// UpdateTableCellPropertiesRequest
/** 
 * Update the properties of a TableCell.
**/
export class UpdateTableCellPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=tableCellProperties" })
  tableCellProperties?: TableCellProperties;

  @Metadata({ data: "json, name=tableRange" })
  tableRange?: TableRange;
}
