package shared

type RichLink struct {
	RichLinkID                *string                       `json:"richLinkId"`
	RichLinkProperties        *RichLinkProperties           `json:"richLinkProperties"`
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges"`
	TextStyle                 *TextStyle                    `json:"textStyle"`
}
