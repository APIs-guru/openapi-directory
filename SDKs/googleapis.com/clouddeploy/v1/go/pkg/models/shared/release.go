package shared

type ReleaseRenderStateEnum string

const (
	ReleaseRenderStateEnumRenderStateUnspecified ReleaseRenderStateEnum = "RENDER_STATE_UNSPECIFIED"
	ReleaseRenderStateEnumSucceeded              ReleaseRenderStateEnum = "SUCCEEDED"
	ReleaseRenderStateEnumFailed                 ReleaseRenderStateEnum = "FAILED"
	ReleaseRenderStateEnumInProgress             ReleaseRenderStateEnum = "IN_PROGRESS"
)

type Release struct {
	Abandoned                *bool                     `json:"abandoned"`
	Annotations              map[string]string         `json:"annotations"`
	BuildArtifacts           []BuildArtifact           `json:"buildArtifacts"`
	CreateTime               *string                   `json:"createTime"`
	DeliveryPipelineSnapshot *DeliveryPipeline         `json:"deliveryPipelineSnapshot"`
	Description              *string                   `json:"description"`
	Etag                     *string                   `json:"etag"`
	Labels                   map[string]string         `json:"labels"`
	Name                     *string                   `json:"name"`
	RenderEndTime            *string                   `json:"renderEndTime"`
	RenderStartTime          *string                   `json:"renderStartTime"`
	RenderState              *ReleaseRenderStateEnum   `json:"renderState"`
	SkaffoldConfigPath       *string                   `json:"skaffoldConfigPath"`
	SkaffoldConfigURI        *string                   `json:"skaffoldConfigUri"`
	SkaffoldVersion          *string                   `json:"skaffoldVersion"`
	TargetArtifacts          map[string]TargetArtifact `json:"targetArtifacts"`
	TargetRenders            map[string]TargetRender   `json:"targetRenders"`
	TargetSnapshots          []Target                  `json:"targetSnapshots"`
	UID                      *string                   `json:"uid"`
}
