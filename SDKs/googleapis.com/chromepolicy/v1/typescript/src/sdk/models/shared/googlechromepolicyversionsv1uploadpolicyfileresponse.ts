import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromePolicyVersionsV1UploadPolicyFileResponse
/** 
 * Response message for downloading an uploaded file.
**/
export class GoogleChromePolicyVersionsV1UploadPolicyFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadUri" })
  downloadUri?: string;
}
