import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Project } from "./project";


// ProjectsListResponse
/** 
 * Project List Response
**/
export class ProjectsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=projects", elemType: shared.Project })
  projects?: Project[];
}
