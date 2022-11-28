import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Action } from "./googleprivacydlpv2action";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
import { GooglePrivacyDlpV2StorageConfig } from "./googleprivacydlpv2storageconfig";



// GooglePrivacyDlpV2InspectJobConfig
/** 
 * Controls what and how to inspect for findings.
**/
export class GooglePrivacyDlpV2InspectJobConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: GooglePrivacyDlpV2Action })
  actions?: GooglePrivacyDlpV2Action[];

  @SpeakeasyMetadata({ data: "json, name=inspectConfig" })
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;

  @SpeakeasyMetadata({ data: "json, name=inspectTemplateName" })
  inspectTemplateName?: string;

  @SpeakeasyMetadata({ data: "json, name=storageConfig" })
  storageConfig?: GooglePrivacyDlpV2StorageConfig;
}
