import { SpeakeasyBase } from "../../../internal/utils";
import { GitLabRepository } from "./gitlabrepository";
/**
 * RPC response object returned by the ListGitLabRepositories RPC method.
**/
export declare class ListGitLabRepositoriesResponse extends SpeakeasyBase {
    gitlabRepositories?: GitLabRepository[];
    nextPageToken?: string;
}
