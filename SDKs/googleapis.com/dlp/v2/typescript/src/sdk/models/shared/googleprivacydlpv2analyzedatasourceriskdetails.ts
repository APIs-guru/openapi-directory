import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2CategoricalStatsResult } from "./googleprivacydlpv2categoricalstatsresult";
import { GooglePrivacyDlpV2DeltaPresenceEstimationResult } from "./googleprivacydlpv2deltapresenceestimationresult";
import { GooglePrivacyDlpV2KAnonymityResult } from "./googleprivacydlpv2kanonymityresult";
import { GooglePrivacyDlpV2KMapEstimationResult } from "./googleprivacydlpv2kmapestimationresult";
import { GooglePrivacyDlpV2LDiversityResult } from "./googleprivacydlpv2ldiversityresult";
import { GooglePrivacyDlpV2NumericalStatsResult } from "./googleprivacydlpv2numericalstatsresult";
import { GooglePrivacyDlpV2RequestedRiskAnalysisOptions } from "./googleprivacydlpv2requestedriskanalysisoptions";
import { GooglePrivacyDlpV2PrivacyMetric } from "./googleprivacydlpv2privacymetric";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";


// GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails
/** 
 * Result of a risk analysis operation request.
**/
export class GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoricalStatsResult" })
  categoricalStatsResult?: GooglePrivacyDlpV2CategoricalStatsResult;

  @Metadata({ data: "json, name=deltaPresenceEstimationResult" })
  deltaPresenceEstimationResult?: GooglePrivacyDlpV2DeltaPresenceEstimationResult;

  @Metadata({ data: "json, name=kAnonymityResult" })
  kAnonymityResult?: GooglePrivacyDlpV2KAnonymityResult;

  @Metadata({ data: "json, name=kMapEstimationResult" })
  kMapEstimationResult?: GooglePrivacyDlpV2KMapEstimationResult;

  @Metadata({ data: "json, name=lDiversityResult" })
  lDiversityResult?: GooglePrivacyDlpV2LDiversityResult;

  @Metadata({ data: "json, name=numericalStatsResult" })
  numericalStatsResult?: GooglePrivacyDlpV2NumericalStatsResult;

  @Metadata({ data: "json, name=requestedOptions" })
  requestedOptions?: GooglePrivacyDlpV2RequestedRiskAnalysisOptions;

  @Metadata({ data: "json, name=requestedPrivacyMetric" })
  requestedPrivacyMetric?: GooglePrivacyDlpV2PrivacyMetric;

  @Metadata({ data: "json, name=requestedSourceTable" })
  requestedSourceTable?: GooglePrivacyDlpV2BigQueryTable;
}
