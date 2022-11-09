import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnableSecretVersionRequest
/** 
 * Request message for SecretManagerService.EnableSecretVersion.
**/
export class EnableSecretVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;
}
