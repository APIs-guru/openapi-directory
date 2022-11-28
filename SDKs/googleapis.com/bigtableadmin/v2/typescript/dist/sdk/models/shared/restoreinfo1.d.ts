import { SpeakeasyBase } from "../../../internal/utils";
import { BackupInfo } from "./backupinfo";
import { RestoreInfoSourceTypeEnum } from "./restoreinfo";
/**
 * Information about a table restore.
**/
export declare class RestoreInfo1 extends SpeakeasyBase {
    backupInfo?: BackupInfo;
    sourceType?: RestoreInfoSourceTypeEnum;
}
