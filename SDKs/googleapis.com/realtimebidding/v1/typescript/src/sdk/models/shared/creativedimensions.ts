import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreativeDimensions
/** 
 * The dimensions of a creative. This applies to only HTML and Native creatives.
**/
export class CreativeDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: string;
}
