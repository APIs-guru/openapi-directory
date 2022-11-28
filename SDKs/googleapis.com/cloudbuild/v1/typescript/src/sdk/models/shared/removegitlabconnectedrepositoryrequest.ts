import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitLabRepositoryIdInput } from "./gitlabrepositoryid";



// RemoveGitLabConnectedRepositoryRequestInput
/** 
 * RPC request object accepted by RemoveGitLabConnectedRepository RPC method.
**/
export class RemoveGitLabConnectedRepositoryRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectedRepository" })
  connectedRepository?: GitLabRepositoryIdInput;
}
