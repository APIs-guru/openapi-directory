import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoWorkflowAlertConfig } from "./enterprisecrmeventbusprotoworkflowalertconfig";
import { EnterpriseCrmEventbusProtoCoordinate } from "./enterprisecrmeventbusprotocoordinate";
import { EnterpriseCrmEventbusProtoNextTask } from "./enterprisecrmeventbusprotonexttask";
import { EnterpriseCrmEventbusProtoTriggerCriteria } from "./enterprisecrmeventbusprototriggercriteria";

export enum EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum {
    Unspecified = "UNSPECIFIED"
,    RunAllMatch = "RUN_ALL_MATCH"
,    RunFirstMatch = "RUN_FIRST_MATCH"
}

export enum EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum {
    Unknown = "UNKNOWN"
,    CloudPubsub = "CLOUD_PUBSUB"
,    Goops = "GOOPS"
,    SfdcSync = "SFDC_SYNC"
,    Cron = "CRON"
,    Api = "API"
,    ManifoldTrigger = "MANIFOLD_TRIGGER"
,    DatalayerDataChange = "DATALAYER_DATA_CHANGE"
,    SfdcChannel = "SFDC_CHANNEL"
,    CloudPubsubExternal = "CLOUD_PUBSUB_EXTERNAL"
,    SfdcCdcChannel = "SFDC_CDC_CHANNEL"
,    SfdcPlatformEventsChannel = "SFDC_PLATFORM_EVENTS_CHANNEL"
}


// EnterpriseCrmFrontendsEventbusProtoTriggerConfig
/** 
 * Configuration detail of a trigger. Next available id: 16
**/
export class EnterpriseCrmFrontendsEventbusProtoTriggerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertConfig", elemType: shared.EnterpriseCrmEventbusProtoWorkflowAlertConfig })
  alertConfig?: EnterpriseCrmEventbusProtoWorkflowAlertConfig[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enabledClients" })
  enabledClients?: string[];

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=nextTasksExecutionPolicy" })
  nextTasksExecutionPolicy?: EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum;

  @Metadata({ data: "json, name=pauseWorkflowExecutions" })
  pauseWorkflowExecutions?: boolean;

  @Metadata({ data: "json, name=position" })
  position?: EnterpriseCrmEventbusProtoCoordinate;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=startTasks", elemType: shared.EnterpriseCrmEventbusProtoNextTask })
  startTasks?: EnterpriseCrmEventbusProtoNextTask[];

  @Metadata({ data: "json, name=triggerCriteria" })
  triggerCriteria?: EnterpriseCrmEventbusProtoTriggerCriteria;

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @Metadata({ data: "json, name=triggerNumber" })
  triggerNumber?: string;

  @Metadata({ data: "json, name=triggerType" })
  triggerType?: EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum;
}
