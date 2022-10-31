package shared



type SuggestCommentScoreRequest struct {
    AttributeScores map[string]AttributeScores `json:"attributeScores,omitempty"`
    ClientToken *string `json:"clientToken,omitempty"`
    Comment *TextEntry `json:"comment,omitempty"`
    CommunityID *string `json:"communityId,omitempty"`
    Context *Context `json:"context,omitempty"`
    Languages []string `json:"languages,omitempty"`
    SessionID *string `json:"sessionId,omitempty"`
    
}

