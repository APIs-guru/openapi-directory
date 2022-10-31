package shared




type GoogleCloudDialogflowV2SuggestionFeatureTypeEnum string

const (
    GoogleCloudDialogflowV2SuggestionFeatureTypeEnumTypeUnspecified GoogleCloudDialogflowV2SuggestionFeatureTypeEnum = "TYPE_UNSPECIFIED"
GoogleCloudDialogflowV2SuggestionFeatureTypeEnumArticleSuggestion GoogleCloudDialogflowV2SuggestionFeatureTypeEnum = "ARTICLE_SUGGESTION"
GoogleCloudDialogflowV2SuggestionFeatureTypeEnumFaq GoogleCloudDialogflowV2SuggestionFeatureTypeEnum = "FAQ"
GoogleCloudDialogflowV2SuggestionFeatureTypeEnumSmartReply GoogleCloudDialogflowV2SuggestionFeatureTypeEnum = "SMART_REPLY"
)


type GoogleCloudDialogflowV2SuggestionFeature struct {
    Type *GoogleCloudDialogflowV2SuggestionFeatureTypeEnum `json:"type,omitempty"`
    
}

