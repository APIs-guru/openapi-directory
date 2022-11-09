import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";


// GooglePrivacyDlpV2CategoricalStatsConfig
/** 
 * Compute numerical stats over an individual column, including number of distinct values and value count distribution.
**/
export class GooglePrivacyDlpV2CategoricalStatsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: GooglePrivacyDlpV2FieldId;
}
