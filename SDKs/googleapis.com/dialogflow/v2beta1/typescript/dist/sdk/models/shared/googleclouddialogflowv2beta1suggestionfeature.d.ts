import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    ArticleSuggestion = "ARTICLE_SUGGESTION",
    Faq = "FAQ",
    SmartReply = "SMART_REPLY",
    ConversationSummarization = "CONVERSATION_SUMMARIZATION"
}
/**
 * The type of Human Agent Assistant API suggestion to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
**/
export declare class GoogleCloudDialogflowV2beta1SuggestionFeature extends SpeakeasyBase {
    type?: GoogleCloudDialogflowV2beta1SuggestionFeatureTypeEnum;
}
