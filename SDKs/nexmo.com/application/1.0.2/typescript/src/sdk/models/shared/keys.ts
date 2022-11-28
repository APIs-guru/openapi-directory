import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Keys
/** 
 * The Nexmo product that you access with this application.
**/
export class Keys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: string;
}
