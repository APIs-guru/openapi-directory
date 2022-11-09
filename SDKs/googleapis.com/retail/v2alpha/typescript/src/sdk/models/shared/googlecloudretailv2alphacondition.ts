import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaConditionTimeRange } from "./googlecloudretailv2alphaconditiontimerange";
import { GoogleCloudRetailV2alphaConditionQueryTerm } from "./googlecloudretailv2alphaconditionqueryterm";


// GoogleCloudRetailV2alphaCondition
/** 
 * Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted.
**/
export class GoogleCloudRetailV2alphaCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeTimeRange", elemType: shared.GoogleCloudRetailV2alphaConditionTimeRange })
  activeTimeRange?: GoogleCloudRetailV2alphaConditionTimeRange[];

  @Metadata({ data: "json, name=queryTerms", elemType: shared.GoogleCloudRetailV2alphaConditionQueryTerm })
  queryTerms?: GoogleCloudRetailV2alphaConditionQueryTerm[];
}
