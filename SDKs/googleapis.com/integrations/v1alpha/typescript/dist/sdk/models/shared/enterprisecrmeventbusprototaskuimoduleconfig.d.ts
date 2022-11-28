import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum {
    UnspecifiedTaskModule = "UNSPECIFIED_TASK_MODULE",
    Label = "LABEL",
    ErrorHandling = "ERROR_HANDLING",
    TaskParamTable = "TASK_PARAM_TABLE",
    TaskParamForm = "TASK_PARAM_FORM",
    Precondition = "PRECONDITION",
    ScriptEditor = "SCRIPT_EDITOR",
    Rpc = "RPC",
    TaskSummary = "TASK_SUMMARY",
    Suspension = "SUSPENSION",
    RpcTyped = "RPC_TYPED",
    SubWorkflow = "SUB_WORKFLOW",
    AppsScriptNavigator = "APPS_SCRIPT_NAVIGATOR",
    SubWorkflowForEachLoop = "SUB_WORKFLOW_FOR_EACH_LOOP",
    FieldMapping = "FIELD_MAPPING",
    Readme = "README",
    RestCaller = "REST_CALLER",
    SubWorkflowScatterGather = "SUB_WORKFLOW_SCATTER_GATHER",
    CloudSql = "CLOUD_SQL",
    GenericConnectorTask = "GENERIC_CONNECTOR_TASK"
}
/**
 * Task author would use this type to configure a config module.
**/
export declare class EnterpriseCrmEventbusProtoTaskUiModuleConfig extends SpeakeasyBase {
    moduleId?: EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleIdEnum;
}
