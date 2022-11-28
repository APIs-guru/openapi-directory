import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataQualityRule } from "./googleclouddataplexv1dataqualityrule";
/**
 * DataQualityRuleResult provides a more detailed, per-rule level view of the results.
**/
export declare class GoogleCloudDataplexV1DataQualityRuleResult extends SpeakeasyBase {
    evaluatedCount?: string;
    failingRowsQuery?: string;
    nullCount?: string;
    passRatio?: number;
    passed?: boolean;
    passedCount?: string;
    rule?: GoogleCloudDataplexV1DataQualityRule;
}
