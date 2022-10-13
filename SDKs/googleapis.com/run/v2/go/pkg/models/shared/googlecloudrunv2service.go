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
	Annotations           map[string]string                       `json:"annotations"`
	BinaryAuthorization   *GoogleCloudRunV2BinaryAuthorization    `json:"binaryAuthorization"`
	Client                *string                                 `json:"client"`
	ClientVersion         *string                                 `json:"clientVersion"`
	Conditions            []GoogleCloudRunV2Condition             `json:"conditions"`
	CreateTime            *string                                 `json:"createTime"`
	Creator               *string                                 `json:"creator"`
	DeleteTime            *string                                 `json:"deleteTime"`
	Description           *string                                 `json:"description"`
	Etag                  *string                                 `json:"etag"`
	ExpireTime            *string                                 `json:"expireTime"`
	Generation            *string                                 `json:"generation"`
	Ingress               *GoogleCloudRunV2ServiceIngressEnum     `json:"ingress"`
	Labels                map[string]string                       `json:"labels"`
	LastModifier          *string                                 `json:"lastModifier"`
	LatestCreatedRevision *string                                 `json:"latestCreatedRevision"`
	LatestReadyRevision   *string                                 `json:"latestReadyRevision"`
	LaunchStage           *GoogleCloudRunV2ServiceLaunchStageEnum `json:"launchStage"`
	Name                  *string                                 `json:"name"`
	ObservedGeneration    *string                                 `json:"observedGeneration"`
	Reconciling           *bool                                   `json:"reconciling"`
	Template              *GoogleCloudRunV2RevisionTemplate       `json:"template"`
	TerminalCondition     *GoogleCloudRunV2Condition              `json:"terminalCondition"`
	Traffic               []GoogleCloudRunV2TrafficTarget         `json:"traffic"`
	TrafficStatuses       []GoogleCloudRunV2TrafficTargetStatus   `json:"trafficStatuses"`
	UID                   *string                                 `json:"uid"`
	UpdateTime            *string                                 `json:"updateTime"`
	URI                   *string                                 `json:"uri"`
}
