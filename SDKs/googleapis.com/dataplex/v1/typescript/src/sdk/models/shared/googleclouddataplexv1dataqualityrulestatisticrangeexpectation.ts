import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum {
    StatisticUndefined = "STATISTIC_UNDEFINED",
    Mean = "MEAN",
    Min = "MIN",
    Max = "MAX"
}


// GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation
/** 
 * Evaluates whether the column aggregate statistic lies between a specified range.
**/
export class GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: string;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: string;

  @SpeakeasyMetadata({ data: "json, name=statistic" })
  statistic?: GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectationStatisticEnum;

  @SpeakeasyMetadata({ data: "json, name=strictMaxEnabled" })
  strictMaxEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=strictMinEnabled" })
  strictMinEnabled?: boolean;
}
