import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Note } from "./note";



// BatchCreateNotesResponse
/** 
 * Response for creating notes in batch.
**/
export class BatchCreateNotesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notes", elemType: Note })
  notes?: Note[];
}
