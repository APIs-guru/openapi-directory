import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Action } from "./googleprivacydlpv2action";
import { GooglePrivacyDlpV2PrivacyMetric } from "./googleprivacydlpv2privacymetric";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
/**
 * Configuration for a risk analysis job. See https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
**/
export declare class GooglePrivacyDlpV2RiskAnalysisJobConfig extends SpeakeasyBase {
    actions?: GooglePrivacyDlpV2Action[];
    privacyMetric?: GooglePrivacyDlpV2PrivacyMetric;
    sourceTable?: GooglePrivacyDlpV2BigQueryTable;
}
