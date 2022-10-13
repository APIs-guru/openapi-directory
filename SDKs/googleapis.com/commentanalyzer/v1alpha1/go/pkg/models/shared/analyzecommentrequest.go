package shared

type AnalyzeCommentRequest struct {
	ClientToken         *string                        `json:"clientToken"`
	Comment             *TextEntry                     `json:"comment"`
	CommunityID         *string                        `json:"communityId"`
	Context             *Context                       `json:"context"`
	DoNotStore          *bool                          `json:"doNotStore"`
	Languages           []string                       `json:"languages"`
	RequestedAttributes map[string]AttributeParameters `json:"requestedAttributes"`
	SessionID           *string                        `json:"sessionId"`
	SpanAnnotations     *bool                          `json:"spanAnnotations"`
}
