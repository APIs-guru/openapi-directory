import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Occurrence } from "./occurrence";


// ListOccurrencesResponse
/** 
 * Response for listing occurrences.
**/
export class ListOccurrencesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=occurrences", elemType: shared.Occurrence })
  occurrences?: Occurrence[];
}
