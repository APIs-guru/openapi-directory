import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisableSecretVersionRequest
/** 
 * Request message for SecretManagerService.DisableSecretVersion.
**/
export class DisableSecretVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;
}
