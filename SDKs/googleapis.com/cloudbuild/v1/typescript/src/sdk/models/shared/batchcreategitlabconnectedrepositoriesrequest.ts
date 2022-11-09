import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreateGitLabConnectedRepositoryRequest } from "./creategitlabconnectedrepositoryrequest";


// BatchCreateGitLabConnectedRepositoriesRequest
/** 
 * RPC request object accepted by BatchCreateGitLabConnectedRepositories RPC method.
**/
export class BatchCreateGitLabConnectedRepositoriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.CreateGitLabConnectedRepositoryRequest })
  requests?: CreateGitLabConnectedRepositoryRequest[];
}
