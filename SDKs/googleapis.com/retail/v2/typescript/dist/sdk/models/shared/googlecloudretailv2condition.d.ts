import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ConditionTimeRange } from "./googlecloudretailv2conditiontimerange";
import { GoogleCloudRetailV2ConditionQueryTerm } from "./googlecloudretailv2conditionqueryterm";
/**
 * Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted.
**/
export declare class GoogleCloudRetailV2Condition extends SpeakeasyBase {
    activeTimeRange?: GoogleCloudRetailV2ConditionTimeRange[];
    queryTerms?: GoogleCloudRetailV2ConditionQueryTerm[];
}
