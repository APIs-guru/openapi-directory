import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaConditionTimeRange } from "./googlecloudretailv2alphaconditiontimerange";
import { GoogleCloudRetailV2alphaConditionQueryTerm } from "./googlecloudretailv2alphaconditionqueryterm";
/**
 * Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted.
**/
export declare class GoogleCloudRetailV2alphaCondition extends SpeakeasyBase {
    activeTimeRange?: GoogleCloudRetailV2alphaConditionTimeRange[];
    queryTerms?: GoogleCloudRetailV2alphaConditionQueryTerm[];
}
