import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";


// EmbeddedObjectBorder
/** 
 * A border along an embedded object.
**/
export class EmbeddedObjectBorder extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: Color;

  @Metadata({ data: "json, name=colorStyle" })
  colorStyle?: ColorStyle;
}
