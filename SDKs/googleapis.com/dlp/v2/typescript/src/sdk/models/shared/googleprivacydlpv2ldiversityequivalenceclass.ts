import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
import { GooglePrivacyDlpV2ValueFrequency } from "./googleprivacydlpv2valuefrequency";


// GooglePrivacyDlpV2LDiversityEquivalenceClass
/** 
 * The set of columns' values that share the same ldiversity value.
**/
export class GooglePrivacyDlpV2LDiversityEquivalenceClass extends SpeakeasyBase {
  @Metadata({ data: "json, name=equivalenceClassSize" })
  equivalenceClassSize?: string;

  @Metadata({ data: "json, name=numDistinctSensitiveValues" })
  numDistinctSensitiveValues?: string;

  @Metadata({ data: "json, name=quasiIdsValues", elemType: shared.GooglePrivacyDlpV2Value })
  quasiIdsValues?: GooglePrivacyDlpV2Value[];

  @Metadata({ data: "json, name=topSensitiveValues", elemType: shared.GooglePrivacyDlpV2ValueFrequency })
  topSensitiveValues?: GooglePrivacyDlpV2ValueFrequency[];
}
