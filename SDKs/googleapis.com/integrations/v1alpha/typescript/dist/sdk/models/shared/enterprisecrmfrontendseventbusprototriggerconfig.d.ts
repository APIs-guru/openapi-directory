import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoWorkflowAlertConfig } from "./enterprisecrmeventbusprotoworkflowalertconfig";
import { EnterpriseCrmEventbusProtoCloudSchedulerConfig } from "./enterprisecrmeventbusprotocloudschedulerconfig";
import { EnterpriseCrmEventbusProtoCoordinate } from "./enterprisecrmeventbusprotocoordinate";
import { EnterpriseCrmEventbusProtoNextTask } from "./enterprisecrmeventbusprotonexttask";
import { EnterpriseCrmEventbusProtoTriggerCriteria } from "./enterprisecrmeventbusprototriggercriteria";
export declare enum EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum {
    Unspecified = "UNSPECIFIED",
    RunAllMatch = "RUN_ALL_MATCH",
    RunFirstMatch = "RUN_FIRST_MATCH"
}
export declare enum EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum {
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
/**
 * Configuration detail of a trigger. Next available id: 17
**/
export declare class EnterpriseCrmFrontendsEventbusProtoTriggerConfig extends SpeakeasyBase {
    alertConfig?: EnterpriseCrmEventbusProtoWorkflowAlertConfig[];
    cloudSchedulerConfig?: EnterpriseCrmEventbusProtoCloudSchedulerConfig;
    description?: string;
    enabledClients?: string[];
    label?: string;
    nextTasksExecutionPolicy?: EnterpriseCrmFrontendsEventbusProtoTriggerConfigNextTasksExecutionPolicyEnum;
    pauseWorkflowExecutions?: boolean;
    position?: EnterpriseCrmEventbusProtoCoordinate;
    properties?: Map<string, string>;
    startTasks?: EnterpriseCrmEventbusProtoNextTask[];
    triggerCriteria?: EnterpriseCrmEventbusProtoTriggerCriteria;
    triggerId?: string;
    triggerNumber?: string;
    triggerType?: EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerTypeEnum;
}
