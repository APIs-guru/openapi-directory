import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AggregationInfoAggregationIntervalEnum {
    AggregationIntervalUnspecified = "AGGREGATION_INTERVAL_UNSPECIFIED"
,    Daily = "DAILY"
,    Monthly = "MONTHLY"
}

export enum AggregationInfoAggregationLevelEnum {
    AggregationLevelUnspecified = "AGGREGATION_LEVEL_UNSPECIFIED"
,    Account = "ACCOUNT"
,    Project = "PROJECT"
}


// AggregationInfo
/** 
 * Represents the aggregation level and interval for pricing of a single SKU.
**/
export class AggregationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationCount" })
  aggregationCount?: number;

  @Metadata({ data: "json, name=aggregationInterval" })
  aggregationInterval?: AggregationInfoAggregationIntervalEnum;

  @Metadata({ data: "json, name=aggregationLevel" })
  aggregationLevel?: AggregationInfoAggregationLevelEnum;
}
