import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3AdvancedSettings } from "./googleclouddialogflowcxv3advancedsettings";
import { GoogleCloudDialogflowCxV3SpeechToTextSettings } from "./googleclouddialogflowcxv3speechtotextsettings";


// GoogleCloudDialogflowCxV3Agent
/** 
 * Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way. After you create an agent, you can add Intents, Entity Types, Flows, Fulfillments, Webhooks, and so on to manage the conversation flows..
**/
export class GoogleCloudDialogflowCxV3Agent extends SpeakeasyBase {
  @Metadata({ data: "json, name=advancedSettings" })
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;

  @Metadata({ data: "json, name=avatarUri" })
  avatarUri?: string;

  @Metadata({ data: "json, name=defaultLanguageCode" })
  defaultLanguageCode?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enableSpellCorrection" })
  enableSpellCorrection?: boolean;

  @Metadata({ data: "json, name=enableStackdriverLogging" })
  enableStackdriverLogging?: boolean;

  @Metadata({ data: "json, name=locked" })
  locked?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=securitySettings" })
  securitySettings?: string;

  @Metadata({ data: "json, name=speechToTextSettings" })
  speechToTextSettings?: GoogleCloudDialogflowCxV3SpeechToTextSettings;

  @Metadata({ data: "json, name=startFlow" })
  startFlow?: string;

  @Metadata({ data: "json, name=supportedLanguageCodes" })
  supportedLanguageCodes?: string[];

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
