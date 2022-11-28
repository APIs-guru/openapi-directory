import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenerateDownloadUrlResponse
/** 
 * Response of `GenerateDownloadUrl` method.
**/
export class GenerateDownloadUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;
}
