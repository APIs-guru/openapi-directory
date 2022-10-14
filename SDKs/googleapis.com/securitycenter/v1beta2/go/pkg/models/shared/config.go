package shared

type ConfigModuleEnablementStateEnum string

const (
	ConfigModuleEnablementStateEnumEnablementStateUnspecified ConfigModuleEnablementStateEnum = "ENABLEMENT_STATE_UNSPECIFIED"
	ConfigModuleEnablementStateEnumInherited                  ConfigModuleEnablementStateEnum = "INHERITED"
	ConfigModuleEnablementStateEnumEnabled                    ConfigModuleEnablementStateEnum = "ENABLED"
	ConfigModuleEnablementStateEnumDisabled                   ConfigModuleEnablementStateEnum = "DISABLED"
)

type Config struct {
	ModuleEnablementState *ConfigModuleEnablementStateEnum `json:"moduleEnablementState,omitempty"`
	Value                 map[string]interface{}           `json:"value,omitempty"`
}
