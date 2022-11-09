import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenerateUploadUrlResponse
/** 
 * Response of `GenerateSourceUploadUrl` method.
**/
export class GenerateUploadUrlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=uploadUrl" })
  uploadUrl?: string;
}
