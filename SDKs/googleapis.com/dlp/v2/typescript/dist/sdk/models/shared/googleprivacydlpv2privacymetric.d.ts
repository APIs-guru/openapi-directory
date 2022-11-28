import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CategoricalStatsConfig } from "./googleprivacydlpv2categoricalstatsconfig";
import { GooglePrivacyDlpV2DeltaPresenceEstimationConfig } from "./googleprivacydlpv2deltapresenceestimationconfig";
import { GooglePrivacyDlpV2KAnonymityConfig } from "./googleprivacydlpv2kanonymityconfig";
import { GooglePrivacyDlpV2KMapEstimationConfig } from "./googleprivacydlpv2kmapestimationconfig";
import { GooglePrivacyDlpV2LDiversityConfig } from "./googleprivacydlpv2ldiversityconfig";
import { GooglePrivacyDlpV2NumericalStatsConfig } from "./googleprivacydlpv2numericalstatsconfig";
/**
 * Privacy metric to compute for reidentification risk analysis.
**/
export declare class GooglePrivacyDlpV2PrivacyMetric extends SpeakeasyBase {
    categoricalStatsConfig?: GooglePrivacyDlpV2CategoricalStatsConfig;
    deltaPresenceEstimationConfig?: GooglePrivacyDlpV2DeltaPresenceEstimationConfig;
    kAnonymityConfig?: GooglePrivacyDlpV2KAnonymityConfig;
    kMapEstimationConfig?: GooglePrivacyDlpV2KMapEstimationConfig;
    lDiversityConfig?: GooglePrivacyDlpV2LDiversityConfig;
    numericalStatsConfig?: GooglePrivacyDlpV2NumericalStatsConfig;
}
