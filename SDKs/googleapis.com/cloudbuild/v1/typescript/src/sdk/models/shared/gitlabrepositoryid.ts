import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GitLabRepositoryId
/** 
 * GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise
**/
export class GitLabRepositoryId extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=webhookId" })
  webhookId?: number;
}
