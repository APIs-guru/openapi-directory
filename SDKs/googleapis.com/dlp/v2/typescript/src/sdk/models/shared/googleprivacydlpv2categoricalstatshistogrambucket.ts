import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ValueFrequency } from "./googleprivacydlpv2valuefrequency";



// GooglePrivacyDlpV2CategoricalStatsHistogramBucket
/** 
 * Histogram of value frequencies in the column.
**/
export class GooglePrivacyDlpV2CategoricalStatsHistogramBucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketSize" })
  bucketSize?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketValueCount" })
  bucketValueCount?: string;

  @SpeakeasyMetadata({ data: "json, name=bucketValues", elemType: GooglePrivacyDlpV2ValueFrequency })
  bucketValues?: GooglePrivacyDlpV2ValueFrequency[];

  @SpeakeasyMetadata({ data: "json, name=valueFrequencyLowerBound" })
  valueFrequencyLowerBound?: string;

  @SpeakeasyMetadata({ data: "json, name=valueFrequencyUpperBound" })
  valueFrequencyUpperBound?: string;
}
