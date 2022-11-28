import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum {
    StatisticUndefined = "STATISTIC_UNDEFINED",
    Mean = "MEAN",
    Min = "MIN",
    Max = "MAX"
}
/**
 * Evaluates whether the column aggregate statistic lies between a specified range.
**/
export declare class GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation extends SpeakeasyBase {
    maxValue?: string;
    minValue?: string;
    statistic?: GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum;
    strictMaxEnabled?: boolean;
    strictMinEnabled?: boolean;
}
