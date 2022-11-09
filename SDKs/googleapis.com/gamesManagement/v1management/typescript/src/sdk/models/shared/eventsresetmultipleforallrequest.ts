import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventsResetMultipleForAllRequest
/** 
 * Multiple events reset all request.
**/
export class EventsResetMultipleForAllRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=event_ids" })
  eventIds?: string[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
