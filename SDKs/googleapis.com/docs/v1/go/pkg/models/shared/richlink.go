package shared

type RichLink struct {
	RichLinkID                *string                       `json:"richLinkId,omitempty"`
	RichLinkProperties        *RichLinkProperties           `json:"richLinkProperties,omitempty"`
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds,omitempty"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges,omitempty"`
	TextStyle                 *TextStyle                    `json:"textStyle,omitempty"`
}
