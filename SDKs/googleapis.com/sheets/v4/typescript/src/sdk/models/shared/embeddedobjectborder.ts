import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";



// EmbeddedObjectBorder
/** 
 * A border along an embedded object.
**/
export class EmbeddedObjectBorder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: Color;

  @SpeakeasyMetadata({ data: "json, name=colorStyle" })
  colorStyle?: ColorStyle;
}
