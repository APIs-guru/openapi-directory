import { SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";
/**
 * Site List Response
**/
export declare class SitesListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    sites?: Site[];
}
