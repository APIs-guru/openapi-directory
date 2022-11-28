import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Segment } from "./segment";



// ParsedData
/** 
 * The content of an HL7v2 message in a structured format.
**/
export class ParsedData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=segments", elemType: Segment })
  segments?: Segment[];
}
