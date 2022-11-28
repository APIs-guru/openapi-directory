import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2RiskAnalysisJobConfig } from "./googleprivacydlpv2riskanalysisjobconfig";



// GooglePrivacyDlpV2RequestedRiskAnalysisOptions
/** 
 * Risk analysis options.
**/
export class GooglePrivacyDlpV2RequestedRiskAnalysisOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobConfig" })
  jobConfig?: GooglePrivacyDlpV2RiskAnalysisJobConfig;
}
