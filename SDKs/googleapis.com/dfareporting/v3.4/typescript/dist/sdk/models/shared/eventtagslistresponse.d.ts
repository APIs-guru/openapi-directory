import { SpeakeasyBase } from "../../../internal/utils";
import { EventTag } from "./eventtag";
/**
 * Event Tag List Response
**/
export declare class EventTagsListResponse extends SpeakeasyBase {
    eventTags?: EventTag[];
    kind?: string;
}
