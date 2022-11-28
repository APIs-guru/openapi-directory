import { SpeakeasyBase } from "../../../internal/utils";
import { Note } from "./note";
/**
 * Response for listing notes.
**/
export declare class ListNotesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    notes?: Note[];
}
