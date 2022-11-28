import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Aes128Encryption
/** 
 * Configuration for AES-128 encryption.
**/
export class Aes128Encryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyUri" })
  keyUri?: string;
}
