import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoTaskAlertConfig } from "./enterprisecrmeventbusprototaskalertconfig";
import { EnterpriseCrmEventbusProtoFailurePolicy } from "./enterprisecrmeventbusprotofailurepolicy";
import { EnterpriseCrmEventbusProtoNextTask } from "./enterprisecrmeventbusprotonexttask";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { EnterpriseCrmEventbusProtoCoordinate } from "./enterprisecrmeventbusprotocoordinate";
import { EnterpriseCrmFrontendsEventbusProtoRollbackStrategy } from "./enterprisecrmfrontendseventbusprotorollbackstrategy";
import { EnterpriseCrmEventbusProtoSuccessPolicy } from "./enterprisecrmeventbusprotosuccesspolicy";
import { EnterpriseCrmFrontendsEventbusProtoTaskEntity } from "./enterprisecrmfrontendseventbusprototaskentity";


export enum EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum {
    UnspecifiedJsonValidationOption = "UNSPECIFIED_JSON_VALIDATION_OPTION",
    Skip = "SKIP",
    PreExecution = "PRE_EXECUTION",
    PostExecution = "POST_EXECUTION",
    PrePostExecution = "PRE_POST_EXECUTION"
}

export enum EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum {
    Unspecified = "UNSPECIFIED",
    RunAllMatch = "RUN_ALL_MATCH",
    RunFirstMatch = "RUN_FIRST_MATCH"
}

export enum EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum {
    WhenAllSucceed = "WHEN_ALL_SUCCEED",
    WhenAnySucceed = "WHEN_ANY_SUCCEED",
    WhenAllTasksAndConditionsSucceed = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED"
}

export enum EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum {
    Task = "TASK",
    AsisTemplate = "ASIS_TEMPLATE",
    IoTemplate = "IO_TEMPLATE"
}


// EnterpriseCrmFrontendsEventbusProtoTaskConfig
/** 
 * The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task. Next available id: 27
**/
export class EnterpriseCrmFrontendsEventbusProtoTaskConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertConfigs", elemType: EnterpriseCrmEventbusProtoTaskAlertConfig })
  alertConfigs?: EnterpriseCrmEventbusProtoTaskAlertConfig[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creatorEmail" })
  creatorEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disableStrictTypeValidation" })
  disableStrictTypeValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=failurePolicy" })
  failurePolicy?: EnterpriseCrmEventbusProtoFailurePolicy;

  @SpeakeasyMetadata({ data: "json, name=incomingEdgeCount" })
  incomingEdgeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=jsonValidationOption" })
  jsonValidationOption?: EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=nextTasks", elemType: EnterpriseCrmEventbusProtoNextTask })
  nextTasks?: EnterpriseCrmEventbusProtoNextTask[];

  @SpeakeasyMetadata({ data: "json, name=nextTasksExecutionPolicy" })
  nextTasksExecutionPolicy?: EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: EnterpriseCrmFrontendsEventbusProtoParameterEntry })
  parameters?: Map<string, EnterpriseCrmFrontendsEventbusProtoParameterEntry>;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: EnterpriseCrmEventbusProtoCoordinate;

  @SpeakeasyMetadata({ data: "json, name=precondition" })
  precondition?: string;

  @SpeakeasyMetadata({ data: "json, name=preconditionLabel" })
  preconditionLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=rollbackStrategy" })
  rollbackStrategy?: EnterpriseCrmFrontendsEventbusProtoRollbackStrategy;

  @SpeakeasyMetadata({ data: "json, name=successPolicy" })
  successPolicy?: EnterpriseCrmEventbusProtoSuccessPolicy;

  @SpeakeasyMetadata({ data: "json, name=synchronousCallFailurePolicy" })
  synchronousCallFailurePolicy?: EnterpriseCrmEventbusProtoFailurePolicy;

  @SpeakeasyMetadata({ data: "json, name=taskEntity" })
  taskEntity?: EnterpriseCrmFrontendsEventbusProtoTaskEntity;

  @SpeakeasyMetadata({ data: "json, name=taskExecutionStrategy" })
  taskExecutionStrategy?: EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=taskName" })
  taskName?: string;

  @SpeakeasyMetadata({ data: "json, name=taskNumber" })
  taskNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=taskSpec" })
  taskSpec?: string;

  @SpeakeasyMetadata({ data: "json, name=taskTemplateName" })
  taskTemplateName?: string;

  @SpeakeasyMetadata({ data: "json, name=taskType" })
  taskType?: EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum;
}
