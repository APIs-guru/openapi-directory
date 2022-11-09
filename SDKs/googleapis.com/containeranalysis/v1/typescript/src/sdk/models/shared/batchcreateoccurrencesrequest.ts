import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Occurrence } from "./occurrence";


// BatchCreateOccurrencesRequest
/** 
 * Request to create occurrences in batch.
**/
export class BatchCreateOccurrencesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=occurrences", elemType: shared.Occurrence })
  occurrences?: Occurrence[];
}
