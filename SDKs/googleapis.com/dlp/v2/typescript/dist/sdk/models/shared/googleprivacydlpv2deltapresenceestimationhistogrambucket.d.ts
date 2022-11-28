import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues } from "./googleprivacydlpv2deltapresenceestimationquasiidvalues";
/**
 * A DeltaPresenceEstimationHistogramBucket message with the following values: min_probability: 0.1 max_probability: 0.2 frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when min_probability = max_probability = 1: then, every individual who shares this quasi-identifier combination is in the dataset.
**/
export declare class GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket extends SpeakeasyBase {
    bucketSize?: string;
    bucketValueCount?: string;
    bucketValues?: GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues[];
    maxProbability?: number;
    minProbability?: number;
}
