import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";



// OptionalColor
/** 
 * A color that can either be fully opaque or fully transparent.
**/
export class OptionalColor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: Color;
}
