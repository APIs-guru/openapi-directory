import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PubsubMessage } from "./pubsubmessage";


// PublishBatchRequest
/** 
 * Request for the PublishBatch method.
**/
export class PublishBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.PubsubMessage })
  messages?: PubsubMessage[];

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
