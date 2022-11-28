import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionInfoInput } from "./encryptioninfo";
import { EncryptionInfo } from "./encryptioninfo";
export declare enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY"
}
/**
 * A backup of a Cloud Bigtable table.
**/
export declare class BackupInput extends SpeakeasyBase {
    encryptionInfo?: EncryptionInfoInput;
    expireTime?: string;
    name?: string;
    sourceTable?: string;
}
/**
 * A backup of a Cloud Bigtable table.
**/
export declare class Backup extends SpeakeasyBase {
    encryptionInfo?: EncryptionInfo;
    endTime?: string;
    expireTime?: string;
    name?: string;
    sizeBytes?: string;
    sourceBackup?: string;
    sourceTable?: string;
    startTime?: string;
    state?: BackupStateEnum;
}
