import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GitLabSecrets represents the secrets in Secret Manager for a GitLab integration.
**/
export declare class GitLabSecrets extends SpeakeasyBase {
    apiAccessTokenVersion?: string;
    apiKeyVersion?: string;
    readAccessTokenVersion?: string;
    webhookSecretVersion?: string;
}
