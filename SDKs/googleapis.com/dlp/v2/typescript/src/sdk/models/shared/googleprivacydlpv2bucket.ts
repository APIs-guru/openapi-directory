import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";



// GooglePrivacyDlpV2Bucket
/** 
 * Bucket is represented as a range, along with replacement values.
**/
export class GooglePrivacyDlpV2Bucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: GooglePrivacyDlpV2Value;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: GooglePrivacyDlpV2Value;

  @SpeakeasyMetadata({ data: "json, name=replacementValue" })
  replacementValue?: GooglePrivacyDlpV2Value;
}
