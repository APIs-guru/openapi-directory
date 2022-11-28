import { SpeakeasyBase } from "../../../internal/utils";
import { BackupInfo } from "./backupinfo";
export declare enum RestoreInfoSourceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Backup = "BACKUP"
}
/**
 * Information about the database restore.
**/
export declare class RestoreInfo extends SpeakeasyBase {
    backupInfo?: BackupInfo;
    sourceType?: RestoreInfoSourceTypeEnum;
}
