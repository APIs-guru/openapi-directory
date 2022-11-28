import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingEvent } from "./autoscalingevent";
import { JobMessage } from "./jobmessage";



// ListJobMessagesResponse
/** 
 * Response to a request to list job messages.
**/
export class ListJobMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoscalingEvents", elemType: AutoscalingEvent })
  autoscalingEvents?: AutoscalingEvent[];

  @SpeakeasyMetadata({ data: "json, name=jobMessages", elemType: JobMessage })
  jobMessages?: JobMessage[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
