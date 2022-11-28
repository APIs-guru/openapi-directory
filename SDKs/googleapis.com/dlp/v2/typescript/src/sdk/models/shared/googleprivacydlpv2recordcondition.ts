import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Expressions } from "./googleprivacydlpv2expressions";



// GooglePrivacyDlpV2RecordCondition
/** 
 * A condition for determining whether a transformation should be applied to a field.
**/
export class GooglePrivacyDlpV2RecordCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expressions" })
  expressions?: GooglePrivacyDlpV2Expressions;
}
