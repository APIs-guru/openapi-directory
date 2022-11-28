import { SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";
/**
 * Response message for SiteService.ListSites.
**/
export declare class ListSitesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sites?: Site[];
}
