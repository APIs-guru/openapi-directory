import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2LDiversityEquivalenceClass } from "./googleprivacydlpv2ldiversityequivalenceclass";


// GooglePrivacyDlpV2LDiversityHistogramBucket
/** 
 * Histogram of l-diversity equivalence class sensitive value frequencies.
**/
export class GooglePrivacyDlpV2LDiversityHistogramBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketSize" })
  bucketSize?: string;

  @Metadata({ data: "json, name=bucketValueCount" })
  bucketValueCount?: string;

  @Metadata({ data: "json, name=bucketValues", elemType: shared.GooglePrivacyDlpV2LDiversityEquivalenceClass })
  bucketValues?: GooglePrivacyDlpV2LDiversityEquivalenceClass[];

  @Metadata({ data: "json, name=sensitiveValueFrequencyLowerBound" })
  sensitiveValueFrequencyLowerBound?: string;

  @Metadata({ data: "json, name=sensitiveValueFrequencyUpperBound" })
  sensitiveValueFrequencyUpperBound?: string;
}
