import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2Action } from "./googleprivacydlpv2action";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
import { GooglePrivacyDlpV2StorageConfig } from "./googleprivacydlpv2storageconfig";


// GooglePrivacyDlpV2InspectJobConfig
/** 
 * Controls what and how to inspect for findings.
**/
export class GooglePrivacyDlpV2InspectJobConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.GooglePrivacyDlpV2Action })
  actions?: GooglePrivacyDlpV2Action[];

  @Metadata({ data: "json, name=inspectConfig" })
  inspectConfig?: GooglePrivacyDlpV2InspectConfig;

  @Metadata({ data: "json, name=inspectTemplateName" })
  inspectTemplateName?: string;

  @Metadata({ data: "json, name=storageConfig" })
  storageConfig?: GooglePrivacyDlpV2StorageConfig;
}
