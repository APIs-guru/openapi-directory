import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
/**
 * Result of the numerical stats computation.
**/
export declare class GooglePrivacyDlpV2NumericalStatsResult extends SpeakeasyBase {
    maxValue?: GooglePrivacyDlpV2Value;
    minValue?: GooglePrivacyDlpV2Value;
    quantileValues?: GooglePrivacyDlpV2Value[];
}
