import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues } from "./googleprivacydlpv2deltapresenceestimationquasiidvalues";


// GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket
/** 
 * A DeltaPresenceEstimationHistogramBucket message with the following values: min_probability: 0.1 max_probability: 0.2 frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when min_probability = max_probability = 1: then, every individual who shares this quasi-identifier combination is in the dataset.
**/
export class GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketSize" })
  bucketSize?: string;

  @Metadata({ data: "json, name=bucketValueCount" })
  bucketValueCount?: string;

  @Metadata({ data: "json, name=bucketValues", elemType: shared.GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues })
  bucketValues?: GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues[];

  @Metadata({ data: "json, name=maxProbability" })
  maxProbability?: number;

  @Metadata({ data: "json, name=minProbability" })
  minProbability?: number;
}
