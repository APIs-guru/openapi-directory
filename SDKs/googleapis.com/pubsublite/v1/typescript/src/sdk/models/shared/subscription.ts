import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeliveryConfig } from "./deliveryconfig";


// Subscription
/** 
 * Metadata about a subscription resource.
**/
export class Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliveryConfig" })
  deliveryConfig?: DeliveryConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
