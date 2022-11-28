import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`.
**/
export declare class GoogleCloudDialogflowV2EventInput extends SpeakeasyBase {
    languageCode?: string;
    name?: string;
    parameters?: Map<string, any>;
}
