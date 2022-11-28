import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenerateUploadUrlRequest
/** 
 * Request of `GenerateSourceUploadUrl` method.
**/
export class GenerateUploadUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
