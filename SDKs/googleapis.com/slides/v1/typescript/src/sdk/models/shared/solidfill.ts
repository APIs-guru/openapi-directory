import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OpaqueColor } from "./opaquecolor";


// SolidFill
/** 
 * A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists.
**/
export class SolidFill extends SpeakeasyBase {
  @Metadata({ data: "json, name=alpha" })
  alpha?: number;

  @Metadata({ data: "json, name=color" })
  color?: OpaqueColor;
}
