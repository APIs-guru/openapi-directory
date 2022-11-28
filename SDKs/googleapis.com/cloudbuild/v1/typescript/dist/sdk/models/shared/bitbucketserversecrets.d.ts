import { SpeakeasyBase } from "../../../internal/utils";
/**
 * BitbucketServerSecrets represents the secrets in Secret Manager for a Bitbucket Server.
**/
export declare class BitbucketServerSecrets extends SpeakeasyBase {
    adminAccessTokenVersionName?: string;
    readAccessTokenVersionName?: string;
    webhookSecretVersionName?: string;
}
