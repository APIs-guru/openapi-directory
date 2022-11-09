import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";


// GooglePrivacyDlpV2Row
/** 
 * Values of the row.
**/
export class GooglePrivacyDlpV2Row extends SpeakeasyBase {
  @Metadata({ data: "json, name=values", elemType: shared.GooglePrivacyDlpV2Value })
  values?: GooglePrivacyDlpV2Value[];
}
