import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";



// GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues
/** 
 * A tuple of values for the quasi-identifier columns.
**/
export class GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimatedProbability" })
  estimatedProbability?: number;

  @SpeakeasyMetadata({ data: "json, name=quasiIdsValues", elemType: GooglePrivacyDlpV2Value })
  quasiIdsValues?: GooglePrivacyDlpV2Value[];
}
