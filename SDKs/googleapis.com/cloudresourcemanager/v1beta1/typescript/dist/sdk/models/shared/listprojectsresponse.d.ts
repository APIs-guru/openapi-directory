import { SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";
/**
 * A page of the response received from the ListProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
**/
export declare class ListProjectsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    projects?: Project[];
}
