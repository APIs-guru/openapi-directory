import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2ConditionTimeRange } from "./googlecloudretailv2conditiontimerange";
import { GoogleCloudRetailV2ConditionQueryTerm } from "./googlecloudretailv2conditionqueryterm";


// GoogleCloudRetailV2Condition
/** 
 * Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted.
**/
export class GoogleCloudRetailV2Condition extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeTimeRange", elemType: shared.GoogleCloudRetailV2ConditionTimeRange })
  activeTimeRange?: GoogleCloudRetailV2ConditionTimeRange[];

  @Metadata({ data: "json, name=queryTerms", elemType: shared.GoogleCloudRetailV2ConditionQueryTerm })
  queryTerms?: GoogleCloudRetailV2ConditionQueryTerm[];
}
