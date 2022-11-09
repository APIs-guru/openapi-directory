import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableCellLocation } from "./tablecelllocation";
import { TextStyle } from "./textstyle";
import { Range } from "./range";


// UpdateTextStyleRequest
/** 
 * Update the styling of text in a Shape or Table.
**/
export class UpdateTextStyleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=style" })
  style?: TextStyle;

  @Metadata({ data: "json, name=textRange" })
  textRange?: Range;
}
