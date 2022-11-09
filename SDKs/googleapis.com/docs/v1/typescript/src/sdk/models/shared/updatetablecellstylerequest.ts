import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellStyle } from "./tablecellstyle";
import { TableRange } from "./tablerange";
import { Location } from "./location";


// UpdateTableCellStyleRequest
/** 
 * Updates the style of a range of table cells.
**/
export class UpdateTableCellStyleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=tableCellStyle" })
  tableCellStyle?: TableCellStyle;

  @Metadata({ data: "json, name=tableRange" })
  tableRange?: TableRange;

  @Metadata({ data: "json, name=tableStartLocation" })
  tableStartLocation?: Location;
}
