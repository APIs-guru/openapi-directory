import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GitHubEnterpriseSecrets
/** 
 * GitHubEnterpriseSecrets represents the names of all necessary secrets in Secret Manager for a GitHub Enterprise server. Format is: projects//secrets/.
**/
export class GitHubEnterpriseSecrets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oauthClientIdName" })
  oauthClientIdName?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthClientIdVersionName" })
  oauthClientIdVersionName?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthSecretName" })
  oauthSecretName?: string;

  @SpeakeasyMetadata({ data: "json, name=oauthSecretVersionName" })
  oauthSecretVersionName?: string;

  @SpeakeasyMetadata({ data: "json, name=privateKeyName" })
  privateKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=privateKeyVersionName" })
  privateKeyVersionName?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookSecretName" })
  webhookSecretName?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookSecretVersionName" })
  webhookSecretVersionName?: string;
}
