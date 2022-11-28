import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
import { GooglePrivacyDlpV2Proximity } from "./googleprivacydlpv2proximity";



// GooglePrivacyDlpV2ExcludeByHotword
/** 
 * The rule to exclude findings based on a hotword. For record inspection of tables, column names are considered hotwords. An example of this is to exclude a finding if a BigQuery column matches a specific pattern.
**/
export class GooglePrivacyDlpV2ExcludeByHotword extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hotwordRegex" })
  hotwordRegex?: GooglePrivacyDlpV2Regex;

  @SpeakeasyMetadata({ data: "json, name=proximity" })
  proximity?: GooglePrivacyDlpV2Proximity;
}
