import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Schedule } from "./googleprivacydlpv2schedule";



// GooglePrivacyDlpV2Trigger
/** 
 * What event needs to occur for a new job to be started.
**/
export class GooglePrivacyDlpV2Trigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=manual" })
  manual?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: GooglePrivacyDlpV2Schedule;
}
