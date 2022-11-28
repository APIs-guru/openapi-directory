import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
import { GooglePrivacyDlpV2ValueFrequency } from "./googleprivacydlpv2valuefrequency";
/**
 * The set of columns' values that share the same ldiversity value.
**/
export declare class GooglePrivacyDlpV2LDiversityEquivalenceClass extends SpeakeasyBase {
    equivalenceClassSize?: string;
    numDistinctSensitiveValues?: string;
    quasiIdsValues?: GooglePrivacyDlpV2Value[];
    topSensitiveValues?: GooglePrivacyDlpV2ValueFrequency[];
}
