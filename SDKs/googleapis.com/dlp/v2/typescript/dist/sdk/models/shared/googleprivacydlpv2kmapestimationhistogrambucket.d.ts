import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KMapEstimationQuasiIdValues } from "./googleprivacydlpv2kmapestimationquasiidvalues";
/**
 * A KMapEstimationHistogramBucket message with the following values: min_anonymity: 3 max_anonymity: 5 frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when min_anonymity = max_anonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records.
**/
export declare class GooglePrivacyDlpV2KMapEstimationHistogramBucket extends SpeakeasyBase {
    bucketSize?: string;
    bucketValueCount?: string;
    bucketValues?: GooglePrivacyDlpV2KMapEstimationQuasiIdValues[];
    maxAnonymity?: string;
    minAnonymity?: string;
}
