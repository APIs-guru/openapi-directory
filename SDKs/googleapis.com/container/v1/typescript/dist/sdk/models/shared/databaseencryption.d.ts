import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DatabaseEncryptionStateEnum {
    Unknown = "UNKNOWN",
    Encrypted = "ENCRYPTED",
    Decrypted = "DECRYPTED"
}
/**
 * Configuration of etcd encryption.
**/
export declare class DatabaseEncryption extends SpeakeasyBase {
    keyName?: string;
    state?: DatabaseEncryptionStateEnum;
}
