import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudienceSegment } from "./audiencesegment";



// AudienceSegmentGroup
/** 
 * Audience Segment Group.
**/
export class AudienceSegmentGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audienceSegments", elemType: AudienceSegment })
  audienceSegments?: AudienceSegment[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
