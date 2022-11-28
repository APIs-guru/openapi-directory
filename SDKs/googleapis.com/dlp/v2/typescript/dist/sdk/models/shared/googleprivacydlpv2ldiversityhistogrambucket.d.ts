import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2LDiversityEquivalenceClass } from "./googleprivacydlpv2ldiversityequivalenceclass";
/**
 * Histogram of l-diversity equivalence class sensitive value frequencies.
**/
export declare class GooglePrivacyDlpV2LDiversityHistogramBucket extends SpeakeasyBase {
    bucketSize?: string;
    bucketValueCount?: string;
    bucketValues?: GooglePrivacyDlpV2LDiversityEquivalenceClass[];
    sensitiveValueFrequencyLowerBound?: string;
    sensitiveValueFrequencyUpperBound?: string;
}
