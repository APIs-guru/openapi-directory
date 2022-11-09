import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SignJwtResponse
/** 
 * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT response.
**/
export class SignJwtResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyId" })
  keyId?: string;

  @Metadata({ data: "json, name=signedJwt" })
  signedJwt?: string;
}
