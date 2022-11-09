import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2KAnonymityEquivalenceClass } from "./googleprivacydlpv2kanonymityequivalenceclass";


// GooglePrivacyDlpV2KAnonymityHistogramBucket
/** 
 * Histogram of k-anonymity equivalence classes.
**/
export class GooglePrivacyDlpV2KAnonymityHistogramBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketSize" })
  bucketSize?: string;

  @Metadata({ data: "json, name=bucketValueCount" })
  bucketValueCount?: string;

  @Metadata({ data: "json, name=bucketValues", elemType: shared.GooglePrivacyDlpV2KAnonymityEquivalenceClass })
  bucketValues?: GooglePrivacyDlpV2KAnonymityEquivalenceClass[];

  @Metadata({ data: "json, name=equivalenceClassSizeLowerBound" })
  equivalenceClassSizeLowerBound?: string;

  @Metadata({ data: "json, name=equivalenceClassSizeUpperBound" })
  equivalenceClassSizeUpperBound?: string;
}
