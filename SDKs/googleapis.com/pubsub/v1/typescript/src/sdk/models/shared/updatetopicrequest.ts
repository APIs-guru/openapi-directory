import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Topic } from "./topic";


// UpdateTopicRequest
/** 
 * Request for the UpdateTopic method.
**/
export class UpdateTopicRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=topic" })
  topic?: Topic;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
