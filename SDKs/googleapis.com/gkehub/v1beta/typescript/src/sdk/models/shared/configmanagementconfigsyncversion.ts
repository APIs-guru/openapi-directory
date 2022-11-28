import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigManagementConfigSyncVersion
/** 
 * Specific versioning information pertaining to ConfigSync's Pods
**/
export class ConfigManagementConfigSyncVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admissionWebhook" })
  admissionWebhook?: string;

  @SpeakeasyMetadata({ data: "json, name=gitSync" })
  gitSync?: string;

  @SpeakeasyMetadata({ data: "json, name=importer" })
  importer?: string;

  @SpeakeasyMetadata({ data: "json, name=monitor" })
  monitor?: string;

  @SpeakeasyMetadata({ data: "json, name=reconcilerManager" })
  reconcilerManager?: string;

  @SpeakeasyMetadata({ data: "json, name=rootReconciler" })
  rootReconciler?: string;

  @SpeakeasyMetadata({ data: "json, name=syncer" })
  syncer?: string;
}
