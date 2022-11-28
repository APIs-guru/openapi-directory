import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=categoricalStatsResult" })
  categoricalStatsResult?: GooglePrivacyDlpV2CategoricalStatsResult;

  @SpeakeasyMetadata({ data: "json, name=deltaPresenceEstimationResult" })
  deltaPresenceEstimationResult?: GooglePrivacyDlpV2DeltaPresenceEstimationResult;

  @SpeakeasyMetadata({ data: "json, name=kAnonymityResult" })
  kAnonymityResult?: GooglePrivacyDlpV2KAnonymityResult;

  @SpeakeasyMetadata({ data: "json, name=kMapEstimationResult" })
  kMapEstimationResult?: GooglePrivacyDlpV2KMapEstimationResult;

  @SpeakeasyMetadata({ data: "json, name=lDiversityResult" })
  lDiversityResult?: GooglePrivacyDlpV2LDiversityResult;

  @SpeakeasyMetadata({ data: "json, name=numericalStatsResult" })
  numericalStatsResult?: GooglePrivacyDlpV2NumericalStatsResult;

  @SpeakeasyMetadata({ data: "json, name=requestedOptions" })
  requestedOptions?: GooglePrivacyDlpV2RequestedRiskAnalysisOptions;

  @SpeakeasyMetadata({ data: "json, name=requestedPrivacyMetric" })
  requestedPrivacyMetric?: GooglePrivacyDlpV2PrivacyMetric;

  @SpeakeasyMetadata({ data: "json, name=requestedSourceTable" })
  requestedSourceTable?: GooglePrivacyDlpV2BigQueryTable;
}
