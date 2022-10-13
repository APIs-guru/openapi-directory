package shared

type TargetRenderFailureCauseEnum string

const (
	TargetRenderFailureCauseEnumFailureCauseUnspecified TargetRenderFailureCauseEnum = "FAILURE_CAUSE_UNSPECIFIED"
	TargetRenderFailureCauseEnumCloudBuildUnavailable   TargetRenderFailureCauseEnum = "CLOUD_BUILD_UNAVAILABLE"
	TargetRenderFailureCauseEnumExecutionFailed         TargetRenderFailureCauseEnum = "EXECUTION_FAILED"
)

type TargetRenderRenderingStateEnum string

const (
	TargetRenderRenderingStateEnumTargetRenderStateUnspecified TargetRenderRenderingStateEnum = "TARGET_RENDER_STATE_UNSPECIFIED"
	TargetRenderRenderingStateEnumSucceeded                    TargetRenderRenderingStateEnum = "SUCCEEDED"
	TargetRenderRenderingStateEnumFailed                       TargetRenderRenderingStateEnum = "FAILED"
	TargetRenderRenderingStateEnumInProgress                   TargetRenderRenderingStateEnum = "IN_PROGRESS"
)

type TargetRender struct {
	FailureCause   *TargetRenderFailureCauseEnum   `json:"failureCause"`
	FailureMessage *string                         `json:"failureMessage"`
	RenderingBuild *string                         `json:"renderingBuild"`
	RenderingState *TargetRenderRenderingStateEnum `json:"renderingState"`
}
