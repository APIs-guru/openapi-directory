import { SpeakeasyBase } from "../../../internal/utils";
import { GitLabRepositoryIdInput } from "./gitlabrepositoryid";
import { Status } from "./status";
/**
 * GitLabConnectedRepository represents a GitLab connected repository request response.
**/
export declare class GitLabConnectedRepositoryInput extends SpeakeasyBase {
    parent?: string;
    repo?: GitLabRepositoryIdInput;
    status?: Status;
}
