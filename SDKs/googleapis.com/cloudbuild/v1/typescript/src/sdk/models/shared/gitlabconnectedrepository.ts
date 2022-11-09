import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GitLabRepositoryId } from "./gitlabrepositoryid";
import { Status } from "./status";


// GitLabConnectedRepository
/** 
 * GitLabConnectedRepository represents a GitLab connected repository request response.
**/
export class GitLabConnectedRepository extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=repo" })
  repo?: GitLabRepositoryId;

  @Metadata({ data: "json, name=status" })
  status?: Status;
}
