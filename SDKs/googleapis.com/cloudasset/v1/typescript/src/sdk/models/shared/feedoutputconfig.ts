import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PubsubDestination } from "./pubsubdestination";



// FeedOutputConfig
/** 
 * Output configuration for asset feed destination.
**/
export class FeedOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsubDestination" })
  pubsubDestination?: PubsubDestination;
}
