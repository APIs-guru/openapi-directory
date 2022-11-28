import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3AdvancedSettings } from "./googleclouddialogflowcxv3advancedsettings";
import { GoogleCloudDialogflowCxV3SpeechToTextSettings } from "./googleclouddialogflowcxv3speechtotextsettings";



// GoogleCloudDialogflowCxV3Agent
/** 
 * Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way. After you create an agent, you can add Intents, Entity Types, Flows, Fulfillments, Webhooks, and so on to manage the conversation flows..
**/
export class GoogleCloudDialogflowCxV3Agent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advancedSettings" })
  advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;

  @SpeakeasyMetadata({ data: "json, name=avatarUri" })
  avatarUri?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLanguageCode" })
  defaultLanguageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enableSpellCorrection" })
  enableSpellCorrection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableStackdriverLogging" })
  enableStackdriverLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=securitySettings" })
  securitySettings?: string;

  @SpeakeasyMetadata({ data: "json, name=speechToTextSettings" })
  speechToTextSettings?: GoogleCloudDialogflowCxV3SpeechToTextSettings;

  @SpeakeasyMetadata({ data: "json, name=startFlow" })
  startFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=supportedLanguageCodes" })
  supportedLanguageCodes?: string[];

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
