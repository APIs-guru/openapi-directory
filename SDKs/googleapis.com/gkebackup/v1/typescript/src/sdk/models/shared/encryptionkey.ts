import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EncryptionKey
/** 
 * Defined a customer managed encryption key that will be used to encrypt Backup artifacts.
**/
export class EncryptionKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcpKmsEncryptionKey" })
  gcpKmsEncryptionKey?: string;
}
