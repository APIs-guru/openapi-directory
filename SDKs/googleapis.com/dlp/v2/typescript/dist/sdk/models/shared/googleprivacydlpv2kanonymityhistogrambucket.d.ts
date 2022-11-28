import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KAnonymityEquivalenceClass } from "./googleprivacydlpv2kanonymityequivalenceclass";
/**
 * Histogram of k-anonymity equivalence classes.
**/
export declare class GooglePrivacyDlpV2KAnonymityHistogramBucket extends SpeakeasyBase {
    bucketSize?: string;
    bucketValueCount?: string;
    bucketValues?: GooglePrivacyDlpV2KAnonymityEquivalenceClass[];
    equivalenceClassSizeLowerBound?: string;
    equivalenceClassSizeUpperBound?: string;
}
