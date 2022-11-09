import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MarketingEventEmailSubscriber } from "./marketingeventemailsubscriber";


// BatchInputMarketingEventEmailSubscriber
/** 
 * List of marketing event details to create or update
**/
export class BatchInputMarketingEventEmailSubscriber extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputs", elemType: shared.MarketingEventEmailSubscriber })
  inputs: MarketingEventEmailSubscriber[];
}
