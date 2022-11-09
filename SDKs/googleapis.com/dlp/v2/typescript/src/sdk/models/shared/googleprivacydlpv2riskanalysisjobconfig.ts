import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2Action } from "./googleprivacydlpv2action";
import { GooglePrivacyDlpV2PrivacyMetric } from "./googleprivacydlpv2privacymetric";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";


// GooglePrivacyDlpV2RiskAnalysisJobConfig
/** 
 * Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
**/
export class GooglePrivacyDlpV2RiskAnalysisJobConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions", elemType: shared.GooglePrivacyDlpV2Action })
  actions?: GooglePrivacyDlpV2Action[];

  @Metadata({ data: "json, name=privacyMetric" })
  privacyMetric?: GooglePrivacyDlpV2PrivacyMetric;

  @Metadata({ data: "json, name=sourceTable" })
  sourceTable?: GooglePrivacyDlpV2BigQueryTable;
}
