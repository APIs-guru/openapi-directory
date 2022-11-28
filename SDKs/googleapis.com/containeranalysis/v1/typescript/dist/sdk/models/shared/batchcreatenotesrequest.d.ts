import { SpeakeasyBase } from "../../../internal/utils";
import { Note } from "./note";
/**
 * Request to create notes in batch.
**/
export declare class BatchCreateNotesRequest extends SpeakeasyBase {
    notes?: Map<string, Note>;
}
