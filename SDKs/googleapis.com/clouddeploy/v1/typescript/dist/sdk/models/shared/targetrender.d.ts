import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TargetRenderFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED",
    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE",
    ExecutionFailed = "EXECUTION_FAILED"
}
export declare enum TargetRenderRenderingStateEnum {
    TargetRenderStateUnspecified = "TARGET_RENDER_STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS"
}
/**
 * Details of rendering for a single target.
**/
export declare class TargetRender extends SpeakeasyBase {
    failureCause?: TargetRenderFailureCauseEnum;
    failureMessage?: string;
    renderingBuild?: string;
    renderingState?: TargetRenderRenderingStateEnum;
}
