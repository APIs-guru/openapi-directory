import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BitbucketServerRepositoryId
/** 
 * BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server.
**/
export class BitbucketServerRepositoryId extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectKey" })
  projectKey?: string;

  @Metadata({ data: "json, name=repoSlug" })
  repoSlug?: string;

  @Metadata({ data: "json, name=webhookId" })
  webhookId?: number;
}
