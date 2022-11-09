import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UploadServiceAccountKeyRequest
/** 
 * The service account key upload request.
**/
export class UploadServiceAccountKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=publicKeyData" })
  publicKeyData?: string;
}
