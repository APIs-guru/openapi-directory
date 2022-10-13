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
	BuildConfig   *BuildConfig                         `json:"buildConfig"`
	Description   *string                              `json:"description"`
	Environment   *FunctionEnvironmentEnum             `json:"environment"`
	EventTrigger  *EventTrigger                        `json:"eventTrigger"`
	Labels        map[string]string                    `json:"labels"`
	Name          *string                              `json:"name"`
	ServiceConfig *ServiceConfig                       `json:"serviceConfig"`
	State         *FunctionStateEnum                   `json:"state"`
	StateMessages []GoogleCloudFunctionsV2StateMessage `json:"stateMessages"`
	UpdateTime    *string                              `json:"updateTime"`
}
