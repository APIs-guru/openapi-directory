import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenerateDownloadUrlRequest
/** 
 * Request of `GenerateDownloadUrl` method.
**/
export class GenerateDownloadUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=versionId" })
  versionId?: string;
}
