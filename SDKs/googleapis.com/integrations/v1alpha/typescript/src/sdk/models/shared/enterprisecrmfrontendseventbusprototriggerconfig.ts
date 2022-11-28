import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoWorkflowAlertConfig } from "./enterprisecrmeventbusprotoworkflowalertconfig";
import { EnterpriseCrmEventbusProtoCloudSchedulerConfig } from "./enterprisecrmeventbusprotocloudschedulerconfig";
import { EnterpriseCrmEventbusProtoCoordinate } from "./enterprisecrmeventbusprotocoordinate";
import { EnterpriseCrmEventbusProtoNextTask } from "./enterprisecrmeventbusprotonexttask";
import { EnterpriseCrmEventbusProtoTriggerCriteria } from "./enterprisecrmeventbusprototriggercriteria";


export enum EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum {
    Unspecified = "UNSPECIFIED",
    RunAllMatch = "RUN_ALL_MATCH",
    RunFirstMatch = "RUN_FIRST_MATCH"
}

export enum EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum {
    Unknown = "UNKNOWN",
    CloudPubsub = "CLOUD_PUBSUB",
    Goops = "GOOPS",
    SfdcSync = "SFDC_SYNC",
    Cron = "CRON",
    Api = "API",
    ManifoldTrigger = "MANIFOLD_TRIGGER",
    DatalayerDataChange = "DATALAYER_DATA_CHANGE",
    SfdcChannel = "SFDC_CHANNEL",
    CloudPubsubExternal = "CLOUD_PUBSUB_EXTERNAL",
    SfdcCdcChannel = "SFDC_CDC_CHANNEL",
    SfdcPlatformEventsChannel = "SFDC_PLATFORM_EVENTS_CHANNEL",
    CloudScheduler = "CLOUD_SCHEDULER"
}


// EnterpriseCrmFrontendsEventbusProtoTriggerConfig
/** 
 * Configuration detail of a trigger. Next available id: 17
**/
export class EnterpriseCrmFrontendsEventbusProtoTriggerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertConfig", elemType: EnterpriseCrmEventbusProtoWorkflowAlertConfig })
  alertConfig?: EnterpriseCrmEventbusProtoWorkflowAlertConfig[];

  @SpeakeasyMetadata({ data: "json, name=cloudSchedulerConfig" })
  cloudSchedulerConfig?: EnterpriseCrmEventbusProtoCloudSchedulerConfig;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enabledClients" })
  enabledClients?: string[];

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=nextTasksExecutionPolicy" })
  nextTasksExecutionPolicy?: EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=pauseWorkflowExecutions" })
  pauseWorkflowExecutions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: EnterpriseCrmEventbusProtoCoordinate;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=startTasks", elemType: EnterpriseCrmEventbusProtoNextTask })
  startTasks?: EnterpriseCrmEventbusProtoNextTask[];

  @SpeakeasyMetadata({ data: "json, name=triggerCriteria" })
  triggerCriteria?: EnterpriseCrmEventbusProtoTriggerCriteria;

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerNumber" })
  triggerNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerType" })
  triggerType?: EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum;
}
