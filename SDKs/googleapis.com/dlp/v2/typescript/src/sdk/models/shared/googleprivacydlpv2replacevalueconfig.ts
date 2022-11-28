import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";



// GooglePrivacyDlpV2ReplaceValueConfig
/** 
 * Replace each input value with a given `Value`.
**/
export class GooglePrivacyDlpV2ReplaceValueConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newValue" })
  newValue?: GooglePrivacyDlpV2Value;
}
