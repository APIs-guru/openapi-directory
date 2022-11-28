import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SignJwtRequest
/** 
 * Deprecated. [Migrate to Service Account Credentials API](https://cloud.google.com/iam/help/credentials/migrate-api). The service account sign JWT request.
**/
export class SignJwtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;
}
