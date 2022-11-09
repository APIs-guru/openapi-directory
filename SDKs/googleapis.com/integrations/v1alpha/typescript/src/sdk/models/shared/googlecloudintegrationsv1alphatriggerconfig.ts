import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaIntegrationAlertConfig } from "./googlecloudintegrationsv1alphaintegrationalertconfig";
import { GoogleCloudIntegrationsV1alphaNextTask } from "./googlecloudintegrationsv1alphanexttask";

export enum GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum {
    NextTasksExecutionPolicyUnspecified = "NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED"
,    RunAllMatch = "RUN_ALL_MATCH"
,    RunFirstMatch = "RUN_FIRST_MATCH"
}

export enum GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum {
    TriggerTypeUnspecified = "TRIGGER_TYPE_UNSPECIFIED"
,    Cron = "CRON"
,    Api = "API"
,    SfdcChannel = "SFDC_CHANNEL"
,    CloudPubsubExternal = "CLOUD_PUBSUB_EXTERNAL"
,    SfdcCdcChannel = "SFDC_CDC_CHANNEL"
}


// GoogleCloudIntegrationsV1alphaTriggerConfig
/** 
 * Configuration detail of a trigger.
**/
export class GoogleCloudIntegrationsV1alphaTriggerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=alertConfig", elemType: shared.GoogleCloudIntegrationsV1alphaIntegrationAlertConfig })
  alertConfig?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfig[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=nextTasksExecutionPolicy" })
  nextTasksExecutionPolicy?: GoogleCloudIntegrationsV1alphaTriggerConfigNextTasksExecutionPolicyEnum;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=startTasks", elemType: shared.GoogleCloudIntegrationsV1alphaNextTask })
  startTasks?: GoogleCloudIntegrationsV1alphaNextTask[];

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @Metadata({ data: "json, name=triggerNumber" })
  triggerNumber?: string;

  @Metadata({ data: "json, name=triggerType" })
  triggerType?: GoogleCloudIntegrationsV1alphaTriggerConfigTriggerTypeEnum;
}
