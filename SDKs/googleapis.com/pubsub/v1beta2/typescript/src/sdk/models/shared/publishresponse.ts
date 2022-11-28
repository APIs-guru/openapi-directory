import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublishResponse
/** 
 * Response for the `Publish` method.
**/
export class PublishResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageIds" })
  messageIds?: string[];
}
