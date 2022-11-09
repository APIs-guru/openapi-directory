import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SecretPayload } from "./secretpayload";
/**
 * Request message for SecretManagerService.AddSecretVersion.
**/
export declare class AddSecretVersionRequest extends SpeakeasyBase {
    payload?: SecretPayload;
}
