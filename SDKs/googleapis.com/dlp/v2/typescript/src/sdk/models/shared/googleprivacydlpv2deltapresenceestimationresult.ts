import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket } from "./googleprivacydlpv2deltapresenceestimationhistogrambucket";



// GooglePrivacyDlpV2DeltaPresenceEstimationResult
/** 
 * Result of the δ-presence computation. Note that these results are an estimation, not exact values.
**/
export class GooglePrivacyDlpV2DeltaPresenceEstimationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deltaPresenceEstimationHistogram", elemType: GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket })
  deltaPresenceEstimationHistogram?: GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket[];
}
