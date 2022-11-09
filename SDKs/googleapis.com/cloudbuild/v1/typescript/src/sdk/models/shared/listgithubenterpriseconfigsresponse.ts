import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GitHubEnterpriseConfig } from "./githubenterpriseconfig";


// ListGithubEnterpriseConfigsResponse
/** 
 * RPC response object returned by ListGithubEnterpriseConfigs RPC method.
**/
export class ListGithubEnterpriseConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs", elemType: shared.GitHubEnterpriseConfig })
  configs?: GitHubEnterpriseConfig[];
}
