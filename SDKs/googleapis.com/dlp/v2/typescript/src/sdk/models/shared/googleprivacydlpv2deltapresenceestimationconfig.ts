import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2StatisticalTable } from "./googleprivacydlpv2statisticaltable";
import { GooglePrivacyDlpV2QuasiId } from "./googleprivacydlpv2quasiid";



// GooglePrivacyDlpV2DeltaPresenceEstimationConfig
/** 
 * δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.
**/
export class GooglePrivacyDlpV2DeltaPresenceEstimationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auxiliaryTables", elemType: GooglePrivacyDlpV2StatisticalTable })
  auxiliaryTables?: GooglePrivacyDlpV2StatisticalTable[];

  @SpeakeasyMetadata({ data: "json, name=quasiIds", elemType: GooglePrivacyDlpV2QuasiId })
  quasiIds?: GooglePrivacyDlpV2QuasiId[];

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
