import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket } from "./googleprivacydlpv2deltapresenceestimationhistogrambucket";


// GooglePrivacyDlpV2DeltaPresenceEstimationResult
/** 
 * Result of the δ-presence computation. Note that these results are an estimation, not exact values.
**/
export class GooglePrivacyDlpV2DeltaPresenceEstimationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=deltaPresenceEstimationHistogram", elemType: shared.GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket })
  deltaPresenceEstimationHistogram?: GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket[];
}
