import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2LDiversityHistogramBucket } from "./googleprivacydlpv2ldiversityhistogrambucket";


// GooglePrivacyDlpV2LDiversityResult
/** 
 * Result of the l-diversity computation.
**/
export class GooglePrivacyDlpV2LDiversityResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=sensitiveValueFrequencyHistogramBuckets", elemType: shared.GooglePrivacyDlpV2LDiversityHistogramBucket })
  sensitiveValueFrequencyHistogramBuckets?: GooglePrivacyDlpV2LDiversityHistogramBucket[];
}
