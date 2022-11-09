import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Note } from "./note";


// ListNotesResponse
/** 
 * Response for listing notes.
**/
export class ListNotesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=notes", elemType: shared.Note })
  notes?: Note[];
}
