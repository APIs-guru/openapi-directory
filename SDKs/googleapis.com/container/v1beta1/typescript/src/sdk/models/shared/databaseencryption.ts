import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DatabaseEncryptionStateEnum {
    Unknown = "UNKNOWN"
,    Encrypted = "ENCRYPTED"
,    Decrypted = "DECRYPTED"
}


// DatabaseEncryption
/** 
 * Configuration of etcd encryption.
**/
export class DatabaseEncryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyName" })
  keyName?: string;

  @Metadata({ data: "json, name=state" })
  state?: DatabaseEncryptionStateEnum;
}
