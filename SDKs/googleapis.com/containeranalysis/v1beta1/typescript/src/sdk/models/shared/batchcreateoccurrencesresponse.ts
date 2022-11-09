import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Occurrence } from "./occurrence";


// BatchCreateOccurrencesResponse
/** 
 * Response for creating occurrences in batch.
**/
export class BatchCreateOccurrencesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=occurrences", elemType: shared.Occurrence })
  occurrences?: Occurrence[];
}
