import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecretPayload } from "./secretpayload";



// AddSecretVersionRequest
/** 
 * Request message for SecretManagerService.AddSecretVersion.
**/
export class AddSecretVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: SecretPayload;
}
