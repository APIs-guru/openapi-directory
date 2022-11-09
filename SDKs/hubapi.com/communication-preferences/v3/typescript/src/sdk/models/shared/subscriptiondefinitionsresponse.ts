import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscriptionDefinition } from "./subscriptiondefinition";


// SubscriptionDefinitionsResponse
/** 
 * A collection of subscription definitions for the portal.
**/
export class SubscriptionDefinitionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=subscriptionDefinitions", elemType: shared.SubscriptionDefinition })
  subscriptionDefinitions: SubscriptionDefinition[];
}
