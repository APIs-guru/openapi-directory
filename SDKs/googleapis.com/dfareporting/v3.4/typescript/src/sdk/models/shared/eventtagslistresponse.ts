import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventTag } from "./eventtag";



// EventTagsListResponse
/** 
 * Event Tag List Response
**/
export class EventTagsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventTags", elemType: EventTag })
  eventTags?: EventTag[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
