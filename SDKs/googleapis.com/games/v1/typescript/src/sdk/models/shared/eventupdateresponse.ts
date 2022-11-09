import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventBatchRecordFailure } from "./eventbatchrecordfailure";
import { EventRecordFailure } from "./eventrecordfailure";
import { PlayerEvent } from "./playerevent";


// EventUpdateResponse
/** 
 * An event period update resource.
**/
export class EventUpdateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchFailures", elemType: shared.EventBatchRecordFailure })
  batchFailures?: EventBatchRecordFailure[];

  @Metadata({ data: "json, name=eventFailures", elemType: shared.EventRecordFailure })
  eventFailures?: EventRecordFailure[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=playerEvents", elemType: shared.PlayerEvent })
  playerEvents?: PlayerEvent[];
}
