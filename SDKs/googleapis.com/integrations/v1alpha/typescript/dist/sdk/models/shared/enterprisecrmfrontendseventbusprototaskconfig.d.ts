import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoTaskAlertConfig } from "./enterprisecrmeventbusprototaskalertconfig";
import { EnterpriseCrmEventbusProtoFailurePolicy } from "./enterprisecrmeventbusprotofailurepolicy";
import { EnterpriseCrmEventbusProtoNextTask } from "./enterprisecrmeventbusprotonexttask";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { EnterpriseCrmEventbusProtoCoordinate } from "./enterprisecrmeventbusprotocoordinate";
import { EnterpriseCrmFrontendsEventbusProtoRollbackStrategy } from "./enterprisecrmfrontendseventbusprotorollbackstrategy";
import { EnterpriseCrmEventbusProtoSuccessPolicy } from "./enterprisecrmeventbusprotosuccesspolicy";
import { EnterpriseCrmFrontendsEventbusProtoTaskEntity } from "./enterprisecrmfrontendseventbusprototaskentity";
export declare enum EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum {
    UnspecifiedJsonValidationOption = "UNSPECIFIED_JSON_VALIDATION_OPTION",
    Skip = "SKIP",
    PreExecution = "PRE_EXECUTION",
    PostExecution = "POST_EXECUTION",
    PrePostExecution = "PRE_POST_EXECUTION"
}
export declare enum EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum {
    Unspecified = "UNSPECIFIED",
    RunAllMatch = "RUN_ALL_MATCH",
    RunFirstMatch = "RUN_FIRST_MATCH"
}
export declare enum EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum {
    WhenAllSucceed = "WHEN_ALL_SUCCEED",
    WhenAnySucceed = "WHEN_ANY_SUCCEED",
    WhenAllTasksAndConditionsSucceed = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED"
}
export declare enum EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum {
    Task = "TASK",
    AsisTemplate = "ASIS_TEMPLATE",
    IoTemplate = "IO_TEMPLATE"
}
/**
 * The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task. Next available id: 27
**/
export declare class EnterpriseCrmFrontendsEventbusProtoTaskConfig extends SpeakeasyBase {
    alertConfigs?: EnterpriseCrmEventbusProtoTaskAlertConfig[];
    createTime?: string;
    creatorEmail?: string;
    description?: string;
    disableStrictTypeValidation?: boolean;
    failurePolicy?: EnterpriseCrmEventbusProtoFailurePolicy;
    incomingEdgeCount?: number;
    jsonValidationOption?: EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum;
    label?: string;
    lastModifiedTime?: string;
    nextTasks?: EnterpriseCrmEventbusProtoNextTask[];
    nextTasksExecutionPolicy?: EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum;
    parameters?: Map<string, EnterpriseCrmFrontendsEventbusProtoParameterEntry>;
    position?: EnterpriseCrmEventbusProtoCoordinate;
    precondition?: string;
    preconditionLabel?: string;
    rollbackStrategy?: EnterpriseCrmFrontendsEventbusProtoRollbackStrategy;
    successPolicy?: EnterpriseCrmEventbusProtoSuccessPolicy;
    synchronousCallFailurePolicy?: EnterpriseCrmEventbusProtoFailurePolicy;
    taskEntity?: EnterpriseCrmFrontendsEventbusProtoTaskEntity;
    taskExecutionStrategy?: EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum;
    taskName?: string;
    taskNumber?: string;
    taskSpec?: string;
    taskTemplateName?: string;
    taskType?: EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum;
}
