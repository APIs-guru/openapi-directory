package shared

type TagSettingKeywordOptionEnum string

const (
	TagSettingKeywordOptionEnumPlaceholderWithListOfKeywords     TagSettingKeywordOptionEnum = "PLACEHOLDER_WITH_LIST_OF_KEYWORDS"
	TagSettingKeywordOptionEnumIgnore                            TagSettingKeywordOptionEnum = "IGNORE"
	TagSettingKeywordOptionEnumGenerateSeparateTagForEachKeyword TagSettingKeywordOptionEnum = "GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD"
)

// TagSetting
// Tag Settings
type TagSetting struct {
	AdditionalKeyValues     *string                      `json:"additionalKeyValues,omitempty"`
	IncludeClickThroughUrls *bool                        `json:"includeClickThroughUrls,omitempty"`
	IncludeClickTracking    *bool                        `json:"includeClickTracking,omitempty"`
	KeywordOption           *TagSettingKeywordOptionEnum `json:"keywordOption,omitempty"`
}
