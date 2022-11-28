import { SpeakeasyBase } from "../../../internal/utils";
import { OccurrenceInput } from "./occurrence";
/**
 * Request to create occurrences in batch.
**/
export declare class BatchCreateOccurrencesRequestInput extends SpeakeasyBase {
    occurrences?: OccurrenceInput[];
}
