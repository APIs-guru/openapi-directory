import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GitHubEnterpriseSecrets represents the names of all necessary secrets in Secret Manager for a GitHub Enterprise server. Format is: projects//secrets/.
**/
export declare class GitHubEnterpriseSecrets extends SpeakeasyBase {
    oauthClientIdName?: string;
    oauthClientIdVersionName?: string;
    oauthSecretName?: string;
    oauthSecretVersionName?: string;
    privateKeyName?: string;
    privateKeyVersionName?: string;
    webhookSecretName?: string;
    webhookSecretVersionName?: string;
}
