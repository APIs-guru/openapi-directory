package shared

type GoogleCloudRunV2ServiceIngressEnum string

const (
	GoogleCloudRunV2ServiceIngressEnumIngressTrafficUnspecified          GoogleCloudRunV2ServiceIngressEnum = "INGRESS_TRAFFIC_UNSPECIFIED"
	GoogleCloudRunV2ServiceIngressEnumIngressTrafficAll                  GoogleCloudRunV2ServiceIngressEnum = "INGRESS_TRAFFIC_ALL"
	GoogleCloudRunV2ServiceIngressEnumIngressTrafficInternalOnly         GoogleCloudRunV2ServiceIngressEnum = "INGRESS_TRAFFIC_INTERNAL_ONLY"
	GoogleCloudRunV2ServiceIngressEnumIngressTrafficInternalLoadBalancer GoogleCloudRunV2ServiceIngressEnum = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"
)

type GoogleCloudRunV2ServiceLaunchStageEnum string

const (
	GoogleCloudRunV2ServiceLaunchStageEnumLaunchStageUnspecified GoogleCloudRunV2ServiceLaunchStageEnum = "LAUNCH_STAGE_UNSPECIFIED"
	GoogleCloudRunV2ServiceLaunchStageEnumUnimplemented          GoogleCloudRunV2ServiceLaunchStageEnum = "UNIMPLEMENTED"
	GoogleCloudRunV2ServiceLaunchStageEnumPrelaunch              GoogleCloudRunV2ServiceLaunchStageEnum = "PRELAUNCH"
	GoogleCloudRunV2ServiceLaunchStageEnumEarlyAccess            GoogleCloudRunV2ServiceLaunchStageEnum = "EARLY_ACCESS"
	GoogleCloudRunV2ServiceLaunchStageEnumAlpha                  GoogleCloudRunV2ServiceLaunchStageEnum = "ALPHA"
	GoogleCloudRunV2ServiceLaunchStageEnumBeta                   GoogleCloudRunV2ServiceLaunchStageEnum = "BETA"
	GoogleCloudRunV2ServiceLaunchStageEnumGa                     GoogleCloudRunV2ServiceLaunchStageEnum = "GA"
	GoogleCloudRunV2ServiceLaunchStageEnumDeprecated             GoogleCloudRunV2ServiceLaunchStageEnum = "DEPRECATED"
)

type GoogleCloudRunV2Service struct {
	Annotations           map[string]string                       `json:"annotations,omitempty"`
	BinaryAuthorization   *GoogleCloudRunV2BinaryAuthorization    `json:"binaryAuthorization,omitempty"`
	Client                *string                                 `json:"client,omitempty"`
	ClientVersion         *string                                 `json:"clientVersion,omitempty"`
	Conditions            []GoogleCloudRunV2Condition             `json:"conditions,omitempty"`
	CreateTime            *string                                 `json:"createTime,omitempty"`
	Creator               *string                                 `json:"creator,omitempty"`
	DeleteTime            *string                                 `json:"deleteTime,omitempty"`
	Description           *string                                 `json:"description,omitempty"`
	Etag                  *string                                 `json:"etag,omitempty"`
	ExpireTime            *string                                 `json:"expireTime,omitempty"`
	Generation            *string                                 `json:"generation,omitempty"`
	Ingress               *GoogleCloudRunV2ServiceIngressEnum     `json:"ingress,omitempty"`
	Labels                map[string]string                       `json:"labels,omitempty"`
	LastModifier          *string                                 `json:"lastModifier,omitempty"`
	LatestCreatedRevision *string                                 `json:"latestCreatedRevision,omitempty"`
	LatestReadyRevision   *string                                 `json:"latestReadyRevision,omitempty"`
	LaunchStage           *GoogleCloudRunV2ServiceLaunchStageEnum `json:"launchStage,omitempty"`
	Name                  *string                                 `json:"name,omitempty"`
	ObservedGeneration    *string                                 `json:"observedGeneration,omitempty"`
	Reconciling           *bool                                   `json:"reconciling,omitempty"`
	Template              *GoogleCloudRunV2RevisionTemplate       `json:"template,omitempty"`
	TerminalCondition     *GoogleCloudRunV2Condition              `json:"terminalCondition,omitempty"`
	Traffic               []GoogleCloudRunV2TrafficTarget         `json:"traffic,omitempty"`
	TrafficStatuses       []GoogleCloudRunV2TrafficTargetStatus   `json:"trafficStatuses,omitempty"`
	UID                   *string                                 `json:"uid,omitempty"`
	UpdateTime            *string                                 `json:"updateTime,omitempty"`
	URI                   *string                                 `json:"uri,omitempty"`
}
