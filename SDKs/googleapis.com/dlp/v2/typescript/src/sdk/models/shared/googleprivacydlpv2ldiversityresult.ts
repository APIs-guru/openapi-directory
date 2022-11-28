import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2LDiversityHistogramBucket } from "./googleprivacydlpv2ldiversityhistogrambucket";



// GooglePrivacyDlpV2LDiversityResult
/** 
 * Result of the l-diversity computation.
**/
export class GooglePrivacyDlpV2LDiversityResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sensitiveValueFrequencyHistogramBuckets", elemType: GooglePrivacyDlpV2LDiversityHistogramBucket })
  sensitiveValueFrequencyHistogramBuckets?: GooglePrivacyDlpV2LDiversityHistogramBucket[];
}
