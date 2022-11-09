import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SolidFill } from "./solidfill";


// LineFill
/** 
 * The fill of the line.
**/
export class LineFill extends SpeakeasyBase {
  @Metadata({ data: "json, name=solidFill" })
  solidFill?: SolidFill;
}
