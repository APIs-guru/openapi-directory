import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2ValueFrequency } from "./googleprivacydlpv2valuefrequency";


// GooglePrivacyDlpV2CategoricalStatsHistogramBucket
/** 
 * Histogram of value frequencies in the column.
**/
export class GooglePrivacyDlpV2CategoricalStatsHistogramBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketSize" })
  bucketSize?: string;

  @Metadata({ data: "json, name=bucketValueCount" })
  bucketValueCount?: string;

  @Metadata({ data: "json, name=bucketValues", elemType: shared.GooglePrivacyDlpV2ValueFrequency })
  bucketValues?: GooglePrivacyDlpV2ValueFrequency[];

  @Metadata({ data: "json, name=valueFrequencyLowerBound" })
  valueFrequencyLowerBound?: string;

  @Metadata({ data: "json, name=valueFrequencyUpperBound" })
  valueFrequencyUpperBound?: string;
}
