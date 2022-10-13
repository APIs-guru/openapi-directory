package shared

type EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum string

const (
	EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnumTask         EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum = "TASK"
	EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnumAsisTemplate EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum = "ASIS_TEMPLATE"
	EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnumIoTemplate   EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum = "IO_TEMPLATE"
)

type EnterpriseCrmFrontendsEventbusProtoTaskEntity struct {
	DisabledForVpcSc *bool                                                      `json:"disabledForVpcSc"`
	Metadata         *EnterpriseCrmEventbusProtoTaskMetadata                    `json:"metadata"`
	ParamSpecs       *EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage      `json:"paramSpecs"`
	Stats            *EnterpriseCrmEventbusStats                                `json:"stats"`
	TaskType         *EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskTypeEnum `json:"taskType"`
	UIConfig         *EnterpriseCrmEventbusProtoTaskUIConfig                    `json:"uiConfig"`
}
