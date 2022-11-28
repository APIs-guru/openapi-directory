import { SpeakeasyBase } from "../../../internal/utils";
import { GitLabConfig } from "./gitlabconfig";
/**
 * RPC response object returned by ListGitLabConfigs RPC method.
**/
export declare class ListGitLabConfigsResponse extends SpeakeasyBase {
    gitlabConfigs?: GitLabConfig[];
    nextPageToken?: string;
}
