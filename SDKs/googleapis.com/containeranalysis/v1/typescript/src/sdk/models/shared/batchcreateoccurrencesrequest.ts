import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OccurrenceInput } from "./occurrence";



// BatchCreateOccurrencesRequestInput
/** 
 * Request to create occurrences in batch.
**/
export class BatchCreateOccurrencesRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=occurrences", elemType: OccurrenceInput })
  occurrences?: OccurrenceInput[];
}
