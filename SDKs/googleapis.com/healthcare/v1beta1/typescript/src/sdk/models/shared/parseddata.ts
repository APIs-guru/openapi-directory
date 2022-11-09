import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Segment } from "./segment";


// ParsedData
/** 
 * The content of an HL7v2 message in a structured format.
**/
export class ParsedData extends SpeakeasyBase {
  @Metadata({ data: "json, name=segments", elemType: shared.Segment })
  segments?: Segment[];
}
