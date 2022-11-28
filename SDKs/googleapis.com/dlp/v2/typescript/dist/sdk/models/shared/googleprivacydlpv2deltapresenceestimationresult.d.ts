import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket } from "./googleprivacydlpv2deltapresenceestimationhistogrambucket";
/**
 * Result of the δ-presence computation. Note that these results are an estimation, not exact values.
**/
export declare class GooglePrivacyDlpV2DeltaPresenceEstimationResult extends SpeakeasyBase {
    deltaPresenceEstimationHistogram?: GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket[];
}
