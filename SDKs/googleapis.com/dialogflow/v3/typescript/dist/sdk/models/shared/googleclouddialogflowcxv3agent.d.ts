import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3AdvancedSettings } from "./googleclouddialogflowcxv3advancedsettings";
import { GoogleCloudDialogflowCxV3SpeechToTextSettings } from "./googleclouddialogflowcxv3speechtotextsettings";
/**
 * Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way. After you create an agent, you can add Intents, Entity Types, Flows, Fulfillments, Webhooks, and so on to manage the conversation flows..
**/
export declare class GoogleCloudDialogflowCxV3Agent extends SpeakeasyBase {
    advancedSettings?: GoogleCloudDialogflowCxV3AdvancedSettings;
    avatarUri?: string;
    defaultLanguageCode?: string;
    description?: string;
    displayName?: string;
    enableSpellCorrection?: boolean;
    enableStackdriverLogging?: boolean;
    locked?: boolean;
    name?: string;
    securitySettings?: string;
    speechToTextSettings?: GoogleCloudDialogflowCxV3SpeechToTextSettings;
    startFlow?: string;
    supportedLanguageCodes?: string[];
    timeZone?: string;
}
