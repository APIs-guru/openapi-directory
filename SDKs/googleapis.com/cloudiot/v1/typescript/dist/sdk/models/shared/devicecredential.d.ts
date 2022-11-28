import { SpeakeasyBase } from "../../../internal/utils";
import { PublicKeyCredential } from "./publickeycredential";
/**
 * A server-stored device credential used for authentication.
**/
export declare class DeviceCredential extends SpeakeasyBase {
    expirationTime?: string;
    publicKey?: PublicKeyCredential;
}
