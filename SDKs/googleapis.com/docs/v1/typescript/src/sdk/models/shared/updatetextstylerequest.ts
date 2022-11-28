import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { TextStyle } from "./textstyle";



// UpdateTextStyleRequest
/** 
 * Update the styling of text.
**/
export class UpdateTextStyleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: Range;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
