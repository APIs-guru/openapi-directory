import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenerateDownloadUrlResponse
/** 
 * Response of `GenerateDownloadUrl` method.
**/
export class GenerateDownloadUrlResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;
}
