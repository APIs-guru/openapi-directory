import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Occurrence } from "./occurrence";



// BatchCreateOccurrencesResponse
/** 
 * Response for creating occurrences in batch.
**/
export class BatchCreateOccurrencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=occurrences", elemType: Occurrence })
  occurrences?: Occurrence[];
}
