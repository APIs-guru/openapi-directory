import { SpeakeasyBase } from "../../../internal/utils";
import { GitLabRepositoryIdInput } from "./gitlabrepositoryid";
/**
 * RPC request object accepted by RemoveGitLabConnectedRepository RPC method.
**/
export declare class RemoveGitLabConnectedRepositoryRequestInput extends SpeakeasyBase {
    connectedRepository?: GitLabRepositoryIdInput;
}
