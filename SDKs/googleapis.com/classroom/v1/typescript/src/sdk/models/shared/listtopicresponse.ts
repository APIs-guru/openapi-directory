import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Topic } from "./topic";


// ListTopicResponse
/** 
 * Response when listing topics.
**/
export class ListTopicResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=topic", elemType: shared.Topic })
  topic?: Topic[];
}
