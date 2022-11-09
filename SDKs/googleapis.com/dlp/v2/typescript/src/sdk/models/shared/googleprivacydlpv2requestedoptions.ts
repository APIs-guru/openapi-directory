import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2InspectJobConfig } from "./googleprivacydlpv2inspectjobconfig";
import { GooglePrivacyDlpV2InspectTemplate } from "./googleprivacydlpv2inspecttemplate";


// GooglePrivacyDlpV2RequestedOptions
/** 
 * Snapshot of the inspection configuration.
**/
export class GooglePrivacyDlpV2RequestedOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobConfig" })
  jobConfig?: GooglePrivacyDlpV2InspectJobConfig;

  @Metadata({ data: "json, name=snapshotInspectTemplate" })
  snapshotInspectTemplate?: GooglePrivacyDlpV2InspectTemplate;
}
