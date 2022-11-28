import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionDefinition } from "./subscriptiondefinition";



// SubscriptionDefinitionsResponse
/** 
 * A collection of subscription definitions for the portal.
**/
export class SubscriptionDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscriptionDefinitions", elemType: SubscriptionDefinition })
  subscriptionDefinitions: SubscriptionDefinition[];
}
