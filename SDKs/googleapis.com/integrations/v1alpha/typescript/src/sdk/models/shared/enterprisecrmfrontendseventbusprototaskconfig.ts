import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoTaskAlertConfig } from "./enterprisecrmeventbusprototaskalertconfig";
import { EnterpriseCrmEventbusProtoFailurePolicy } from "./enterprisecrmeventbusprotofailurepolicy";
import { EnterpriseCrmEventbusProtoNextTask } from "./enterprisecrmeventbusprotonexttask";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { EnterpriseCrmEventbusProtoCoordinate } from "./enterprisecrmeventbusprotocoordinate";
import { EnterpriseCrmFrontendsEventbusProtoRollbackStrategy } from "./enterprisecrmfrontendseventbusprotorollbackstrategy";
import { EnterpriseCrmEventbusProtoSuccessPolicy } from "./enterprisecrmeventbusprotosuccesspolicy";
import { EnterpriseCrmEventbusProtoFailurePolicy } from "./enterprisecrmeventbusprotofailurepolicy";
import { EnterpriseCrmFrontendsEventbusProtoTaskEntity } from "./enterprisecrmfrontendseventbusprototaskentity";

export enum EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum {
    UnspecifiedJsonValidationOption = "UNSPECIFIED_JSON_VALIDATION_OPTION"
,    Skip = "SKIP"
,    PreExecution = "PRE_EXECUTION"
,    PostExecution = "POST_EXECUTION"
,    PrePostExecution = "PRE_POST_EXECUTION"
}

export enum EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum {
    Unspecified = "UNSPECIFIED"
,    RunAllMatch = "RUN_ALL_MATCH"
,    RunFirstMatch = "RUN_FIRST_MATCH"
}

export enum EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum {
    WhenAllSucceed = "WHEN_ALL_SUCCEED"
,    WhenAnySucceed = "WHEN_ANY_SUCCEED"
,    WhenAllTasksAndConditionsSucceed = "WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED"
}

export enum EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum {
    Task = "TASK"
,    AsisTemplate = "ASIS_TEMPLATE"
,    IoTemplate = "IO_TEMPLATE"
}


// EnterpriseCrmFrontendsEventbusProtoTaskConfig
/** 
 * The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task. Next available id: 27
**/
export class EnterpriseCrmFrontendsEventbusProtoTaskConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertConfigs", elemType: shared.EnterpriseCrmEventbusProtoTaskAlertConfig })
  alertConfigs?: EnterpriseCrmEventbusProtoTaskAlertConfig[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creatorEmail" })
  creatorEmail?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disableStrictTypeValidation" })
  disableStrictTypeValidation?: boolean;

  @Metadata({ data: "json, name=failurePolicy" })
  failurePolicy?: EnterpriseCrmEventbusProtoFailurePolicy;

  @Metadata({ data: "json, name=incomingEdgeCount" })
  incomingEdgeCount?: number;

  @Metadata({ data: "json, name=jsonValidationOption" })
  jsonValidationOption?: EnterpriseCrmFrontendsEventbusProtoTaskConfigJsonValidationOptionEnum;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @Metadata({ data: "json, name=nextTasks", elemType: shared.EnterpriseCrmEventbusProtoNextTask })
  nextTasks?: EnterpriseCrmEventbusProtoNextTask[];

  @Metadata({ data: "json, name=nextTasksExecutionPolicy" })
  nextTasksExecutionPolicy?: EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicyEnum;

  @Metadata({ data: "json, name=parameters", elemType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry })
  parameters?: Map<string, EnterpriseCrmFrontendsEventbusProtoParameterEntry>;

  @Metadata({ data: "json, name=position" })
  position?: EnterpriseCrmEventbusProtoCoordinate;

  @Metadata({ data: "json, name=precondition" })
  precondition?: string;

  @Metadata({ data: "json, name=preconditionLabel" })
  preconditionLabel?: string;

  @Metadata({ data: "json, name=rollbackStrategy" })
  rollbackStrategy?: EnterpriseCrmFrontendsEventbusProtoRollbackStrategy;

  @Metadata({ data: "json, name=successPolicy" })
  successPolicy?: EnterpriseCrmEventbusProtoSuccessPolicy;

  @Metadata({ data: "json, name=synchronousCallFailurePolicy" })
  synchronousCallFailurePolicy?: EnterpriseCrmEventbusProtoFailurePolicy;

  @Metadata({ data: "json, name=taskEntity" })
  taskEntity?: EnterpriseCrmFrontendsEventbusProtoTaskEntity;

  @Metadata({ data: "json, name=taskExecutionStrategy" })
  taskExecutionStrategy?: EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategyEnum;

  @Metadata({ data: "json, name=taskName" })
  taskName?: string;

  @Metadata({ data: "json, name=taskNumber" })
  taskNumber?: string;

  @Metadata({ data: "json, name=taskSpec" })
  taskSpec?: string;

  @Metadata({ data: "json, name=taskTemplateName" })
  taskTemplateName?: string;

  @Metadata({ data: "json, name=taskType" })
  taskType?: EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskTypeEnum;
}
