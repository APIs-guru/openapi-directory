import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Dialogflow contexts are similar to natural language context. If a person says to you "they are orange", you need context in order to understand what "they" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent. Using contexts, you can control the flow of a conversation. You can configure contexts for an intent by setting input and output contexts, which are identified by string names. When an intent is matched, any configured output contexts for that intent become active. While any contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts. For more information about context, see the [Contexts guide](https://cloud.google.com/dialogflow/docs/contexts-overview).
**/
export declare class GoogleCloudDialogflowV2beta1Context extends SpeakeasyBase {
    lifespanCount?: number;
    name?: string;
    parameters?: Map<string, any>;
}
