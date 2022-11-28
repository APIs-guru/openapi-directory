import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventBatchRecordFailure } from "./eventbatchrecordfailure";
import { EventRecordFailure } from "./eventrecordfailure";
import { PlayerEvent } from "./playerevent";



// EventUpdateResponse
/** 
 * An event period update resource.
**/
export class EventUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchFailures", elemType: EventBatchRecordFailure })
  batchFailures?: EventBatchRecordFailure[];

  @SpeakeasyMetadata({ data: "json, name=eventFailures", elemType: EventRecordFailure })
  eventFailures?: EventRecordFailure[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=playerEvents", elemType: PlayerEvent })
  playerEvents?: PlayerEvent[];
}
