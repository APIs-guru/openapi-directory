import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BitbucketServerSecrets
/** 
 * BitbucketServerSecrets represents the secrets in Secret Manager for a Bitbucket Server.
**/
export class BitbucketServerSecrets extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminAccessTokenVersionName" })
  adminAccessTokenVersionName?: string;

  @Metadata({ data: "json, name=readAccessTokenVersionName" })
  readAccessTokenVersionName?: string;

  @Metadata({ data: "json, name=webhookSecretVersionName" })
  webhookSecretVersionName?: string;
}
