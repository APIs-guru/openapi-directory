import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}
export declare enum GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    ArticleSuggestion = "ARTICLE_SUGGESTION",
    Faq = "FAQ",
    SmartReply = "SMART_REPLY",
    ConversationSummarization = "CONVERSATION_SUMMARIZATION"
}
/**
 * The request message for ConversationProfiles.ClearFeature.
**/
export declare class GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest extends SpeakeasyBase {
    participantRole?: GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestParticipantRoleEnum;
    suggestionFeatureType?: GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum;
}
