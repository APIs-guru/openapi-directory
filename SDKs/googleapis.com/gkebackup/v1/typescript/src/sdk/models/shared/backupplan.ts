import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackupConfig } from "./backupconfig";
import { Schedule } from "./schedule";
import { RetentionPolicy } from "./retentionpolicy";


// BackupPlan
/** 
 * Defines the configuration and scheduling for a "line" of Backups.
**/
export class BackupPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupConfig" })
  backupConfig?: BackupConfig;

  @Metadata({ data: "json, name=backupSchedule" })
  backupSchedule?: Schedule;

  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deactivated" })
  deactivated?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protectedPodCount" })
  protectedPodCount?: number;

  @Metadata({ data: "json, name=retentionPolicy" })
  retentionPolicy?: RetentionPolicy;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
