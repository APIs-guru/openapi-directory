import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED"
,    HumanAgent = "HUMAN_AGENT"
,    AutomatedAgent = "AUTOMATED_AGENT"
,    EndUser = "END_USER"
}

export enum GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    ArticleSuggestion = "ARTICLE_SUGGESTION"
,    Faq = "FAQ"
,    SmartReply = "SMART_REPLY"
,    ConversationSummarization = "CONVERSATION_SUMMARIZATION"
}


// GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest
/** 
 * The request message for ConversationProfiles.ClearFeature.
**/
export class GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=participantRole" })
  participantRole?: GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestParticipantRoleEnum;

  @Metadata({ data: "json, name=suggestionFeatureType" })
  suggestionFeatureType?: GoogleCloudDialogflowV2beta1ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum;
}
