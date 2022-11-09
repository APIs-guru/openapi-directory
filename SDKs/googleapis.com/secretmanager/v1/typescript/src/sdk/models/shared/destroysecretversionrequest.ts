import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DestroySecretVersionRequest
/** 
 * Request message for SecretManagerService.DestroySecretVersion.
**/
export class DestroySecretVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;
}
