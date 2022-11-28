import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecretPayload } from "./secretpayload";



// AccessSecretVersionResponse
/** 
 * Response message for SecretManagerService.AccessSecretVersion.
**/
export class AccessSecretVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: SecretPayload;
}
