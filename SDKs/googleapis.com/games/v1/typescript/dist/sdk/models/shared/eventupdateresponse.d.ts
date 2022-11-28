import { SpeakeasyBase } from "../../../internal/utils";
import { EventBatchRecordFailure } from "./eventbatchrecordfailure";
import { EventRecordFailure } from "./eventrecordfailure";
import { PlayerEvent } from "./playerevent";
/**
 * An event period update resource.
**/
export declare class EventUpdateResponse extends SpeakeasyBase {
    batchFailures?: EventBatchRecordFailure[];
    eventFailures?: EventRecordFailure[];
    kind?: string;
    playerEvents?: PlayerEvent[];
}
