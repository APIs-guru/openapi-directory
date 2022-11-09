import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2CategoricalStatsHistogramBucket } from "./googleprivacydlpv2categoricalstatshistogrambucket";


// GooglePrivacyDlpV2CategoricalStatsResult
/** 
 * Result of the categorical stats computation.
**/
export class GooglePrivacyDlpV2CategoricalStatsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=valueFrequencyHistogramBuckets", elemType: shared.GooglePrivacyDlpV2CategoricalStatsHistogramBucket })
  valueFrequencyHistogramBuckets?: GooglePrivacyDlpV2CategoricalStatsHistogramBucket[];
}
