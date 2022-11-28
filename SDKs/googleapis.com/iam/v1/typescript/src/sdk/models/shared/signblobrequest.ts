import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SignBlobRequest
/** 
 * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign blob request.
**/
export class SignBlobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bytesToSign" })
  bytesToSign?: string;
}
