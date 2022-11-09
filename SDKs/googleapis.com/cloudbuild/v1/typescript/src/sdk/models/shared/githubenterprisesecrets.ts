import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GitHubEnterpriseSecrets
/** 
 * GitHubEnterpriseSecrets represents the names of all necessary secrets in Secret Manager for a GitHub Enterprise server. Format is: projects//secrets/.
**/
export class GitHubEnterpriseSecrets extends SpeakeasyBase {
  @Metadata({ data: "json, name=oauthClientIdName" })
  oauthClientIdName?: string;

  @Metadata({ data: "json, name=oauthClientIdVersionName" })
  oauthClientIdVersionName?: string;

  @Metadata({ data: "json, name=oauthSecretName" })
  oauthSecretName?: string;

  @Metadata({ data: "json, name=oauthSecretVersionName" })
  oauthSecretVersionName?: string;

  @Metadata({ data: "json, name=privateKeyName" })
  privateKeyName?: string;

  @Metadata({ data: "json, name=privateKeyVersionName" })
  privateKeyVersionName?: string;

  @Metadata({ data: "json, name=webhookSecretName" })
  webhookSecretName?: string;

  @Metadata({ data: "json, name=webhookSecretVersionName" })
  webhookSecretVersionName?: string;
}
