import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenerateDownloadUrlRequest
/** 
 * Request of `GenerateDownloadUrl` method.
**/
export class GenerateDownloadUrlRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=versionId" })
  versionId?: string;
}
