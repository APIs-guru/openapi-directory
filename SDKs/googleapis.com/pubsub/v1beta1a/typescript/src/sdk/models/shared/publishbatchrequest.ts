import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PubsubMessage } from "./pubsubmessage";



// PublishBatchRequest
/** 
 * Request for the PublishBatch method.
**/
export class PublishBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: PubsubMessage })
  messages?: PubsubMessage[];

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
