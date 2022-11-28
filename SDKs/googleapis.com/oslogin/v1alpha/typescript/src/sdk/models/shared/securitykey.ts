import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UniversalTwoFactor } from "./universaltwofactor";
import { WebAuthn } from "./webauthn";



// SecurityKey
/** 
 * The credential information for a Google registered security key.
**/
export class SecurityKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKey" })
  publicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=universalTwoFactor" })
  universalTwoFactor?: UniversalTwoFactor;

  @SpeakeasyMetadata({ data: "json, name=webAuthn" })
  webAuthn?: WebAuthn;
}
