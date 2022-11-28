import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2LDiversityHistogramBucket } from "./googleprivacydlpv2ldiversityhistogrambucket";
/**
 * Result of the l-diversity computation.
**/
export declare class GooglePrivacyDlpV2LDiversityResult extends SpeakeasyBase {
    sensitiveValueFrequencyHistogramBuckets?: GooglePrivacyDlpV2LDiversityHistogramBucket[];
}
