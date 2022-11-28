package shared

type AutoTextTypeEnum string

const (
	AutoTextTypeEnumTypeUnspecified AutoTextTypeEnum = "TYPE_UNSPECIFIED"
	AutoTextTypeEnumPageNumber      AutoTextTypeEnum = "PAGE_NUMBER"
	AutoTextTypeEnumPageCount       AutoTextTypeEnum = "PAGE_COUNT"
)

// AutoText
// A ParagraphElement representing a spot in the text that's dynamically replaced with content that can change over time, like a page number.
type AutoText struct {
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds,omitempty"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges,omitempty"`
	TextStyle                 *TextStyle                    `json:"textStyle,omitempty"`
	Type                      *AutoTextTypeEnum             `json:"type,omitempty"`
}
