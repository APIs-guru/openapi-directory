import { SpeakeasyBase } from "../../../internal/utils";
import { SecretPayload } from "./secretpayload";
/**
 * Response message for SecretManagerService.AccessSecretVersion.
**/
export declare class AccessSecretVersionResponse extends SpeakeasyBase {
    name?: string;
    payload?: SecretPayload;
}
