import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Note } from "./note";


// BatchCreateNotesRequest
/** 
 * Request to create notes in batch.
**/
export class BatchCreateNotesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=notes", elemType: shared.Note })
  notes?: Map<string, Note>;
}
