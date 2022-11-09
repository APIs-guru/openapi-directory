import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TargetRenderFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED"
,    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE"
,    ExecutionFailed = "EXECUTION_FAILED"
}

export enum TargetRenderRenderingStateEnum {
    TargetRenderStateUnspecified = "TARGET_RENDER_STATE_UNSPECIFIED"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    InProgress = "IN_PROGRESS"
}


// TargetRender
/** 
 * Details of rendering for a single target.
**/
export class TargetRender extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureCause" })
  failureCause?: TargetRenderFailureCauseEnum;

  @Metadata({ data: "json, name=failureMessage" })
  failureMessage?: string;

  @Metadata({ data: "json, name=renderingBuild" })
  renderingBuild?: string;

  @Metadata({ data: "json, name=renderingState" })
  renderingState?: TargetRenderRenderingStateEnum;
}
