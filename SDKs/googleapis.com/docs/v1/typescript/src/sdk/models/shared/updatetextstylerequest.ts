import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Range } from "./range";
import { TextStyle } from "./textstyle";


// UpdateTextStyleRequest
/** 
 * Update the styling of text.
**/
export class UpdateTextStyleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=range" })
  range?: Range;

  @Metadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
