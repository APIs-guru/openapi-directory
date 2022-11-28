import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT response.
**/
export declare class SignJwtResponse extends SpeakeasyBase {
    keyId?: string;
    signedJwt?: string;
}
