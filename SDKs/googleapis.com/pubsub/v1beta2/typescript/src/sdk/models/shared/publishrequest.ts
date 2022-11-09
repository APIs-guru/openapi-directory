import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PubsubMessage } from "./pubsubmessage";


// PublishRequest
/** 
 * Request for the Publish method.
**/
export class PublishRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.PubsubMessage })
  messages?: PubsubMessage[];
}
