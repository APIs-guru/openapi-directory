import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1DataQualityRuleRegexExpectation
/** 
 * Evaluates whether each column value matches a specified regex.
**/
export class GoogleCloudDataplexV1DataQualityRuleRegexExpectation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: string;
}
