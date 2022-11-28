import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketingEventSubscriber } from "./marketingeventsubscriber";



// BatchInputMarketingEventSubscriber
/** 
 * List of HubSpot contacts to subscribe to the marketing event
**/
export class BatchInputMarketingEventSubscriber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: MarketingEventSubscriber })
  inputs: MarketingEventSubscriber[];
}
