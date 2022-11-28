import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";



// GooglePrivacyDlpV2Row
/** 
 * Values of the row.
**/
export class GooglePrivacyDlpV2Row extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values", elemType: GooglePrivacyDlpV2Value })
  values?: GooglePrivacyDlpV2Value[];
}
