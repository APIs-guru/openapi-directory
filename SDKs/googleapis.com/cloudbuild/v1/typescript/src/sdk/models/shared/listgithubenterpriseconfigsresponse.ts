import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitHubEnterpriseConfig } from "./githubenterpriseconfig";



// ListGithubEnterpriseConfigsResponse
/** 
 * RPC response object returned by ListGithubEnterpriseConfigs RPC method.
**/
export class ListGithubEnterpriseConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs", elemType: GitHubEnterpriseConfig })
  configs?: GitHubEnterpriseConfig[];
}
