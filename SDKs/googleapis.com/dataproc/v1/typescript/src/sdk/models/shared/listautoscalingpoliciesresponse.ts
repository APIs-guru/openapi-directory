import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingPolicy } from "./autoscalingpolicy";



// ListAutoscalingPoliciesResponse
/** 
 * A response to a request to list autoscaling policies in a project.
**/
export class ListAutoscalingPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=policies", elemType: AutoscalingPolicy })
  policies?: AutoscalingPolicy[];
}
