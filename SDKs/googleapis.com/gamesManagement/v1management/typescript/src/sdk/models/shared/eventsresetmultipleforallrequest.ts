import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventsResetMultipleForAllRequest
/** 
 * Multiple events reset all request.
**/
export class EventsResetMultipleForAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=event_ids" })
  eventIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
