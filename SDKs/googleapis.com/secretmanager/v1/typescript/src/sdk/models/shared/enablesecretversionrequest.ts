import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnableSecretVersionRequest
/** 
 * Request message for SecretManagerService.EnableSecretVersion.
**/
export class EnableSecretVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;
}
