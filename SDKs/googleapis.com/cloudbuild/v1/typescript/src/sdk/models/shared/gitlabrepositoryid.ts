import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GitLabRepositoryIdInput
/** 
 * GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise
**/
export class GitLabRepositoryIdInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// GitLabRepositoryId
/** 
 * GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise
**/
export class GitLabRepositoryId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookId" })
  webhookId?: number;
}
