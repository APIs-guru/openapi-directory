import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Release } from "./release";
/**
 * Response message for ListReleases.
**/
export declare class ListReleasesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    releases?: Release[];
}
