import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";


// GooglePrivacyDlpV2ReplaceValueConfig
/** 
 * Replace each input value with a given `Value`.
**/
export class GooglePrivacyDlpV2ReplaceValueConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=newValue" })
  newValue?: GooglePrivacyDlpV2Value;
}
