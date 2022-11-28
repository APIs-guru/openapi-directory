import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
/**
 * A tuple of values for the quasi-identifier columns.
**/
export declare class GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues extends SpeakeasyBase {
    estimatedProbability?: number;
    quasiIdsValues?: GooglePrivacyDlpV2Value[];
}
