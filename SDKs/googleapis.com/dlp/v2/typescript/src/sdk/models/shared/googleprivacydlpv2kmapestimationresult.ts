import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KMapEstimationHistogramBucket } from "./googleprivacydlpv2kmapestimationhistogrambucket";



// GooglePrivacyDlpV2KMapEstimationResult
/** 
 * Result of the reidentifiability analysis. Note that these results are an estimation, not exact values.
**/
export class GooglePrivacyDlpV2KMapEstimationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kMapEstimationHistogram", elemType: GooglePrivacyDlpV2KMapEstimationHistogramBucket })
  kMapEstimationHistogram?: GooglePrivacyDlpV2KMapEstimationHistogramBucket[];
}
