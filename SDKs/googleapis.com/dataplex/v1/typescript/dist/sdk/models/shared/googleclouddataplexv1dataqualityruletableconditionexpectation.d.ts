import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Evaluates whether the provided expression is true. The SQL expression needs to use BigQuery standard SQL syntax and should produce a scalar boolean result. Example: MIN(col1) >= 0
**/
export declare class GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation extends SpeakeasyBase {
    sqlExpression?: string;
}
