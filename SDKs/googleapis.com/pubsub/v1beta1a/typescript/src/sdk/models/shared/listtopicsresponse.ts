import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Topic } from "./topic";



// ListTopicsResponse
/** 
 * Response for the ListTopics method.
**/
export class ListTopicsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=topic", elemType: Topic })
  topic?: Topic[];
}
