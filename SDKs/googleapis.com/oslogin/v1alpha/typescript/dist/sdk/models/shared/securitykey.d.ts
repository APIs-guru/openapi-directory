import { SpeakeasyBase } from "../../../internal/utils";
import { UniversalTwoFactor } from "./universaltwofactor";
import { WebAuthn } from "./webauthn";
/**
 * The credential information for a Google registered security key.
**/
export declare class SecurityKey extends SpeakeasyBase {
    privateKey?: string;
    publicKey?: string;
    universalTwoFactor?: UniversalTwoFactor;
    webAuthn?: WebAuthn;
}
