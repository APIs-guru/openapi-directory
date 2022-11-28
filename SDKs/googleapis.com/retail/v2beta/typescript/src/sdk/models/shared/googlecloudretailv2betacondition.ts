import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaConditionTimeRange } from "./googlecloudretailv2betaconditiontimerange";
import { GoogleCloudRetailV2betaConditionQueryTerm } from "./googlecloudretailv2betaconditionqueryterm";



// GoogleCloudRetailV2betaCondition
/** 
 * Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted.
**/
export class GoogleCloudRetailV2betaCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeTimeRange", elemType: GoogleCloudRetailV2betaConditionTimeRange })
  activeTimeRange?: GoogleCloudRetailV2betaConditionTimeRange[];

  @SpeakeasyMetadata({ data: "json, name=queryTerms", elemType: GoogleCloudRetailV2betaConditionQueryTerm })
  queryTerms?: GoogleCloudRetailV2betaConditionQueryTerm[];
}
