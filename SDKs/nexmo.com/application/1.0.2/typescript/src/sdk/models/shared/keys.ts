import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Keys
/** 
 * The Nexmo product that you access with this application.
**/
export class Keys extends SpeakeasyBase {
  @Metadata({ data: "json, name=public_key" })
  publicKey?: string;
}
