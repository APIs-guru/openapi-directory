import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KAnonymityEquivalenceClass } from "./googleprivacydlpv2kanonymityequivalenceclass";



// GooglePrivacyDlpV2KAnonymityHistogramBucket
/** 
 * Histogram of k-anonymity equivalence classes.
**/
export class GooglePrivacyDlpV2KAnonymityHistogramBucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketSize" })
  bucketSize?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketValueCount" })
  bucketValueCount?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketValues", elemType: GooglePrivacyDlpV2KAnonymityEquivalenceClass })
  bucketValues?: GooglePrivacyDlpV2KAnonymityEquivalenceClass[];

  @SpeakeasyMetadata({ data: "json, name=equivalenceClassSizeLowerBound" })
  equivalenceClassSizeLowerBound?: string;

  @SpeakeasyMetadata({ data: "json, name=equivalenceClassSizeUpperBound" })
  equivalenceClassSizeUpperBound?: string;
}
