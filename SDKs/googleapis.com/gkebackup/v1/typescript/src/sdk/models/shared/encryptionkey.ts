import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EncryptionKey
/** 
 * Defined a customer managed encryption key that will be used to encrypt Backup artifacts.
**/
export class EncryptionKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcpKmsEncryptionKey" })
  gcpKmsEncryptionKey?: string;
}
