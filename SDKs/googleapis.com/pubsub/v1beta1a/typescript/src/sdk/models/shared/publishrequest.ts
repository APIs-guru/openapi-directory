import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PubsubMessage } from "./pubsubmessage";


// PublishRequest
/** 
 * Request for the Publish method.
**/
export class PublishRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: PubsubMessage;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
