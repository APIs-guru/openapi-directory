import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Note } from "./note";


// BatchCreateNotesResponse
/** 
 * Response for creating notes in batch.
**/
export class BatchCreateNotesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=notes", elemType: shared.Note })
  notes?: Note[];
}
