import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SolidFill } from "./solidfill";


// OutlineFill
/** 
 * The fill of the outline.
**/
export class OutlineFill extends SpeakeasyBase {
  @Metadata({ data: "json, name=solidFill" })
  solidFill?: SolidFill;
}
