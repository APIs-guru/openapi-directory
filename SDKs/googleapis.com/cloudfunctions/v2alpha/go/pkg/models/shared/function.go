package shared

type FunctionEnvironmentEnum string

const (
	FunctionEnvironmentEnumEnvironmentUnspecified FunctionEnvironmentEnum = "ENVIRONMENT_UNSPECIFIED"
	FunctionEnvironmentEnumGen1                   FunctionEnvironmentEnum = "GEN_1"
	FunctionEnvironmentEnumGen2                   FunctionEnvironmentEnum = "GEN_2"
)

type FunctionStateEnum string

const (
	FunctionStateEnumStateUnspecified FunctionStateEnum = "STATE_UNSPECIFIED"
	FunctionStateEnumActive           FunctionStateEnum = "ACTIVE"
	FunctionStateEnumFailed           FunctionStateEnum = "FAILED"
	FunctionStateEnumDeploying        FunctionStateEnum = "DEPLOYING"
	FunctionStateEnumDeleting         FunctionStateEnum = "DELETING"
	FunctionStateEnumUnknown          FunctionStateEnum = "UNKNOWN"
)

type Function struct {
	BuildConfig   *BuildConfig                              `json:"buildConfig,omitempty"`
	Description   *string                                   `json:"description,omitempty"`
	Environment   *FunctionEnvironmentEnum                  `json:"environment,omitempty"`
	EventTrigger  *EventTrigger                             `json:"eventTrigger,omitempty"`
	Labels        map[string]string                         `json:"labels,omitempty"`
	Name          *string                                   `json:"name,omitempty"`
	ServiceConfig *ServiceConfig                            `json:"serviceConfig,omitempty"`
	State         *FunctionStateEnum                        `json:"state,omitempty"`
	StateMessages []GoogleCloudFunctionsV2alphaStateMessage `json:"stateMessages,omitempty"`
	UpdateTime    *string                                   `json:"updateTime,omitempty"`
}
