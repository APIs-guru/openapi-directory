import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";


// GooglePrivacyDlpV2ValueFrequency
/** 
 * A value of a field, including its frequency.
**/
export class GooglePrivacyDlpV2ValueFrequency extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=value" })
  value?: GooglePrivacyDlpV2Value;
}
