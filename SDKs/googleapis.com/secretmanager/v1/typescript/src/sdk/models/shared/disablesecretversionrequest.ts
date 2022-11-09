import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisableSecretVersionRequest
/** 
 * Request message for SecretManagerService.DisableSecretVersion.
**/
export class DisableSecretVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;
}
