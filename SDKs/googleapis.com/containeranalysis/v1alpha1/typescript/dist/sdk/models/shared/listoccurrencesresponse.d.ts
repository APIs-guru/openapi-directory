import { SpeakeasyBase } from "../../../internal/utils";
import { Occurrence } from "./occurrence";
/**
 * Response including listed active occurrences.
**/
export declare class ListOccurrencesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    occurrences?: Occurrence[];
}
