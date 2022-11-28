import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateGitLabConnectedRepositoryRequestInput } from "./creategitlabconnectedrepositoryrequest";



// BatchCreateGitLabConnectedRepositoriesRequestInput
/** 
 * RPC request object accepted by BatchCreateGitLabConnectedRepositories RPC method.
**/
export class BatchCreateGitLabConnectedRepositoriesRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: CreateGitLabConnectedRepositoryRequestInput })
  requests?: CreateGitLabConnectedRepositoryRequestInput[];
}
