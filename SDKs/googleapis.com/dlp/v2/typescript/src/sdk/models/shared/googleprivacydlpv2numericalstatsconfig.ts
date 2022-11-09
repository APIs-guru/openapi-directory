import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";


// GooglePrivacyDlpV2NumericalStatsConfig
/** 
 * Compute numerical stats over an individual column, including min, max, and quantiles.
**/
export class GooglePrivacyDlpV2NumericalStatsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: GooglePrivacyDlpV2FieldId;
}
