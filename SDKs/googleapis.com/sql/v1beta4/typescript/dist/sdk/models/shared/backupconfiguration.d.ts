import { SpeakeasyBase } from "../../../internal/utils";
import { BackupRetentionSettings } from "./backupretentionsettings";
/**
 * Database instance backup configuration.
**/
export declare class BackupConfiguration extends SpeakeasyBase {
    backupRetentionSettings?: BackupRetentionSettings;
    binaryLogEnabled?: boolean;
    enabled?: boolean;
    kind?: string;
    location?: string;
    pointInTimeRecoveryEnabled?: boolean;
    replicationLogArchivingEnabled?: boolean;
    startTime?: string;
    transactionLogRetentionDays?: number;
}
