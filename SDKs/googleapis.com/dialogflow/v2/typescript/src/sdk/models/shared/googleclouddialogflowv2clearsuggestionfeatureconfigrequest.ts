import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED"
,    HumanAgent = "HUMAN_AGENT"
,    AutomatedAgent = "AUTOMATED_AGENT"
,    EndUser = "END_USER"
}

export enum GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    ArticleSuggestion = "ARTICLE_SUGGESTION"
,    Faq = "FAQ"
,    SmartReply = "SMART_REPLY"
}


// GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest
/** 
 * The request message for ConversationProfiles.ClearFeature.
**/
export class GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=participantRole" })
  participantRole?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestParticipantRoleEnum;

  @Metadata({ data: "json, name=suggestionFeatureType" })
  suggestionFeatureType?: GoogleCloudDialogflowV2ClearSuggestionFeatureConfigRequestSuggestionFeatureTypeEnum;
}
