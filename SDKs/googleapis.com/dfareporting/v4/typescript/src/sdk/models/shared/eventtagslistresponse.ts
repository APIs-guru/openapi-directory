import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventTag } from "./eventtag";


// EventTagsListResponse
/** 
 * Event Tag List Response
**/
export class EventTagsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventTags", elemType: shared.EventTag })
  eventTags?: EventTag[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
