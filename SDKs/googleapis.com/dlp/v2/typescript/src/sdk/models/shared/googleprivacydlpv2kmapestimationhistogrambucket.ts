import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KMapEstimationQuasiIdValues } from "./googleprivacydlpv2kmapestimationquasiidvalues";



// GooglePrivacyDlpV2KMapEstimationHistogramBucket
/** 
 * A KMapEstimationHistogramBucket message with the following values: min_anonymity: 3 max_anonymity: 5 frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when min_anonymity = max_anonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records.
**/
export class GooglePrivacyDlpV2KMapEstimationHistogramBucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketSize" })
  bucketSize?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketValueCount" })
  bucketValueCount?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketValues", elemType: GooglePrivacyDlpV2KMapEstimationQuasiIdValues })
  bucketValues?: GooglePrivacyDlpV2KMapEstimationQuasiIdValues[];

  @SpeakeasyMetadata({ data: "json, name=maxAnonymity" })
  maxAnonymity?: string;

  @SpeakeasyMetadata({ data: "json, name=minAnonymity" })
  minAnonymity?: string;
}
