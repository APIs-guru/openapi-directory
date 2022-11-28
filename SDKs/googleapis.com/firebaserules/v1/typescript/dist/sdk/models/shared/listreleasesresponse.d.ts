import { SpeakeasyBase } from "../../../internal/utils";
import { Release } from "./release";
/**
 * The response for FirebaseRulesService.ListReleases.
**/
export declare class ListReleasesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    releases?: Release[];
}
