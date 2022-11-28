import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitLabConnectedRepositoryInput } from "./gitlabconnectedrepository";



// CreateGitLabConnectedRepositoryRequestInput
/** 
 * Request to connect a repository from a connected GitLab host.
**/
export class CreateGitLabConnectedRepositoryRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gitlabConnectedRepository" })
  gitlabConnectedRepository?: GitLabConnectedRepositoryInput;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;
}
