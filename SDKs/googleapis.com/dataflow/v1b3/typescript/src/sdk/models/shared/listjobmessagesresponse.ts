import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoscalingEvent } from "./autoscalingevent";
import { JobMessage } from "./jobmessage";


// ListJobMessagesResponse
/** 
 * Response to a request to list job messages.
**/
export class ListJobMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoscalingEvents", elemType: shared.AutoscalingEvent })
  autoscalingEvents?: AutoscalingEvent[];

  @Metadata({ data: "json, name=jobMessages", elemType: shared.JobMessage })
  jobMessages?: JobMessage[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
