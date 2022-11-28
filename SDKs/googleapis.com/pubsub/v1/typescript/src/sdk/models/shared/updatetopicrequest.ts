import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Topic } from "./topic";



// UpdateTopicRequest
/** 
 * Request for the UpdateTopic method.
**/
export class UpdateTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: Topic;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
