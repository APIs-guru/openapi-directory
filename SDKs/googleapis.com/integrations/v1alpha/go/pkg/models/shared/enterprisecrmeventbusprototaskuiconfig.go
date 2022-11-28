package shared

// EnterpriseCrmEventbusProtoTaskUIConfig
// Task authors would use this type to configure the UI for a particular task by specifying what UI config modules should be included to compose the UI. Learn more about config module framework: go/integration-platform-config-module-framework
type EnterpriseCrmEventbusProtoTaskUIConfig struct {
	TaskUIModuleConfigs []EnterpriseCrmEventbusProtoTaskUIModuleConfig `json:"taskUiModuleConfigs,omitempty"`
}
