import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2LDiversityEquivalenceClass } from "./googleprivacydlpv2ldiversityequivalenceclass";



// GooglePrivacyDlpV2LDiversityHistogramBucket
/** 
 * Histogram of l-diversity equivalence class sensitive value frequencies.
**/
export class GooglePrivacyDlpV2LDiversityHistogramBucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketSize" })
  bucketSize?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketValueCount" })
  bucketValueCount?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketValues", elemType: GooglePrivacyDlpV2LDiversityEquivalenceClass })
  bucketValues?: GooglePrivacyDlpV2LDiversityEquivalenceClass[];

  @SpeakeasyMetadata({ data: "json, name=sensitiveValueFrequencyLowerBound" })
  sensitiveValueFrequencyLowerBound?: string;

  @SpeakeasyMetadata({ data: "json, name=sensitiveValueFrequencyUpperBound" })
  sensitiveValueFrequencyUpperBound?: string;
}
