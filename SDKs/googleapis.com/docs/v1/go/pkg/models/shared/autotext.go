package shared

type AutoTextTypeEnum string

const (
	AutoTextTypeEnumTypeUnspecified AutoTextTypeEnum = "TYPE_UNSPECIFIED"
	AutoTextTypeEnumPageNumber      AutoTextTypeEnum = "PAGE_NUMBER"
	AutoTextTypeEnumPageCount       AutoTextTypeEnum = "PAGE_COUNT"
)

type AutoText struct {
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds,omitempty"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges,omitempty"`
	TextStyle                 *TextStyle                    `json:"textStyle,omitempty"`
	Type                      *AutoTextTypeEnum             `json:"type,omitempty"`
}
