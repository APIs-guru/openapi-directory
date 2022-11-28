import { SpeakeasyBase } from "../../../internal/utils";
import { Occurrence } from "./occurrence";
/**
 * Response for listing occurrences for a note.
**/
export declare class ListNoteOccurrencesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    occurrences?: Occurrence[];
}
