import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Feed } from "./feed";


// CreateFeedRequest
/** 
 * Create asset feed request.
**/
export class CreateFeedRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=feed" })
  feed?: Feed;

  @Metadata({ data: "json, name=feedId" })
  feedId?: string;
}
