import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}
export declare enum GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    ArticleSuggestion = "ARTICLE_SUGGESTION",
    Faq = "FAQ",
    SmartReply = "SMART_REPLY"
}
/**
 * The request message for ConversationProfiles.ClearFeature.
**/
export declare class GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest extends SpeakeasyBase {
    participantRole?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnum;
    suggestionFeatureType?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum;
}
