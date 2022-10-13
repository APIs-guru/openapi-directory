package shared

type SuggestCommentScoreRequest struct {
	AttributeScores map[string]AttributeScores `json:"attributeScores"`
	ClientToken     *string                    `json:"clientToken"`
	Comment         *TextEntry                 `json:"comment"`
	CommunityID     *string                    `json:"communityId"`
	Context         *Context                   `json:"context"`
	Languages       []string                   `json:"languages"`
	SessionID       *string                    `json:"sessionId"`
}
