import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryConfig } from "./deliveryconfig";



// Subscription
/** 
 * Metadata about a subscription resource.
**/
export class Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliveryConfig" })
  deliveryConfig?: DeliveryConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
