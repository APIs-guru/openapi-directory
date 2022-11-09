import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutoscalingPolicy } from "./autoscalingpolicy";


// ListAutoscalingPoliciesResponse
/** 
 * A response to a request to list autoscaling policies in a project.
**/
export class ListAutoscalingPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=policies", elemType: shared.AutoscalingPolicy })
  policies?: AutoscalingPolicy[];
}
