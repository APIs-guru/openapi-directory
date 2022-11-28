import { SpeakeasyBase } from "../../../internal/utils";
import { Occurrence } from "./occurrence";
/**
 * Response for creating occurrences in batch.
**/
export declare class BatchCreateOccurrencesResponse extends SpeakeasyBase {
    occurrences?: Occurrence[];
}
