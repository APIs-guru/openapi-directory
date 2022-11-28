import { SpeakeasyBase } from "../../../internal/utils";
import { GitHubEnterpriseConfig } from "./githubenterpriseconfig";
/**
 * RPC response object returned by ListGithubEnterpriseConfigs RPC method.
**/
export declare class ListGithubEnterpriseConfigsResponse extends SpeakeasyBase {
    configs?: GitHubEnterpriseConfig[];
}
