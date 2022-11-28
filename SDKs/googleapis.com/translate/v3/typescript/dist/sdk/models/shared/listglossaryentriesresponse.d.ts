import { SpeakeasyBase } from "../../../internal/utils";
import { GlossaryEntry } from "./glossaryentry";
/**
 * Response message for ListGlossaryEntries
**/
export declare class ListGlossaryEntriesResponse extends SpeakeasyBase {
    glossaryEntries?: GlossaryEntry[];
    nextPageToken?: string;
}
