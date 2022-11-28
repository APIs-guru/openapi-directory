import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings that determine how to filter recent conversation context when generating suggestions.
**/
export declare class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings extends SpeakeasyBase {
    dropHandoffMessages?: boolean;
    dropIvrMessages?: boolean;
    dropVirtualAgentMessages?: boolean;
}
