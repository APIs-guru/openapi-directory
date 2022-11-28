import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BackupRetentionSettingsRetentionUnitEnum {
    RetentionUnitUnspecified = "RETENTION_UNIT_UNSPECIFIED",
    Count = "COUNT"
}


// BackupRetentionSettings
/** 
 * We currently only support backup retention by specifying the number of backups we will retain.
**/
export class BackupRetentionSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=retainedBackups" })
  retainedBackups?: number;

  @SpeakeasyMetadata({ data: "json, name=retentionUnit" })
  retentionUnit?: BackupRetentionSettingsRetentionUnitEnum;
}
