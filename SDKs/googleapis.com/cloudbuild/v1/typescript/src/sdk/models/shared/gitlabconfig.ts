import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitLabRepositoryIdInput } from "./gitlabrepositoryid";
import { GitLabEnterpriseConfig } from "./gitlabenterpriseconfig";
import { GitLabSecrets } from "./gitlabsecrets";
import { GitLabRepositoryId } from "./gitlabrepositoryid";



// GitLabConfigInput
/** 
 * GitLabConfig represents the configuration for a GitLab integration.
**/
export class GitLabConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectedRepositories", elemType: GitLabRepositoryIdInput })
  connectedRepositories?: GitLabRepositoryIdInput[];

  @SpeakeasyMetadata({ data: "json, name=enterpriseConfig" })
  enterpriseConfig?: GitLabEnterpriseConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=secrets" })
  secrets?: GitLabSecrets;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


// GitLabConfig
/** 
 * GitLabConfig represents the configuration for a GitLab integration.
**/
export class GitLabConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectedRepositories", elemType: GitLabRepositoryId })
  connectedRepositories?: GitLabRepositoryId[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=enterpriseConfig" })
  enterpriseConfig?: GitLabEnterpriseConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=secrets" })
  secrets?: GitLabSecrets;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookKey" })
  webhookKey?: string;
}
