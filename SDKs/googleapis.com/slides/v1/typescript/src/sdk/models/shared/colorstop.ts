import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OpaqueColor } from "./opaquecolor";


// ColorStop
/** 
 * A color and position in a gradient band.
**/
export class ColorStop extends SpeakeasyBase {
  @Metadata({ data: "json, name=alpha" })
  alpha?: number;

  @Metadata({ data: "json, name=color" })
  color?: OpaqueColor;

  @Metadata({ data: "json, name=position" })
  position?: number;
}
