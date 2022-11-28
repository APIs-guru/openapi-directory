import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request for CopyBackup.
**/
export declare class CopyBackupRequest extends SpeakeasyBase {
    backupId?: string;
    expireTime?: string;
    sourceBackup?: string;
}
