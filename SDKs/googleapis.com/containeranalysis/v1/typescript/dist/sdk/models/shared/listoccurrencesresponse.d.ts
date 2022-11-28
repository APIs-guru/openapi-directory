import { SpeakeasyBase } from "../../../internal/utils";
import { Occurrence } from "./occurrence";
/**
 * Response for listing occurrences.
**/
export declare class ListOccurrencesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    occurrences?: Occurrence[];
}
