import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromePolicyVersionsV1UploadPolicyFileResponse
/** 
 * Response message for downloading an uploaded file.
**/
export class GoogleChromePolicyVersionsV1UploadPolicyFileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadUri" })
  downloadUri?: string;
}
