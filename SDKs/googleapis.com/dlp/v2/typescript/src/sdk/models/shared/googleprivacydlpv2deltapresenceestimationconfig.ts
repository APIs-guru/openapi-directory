import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2StatisticalTable } from "./googleprivacydlpv2statisticaltable";
import { GooglePrivacyDlpV2QuasiId } from "./googleprivacydlpv2quasiid";


// GooglePrivacyDlpV2DeltaPresenceEstimationConfig
/** 
 * δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.
**/
export class GooglePrivacyDlpV2DeltaPresenceEstimationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=auxiliaryTables", elemType: shared.GooglePrivacyDlpV2StatisticalTable })
  auxiliaryTables?: GooglePrivacyDlpV2StatisticalTable[];

  @Metadata({ data: "json, name=quasiIds", elemType: shared.GooglePrivacyDlpV2QuasiId })
  quasiIds?: GooglePrivacyDlpV2QuasiId[];

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
