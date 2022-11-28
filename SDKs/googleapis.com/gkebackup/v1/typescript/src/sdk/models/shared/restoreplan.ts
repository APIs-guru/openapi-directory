import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RestoreConfig } from "./restoreconfig";



// RestorePlan
/** 
 * The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 11
**/
export class RestorePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupPlan" })
  backupPlan?: string;

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=restoreConfig" })
  restoreConfig?: RestoreConfig;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// RestorePlanInput
/** 
 * The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 11
**/
export class RestorePlanInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupPlan" })
  backupPlan?: string;

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=restoreConfig" })
  restoreConfig?: RestoreConfig;
}
