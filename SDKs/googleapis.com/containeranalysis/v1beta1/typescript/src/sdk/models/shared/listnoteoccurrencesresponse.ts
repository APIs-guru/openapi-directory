import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Occurrence } from "./occurrence";


// ListNoteOccurrencesResponse
/** 
 * Response for listing occurrences for a note.
**/
export class ListNoteOccurrencesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=occurrences", elemType: shared.Occurrence })
  occurrences?: Occurrence[];
}
