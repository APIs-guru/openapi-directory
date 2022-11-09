import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowV2SuggestionFeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    ArticleSuggestion = "ARTICLE_SUGGESTION"
,    Faq = "FAQ"
,    SmartReply = "SMART_REPLY"
}


// GoogleCloudDialogflowV2SuggestionFeature
/** 
 * The type of Human Agent Assistant API suggestion to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
**/
export class GoogleCloudDialogflowV2SuggestionFeature extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDialogflowV2SuggestionFeatureTypeEnum;
}
