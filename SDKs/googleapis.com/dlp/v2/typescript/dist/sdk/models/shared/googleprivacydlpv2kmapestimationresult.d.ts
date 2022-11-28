import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KMapEstimationHistogramBucket } from "./googleprivacydlpv2kmapestimationhistogrambucket";
/**
 * Result of the reidentifiability analysis. Note that these results are an estimation, not exact values.
**/
export declare class GooglePrivacyDlpV2KMapEstimationResult extends SpeakeasyBase {
    kMapEstimationHistogram?: GooglePrivacyDlpV2KMapEstimationHistogramBucket[];
}
