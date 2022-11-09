import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SignBlobResponse
/** 
 * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob response.
**/
export class SignBlobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyId" })
  keyId?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: string;
}
