import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Topic } from "./topic";


// ListTopicsResponse
/** 
 * Response for ListTopics.
**/
export class ListTopicsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=topics", elemType: shared.Topic })
  topics?: Topic[];
}
