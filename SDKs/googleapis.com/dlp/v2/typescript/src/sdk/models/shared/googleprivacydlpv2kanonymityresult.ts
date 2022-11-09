import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2KAnonymityHistogramBucket } from "./googleprivacydlpv2kanonymityhistogrambucket";


// GooglePrivacyDlpV2KAnonymityResult
/** 
 * Result of the k-anonymity computation.
**/
export class GooglePrivacyDlpV2KAnonymityResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=equivalenceClassHistogramBuckets", elemType: shared.GooglePrivacyDlpV2KAnonymityHistogramBucket })
  equivalenceClassHistogramBuckets?: GooglePrivacyDlpV2KAnonymityHistogramBucket[];
}
