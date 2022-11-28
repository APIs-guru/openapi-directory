import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues } from "./googleprivacydlpv2deltapresenceestimationquasiidvalues";



// GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket
/** 
 * A DeltaPresenceEstimationHistogramBucket message with the following values: min_probability: 0.1 max_probability: 0.2 frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when min_probability = max_probability = 1: then, every individual who shares this quasi-identifier combination is in the dataset.
**/
export class GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketSize" })
  bucketSize?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketValueCount" })
  bucketValueCount?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketValues", elemType: GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues })
  bucketValues?: GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues[];

  @SpeakeasyMetadata({ data: "json, name=maxProbability" })
  maxProbability?: number;

  @SpeakeasyMetadata({ data: "json, name=minProbability" })
  minProbability?: number;
}
