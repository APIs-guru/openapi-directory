import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SecretPayload } from "./secretpayload";


// AccessSecretVersionResponse
/** 
 * Response message for SecretManagerService.AccessSecretVersion.
**/
export class AccessSecretVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=payload" })
  payload?: SecretPayload;
}
