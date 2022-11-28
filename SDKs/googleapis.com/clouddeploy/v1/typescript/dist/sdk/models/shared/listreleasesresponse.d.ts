import { SpeakeasyBase } from "../../../internal/utils";
import { Release } from "./release";
/**
 * The response object from `ListReleases`.
**/
export declare class ListReleasesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    releases?: Release[];
    unreachable?: string[];
}
