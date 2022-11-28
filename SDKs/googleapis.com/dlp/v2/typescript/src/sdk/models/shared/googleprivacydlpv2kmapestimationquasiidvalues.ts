import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";



// GooglePrivacyDlpV2KMapEstimationQuasiIdValues
/** 
 * A tuple of values for the quasi-identifier columns.
**/
export class GooglePrivacyDlpV2KMapEstimationQuasiIdValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimatedAnonymity" })
  estimatedAnonymity?: string;

  @SpeakeasyMetadata({ data: "json, name=quasiIdsValues", elemType: GooglePrivacyDlpV2Value })
  quasiIdsValues?: GooglePrivacyDlpV2Value[];
}
