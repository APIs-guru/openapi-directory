import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AutomatedAgentConfig } from "./googleclouddialogflowv2beta1automatedagentconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig } from "./googleclouddialogflowv2beta1humanagenthandoffconfig";
import { GoogleCloudDialogflowV2beta1LoggingConfig } from "./googleclouddialogflowv2beta1loggingconfig";
import { GoogleCloudDialogflowV2beta1NotificationConfig } from "./googleclouddialogflowv2beta1notificationconfig";
import { GoogleCloudDialogflowV2beta1SpeechToTextConfig } from "./googleclouddialogflowv2beta1speechtotextconfig";



// GoogleCloudDialogflowV2beta1ConversationProfile
/** 
 * Defines the services to connect to incoming Dialogflow conversations.
**/
export class GoogleCloudDialogflowV2beta1ConversationProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automatedAgentConfig" })
  automatedAgentConfig?: GoogleCloudDialogflowV2beta1AutomatedAgentConfig;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=humanAgentAssistantConfig" })
  humanAgentAssistantConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig;

  @SpeakeasyMetadata({ data: "json, name=humanAgentHandoffConfig" })
  humanAgentHandoffConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: GoogleCloudDialogflowV2beta1LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=newMessageEventNotificationConfig" })
  newMessageEventNotificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=securitySettings" })
  securitySettings?: string;

  @SpeakeasyMetadata({ data: "json, name=sttConfig" })
  sttConfig?: GoogleCloudDialogflowV2beta1SpeechToTextConfig;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudDialogflowV2beta1ConversationProfileInput
/** 
 * Defines the services to connect to incoming Dialogflow conversations.
**/
export class GoogleCloudDialogflowV2beta1ConversationProfileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automatedAgentConfig" })
  automatedAgentConfig?: GoogleCloudDialogflowV2beta1AutomatedAgentConfig;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=humanAgentAssistantConfig" })
  humanAgentAssistantConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig;

  @SpeakeasyMetadata({ data: "json, name=humanAgentHandoffConfig" })
  humanAgentHandoffConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: GoogleCloudDialogflowV2beta1LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=newMessageEventNotificationConfig" })
  newMessageEventNotificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=securitySettings" })
  securitySettings?: string;

  @SpeakeasyMetadata({ data: "json, name=sttConfig" })
  sttConfig?: GoogleCloudDialogflowV2beta1SpeechToTextConfig;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
