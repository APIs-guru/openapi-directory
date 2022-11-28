import { SpeakeasyBase } from "../../../internal/utils";
import { CopyBackupEncryptionConfig } from "./copybackupencryptionconfig";
/**
 * The request for CopyBackup.
**/
export declare class CopyBackupRequest extends SpeakeasyBase {
    backupId?: string;
    encryptionConfig?: CopyBackupEncryptionConfig;
    expireTime?: string;
    sourceBackup?: string;
}
