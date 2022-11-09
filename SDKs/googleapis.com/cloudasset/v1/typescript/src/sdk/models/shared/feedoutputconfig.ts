import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PubsubDestination } from "./pubsubdestination";


// FeedOutputConfig
/** 
 * Output configuration for asset feed destination.
**/
export class FeedOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=pubsubDestination" })
  pubsubDestination?: PubsubDestination;
}
