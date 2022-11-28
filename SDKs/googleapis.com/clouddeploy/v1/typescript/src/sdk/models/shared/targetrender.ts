import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TargetRenderFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED",
    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE",
    ExecutionFailed = "EXECUTION_FAILED"
}

export enum TargetRenderRenderingStateEnum {
    TargetRenderStateUnspecified = "TARGET_RENDER_STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS"
}


// TargetRender
/** 
 * Details of rendering for a single target.
**/
export class TargetRender extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureCause" })
  failureCause?: TargetRenderFailureCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=failureMessage" })
  failureMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=renderingBuild" })
  renderingBuild?: string;

  @SpeakeasyMetadata({ data: "json, name=renderingState" })
  renderingState?: TargetRenderRenderingStateEnum;
}
