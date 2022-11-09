import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GitLabSecrets
/** 
 * GitLabSecrets represents the secrets in Secret Manager for a GitLab integration.
**/
export class GitLabSecrets extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiAccessTokenVersion" })
  apiAccessTokenVersion?: string;

  @Metadata({ data: "json, name=apiKeyVersion" })
  apiKeyVersion?: string;

  @Metadata({ data: "json, name=readAccessTokenVersion" })
  readAccessTokenVersion?: string;

  @Metadata({ data: "json, name=webhookSecretVersion" })
  webhookSecretVersion?: string;
}
