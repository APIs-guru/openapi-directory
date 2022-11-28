import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KAnonymityHistogramBucket } from "./googleprivacydlpv2kanonymityhistogrambucket";
/**
 * Result of the k-anonymity computation.
**/
export declare class GooglePrivacyDlpV2KAnonymityResult extends SpeakeasyBase {
    equivalenceClassHistogramBuckets?: GooglePrivacyDlpV2KAnonymityHistogramBucket[];
}
