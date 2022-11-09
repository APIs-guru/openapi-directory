import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreativeDimensions
/** 
 * The dimensions of a creative. This applies to only HTML and Native creatives.
**/
export class CreativeDimensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: string;

  @Metadata({ data: "json, name=width" })
  width?: string;
}
