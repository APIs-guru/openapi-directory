import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SignBlobResponse
/** 
 * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob response.
**/
export class SignBlobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;
}
