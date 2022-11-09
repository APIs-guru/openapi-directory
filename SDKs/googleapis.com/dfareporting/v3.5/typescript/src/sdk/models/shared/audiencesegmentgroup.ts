import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AudienceSegment } from "./audiencesegment";


// AudienceSegmentGroup
/** 
 * Audience Segment Group.
**/
export class AudienceSegmentGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=audienceSegments", elemType: shared.AudienceSegment })
  audienceSegments?: AudienceSegment[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
