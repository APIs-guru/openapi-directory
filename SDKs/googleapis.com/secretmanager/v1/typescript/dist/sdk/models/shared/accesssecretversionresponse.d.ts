import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SecretPayload } from "./secretpayload";
/**
 * Response message for SecretManagerService.AccessSecretVersion.
**/
export declare class AccessSecretVersionResponse extends SpeakeasyBase {
    name?: string;
    payload?: SecretPayload;
}
