import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AudienceSegment
/** 
 * Audience Segment.
**/
export class AudienceSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocation" })
  allocation?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
