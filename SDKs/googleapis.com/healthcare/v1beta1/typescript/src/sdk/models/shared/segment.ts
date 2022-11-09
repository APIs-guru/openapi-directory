import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Segment
/** 
 * A segment in a structured format.
**/
export class Segment extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: Map<string, string>;

  @Metadata({ data: "json, name=segmentId" })
  segmentId?: string;

  @Metadata({ data: "json, name=setId" })
  setId?: string;
}
