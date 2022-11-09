import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2Schedule } from "./googleprivacydlpv2schedule";


// GooglePrivacyDlpV2Trigger
/** 
 * What event needs to occur for a new job to be started.
**/
export class GooglePrivacyDlpV2Trigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=manual" })
  manual?: Map<string, any>;

  @Metadata({ data: "json, name=schedule" })
  schedule?: GooglePrivacyDlpV2Schedule;
}
