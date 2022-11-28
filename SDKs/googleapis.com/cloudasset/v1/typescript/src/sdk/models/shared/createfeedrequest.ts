import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Feed } from "./feed";



// CreateFeedRequest
/** 
 * Create asset feed request.
**/
export class CreateFeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feed" })
  feed?: Feed;

  @SpeakeasyMetadata({ data: "json, name=feedId" })
  feedId?: string;
}
