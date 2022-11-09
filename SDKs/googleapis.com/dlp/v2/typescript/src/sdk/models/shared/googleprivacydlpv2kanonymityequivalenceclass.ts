import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";


// GooglePrivacyDlpV2KAnonymityEquivalenceClass
/** 
 * The set of columns' values that share the same ldiversity value
**/
export class GooglePrivacyDlpV2KAnonymityEquivalenceClass extends SpeakeasyBase {
  @Metadata({ data: "json, name=equivalenceClassSize" })
  equivalenceClassSize?: string;

  @Metadata({ data: "json, name=quasiIdsValues", elemType: shared.GooglePrivacyDlpV2Value })
  quasiIdsValues?: GooglePrivacyDlpV2Value[];
}
