import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";



// SearchProjectsResponse
/** 
 * A page of the response received from the SearchProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
**/
export class SearchProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projects", elemType: Project })
  projects?: Project[];
}
