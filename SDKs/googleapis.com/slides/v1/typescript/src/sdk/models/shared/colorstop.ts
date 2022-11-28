import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpaqueColor } from "./opaquecolor";



// ColorStop
/** 
 * A color and position in a gradient band.
**/
export class ColorStop extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alpha" })
  alpha?: number;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: OpaqueColor;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;
}
