import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UploadServiceAccountKeyRequest
/** 
 * The service account key upload request.
**/
export class UploadServiceAccountKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publicKeyData" })
  publicKeyData?: string;
}
