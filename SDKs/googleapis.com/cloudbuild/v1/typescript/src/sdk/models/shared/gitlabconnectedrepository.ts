import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitLabRepositoryIdInput } from "./gitlabrepositoryid";
import { Status } from "./status";



// GitLabConnectedRepositoryInput
/** 
 * GitLabConnectedRepository represents a GitLab connected repository request response.
**/
export class GitLabConnectedRepositoryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=repo" })
  repo?: GitLabRepositoryIdInput;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;
}
