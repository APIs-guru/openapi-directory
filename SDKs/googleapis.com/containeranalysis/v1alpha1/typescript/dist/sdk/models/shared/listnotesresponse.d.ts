import { SpeakeasyBase } from "../../../internal/utils";
import { Note } from "./note";
/**
 * Response including listed notes.
**/
export declare class ListNotesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    notes?: Note[];
}
