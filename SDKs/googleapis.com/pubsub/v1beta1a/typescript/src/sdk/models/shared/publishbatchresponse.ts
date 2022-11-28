import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublishBatchResponse
/** 
 * Response for the PublishBatch method.
**/
export class PublishBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageIds" })
  messageIds?: string[];
}
