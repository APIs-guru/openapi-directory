import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Aes128Encryption
/** 
 * Configuration for AES-128 encryption.
**/
export class Aes128Encryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyUri" })
  keyUri?: string;
}
