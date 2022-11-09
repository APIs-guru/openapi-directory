import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=categoricalStatsConfig" })
  categoricalStatsConfig?: GooglePrivacyDlpV2CategoricalStatsConfig;

  @Metadata({ data: "json, name=deltaPresenceEstimationConfig" })
  deltaPresenceEstimationConfig?: GooglePrivacyDlpV2DeltaPresenceEstimationConfig;

  @Metadata({ data: "json, name=kAnonymityConfig" })
  kAnonymityConfig?: GooglePrivacyDlpV2KAnonymityConfig;

  @Metadata({ data: "json, name=kMapEstimationConfig" })
  kMapEstimationConfig?: GooglePrivacyDlpV2KMapEstimationConfig;

  @Metadata({ data: "json, name=lDiversityConfig" })
  lDiversityConfig?: GooglePrivacyDlpV2LDiversityConfig;

  @Metadata({ data: "json, name=numericalStatsConfig" })
  numericalStatsConfig?: GooglePrivacyDlpV2NumericalStatsConfig;
}
