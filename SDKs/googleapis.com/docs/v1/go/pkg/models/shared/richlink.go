package shared

// RichLinkInput
// A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).
type RichLinkInput struct {
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds,omitempty"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges,omitempty"`
	TextStyle                 *TextStyle                    `json:"textStyle,omitempty"`
}

// RichLink
// A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).
type RichLink struct {
	RichLinkID                *string                       `json:"richLinkId,omitempty"`
	RichLinkProperties        *RichLinkProperties           `json:"richLinkProperties,omitempty"`
	SuggestedDeletionIds      []string                      `json:"suggestedDeletionIds,omitempty"`
	SuggestedInsertionIds     []string                      `json:"suggestedInsertionIds,omitempty"`
	SuggestedTextStyleChanges map[string]SuggestedTextStyle `json:"suggestedTextStyleChanges,omitempty"`
	TextStyle                 *TextStyle                    `json:"textStyle,omitempty"`
}
