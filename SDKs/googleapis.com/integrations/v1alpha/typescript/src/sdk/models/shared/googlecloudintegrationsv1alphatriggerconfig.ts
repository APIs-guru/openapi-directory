import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaIntegrationAlertConfig } from "./googlecloudintegrationsv1alphaintegrationalertconfig";
import { GoogleCloudIntegrationsV1alphaCloudSchedulerConfig } from "./googlecloudintegrationsv1alphacloudschedulerconfig";
import { GoogleCloudIntegrationsV1alphaNextTask } from "./googlecloudintegrationsv1alphanexttask";


export enum GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum {
    NextTasksExecutionPolicyUnspecified = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED",
    RunAllMatch = "RUN_ALL_MATCH",
    RunFirstMatch = "RUN_FIRST_MATCH"
}

export enum GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum {
    TriggerTypeUnspecified = "TRIGGER_TYPE_UNSPECIFIED",
    Cron = "CRON",
    Api = "API",
    SfdcChannel = "SFDC_CHANNEL",
    CloudPubsubExternal = "CLOUD_PUBSUB_EXTERNAL",
    SfdcCdcChannel = "SFDC_CDC_CHANNEL",
    CloudScheduler = "CLOUD_SCHEDULER"
}


// GoogleCloudIntegrationsV1alphaTriggerConfig
/** 
 * Configuration detail of a trigger.
**/
export class GoogleCloudIntegrationsV1alphaTriggerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alertConfig", elemType: GoogleCloudIntegrationsV1alphaIntegrationAlertConfig })
  alertConfig?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfig[];

  @SpeakeasyMetadata({ data: "json, name=cloudSchedulerConfig" })
  cloudSchedulerConfig?: GoogleCloudIntegrationsV1alphaCloudSchedulerConfig;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=nextTasksExecutionPolicy" })
  nextTasksExecutionPolicy?: GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=startTasks", elemType: GoogleCloudIntegrationsV1alphaNextTask })
  startTasks?: GoogleCloudIntegrationsV1alphaNextTask[];

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerNumber" })
  triggerNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerType" })
  triggerType?: GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum;
}
