package shared

type EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnumTask         EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum = "TASK"
	EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnumAsisTemplate EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum = "ASIS_TEMPLATE"
	EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnumIoTemplate   EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum = "IO_TEMPLATE"
)

type EnterpriseCrmFrontendsEventbusProtoTaskEntity struct {
	DisabledForVpcSc *bool                                                      `json:"disabledForVpcSc,omitempty"`
	Metadata         *EnterpriseCrmEventbusProtoTaskMetadata                    `json:"metadata,omitempty"`
	ParamSpecs       *EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage      `json:"paramSpecs,omitempty"`
	Stats            *EnterpriseCrmEventbusStats                                `json:"stats,omitempty"`
	TaskType         *EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum `json:"taskType,omitempty"`
	UIConfig         *EnterpriseCrmEventbusProtoTaskUIConfig                    `json:"uiConfig,omitempty"`
}
