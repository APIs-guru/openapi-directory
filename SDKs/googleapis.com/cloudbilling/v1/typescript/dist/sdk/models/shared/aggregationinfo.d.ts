import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AggregationInfoAggregationIntervalEnum {
    AggregationIntervalUnspecified = "AGGREGATION_INTERVAL_UNSPECIFIED",
    Daily = "DAILY",
    Monthly = "MONTHLY"
}
export declare enum AggregationInfoAggregationLevelEnum {
    AggregationLevelUnspecified = "AGGREGATION_LEVEL_UNSPECIFIED",
    Account = "ACCOUNT",
    Project = "PROJECT"
}
/**
 * Represents the aggregation level and interval for pricing of a single SKU.
**/
export declare class AggregationInfo extends SpeakeasyBase {
    aggregationCount?: number;
    aggregationInterval?: AggregationInfoAggregationIntervalEnum;
    aggregationLevel?: AggregationInfoAggregationLevelEnum;
}
