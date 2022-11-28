import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1DataQualityRuleRangeExpectation
/** 
 * Evaluates whether each column value lies between a specified range.
**/
export class GoogleCloudDataplexV1DataQualityRuleRangeExpectation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: string;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: string;

  @SpeakeasyMetadata({ data: "json, name=strictMaxEnabled" })
  strictMaxEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=strictMinEnabled" })
  strictMinEnabled?: boolean;
}
