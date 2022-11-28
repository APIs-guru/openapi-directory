import { SpeakeasyBase } from "../../../internal/utils";
import { GitLabConnectedRepositoryInput } from "./gitlabconnectedrepository";
/**
 * Request to connect a repository from a connected GitLab host.
**/
export declare class CreateGitLabConnectedRepositoryRequestInput extends SpeakeasyBase {
    gitlabConnectedRepository?: GitLabConnectedRepositoryInput;
    parent?: string;
}
