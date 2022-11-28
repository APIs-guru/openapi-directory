import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Occurrence } from "./occurrence";



// ListNoteOccurrencesResponse
/** 
 * Response including listed occurrences for a note.
**/
export class ListNoteOccurrencesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=occurrences", elemType: Occurrence })
  occurrences?: Occurrence[];
}
