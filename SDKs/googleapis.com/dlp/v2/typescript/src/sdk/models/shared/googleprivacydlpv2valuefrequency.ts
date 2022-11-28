import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";



// GooglePrivacyDlpV2ValueFrequency
/** 
 * A value of a field, including its frequency.
**/
export class GooglePrivacyDlpV2ValueFrequency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: GooglePrivacyDlpV2Value;
}
