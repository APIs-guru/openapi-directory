import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BitbucketServerSecrets
/** 
 * BitbucketServerSecrets represents the secrets in Secret Manager for a Bitbucket Server.
**/
export class BitbucketServerSecrets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminAccessTokenVersionName" })
  adminAccessTokenVersionName?: string;

  @SpeakeasyMetadata({ data: "json, name=readAccessTokenVersionName" })
  readAccessTokenVersionName?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookSecretVersionName" })
  webhookSecretVersionName?: string;
}
