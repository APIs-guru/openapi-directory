import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StatisticalTable } from "./googleprivacydlpv2statisticaltable";
import { GooglePrivacyDlpV2QuasiId } from "./googleprivacydlpv2quasiid";
/**
 * δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.
**/
export declare class GooglePrivacyDlpV2DeltaPresenceEstimationConfig extends SpeakeasyBase {
    auxiliaryTables?: GooglePrivacyDlpV2StatisticalTable[];
    quasiIds?: GooglePrivacyDlpV2QuasiId[];
    regionCode?: string;
}
