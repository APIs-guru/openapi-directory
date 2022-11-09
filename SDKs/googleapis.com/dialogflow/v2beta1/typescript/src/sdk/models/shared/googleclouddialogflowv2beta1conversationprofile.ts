import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1AutomatedAgentConfig } from "./googleclouddialogflowv2beta1automatedagentconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig } from "./googleclouddialogflowv2beta1humanagenthandoffconfig";
import { GoogleCloudDialogflowV2beta1LoggingConfig } from "./googleclouddialogflowv2beta1loggingconfig";
import { GoogleCloudDialogflowV2beta1NotificationConfig } from "./googleclouddialogflowv2beta1notificationconfig";
import { GoogleCloudDialogflowV2beta1NotificationConfig } from "./googleclouddialogflowv2beta1notificationconfig";
import { GoogleCloudDialogflowV2beta1SpeechToTextConfig } from "./googleclouddialogflowv2beta1speechtotextconfig";


// GoogleCloudDialogflowV2beta1ConversationProfile
/** 
 * Defines the services to connect to incoming Dialogflow conversations.
**/
export class GoogleCloudDialogflowV2beta1ConversationProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=automatedAgentConfig" })
  automatedAgentConfig?: GoogleCloudDialogflowV2beta1AutomatedAgentConfig;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=humanAgentAssistantConfig" })
  humanAgentAssistantConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig;

  @Metadata({ data: "json, name=humanAgentHandoffConfig" })
  humanAgentHandoffConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: GoogleCloudDialogflowV2beta1LoggingConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=newMessageEventNotificationConfig" })
  newMessageEventNotificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;

  @Metadata({ data: "json, name=notificationConfig" })
  notificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;

  @Metadata({ data: "json, name=securitySettings" })
  securitySettings?: string;

  @Metadata({ data: "json, name=sttConfig" })
  sttConfig?: GoogleCloudDialogflowV2beta1SpeechToTextConfig;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
