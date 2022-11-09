import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";


// GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues
/** 
 * A tuple of values for the quasi-identifier columns.
**/
export class GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=estimatedProbability" })
  estimatedProbability?: number;

  @Metadata({ data: "json, name=quasiIdsValues", elemType: shared.GooglePrivacyDlpV2Value })
  quasiIdsValues?: GooglePrivacyDlpV2Value[];
}
