import { SpeakeasyBase } from "../../../internal/utils";
import { AudienceSegment } from "./audiencesegment";
/**
 * Audience Segment Group.
**/
export declare class AudienceSegmentGroup extends SpeakeasyBase {
    audienceSegments?: AudienceSegment[];
    id?: string;
    name?: string;
}
