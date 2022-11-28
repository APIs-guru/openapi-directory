import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";



// GooglePrivacyDlpV2KAnonymityEquivalenceClass
/** 
 * The set of columns' values that share the same ldiversity value
**/
export class GooglePrivacyDlpV2KAnonymityEquivalenceClass extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=equivalenceClassSize" })
  equivalenceClassSize?: string;

  @SpeakeasyMetadata({ data: "json, name=quasiIdsValues", elemType: GooglePrivacyDlpV2Value })
  quasiIdsValues?: GooglePrivacyDlpV2Value[];
}
