import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CategoricalStatsResult } from "./googleprivacydlpv2categoricalstatsresult";
import { GooglePrivacyDlpV2DeltaPresenceEstimationResult } from "./googleprivacydlpv2deltapresenceestimationresult";
import { GooglePrivacyDlpV2KAnonymityResult } from "./googleprivacydlpv2kanonymityresult";
import { GooglePrivacyDlpV2KMapEstimationResult } from "./googleprivacydlpv2kmapestimationresult";
import { GooglePrivacyDlpV2LDiversityResult } from "./googleprivacydlpv2ldiversityresult";
import { GooglePrivacyDlpV2NumericalStatsResult } from "./googleprivacydlpv2numericalstatsresult";
import { GooglePrivacyDlpV2RequestedRiskAnalysisOptions } from "./googleprivacydlpv2requestedriskanalysisoptions";
import { GooglePrivacyDlpV2PrivacyMetric } from "./googleprivacydlpv2privacymetric";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
/**
 * Result of a risk analysis operation request.
**/
export declare class GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails extends SpeakeasyBase {
    categoricalStatsResult?: GooglePrivacyDlpV2CategoricalStatsResult;
    deltaPresenceEstimationResult?: GooglePrivacyDlpV2DeltaPresenceEstimationResult;
    kAnonymityResult?: GooglePrivacyDlpV2KAnonymityResult;
    kMapEstimationResult?: GooglePrivacyDlpV2KMapEstimationResult;
    lDiversityResult?: GooglePrivacyDlpV2LDiversityResult;
    numericalStatsResult?: GooglePrivacyDlpV2NumericalStatsResult;
    requestedOptions?: GooglePrivacyDlpV2RequestedRiskAnalysisOptions;
    requestedPrivacyMetric?: GooglePrivacyDlpV2PrivacyMetric;
    requestedSourceTable?: GooglePrivacyDlpV2BigQueryTable;
}
