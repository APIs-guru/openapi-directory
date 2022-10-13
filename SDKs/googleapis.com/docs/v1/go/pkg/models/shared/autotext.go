package shared

type AutoTextTypeEnum string

const (
	AutoTextTypeEnumTypeUnspecified AutoTextTypeEnum = "TYPE_UNSPECIFIED"
	AutoTextTypeEnumPageNumber      AutoTextTypeEnum = "PAGE_NUMBER"
	AutoTextTypeEnumPageCount       AutoTextTypeEnum = "PAGE_COUNT"
)

type AutoText struct {
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges"`
	TextStyle                 *TextStyle                    `json:"textStyle"`
	Type                      *AutoTextTypeEnum             `json:"type"`
}
