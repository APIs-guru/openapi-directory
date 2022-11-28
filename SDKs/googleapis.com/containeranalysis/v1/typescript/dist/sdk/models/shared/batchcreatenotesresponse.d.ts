import { SpeakeasyBase } from "../../../internal/utils";
import { Note } from "./note";
/**
 * Response for creating notes in batch.
**/
export declare class BatchCreateNotesResponse extends SpeakeasyBase {
    notes?: Note[];
}
