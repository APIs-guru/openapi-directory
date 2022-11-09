import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";


// GooglePrivacyDlpV2NumericalStatsResult
/** 
 * Result of the numerical stats computation.
**/
export class GooglePrivacyDlpV2NumericalStatsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxValue" })
  maxValue?: GooglePrivacyDlpV2Value;

  @Metadata({ data: "json, name=minValue" })
  minValue?: GooglePrivacyDlpV2Value;

  @Metadata({ data: "json, name=quantileValues", elemType: shared.GooglePrivacyDlpV2Value })
  quantileValues?: GooglePrivacyDlpV2Value[];
}
