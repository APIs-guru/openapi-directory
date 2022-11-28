import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";



// GooglePrivacyDlpV2CategoricalStatsConfig
/** 
 * Compute numerical stats over an individual column, including number of distinct values and value count distribution.
**/
export class GooglePrivacyDlpV2CategoricalStatsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: GooglePrivacyDlpV2FieldId;
}
