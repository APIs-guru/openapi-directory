import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation
/** 
 * Evaluates whether each row passes the specified condition. The SQL expression needs to use BigQuery standard SQL syntax and should produce a boolean per row as the result. Example: col1 >= 0 AND col2 < 10
**/
export class GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sqlExpression" })
  sqlExpression?: string;
}
