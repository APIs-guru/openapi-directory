import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CategoricalStatsConfig } from "./googleprivacydlpv2categoricalstatsconfig";
import { GooglePrivacyDlpV2DeltaPresenceEstimationConfig } from "./googleprivacydlpv2deltapresenceestimationconfig";
import { GooglePrivacyDlpV2KAnonymityConfig } from "./googleprivacydlpv2kanonymityconfig";
import { GooglePrivacyDlpV2KMapEstimationConfig } from "./googleprivacydlpv2kmapestimationconfig";
import { GooglePrivacyDlpV2LDiversityConfig } from "./googleprivacydlpv2ldiversityconfig";
import { GooglePrivacyDlpV2NumericalStatsConfig } from "./googleprivacydlpv2numericalstatsconfig";



// GooglePrivacyDlpV2PrivacyMetric
/** 
 * Privacy metric to compute for reidentification risk analysis.
**/
export class GooglePrivacyDlpV2PrivacyMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoricalStatsConfig" })
  categoricalStatsConfig?: GooglePrivacyDlpV2CategoricalStatsConfig;

  @SpeakeasyMetadata({ data: "json, name=deltaPresenceEstimationConfig" })
  deltaPresenceEstimationConfig?: GooglePrivacyDlpV2DeltaPresenceEstimationConfig;

  @SpeakeasyMetadata({ data: "json, name=kAnonymityConfig" })
  kAnonymityConfig?: GooglePrivacyDlpV2KAnonymityConfig;

  @SpeakeasyMetadata({ data: "json, name=kMapEstimationConfig" })
  kMapEstimationConfig?: GooglePrivacyDlpV2KMapEstimationConfig;

  @SpeakeasyMetadata({ data: "json, name=lDiversityConfig" })
  lDiversityConfig?: GooglePrivacyDlpV2LDiversityConfig;

  @SpeakeasyMetadata({ data: "json, name=numericalStatsConfig" })
  numericalStatsConfig?: GooglePrivacyDlpV2NumericalStatsConfig;
}
