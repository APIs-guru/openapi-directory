package shared

type TagSettingKeywordOptionEnum string

const (
	TagSettingKeywordOptionEnumPlaceholderWithListOfKeywords     TagSettingKeywordOptionEnum = "PLACEHOLDER_WITH_LIST_OF_KEYWORDS"
	TagSettingKeywordOptionEnumIgnore                            TagSettingKeywordOptionEnum = "IGNORE"
	TagSettingKeywordOptionEnumGenerateSeparateTagForEachKeyword TagSettingKeywordOptionEnum = "GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD"
)

type TagSetting struct {
	AdditionalKeyValues     *string                      `json:"additionalKeyValues"`
	IncludeClickThroughUrls *bool                        `json:"includeClickThroughUrls"`
	IncludeClickTracking    *bool                        `json:"includeClickTracking"`
	KeywordOption           *TagSettingKeywordOptionEnum `json:"keywordOption"`
}
