import { SpeakeasyBase } from "../../../internal/utils";
import { CreateGitLabConnectedRepositoryRequestInput } from "./creategitlabconnectedrepositoryrequest";
/**
 * RPC request object accepted by BatchCreateGitLabConnectedRepositories RPC method.
**/
export declare class BatchCreateGitLabConnectedRepositoriesRequestInput extends SpeakeasyBase {
    requests?: CreateGitLabConnectedRepositoryRequestInput[];
}
