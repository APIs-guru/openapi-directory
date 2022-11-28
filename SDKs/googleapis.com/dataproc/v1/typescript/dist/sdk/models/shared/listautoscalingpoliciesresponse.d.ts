import { SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingPolicy } from "./autoscalingpolicy";
/**
 * A response to a request to list autoscaling policies in a project.
**/
export declare class ListAutoscalingPoliciesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    policies?: AutoscalingPolicy[];
}
