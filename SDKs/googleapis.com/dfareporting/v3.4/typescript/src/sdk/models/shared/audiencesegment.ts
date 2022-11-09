import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AudienceSegment
/** 
 * Audience Segment.
**/
export class AudienceSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=allocation" })
  allocation?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
