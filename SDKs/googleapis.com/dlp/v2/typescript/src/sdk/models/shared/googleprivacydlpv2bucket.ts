import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";


// GooglePrivacyDlpV2Bucket
/** 
 * Bucket is represented as a range, along with replacement values.
**/
export class GooglePrivacyDlpV2Bucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=max" })
  max?: GooglePrivacyDlpV2Value;

  @Metadata({ data: "json, name=min" })
  min?: GooglePrivacyDlpV2Value;

  @Metadata({ data: "json, name=replacementValue" })
  replacementValue?: GooglePrivacyDlpV2Value;
}
