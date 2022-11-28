import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
import { GooglePrivacyDlpV2ValueFrequency } from "./googleprivacydlpv2valuefrequency";



// GooglePrivacyDlpV2LDiversityEquivalenceClass
/** 
 * The set of columns' values that share the same ldiversity value.
**/
export class GooglePrivacyDlpV2LDiversityEquivalenceClass extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=equivalenceClassSize" })
  equivalenceClassSize?: string;

  @SpeakeasyMetadata({ data: "json, name=numDistinctSensitiveValues" })
  numDistinctSensitiveValues?: string;

  @SpeakeasyMetadata({ data: "json, name=quasiIdsValues", elemType: GooglePrivacyDlpV2Value })
  quasiIdsValues?: GooglePrivacyDlpV2Value[];

  @SpeakeasyMetadata({ data: "json, name=topSensitiveValues", elemType: GooglePrivacyDlpV2ValueFrequency })
  topSensitiveValues?: GooglePrivacyDlpV2ValueFrequency[];
}
