import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BackupRetentionSettingsRetentionUnitEnum {
    RetentionUnitUnspecified = "RETENTION_UNIT_UNSPECIFIED",
    Count = "COUNT"
}
/**
 * We currently only support backup retention by specifying the number of backups we will retain.
**/
export declare class BackupRetentionSettings extends SpeakeasyBase {
    retainedBackups?: number;
    retentionUnit?: BackupRetentionSettingsRetentionUnitEnum;
}
