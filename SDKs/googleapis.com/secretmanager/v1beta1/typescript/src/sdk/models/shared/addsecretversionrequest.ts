import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SecretPayload } from "./secretpayload";


// AddSecretVersionRequest
/** 
 * Request message for SecretManagerService.AddSecretVersion.
**/
export class AddSecretVersionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=payload" })
  payload?: SecretPayload;
}
