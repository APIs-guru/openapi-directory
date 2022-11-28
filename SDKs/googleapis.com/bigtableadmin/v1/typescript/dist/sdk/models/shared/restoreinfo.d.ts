import { SpeakeasyBase } from "../../../internal/utils";
import { BackupInfo } from "./backupinfo";
export declare enum RestoreInfoSourceTypeEnum {
    RestoreSourceTypeUnspecified = "RESTORE_SOURCE_TYPE_UNSPECIFIED",
    Backup = "BACKUP"
}
/**
 * Information about a table restore.
**/
export declare class RestoreInfo extends SpeakeasyBase {
    backupInfo?: BackupInfo;
    sourceType?: RestoreInfoSourceTypeEnum;
}
