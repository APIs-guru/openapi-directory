import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublishResponse
/** 
 * Response for the `Publish` method.
**/
export class PublishResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=messageIds" })
  messageIds?: string[];
}
