import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KAnonymityHistogramBucket } from "./googleprivacydlpv2kanonymityhistogrambucket";



// GooglePrivacyDlpV2KAnonymityResult
/** 
 * Result of the k-anonymity computation.
**/
export class GooglePrivacyDlpV2KAnonymityResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=equivalenceClassHistogramBuckets", elemType: GooglePrivacyDlpV2KAnonymityHistogramBucket })
  equivalenceClassHistogramBuckets?: GooglePrivacyDlpV2KAnonymityHistogramBucket[];
}
