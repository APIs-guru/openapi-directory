import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SolidFill } from "./solidfill";



// LineFill
/** 
 * The fill of the line.
**/
export class LineFill extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=solidFill" })
  solidFill?: SolidFill;
}
