import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GitLabRepositoryId } from "./gitlabrepositoryid";


// RemoveGitLabConnectedRepositoryRequest
/** 
 * RPC request object accepted by RemoveGitLabConnectedRepository RPC method.
**/
export class RemoveGitLabConnectedRepositoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectedRepository" })
  connectedRepository?: GitLabRepositoryId;
}
