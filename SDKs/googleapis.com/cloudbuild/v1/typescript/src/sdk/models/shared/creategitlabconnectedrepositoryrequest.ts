import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GitLabConnectedRepository } from "./gitlabconnectedrepository";


// CreateGitLabConnectedRepositoryRequest
/** 
 * Request to connect a repository from a connected GitLab host.
**/
export class CreateGitLabConnectedRepositoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=gitlabConnectedRepository" })
  gitlabConnectedRepository?: GitLabConnectedRepository;

  @Metadata({ data: "json, name=parent" })
  parent?: string;
}
