import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenerateUploadUrlRequest
/** 
 * Request of `GenerateSourceUploadUrl` method.
**/
export class GenerateUploadUrlRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
