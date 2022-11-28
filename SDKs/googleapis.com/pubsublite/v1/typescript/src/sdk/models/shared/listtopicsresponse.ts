import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Topic } from "./topic";



// ListTopicsResponse
/** 
 * Response for ListTopics.
**/
export class ListTopicsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=topics", elemType: Topic })
  topics?: Topic[];
}
