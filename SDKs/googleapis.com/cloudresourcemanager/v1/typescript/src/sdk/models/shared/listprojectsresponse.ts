import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";



// ListProjectsResponse
/** 
 * A page of the response received from the ListProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
**/
export class ListProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projects", elemType: Project })
  projects?: Project[];
}
