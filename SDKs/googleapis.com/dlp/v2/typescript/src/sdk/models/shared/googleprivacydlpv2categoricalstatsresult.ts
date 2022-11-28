import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2CategoricalStatsHistogramBucket } from "./googleprivacydlpv2categoricalstatshistogrambucket";



// GooglePrivacyDlpV2CategoricalStatsResult
/** 
 * Result of the categorical stats computation.
**/
export class GooglePrivacyDlpV2CategoricalStatsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=valueFrequencyHistogramBuckets", elemType: GooglePrivacyDlpV2CategoricalStatsHistogramBucket })
  valueFrequencyHistogramBuckets?: GooglePrivacyDlpV2CategoricalStatsHistogramBucket[];
}
