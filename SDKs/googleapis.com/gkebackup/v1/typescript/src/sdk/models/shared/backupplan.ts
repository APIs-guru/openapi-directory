import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackupConfig } from "./backupconfig";
import { Schedule } from "./schedule";
import { RetentionPolicy } from "./retentionpolicy";



// BackupPlanInput
/** 
 * Defines the configuration and scheduling for a "line" of Backups.
**/
export class BackupPlanInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupConfig" })
  backupConfig?: BackupConfig;

  @SpeakeasyMetadata({ data: "json, name=backupSchedule" })
  backupSchedule?: Schedule;

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=deactivated" })
  deactivated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=retentionPolicy" })
  retentionPolicy?: RetentionPolicy;
}


// BackupPlan
/** 
 * Defines the configuration and scheduling for a "line" of Backups.
**/
export class BackupPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupConfig" })
  backupConfig?: BackupConfig;

  @SpeakeasyMetadata({ data: "json, name=backupSchedule" })
  backupSchedule?: Schedule;

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deactivated" })
  deactivated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protectedPodCount" })
  protectedPodCount?: number;

  @SpeakeasyMetadata({ data: "json, name=retentionPolicy" })
  retentionPolicy?: RetentionPolicy;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
