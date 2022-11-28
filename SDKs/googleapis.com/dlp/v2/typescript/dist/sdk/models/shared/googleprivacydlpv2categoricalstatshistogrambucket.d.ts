import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ValueFrequency } from "./googleprivacydlpv2valuefrequency";
/**
 * Histogram of value frequencies in the column.
**/
export declare class GooglePrivacyDlpV2CategoricalStatsHistogramBucket extends SpeakeasyBase {
    bucketSize?: string;
    bucketValueCount?: string;
    bucketValues?: GooglePrivacyDlpV2ValueFrequency[];
    valueFrequencyLowerBound?: string;
    valueFrequencyUpperBound?: string;
}
