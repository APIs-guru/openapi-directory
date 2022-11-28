import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BitbucketServerRepositoryId
/** 
 * BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server.
**/
export class BitbucketServerRepositoryId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectKey" })
  projectKey?: string;

  @SpeakeasyMetadata({ data: "json, name=repoSlug" })
  repoSlug?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookId" })
  webhookId?: number;
}


// BitbucketServerRepositoryIdInput
/** 
 * BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server.
**/
export class BitbucketServerRepositoryIdInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectKey" })
  projectKey?: string;

  @SpeakeasyMetadata({ data: "json, name=repoSlug" })
  repoSlug?: string;
}
