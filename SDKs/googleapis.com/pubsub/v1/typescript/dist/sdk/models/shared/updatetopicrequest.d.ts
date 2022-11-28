import { SpeakeasyBase } from "../../../internal/utils";
import { Topic } from "./topic";
/**
 * Request for the UpdateTopic method.
**/
export declare class UpdateTopicRequest extends SpeakeasyBase {
    topic?: Topic;
    updateMask?: string;
}
