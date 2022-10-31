package shared




type ReleaseRenderStateEnum string

const (
    ReleaseRenderStateEnumRenderStateUnspecified ReleaseRenderStateEnum = "RENDER_STATE_UNSPECIFIED"
ReleaseRenderStateEnumSucceeded ReleaseRenderStateEnum = "SUCCEEDED"
ReleaseRenderStateEnumFailed ReleaseRenderStateEnum = "FAILED"
ReleaseRenderStateEnumInProgress ReleaseRenderStateEnum = "IN_PROGRESS"
)


type Release struct {
    Abandoned *bool `json:"abandoned,omitempty"`
    Annotations map[string]string `json:"annotations,omitempty"`
    BuildArtifacts []BuildArtifact `json:"buildArtifacts,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DeliveryPipelineSnapshot *DeliveryPipeline `json:"deliveryPipelineSnapshot,omitempty"`
    Description *string `json:"description,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    RenderEndTime *string `json:"renderEndTime,omitempty"`
    RenderStartTime *string `json:"renderStartTime,omitempty"`
    RenderState *ReleaseRenderStateEnum `json:"renderState,omitempty"`
    SkaffoldConfigPath *string `json:"skaffoldConfigPath,omitempty"`
    SkaffoldConfigURI *string `json:"skaffoldConfigUri,omitempty"`
    SkaffoldVersion *string `json:"skaffoldVersion,omitempty"`
    TargetArtifacts map[string]TargetArtifact `json:"targetArtifacts,omitempty"`
    TargetRenders map[string]TargetRender `json:"targetRenders,omitempty"`
    TargetSnapshots []Target `json:"targetSnapshots,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

