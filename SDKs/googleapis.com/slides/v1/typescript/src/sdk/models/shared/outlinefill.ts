import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SolidFill } from "./solidfill";



// OutlineFill
/** 
 * The fill of the outline.
**/
export class OutlineFill extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=solidFill" })
  solidFill?: SolidFill;
}
