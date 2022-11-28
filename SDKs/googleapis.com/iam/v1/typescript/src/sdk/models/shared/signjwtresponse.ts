import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SignJwtResponse
/** 
 * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT response.
**/
export class SignJwtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=signedJwt" })
  signedJwt?: string;
}
