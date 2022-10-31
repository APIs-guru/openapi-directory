package shared

type EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum string

const (
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumUnspecifiedTaskModule    EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "UNSPECIFIED_TASK_MODULE"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumLabel                    EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "LABEL"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumErrorHandling            EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "ERROR_HANDLING"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumTaskParamTable           EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "TASK_PARAM_TABLE"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumTaskParamForm            EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "TASK_PARAM_FORM"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumPrecondition             EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "PRECONDITION"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumScriptEditor             EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "SCRIPT_EDITOR"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumRPC                      EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "RPC"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumTaskSummary              EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "TASK_SUMMARY"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumSuspension               EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "SUSPENSION"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumRPCTyped                 EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "RPC_TYPED"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumSubWorkflow              EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "SUB_WORKFLOW"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumAppsScriptNavigator      EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "APPS_SCRIPT_NAVIGATOR"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumSubWorkflowForEachLoop   EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "SUB_WORKFLOW_FOR_EACH_LOOP"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumFieldMapping             EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "FIELD_MAPPING"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumReadme                   EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "README"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumRestCaller               EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "REST_CALLER"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumSubWorkflowScatterGather EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "SUB_WORKFLOW_SCATTER_GATHER"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumCloudSQL                 EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "CLOUD_SQL"
	EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnumGenericConnectorTask     EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum = "GENERIC_CONNECTOR_TASK"
)

type EnterpriseCrmEventbusProtoTaskUIModuleConfig struct {
	ModuleID *EnterpriseCrmEventbusProtoTaskUIModuleConfigModuleIDEnum `json:"moduleId,omitempty"`
}
