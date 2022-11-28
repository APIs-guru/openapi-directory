import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketingEventEmailSubscriber } from "./marketingeventemailsubscriber";



// BatchInputMarketingEventEmailSubscriber
/** 
 * List of marketing event details to create or update
**/
export class BatchInputMarketingEventEmailSubscriber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: MarketingEventEmailSubscriber })
  inputs: MarketingEventEmailSubscriber[];
}
