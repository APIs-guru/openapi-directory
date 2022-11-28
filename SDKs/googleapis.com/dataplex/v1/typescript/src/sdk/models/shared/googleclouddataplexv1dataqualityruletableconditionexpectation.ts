import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation
/** 
 * Evaluates whether the provided expression is true. The SQL expression needs to use BigQuery standard SQL syntax and should produce a scalar boolean result. Example: MIN(col1) >= 0
**/
export class GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sqlExpression" })
  sqlExpression?: string;
}
