import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenerateUploadUrlResponse
/** 
 * Response of `GenerateSourceUploadUrl` method.
**/
export class GenerateUploadUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uploadUrl" })
  uploadUrl?: string;
}
