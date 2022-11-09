import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2KMapEstimationHistogramBucket } from "./googleprivacydlpv2kmapestimationhistogrambucket";


// GooglePrivacyDlpV2KMapEstimationResult
/** 
 * Result of the reidentifiability analysis. Note that these results are an estimation, not exact values.
**/
export class GooglePrivacyDlpV2KMapEstimationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=kMapEstimationHistogram", elemType: shared.GooglePrivacyDlpV2KMapEstimationHistogramBucket })
  kMapEstimationHistogram?: GooglePrivacyDlpV2KMapEstimationHistogramBucket[];
}
