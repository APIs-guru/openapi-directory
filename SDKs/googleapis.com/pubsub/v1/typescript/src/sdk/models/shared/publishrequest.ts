import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PubsubMessage } from "./pubsubmessage";



// PublishRequest
/** 
 * Request for the Publish method.
**/
export class PublishRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: PubsubMessage })
  messages?: PubsubMessage[];
}
