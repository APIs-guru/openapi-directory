package shared

type GoogleCloudDialogflowV2SuggestionFeatureTypeEnum string

const (
	GoogleCloudDialogflowV2SuggestionFeatureTypeEnumTypeUnspecified   GoogleCloudDialogflowV2SuggestionFeatureTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudDialogflowV2SuggestionFeatureTypeEnumArticleSuggestion GoogleCloudDialogflowV2SuggestionFeatureTypeEnum = "ARTICLE_SUGGESTION"
	GoogleCloudDialogflowV2SuggestionFeatureTypeEnumFaq               GoogleCloudDialogflowV2SuggestionFeatureTypeEnum = "FAQ"
	GoogleCloudDialogflowV2SuggestionFeatureTypeEnumSmartReply        GoogleCloudDialogflowV2SuggestionFeatureTypeEnum = "SMART_REPLY"
)

// GoogleCloudDialogflowV2SuggestionFeature
// The type of Human Agent Assistant API suggestion to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
type GoogleCloudDialogflowV2SuggestionFeature struct {
	Type *GoogleCloudDialogflowV2SuggestionFeatureTypeEnum `json:"type,omitempty"`
}
