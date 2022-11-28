import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebAuthn
/** 
 * Security key information specific to the Web Authentication protocol.
**/
export class WebAuthn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rpId" })
  rpId?: string;
}
