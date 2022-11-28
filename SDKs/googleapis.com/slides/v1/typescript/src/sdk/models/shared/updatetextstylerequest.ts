import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
import { TextStyle } from "./textstyle";
import { Range } from "./range";



// UpdateTextStyleRequest
/** 
 * Update the styling of text in a Shape or Table.
**/
export class UpdateTextStyleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cellLocation" })
  cellLocation?: TableCellLocation;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=style" })
  style?: TextStyle;

  @SpeakeasyMetadata({ data: "json, name=textRange" })
  textRange?: Range;
}
