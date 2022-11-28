import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationAlertConfig } from "./googlecloudintegrationsv1alphaintegrationalertconfig";
import { GoogleCloudIntegrationsV1alphaCloudSchedulerConfig } from "./googlecloudintegrationsv1alphacloudschedulerconfig";
import { GoogleCloudIntegrationsV1alphaNextTask } from "./googlecloudintegrationsv1alphanexttask";
export declare enum GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum {
    NextTasksExecutionPolicyUnspecified = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED",
    RunAllMatch = "RUN_ALL_MATCH",
    RunFirstMatch = "RUN_FIRST_MATCH"
}
export declare enum GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum {
    TriggerTypeUnspecified = "TRIGGER_TYPE_UNSPECIFIED",
    Cron = "CRON",
    Api = "API",
    SfdcChannel = "SFDC_CHANNEL",
    CloudPubsubExternal = "CLOUD_PUBSUB_EXTERNAL",
    SfdcCdcChannel = "SFDC_CDC_CHANNEL",
    CloudScheduler = "CLOUD_SCHEDULER"
}
/**
 * Configuration detail of a trigger.
**/
export declare class GoogleCloudIntegrationsV1alphaTriggerConfig extends SpeakeasyBase {
    alertConfig?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfig[];
    cloudSchedulerConfig?: GoogleCloudIntegrationsV1alphaCloudSchedulerConfig;
    description?: string;
    label?: string;
    nextTasksExecutionPolicy?: GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum;
    properties?: Map<string, string>;
    startTasks?: GoogleCloudIntegrationsV1alphaNextTask[];
    triggerId?: string;
    triggerNumber?: string;
    triggerType?: GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum;
}
