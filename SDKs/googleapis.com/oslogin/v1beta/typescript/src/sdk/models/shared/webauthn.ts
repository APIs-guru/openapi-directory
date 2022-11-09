import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebAuthn
/** 
 * Security key information specific to the Web Authentication protocol.
**/
export class WebAuthn extends SpeakeasyBase {
  @Metadata({ data: "json, name=rpId" })
  rpId?: string;
}
