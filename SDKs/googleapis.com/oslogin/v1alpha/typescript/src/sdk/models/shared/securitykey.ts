import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UniversalTwoFactor } from "./universaltwofactor";
import { WebAuthn } from "./webauthn";


// SecurityKey
/** 
 * The credential information for a Google registered security key.
**/
export class SecurityKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @Metadata({ data: "json, name=publicKey" })
  publicKey?: string;

  @Metadata({ data: "json, name=universalTwoFactor" })
  universalTwoFactor?: UniversalTwoFactor;

  @Metadata({ data: "json, name=webAuthn" })
  webAuthn?: WebAuthn;
}
