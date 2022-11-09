import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2RiskAnalysisJobConfig } from "./googleprivacydlpv2riskanalysisjobconfig";


// GooglePrivacyDlpV2RequestedRiskAnalysisOptions
/** 
 * Risk analysis options.
**/
export class GooglePrivacyDlpV2RequestedRiskAnalysisOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobConfig" })
  jobConfig?: GooglePrivacyDlpV2RiskAnalysisJobConfig;
}
