import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Note } from "./note";



// BatchCreateNotesRequest
/** 
 * Request to create notes in batch.
**/
export class BatchCreateNotesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notes", elemType: Note })
  notes?: Map<string, Note>;
}
