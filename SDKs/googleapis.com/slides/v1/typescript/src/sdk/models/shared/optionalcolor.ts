import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpaqueColor } from "./opaquecolor";



// OptionalColor
/** 
 * A color that can either be fully opaque or fully transparent.
**/
export class OptionalColor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=opaqueColor" })
  opaqueColor?: OpaqueColor;
}
