import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Note } from "./note";



// ListNotesResponse
/** 
 * Response for listing notes.
**/
export class ListNotesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=notes", elemType: Note })
  notes?: Note[];
}
