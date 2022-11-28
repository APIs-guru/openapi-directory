import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DatabaseEncryptionStateEnum {
    Unknown = "UNKNOWN",
    Encrypted = "ENCRYPTED",
    Decrypted = "DECRYPTED"
}


// DatabaseEncryption
/** 
 * Configuration of etcd encryption.
**/
export class DatabaseEncryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyName" })
  keyName?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DatabaseEncryptionStateEnum;
}
