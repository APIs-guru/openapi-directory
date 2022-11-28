import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GitLabSecrets
/** 
 * GitLabSecrets represents the secrets in Secret Manager for a GitLab integration.
**/
export class GitLabSecrets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiAccessTokenVersion" })
  apiAccessTokenVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=apiKeyVersion" })
  apiKeyVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=readAccessTokenVersion" })
  readAccessTokenVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookSecretVersion" })
  webhookSecretVersion?: string;
}
