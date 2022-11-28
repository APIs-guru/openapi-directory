import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestroySecretVersionRequest
/** 
 * Request message for SecretManagerService.DestroySecretVersion.
**/
export class DestroySecretVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;
}
