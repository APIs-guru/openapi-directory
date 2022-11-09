import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GitLabRepositoryId } from "./gitlabrepositoryid";
import { GitLabEnterpriseConfig } from "./gitlabenterpriseconfig";
import { GitLabSecrets } from "./gitlabsecrets";


// GitLabConfig
/** 
 * GitLabConfig represents the configuration for a GitLab integration.
**/
export class GitLabConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectedRepositories", elemType: shared.GitLabRepositoryId })
  connectedRepositories?: GitLabRepositoryId[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=enterpriseConfig" })
  enterpriseConfig?: GitLabEnterpriseConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=secrets" })
  secrets?: GitLabSecrets;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=webhookKey" })
  webhookKey?: string;
}
