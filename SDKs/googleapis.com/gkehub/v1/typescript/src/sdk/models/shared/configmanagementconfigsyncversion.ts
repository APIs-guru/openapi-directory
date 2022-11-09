import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigManagementConfigSyncVersion
/** 
 * Specific versioning information pertaining to ConfigSync's Pods
**/
export class ConfigManagementConfigSyncVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=admissionWebhook" })
  admissionWebhook?: string;

  @Metadata({ data: "json, name=gitSync" })
  gitSync?: string;

  @Metadata({ data: "json, name=importer" })
  importer?: string;

  @Metadata({ data: "json, name=monitor" })
  monitor?: string;

  @Metadata({ data: "json, name=reconcilerManager" })
  reconcilerManager?: string;

  @Metadata({ data: "json, name=rootReconciler" })
  rootReconciler?: string;

  @Metadata({ data: "json, name=syncer" })
  syncer?: string;
}
