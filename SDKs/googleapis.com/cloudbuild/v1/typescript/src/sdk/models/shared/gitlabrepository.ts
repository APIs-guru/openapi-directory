import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GitLabRepositoryId } from "./gitlabrepositoryid";


// GitLabRepository
/** 
 * Proto Representing a GitLabRepository
**/
export class GitLabRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=browseUri" })
  browseUri?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=repositoryId" })
  repositoryId?: GitLabRepositoryId;
}
