import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellStyle } from "./tablecellstyle";
import { TableRange } from "./tablerange";
import { Location } from "./location";



// UpdateTableCellStyleRequest
/** 
 * Updates the style of a range of table cells.
**/
export class UpdateTableCellStyleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=tableCellStyle" })
  tableCellStyle?: TableCellStyle;

  @SpeakeasyMetadata({ data: "json, name=tableRange" })
  tableRange?: TableRange;

  @SpeakeasyMetadata({ data: "json, name=tableStartLocation" })
  tableStartLocation?: Location;
}
