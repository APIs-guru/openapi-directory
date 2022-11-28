import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Topic } from "./topic";



// ListTopicResponse
/** 
 * Response when listing topics.
**/
export class ListTopicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=topic", elemType: Topic })
  topic?: Topic[];
}
