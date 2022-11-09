import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RestoreConfig } from "./restoreconfig";


// RestorePlan
/** 
 * The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 11
**/
export class RestorePlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupPlan" })
  backupPlan?: string;

  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=restoreConfig" })
  restoreConfig?: RestoreConfig;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
