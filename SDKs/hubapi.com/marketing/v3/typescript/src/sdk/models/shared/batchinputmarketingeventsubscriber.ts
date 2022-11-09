import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MarketingEventSubscriber } from "./marketingeventsubscriber";


// BatchInputMarketingEventSubscriber
/** 
 * List of HubSpot contacts to subscribe to the marketing event
**/
export class BatchInputMarketingEventSubscriber extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputs", elemType: shared.MarketingEventSubscriber })
  inputs: MarketingEventSubscriber[];
}
