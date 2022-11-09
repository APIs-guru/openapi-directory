import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublishBatchResponse
/** 
 * Response for the PublishBatch method.
**/
export class PublishBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageIds" })
  messageIds?: string[];
}
