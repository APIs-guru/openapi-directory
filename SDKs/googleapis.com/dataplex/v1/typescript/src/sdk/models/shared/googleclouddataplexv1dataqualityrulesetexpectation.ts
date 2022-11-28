import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1DataQualityRuleSetExpectation
/** 
 * Evaluates whether each column value is contained by a specified set.
**/
export class GoogleCloudDataplexV1DataQualityRuleSetExpectation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
