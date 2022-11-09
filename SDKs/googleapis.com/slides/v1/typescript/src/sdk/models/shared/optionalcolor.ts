import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OpaqueColor } from "./opaquecolor";


// OptionalColor
/** 
 * A color that can either be fully opaque or fully transparent.
**/
export class OptionalColor extends SpeakeasyBase {
  @Metadata({ data: "json, name=opaqueColor" })
  opaqueColor?: OpaqueColor;
}
